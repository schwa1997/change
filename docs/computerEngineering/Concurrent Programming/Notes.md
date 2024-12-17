## Lecture 1: Operating system review

* ## I/O operations \- **Communication buses**

  * ### **Communication bus** (between input and output) 

    * **Data Lines**: Carry data.  
    * **Address Lines**: Indicate where data should go or come from.  
    * **Handshaking Lines**: Manage and synchronize the data transfer process.

  * ### Two types and one combined both

    * **Memory Bus**: Connects CPU and memory.  
    * **I/O Bus**: Connects CPU and I/O devices.  
    * **Memory-Mapped I/O (Memory Bus+I/O Bus)**: Uses the memory address space to interact with I/O devices.

  * ### Register 

    * For memory bus, every device seen as ‘registers’ at given memory address  
    * Every register carries a certain function  
    * Types  
      * **Status Registers**: Provide information about the current state or condition of a device (e.g., flags for errors or operation status).  
      * **Command Registers**: Used to issue commands or control instructions to devices (e.g., start/stop operations).  
      * **Configuration Registers**: Allow the setting of operational parameters for devices (e.g., modes, speeds, addresses).  
      * **Data Registers**: Hold the actual   

* ## PCI/PCI-e bridges

  * ### Peripheral component interconnect PCI Bus 

    * A common bus for I/O in computers is the Peripheral Component Interconnect (PCI) bus.  
    * I is a parallel bus. This means that the same bus lines are shared among the connected components  
    * At most 2 devices can be connected to the same PCI bus  
    * At system startup, devices connected shall be requested to provide the required address range(s)

  * ### PCI express (PCIe)

    * PCI express (PCIe) represents an evolution of PCI using fast serial links in place of the shared parallel bus.   
      * PCIe is further characterized by the number of lanseused for serial communication( ×1, ×2, ×4, ×8, ×12, ×16 and ×32)

  * ### Bridges

    * PCI and PCIe buses are then connected to the memory bus via bridges  
    * Every bridge recognizes a bus access in the assigned range and translates it in a new bus cycle on the connected bus

* ## Synchronizing I/O

  * ### Polling: traditional way 

    * Use status register to know whether a device is ready  
    * But this method will lead to a waste of computer resource   
    * **Polling** is a simple but inefficient method for synchronizing I/O operations because it involves the CPU continuously checking a status register.   
    * Modern systems employ 

      * ### **Interrupts**, **DMA**, **notification mechanisms** in memory-mapped I/O, and **asynchronous I/O** to improve efficiency and reduce the waste of CPU resources

* ## Interrupt management

  * ### Concept

    * When a device needs to communicate an asynchronous event it raises one of the interrupt lines defined in the communication bus  
    * Interrupts are ordered by priority and a separate line is normally defined for each priority  
    * In order to specify which action to be taken, a number shall be transmitted along the bus via an Interrupt Acknowledge Cycle (IACK)  
    * This number shall be used as an offset in the Interrupt Vector Table in order to retrieve the address of the first machine instruction of the Interrupt Service Routine (ISR)  
    * Before executing the ISR it is however necessary to save the context of the program (possibly a ISR for a lower priority interrupt).  
    * The HW normally saves The Program Counter (PC) and the Status Register (SR) on the stack. The ISR shall then save the used CPU registers.

  * ### Steps in Handling an Interrupt

    * Interrupt Occurs:  
      * A hardware or software event triggers an interrupt signal, requesting the CPU's attention.  
    * Hardware Saves the Program Counter (PC) and Status Register (SR):  
      * The hardware automatically saves the current Program Counter (PC) and Status Register (SR) values onto the stack. This ensures that the CPU can return to the original execution point after handling the interrupt.  
    * Interrupt Acknowledge (IACK):  
      * The CPU sends an Interrupt Acknowledge (IACK) signal. This signal indicates that the CPU has recognized the interrupt request.  
      * The IACK signal may transmit a unique interrupt number or identifier along the bus, which corresponds to the interrupting device.  
    * Interrupt Vector Number (IVN):  
      * The interrupting device may send an Interrupt Vector Number (IVN) along the bus. This number identifies the specific interrupt that occurred.  
      * The IVN is used to locate the Interrupt Service Routine (ISR) associated with the interrupt.  
    * Interrupt Service Routine (ISR) Execution:  
      * The CPU uses the Interrupt Vector Number (IVN) to find the appropriate entry in the Interrupt Vector Table.  
      * The ISR, located at the address provided by the vector table, is executed. The ISR will typically save the current CPU register contents, execute the interrupt-handling code, and then restore the CPU registers.  
    * Restoration and Return:  
      * After the ISR completes, the saved CPU registers, including the PC and SR, are restored from the stack.  
      * The CPU resumes execution from where it was interrupted.

* ### Required SW actions for properly handling Interrupts

  * Concept:   
    * The SW device driver: a code for managing the device, and the code is accessible to users, but plugged into the OS  
    * Vector table update:  during the device installation, normally a system boot: inserting the Interrupt Service Routine address and communicate tto the device the ISR number to be returned when an Interrupt Acknowledge Cycle is issued during interrupt.   
    * No other activity should be executed when the ISR is executed   
    * Interrupts are heavily used by the OS itself in order to be able to take control of the computer regardless the operation carried out by user code (such as an infinite loop)  
    * In normal operation, on average, hundreds or even thousands of interrupts per second occur  
  * Software Device Driver  
    * Definition: A software device driver is a code that manages the communication between the operating system (OS) and a hardware device. It provides an interface that allows users or applications to interact with the hardware device, but the driver itself is integrated or "plugged into" the OS.  
    * Functionality: The device driver abstracts the hardware details and handles the specifics of hardware communication, making it easier for the OS and applications to interact with the device without needing to know its intricate details.  
  * Vector Table Update  
    * Purpose: The Interrupt Vector Table (IVT) is a data structure that holds the addresses of Interrupt Service Routines (ISRs) corresponding to various interrupt signals.  
  * Process During Device Installation:  
    * When a new device is installed, typically during system boot, the vector table is updated.  
    * The address of the ISR, which is a specific routine to handle the device's interrupts, is inserted into the vector table.  
    * The device is then informed of the ISR number (or vector number) that it should return when an Interrupt Acknowledge (IACK) Cycle is issued by the CPU during an interrupt event.  
  * Interrupt Service Routine (ISR) Execution  
    * Critical Nature:Once an interrupt occurs, and the corresponding ISR is executed, no other activities should be carried out until the ISR completes.  
    * ISRs must be efficient and quick, as they need to handle the interrupt and allow the system to return to its normal operation as soon as possible.  
  * Operating System's Use of Interrupts  
    * OS Control:Interrupts are heavily utilized by the OS to maintain control over the computer system, regardless of what operations the user code is performing.  
    * Even if user code enters an infinite loop or engages in other blocking operations, the OS can use interrupts to regain control and ensure the system remains responsive.  
    * Frequency of Interrupts:  
      * In typical operation, the system experiences hundreds or even thousands of interrupts per second. These interrupts are crucial for tasks like timekeeping, I/O operations, and ensuring that high-priority tasks are handled promptly.

* ### Are interrupts an efficient way of transfering data?

  * Conclusion: Interrupt-driven data transfer is not the best solution for high-throughput devices.  
  * Reason:  
    * For low-frequency tasks like mouse clicks, interrupt-driven data transfer is efficient, using only 0.0012% of the processor's load.  
    * However, for high-throughput tasks like hard disk data transfer, interrupts occupy too much processor time, consuming up to 10% of the processor's capacity.  
  * Instead: Direct Memory Access (DMA) should be used for high-throughput devices to minimize processor involvement and improve efficiency.

* ## Direct memory access-DMA

  * ### Device-Controlled Data Transfer:

    * In DMA, the device is responsible for transferring data to or from memory, bypassing the need for the CPU to manage each data transfer directly.

  * ### Bus Ownership:

    * For the device to transfer data autonomously, it must take control of the system bus, temporarily becoming the bus owner.  
    * A bus ownership transfer cycle must be initiated before data transfer can occur.

  * ### Configuration:

    * Before initiating the data transfer, the device driver must set up the starting address of the data in memory and the number of data items to be transferred. This is done using the device's Memory Address Register (MAR) and Word Count (WC) register.

  * ### Data Transfer Process:

    * When a data block is ready for transfer, the device takes bus ownership and begins the data transfer process.  
    * During this process, the bus ownership may switch back and forth between the processor and the device as needed.

  * ### Processor Independence:

    * While the DMA operation is in progress, the processor can continue executing other tasks independently.  
    * The only minor interference may occur if both the processor and the device request bus ownership simultaneously.

  * ### Completion Notification:

    * Once the DMA transfer is complete, the device sends an interrupt to inform the CPU, allowing it to proceed with any further necessary actions.

* ## User mode and kernel mode

  * In modern operating systems, there are two distinct modes of operation: User Mode and Kernel Mode. These modes help ensure system stability and security by restricting direct access to critical system resources and operations.  
  * Key Concepts:  
    * Restricted I/O Operations:  
      * Users are generally not permitted to perform Input/Output (I/O) operations directly. Instead, the operating system (OS) manages these operations to maintain control and security.  
    * Device Layer Abstraction:  
      * Devices are integrated into the OS through a device layer abstraction, a set of rules that the device code must follow to be incorporated into the OS. For example, in Linux, devices are added using commands like insmod.  
    * Operating Modes:  
      * Kernel Mode: The OS operates in a privileged mode where it has full access to all hardware and can execute any CPU instruction.  
      * User Mode: User programs run in a restricted mode with limited access to system resources, ensuring that they cannot interfere with critical system operations.  
    * Switching Between Modes:  
      * The CPU operates in Kernel Mode only when an interrupt occurs.  
      * To switch from User Mode to Kernel Mode under program control, a special instruction known as a Software Interrupt is used. This instruction functions similarly to a hardware interrupt but does not require an Interrupt Acknowledge (IACK) cycle.  
    * Software Interrupts:  
      * The software interrupt instruction includes the vector number associated with the interrupt, which is passed as an argument. This allows the OS to handle the request appropriately.  
      * This mechanism is crucial for organizing OS code, with non-privileged code available as libraries for user programs, and privileged code handled through a set of Interrupt Service Routines (ISRs) associated with specific software interrupt numbers.  
  * Examples:  
    * **User Mode Applications**: Web browsers, text editors, games, and other user-facing software.  
    * **Kernel Mode Components**: The Windows kernel, hardware drivers, and system-level services like the file system and memory manager.

* ## The history of a printf() call

  * C  run time library  
  * Calls the system to operate   
  * User mode → kernel mode issuing a software interrupt (the only way to switch from user mode to  kernel mode is to issue an interrupt)   
  * ISR is activated in response to the software interrupt   
  * Prepare the required data structure, the ISR will interact with the output device.  
  * The activated driver code will write appropriate values in the device registers to start transferring the string to the video device. In the meanwhile, the calling process is put in wait state.   
  * A sequence of interrupts will be likely generated by the device to handle the transfer of the bytes of the string to be printed on the screen.   
  * When the whole string has been printed on the screen, the calling process will be resumed by the operating system and printf() will return. 

* ## Virtual memory 

  * ### What is virtual memory

    * Virtual memory, supported by most general-purpose operating systems, is a mechanism by which the memory addresses used by the program do not correspond to the address the CPU uses to access the RAM memory in the same instructions.   
    * Virtual memory allows a computer system to use more memory than is physically available by using a combination of hardware and software. This is accomplished by mapping virtual addresses (used by programs) to physical addresses (used by the hardware).  
    * Key Components  
      * Virtual Address (Logical Address): This is the address used by the program to access memory. It does not directly correspond to physical memory.  
      * Physical Address:This is the actual address in the physical RAM where the data is stored.   
      * Memory Management Unit (MMU):This hardware component handles the translation of virtual addresses to physical addresses.  
      * Page Table:A data structure used by the MMU to keep track of the mapping between virtual addresses and physical addresses.  
    * Address Translation Process  
      * Virtual Address Breakdown: The virtual address is divided into two parts:  
        * Page Table Index: The most significant 𝑁−𝐾 bits of the virtual address.  
        * Offset: The least significant 𝐾 bits of the virtual address.  
      * Page Table Lookup:  
        * The MMU uses the Page Table Index to look up an entry in the page table. Each entry in the page table is 𝐿 bits long and typically contains the physical address of the corresponding page in RAM.  
      * Offset Handling:   
        * The offset is combined with the physical page address obtained from the page table entry to determine the exact location in physical memory.  
      * **Example：**Let’s assume we have a virtual address of 32 bits, where KKK is 12 bits, and N−KN \- KN−K (the Page Table Index) is therefore 20 bits.  
        * Page Table Index: This 20-bit part is used to index into the Page Table.  
        * Offset: This 12-bit part is used to find the specific location within the page.

  * ### Reasons for virtual memory

    * When two identical programs run in separate processes on the same computer without an address translation mechanism, they could interfere with each other's memory locations.   
    * Virtual memory solves this by using memory translation based on the Page Table, ensuring that each process has its own isolated memory space.   
    * The operating system manages this by keeping track of memory mapping and allocation, and it updates the Page Table during every context switch to maintain proper memory isolation between processes.  

* ## Shared memory management 

  * The address translation mechanism can be used also to let separate processes share a section of memory  
  * Memory sharing is always orchestrated by the OS under request from the involved actors.  
  * Shared memory represents a possible Interprocess Communication (IPC) mechanism but it is in general not enough to ensure a correct communication

* ## Memory swapping

  * ### Memory Management Overview

    * Page Table Entry (PTE) Details:  
      * Protection Bits: Each PTE can include protection bits that specify whether the page is accessible in User mode or only in Kernel mode.  
      * Page Fault Handling: If a page is accessed inappropriately or is not present in memory, the MMU (Memory Management Unit) triggers a Page Fault Exception. This exception signals that the page needs to be loaded into memory.  
    * Handling Virtual Address Spaces Larger than Physical Memory:  
      * Resident vs. Non-Resident Pages:  
        * Resident Pages: If a page is present in memory, the PTE contains the physical page number.  
        * Non-Resident Pages: If a page is not in memory, the PTE includes the disk address where the page is stored.  
      * Page Fault Exception Handling:  
        * Process Suspension: When a page fault occurs, the current process is suspended.  
        * Page Retrieval: A free page is selected from memory.  
        * I/O Operation: A DMA (Direct Memory Access) operation is initiated to read the page from disk and write it into the free memory page.  
        * PTE Update: The PTE is updated with the new configuration, including the physical page number.  
        * Process Resumption: The process is made ready to continue its execution.  
    * Swapping Actions:  
      * Memory Threshold: When the number of free memory pages drops below a specified threshold, the OS initiates a swapping action.  
      * Swapping Process: Pages from memory are written to disk to free up space. This involves selecting pages to move to disk and updating their PTEs accordingly.

  * ### Detailed Process Flow

    * Page Fault Occurrence: When a page fault is triggered, the MMU indicates that the required page is not in memory.  
    * Handling the Fault:  
      * Suspend Process: The OS pauses the process that caused the fault.  
      * Select Free Page: The OS identifies a free page in memory or triggers swapping if no free pages are available.  
      * Initiate I/O Operation: The OS uses DMA to read the page from disk and write it into memory.  
      * Update PTE: The PTE is updated to reflect the page's new location in memory.  
      * Resume Process: The OS resumes the process, allowing it to continue execution with the now-loaded page.  
    * Swapping Strategy:  
      * When memory is low, the OS selects pages from memory to swap out to disk.  
      * This process involves updating PTEs for pages moved to disk and ensuring that memory resources are managed efficiently.

* ## Caching 

  * RAM access is costly in respect to internal register access   
    * To save the cost, the frequently used memory are stored in a local fast memory called cache  
      * Cache lines 

* ## Locality in memory access 

  * Both swapping and caching take advantage from locality in memory access   
    * When a given address is used, it is likely that the next access will be at an address close to the previous one 

* ## Translation Lookaside Buffer (TLB)
   * The Translation Lookaside Buffer (TLB) is a cache that stores recent translations of virtual memory to physical memory addresses. It is part of the memory management unit (MMU) in a computer's CPU. The primary purpose of a TLB is to speed up virtual-to-physical address translation. When a virtual address is referenced by a program, the TLB is checked first to see if the translation is already cached. If it is not found (a TLB miss), the page table must be accessed, which is more time-consuming.

Key Points:

A TLB hit results in faster memory access.
A TLB miss requires a page table lookup, which slows down memory access.
Effective use of TLB can significantly improve the performance of programs, particularly those with frequent memory access patterns.

* ## Pipelining

* ## Pipeline Hazards

* ## Data Hazard prevention technique

* ## Branch Hazard prevention: branch prediction

* ## Code Optimization techniques

* ## Can the programmer help the compiler optimizer in some way?

# Lecture 2: **Processes, Threads and Scheduling**

* ## Process

  * ### Definition

    1. Allow concurrent execution of multiple programs on a single processor  
  * Process Context   
    1. Processor State:  
       1. Processor Registers: These include general-purpose registers, instruction registers, and special-purpose registers like the Program Counter (PC) and Stack Pointer.  
       2. Program Counter (PC): The PC holds the address of the next instruction to be executed. It ensures the process can resume execution from the correct location after a context switch.  
    2. Memory Contents:  
       1. Stack: Contains local variables, function parameters, return addresses, and control flow data. Each process has its own stack.  
       2. Heap: Dynamic memory used by the process during runtime for tasks like allocating memory for objects or arrays.  
       3. Code Segment: Contains the executable code of the process.  
       4. Data Segment: Contains global variables and static variables.  
    3. Global Variables:   
       1. These are variables that are accessible throughout the program and maintain their state across function calls.  
    4. Resource State:  
       1. Open Files: Information about files the process has opened.  
       2. Network Connections: Information about network sockets or other communication channels the process is using.  
       3. Devices: Information about any hardware devices the process is interacting with. 

  * ### PCB: Process Control Block

    1. Function:   
       1. Registers and OS resources are saved in a data structures owned by the OS called the Process Control Block (PCB)  
    2. What to save (The **Process Context** is stored within the **PCB**)  
       1. It would be however not possible to copy the content of the memory used by the process, and memory contents are indeed left where  
       2. It is therefore necessary that physical memory location are independent from memory location as seen by the process (virtual addresses)  
       3. In this case the Page Table entries (possibly referring to swapped pages) used by the process are saved in the PBC  
    3. Page table entries:   
       1. The Page Table is a data structure used by the operating system's memory management unit (MMU) to map virtual addresses to physical addresses.  
       2. **Page Table** is part of the **Process Context** in the sense that the **PTBR** (a pointer to the page table) is stored in the process context.  
  * Memory protection: virtual memory  
    1. The use of virtual memory ensures protection against wrong memory access in process code  
    2. Without virtual memory, user programs may harm other processes- memory or even worse OS data structures  
    3. Using Virtual memory, the process is given a memory area (the pages mapped in the corresponding PTEs) and any access within this area is legal (including program bugs)  
    4. If the process accesses a location whose address is not mapped, an exception (interrupt-like) is generated by the MMU HW, OS regains control and normally the process is aborted  
    5. In any case, OS and other process memory integrity is preserved

  * ### Process states

    1. Created   
    2. Ready  
    3. Running (the scheduler will assign a processor to this task and the state is changed to running)  
       1. If it needs to wait for an event, it transitions to Blocked.  
       2. If it completes execution, it transitions to Terminated.  
       3. If it yields or preemption, it goes to Ready state  
    4. Blocked  
       1. Once the event occurs, the process transitions back to the **Ready** state.  
    5. Terminated 

* ## Threads (within a single process)

  * ### Definition

    1. Using threads within a single process provides a convenient way to manage related concurrent activities while sharing system resources efficiently. Threads make it easier to implement inter-thread communication and coordination, leveraging shared memory to simplify the interaction between different parts of the application.  
    2. **Concurrent Activities**: In many applications, multiple tasks or activities need to run simultaneously. For example, a web browser might need to handle user input, fetch data from the network, and render web pages concurrently.  
    3. **Challenges with Separate Processes**: Implementing these concurrent activities as separate processes can be challenging because they need to share resources like memory structures and open files. This separation requires complex mechanisms for inter-process communication (IPC) and synchronization  
    4. **Threads as a Solution**: To address these challenges, threads are used within a single process. Threads are sometimes referred to as "lightweight processes" because they allow multiple flows of control within one process.  
* **Shared Resources**: Threads within the same process share the same address space, including memory, file descriptors, and other resources. This makes communication between threads straightforward and efficient since they can directly access shared variables and data structures.  
* **Shared Address Space**: Since all threads within a process share the same address space, they can read and write to the same memory locations. This feature simplifies communication and coordination between threads compared to separate processes that would require more complex IPC mechanisms.  
* **Efficiency**: Threads are more efficient than processes in terms of context switching and resource usage because they share the same resources and memory, reducing the overhead associated with creating and managing separate processes.

  * ### Thread Context

    1. **Shared Resources**: Threads within a process share the same address space, including global variables, the program code, and open files.  
       1. Page table   
       2. Open files  
    2. **Thread-Specific Resources**: Each thread has its own set of processor registers, including the Program Counter, and its own stack for managing local variables and function calls.  
       1. Processor Registers:Each thread maintains its own set of processor registers, including the Program Counter (PC), which keeps track of the next instruction to execute. The context of execution (i.e., the state of the CPU when the thread is not running) is saved and restored during context switches.  
       2. Local Program Variables:Threads have their own stack space where local variables and function call information are stored. Each thread has its own stack, which is used to manage function calls, local variables, and return addresses.  
       3. Stack: Each thread has its own stack (thread stack) for managing its function calls and local variables. This stack is private to the thread and is not shared with other threads.

![][image1]

3. **Efficiency**: This sharing of resources allows threads to communicate and coordinate more efficiently but also requires careful management to avoid conflicts, especially when dealing with shared global variables.

   * ### The Thread Memory Model

     1. Thread Memory Model Breakdown  
        1. Local Variables:  
           1. Stack Allocation: Local variables in C routines are allocated on each thread's private stack. Each thread has its own stack space, meaning that:  
              1. Isolation: Local variables are isolated to the thread that created them. Each thread has a separate instance of these variables, so changes made by one thread do not affect the local variables of another thread.  
              2. Concurrency: Multiple threads can execute the same function concurrently, each with its own set of local variables, without interference.  
        2. Global and Static Variables:  
           1. Shared Memory: Variables declared outside of functions (global variables) or as static within functions or files are shared among all threads within the same process.  
              1. Common Access: All threads can read from and write to these variables. This allows threads to share data easily.  
              2. Potential Issues: Since these variables are accessible by all threads, concurrent access can lead to issues such as data races if proper synchronization is not enforced.  
     2. Challenges and Considerations  
        1. Synchronization:  
           1. Importance: Just having shared memory is not sufficient to ensure that threads operate correctly and avoid issues like race conditions. Proper synchronization is crucial for managing concurrent access to shared resources.  
           2. Mechanisms:  
              1. Mutexes (Locks): Ensure that only one thread can access a critical section or modify shared data at a time. This prevents data races and maintains data integrity.  
              2. Semaphores: Used to manage access to a pool of resources or coordinate between threads. Semaphores can signal when resources become available or control access to shared data.  
              3. Condition Variables: Allow threads to wait for certain conditions to be met before proceeding. They are used in conjunction with mutexes to implement more complex synchronization patterns.  
        2. Race Conditions:  
           1. Definition: Occur when multiple threads access and modify shared data concurrently, leading to unpredictable results. For example, two threads incrementing a global counter simultaneously might result in lost updates if not synchronized properly.  
           2. Prevention: Use synchronization mechanisms to ensure that only one thread at a time can modify the shared data.  
        3. Deadlocks and Livelocks:  
           1. Deadlocks: Situations where threads are waiting indefinitely for resources held by each other. Proper design and avoidance strategies, such as ordering resources and using timeout mechanisms, are essential.  
        4. Livelocks: Threads continually change states in response to each other without making progress. This can be avoided through careful design of thread interactions and resource acquisition.

        5. ### Summary: race condition, mutex, semaphore, deadlocks

           1. **Race condition** 是由于多个线程同时访问共享资源导致的程序运行结果不确定性。  
           2. **Mutex** 是一把锁，一次只能有一个线程持有，用于保护共享资源。  
           3. **Semaphore** 是一个计数器，用于控制多个资源的访问。  
           4. Deadlocks **死锁**：进程处于阻塞状态，无法继续执行。  
           5. Livelocks**活锁**：进程处于活跃状态，但无法取得进展。

* ## The scheduler 

  * ### Definition

    1. The scheduler is a crucial component of an operating system that determines which task (process or thread) will be executed next. It prioritizes tasks based on their importance and selects the highest-priority ready task to run.  
    2. The scheduler's actions are triggered by events such as interrupts (e.g., I/O completion, timer expiration) or system calls (e.g., I/O requests). When an event occurs, the scheduler is called to reevaluate the task priorities and select the new task to run.  
    3. A key interrupt source is the timer interrupt, which is typically generated at a rate of 60 Hz. This interrupt is used to update dynamic task priorities and time slices, ensuring that tasks are not starved and that high-priority tasks are given adequate execution time.

* ### Scheduler data structures

  * The scheduler organizes the ready tasks in queues based on their priority   
  * Every task that is not declared in FIFO task is assigned with a time slice to ensure the fairness   
  * interrupt → schedule\_tick , also decrease the time slice of the running task  
  * Time is up → expired queue   
* Task priority  
  * In Linux 140 priority levels are defined (lower number \-\> higher priority)  
  * Priorities 0 to 100 are fixed the others are dynamic

* ### Fixed vs Dynamic task priorities

  * 

# Lecture 3: modals of parallel processing 

1. ## Task interaction 

   1. Processes in parallel systems must collaborate and interact with each other to achieve their goals. This involves both **communication** (exchanging information) and **synchronization** (coordinating actions).  
   2. **Shared memory** can be used for communication, but it's essential to ensure that processes access shared data in a controlled manner to avoid **race conditions**. Race conditions occur when the outcome of a program depends on the order in which instructions are executed.

2. ## **Race condition:** 

   1. ### Definition:

      1. ### A situation where the outcome of a program depends on the order in which instructions are executed.

   2. ### Example:

      1. **Two CPUs:** Both CPU 1 and CPU 2 want to increment the value of a variable `k`.  
      2. **Load:** CPU 1 reads the current value of `k` (0) into its register.  
      3. **Increment:** CPU 1 increments the value in its register to 1\.  
      4. **Load:** CPU 2 reads the current value of `k` (still 0\) into its register.  
      5. **Increment:** CPU 2 increments the value in its register to 1\.  
      6. **Store:** CPU 2 writes the new value (1) back to `k`.  
      7. **Store:** CPU 1 also writes its value (1) back to `k`.  
   3. **Result:** The final value of `k` is unpredictable. It could be 1 or 2, depending on the order in which the two CPUs complete their operations. This is a race condition.

3. ## **Mutual exclusion** 

   1. ### Definition

      1. is a mechanism used to ensure that only one process can access a shared resource at a time. This prevents race conditions and ensures the integrity of data.

   2. ### Steps involved in mutual exclusion:

      1. Acquire lock: A process acquires a lock associated with the shared resource. If the lock is already held, the process waits until it becomes available.  
      2. Critical section: The process can now access and modify the shared resource.  
      3. Release lock: The process releases the lock, allowing other processes to acquire it and access the shared resource.

   3. ### Conditions for a good mutual exclusion mechanism:

      1. Mutual exclusion: It should prevent simultaneous access to the shared resource by multiple processes.  
      2. Progress: No process should be indefinitely prevented from entering its critical section.  
      3. Bounded waiting: There should be a limit on the number of times other processes can enter their critical sections before a waiting process is allowed to enter.  
      4. Independence: The mechanism should not depend on any assumptions about the speed or number of processes.

   4. ### Hardware solution

      1. Test-and-Set: An atomic operation that reads a memory location, sets it to 1, and returns the original value.  
      2. Compare-and-Swap: An atomic operation that compares a memory location's value to a given value and, if they match, updates the location with a new value.  
      3. Load-Linked/Store-Conditional: A pair of instructions that provide a mechanism for conditional updates to memory locations.

4. ## Software solution 

   1. ### **Peterson's Algorithm:** A classic algorithm that uses two flags and a turn variable to ensure mutual exclusion.

   2. ### Semaphores: Semaphores are integer variables that are used to control access to shared resources. They have two operations:

      1. **Wait (P):** Decrements the semaphore's value and blocks the process if the value becomes negative.  
      2. **Signal (V):** Increments the semaphore's value and wakes up a blocked process if the value becomes positive.

   3. ### Monitors and Condition Synchronization: 

      Monitors are language constructs that provide a higher-level abstraction for synchronization. They encapsulate shared data and provide procedures for accessing and modifying it. Monitors use condition variables to allow processes to wait for specific conditions to be met.

   4. ### Message Passing Communication

      Message passing involves processes communicating by sending and receiving messages. It can be synchronous (waiting for a response) or asynchronous (sending a message without waiting for a response).

5. ## Summary:

   1. **Process Cooperation:** In parallel systems, processes must collaborate to achieve a common goal.  
   2. **Communication and Synchronization:** Processes need to exchange information and coordinate their actions to avoid race conditions.  
   3. **Race Conditions:** These occur when the outcome of a program depends on the order in which instructions are executed, leading to unpredictable results.  
   4. **Mutual Exclusion:** To prevent race conditions, mutual exclusion mechanisms are used to ensure that only one process can access a shared resource at a time.  
   5. **Hardware Solutions:** Test-and-Set, Compare-and-Swap, and Load-Linked/Store-Conditional are hardware-level mechanisms for mutual exclusion.  
   6. **Software Solutions:** Peterson's Algorithm, semaphores, monitors, and message passing are software-based approaches for implementing mutual exclusion and synchronization.

# Lecture 4: **deadlocks** 

1. ## **deadlocks**

   1. ### Definition: A situation where a set of processes are waiting for each other to release resources, causing none of them to make progress.

   2. ### Conditions for deadlock:

      1. **Mutual exclusion**: Resources can be used by only one process at a time.  
      2. **Hold and wait**: Processes hold at least one resource while waiting for others.  
      3. **Nonpreemption**: Resources cannot be taken away from a process without its consent.  
      4. **Circular wait**: There is a circular chain of processes waiting for resources held by each other.

   3. ### Consequences of deadlock:

      1. Processes involved in the deadlock will never make progress.  
      2. Resources allocated to these processes will be unavailable to other processes.

2. ## Deadlock Prevention: 

   1. ### Mutual Exclusion: Allow multiple processes to use a resource concurrently (if possible).

   2. ### Hold and Wait:

      1. Prevent waiting: Require processes to request all resources at the beginning.  
      2. Prevent holding: Force processes to release all resources before requesting new ones.

   3. ### Non Preemption: Implement a mechanism to take away resources from processes.

   4. ### Circular Wait: Assign an order to resources and require processes to request them in that order.

   5. ### Challenges:

      1. Overheads: Deadlock prevention can introduce overhead and reduce flexibility.  
      2. Resource constraints: Some techniques may limit resource utilization or require specific resource characteristics.

3. ## Trade-off

   1. Deadlock Avoidance: Algorithms that take action during system execution to prevent deadlocks.  
   2. Trade-offs:  
      1. Flexibility: More flexible for programmers compared to prevention.  
      2. Overhead: Requires additional runtime checks and potential delays.  
   3. How it works:  
      1. Safety check: Evaluates each resource allocation request to determine if it could lead to a deadlock.  
      2. Postpone: If a request is unsafe, it is postponed.  
      3. Re-evaluate: The request is reconsidered later to see if it has become safe.  
   4. Requires:  
      1. Preliminary information: Knowledge about process behavior and resource needs.  
   5. Example:  
      1. Banker's algorithm: Checks if granting resources would lead to a safe state where all processes can complete.

4. ## **Banker’s algorithm** 

   1. The Banker's algorithm is a deadlock avoidance algorithm used in operating systems to determine whether a resource allocation request is safe or unsafe. It simulates the allocation of resources to processes to check if the system will remain in a safe state.

   2. ### How it works:

      1. Initialize:  
         1. Available: A vector indicating the number of available resources of each type.  
         2. Max: A matrix indicating the maximum number of resources of each type that a process can request.  
         3. Allocation: A matrix indicating the number of resources of each type currently allocated to each process.  
         4. Need: A matrix indicating the remaining resources needed by each process (calculated as Max \- Allocation).  
      2. Check Safety:  
         1. Find a safe sequence: A sequence of processes is considered safe if all processes can complete their execution without causing a deadlock.  
         2. Iterate through processes: For each process:  
            1. If the process's Need is less than or equal to Available, the process is considered safe.  
            2. Allocate the requested resources to the process.  
            3. Update Available, Max, and Need matrices accordingly.  
            4. Repeat until all processes have been checked.  
      3. Grant or Deny Request:  
         1. If a safe sequence is found, the request is granted, and the system remains in a safe state.  
         2. If no safe sequence is found, the request is denied, and the system remains in a safe state.  
      4. Key Concepts:  
         1. Safe state: A state where there exists a sequence of processes that can complete their execution without causing a deadlock.  
         2. Unsafe state: A state where there is no safe sequence, and a deadlock may occur.  
         3. Need matrix: Represents the remaining resources required by each process.  
      5. Advantages:  
         1. Prevents deadlocks by ensuring the system remains in a safe state.  
         2. Can be implemented efficiently.  
      6. Disadvantages:  
         1. Requires prior knowledge of the maximum resource needs of processes.  
         2. May be computationally expensive for large systems.  
         3. May restrict resource utilization if a process needs to release resources to avoid a deadlock.

5. ## Starvation

   1. ### Starvation: A situation where a process is unable to access a shared resource indefinitely.

   2. ### Relationship to Deadlock:

      1. Starvation is a broader concept than deadlock. Deadlock is a specific type of starvation where a set of processes are waiting for each other to release resources.  
      2. Starvation can occur even without a deadlock.

   3. ### Causes of Starvation:

      1. Resource allocation policies: How resources are allocated can influence whether a process experiences starvation.  
      2. Scheduling algorithms: The scheduling algorithm may favor certain processes over others, leading to starvation.

   4. ### Prevention:

      1. Fairness mechanisms: Algorithms can be designed to ensure that all processes have a fair chance to access resources.  
      2. Priority adjustments: Low-priority processes can be given temporary priority boosts to prevent starvation.  
      3. Resource allocation strategies: Careful consideration of resource allocation policies can help avoid starvation.

   5. ### Example:Peterson's algorithm

      1. ### This mutual exclusion algorithm ensures that both processes have an equal chance to enter the critical section, preventing starvation.Indefinite wait, indefinite postponement, starvation

# Lecture 5: real-time systems: process model and cyclic execution 

1. ## Real-time system definition:

   1.  in any concurrent program, the exact order in which processes execute is not completely specified   
      1. The interprocess communication and synchronization primitives are used to enforce a set of constraints that limit the possible interleavings in order to ensure   
   2. Nevertheless, the program will still exhibit a significant amount of nondeterminism because its process may interleave in different ways without violating any of those constraints   
   3. The concurrent program output  will of course be the same in all cases, but its timings may still vary considerably from one execution to another   
   4. If one of the processes in a concurrent program has a tight deadline on its completion time, only some of the interleavings that are acceptable from the concurrent programming perspective will also be adequate from the real-time execution point of view  
   5. As a consequence, a real-time system must further restrict the nondeterminism found in a concurrent system because some interleavings that are acceptable with respect to the results of the computation may be unacceptable for what concerns timing

2. ### Real time operating system 

   1. Most general-purpose scheduling algorithms emphasize aspects such as   
      1. Fairness   
      2. Efficiency   
      3. Throughput   
   2. The main goal of scheduling model is to ensure that a concurrent program does not only produce the expected output in all cases but is also correct with respect to timings. In order to do this, a scheduling model must comprise two main elements:  
      1. A scheduling algorithm   
      2. Analytics tool to analyze the worst-case behavior in timings  
   3. The assumptions of the basic model  
      1. Its difficult to predict the worst-case timing behaviors  
      2. a simplified process model that imposes some restrictions on the structure of real-time concurrent programs to be considered for analysis, which is the basic process model,  
         1. The concurrent model has a fixed number of processes, and the number is known in advance  
         2. Processes are periodic, with known periods. Moreover, process periods do not change with time. For this reason, processes can be seen as an infinite sequence of instances. Processes instances become ready for execution at regular time intervals at the beginning of each period  
         3. Processes are completely independent of each other   
         4. Timing constraints are expressed by means of deadlines.   
         5. All processes have a fixed worst-case execution time that can be computed offline   
         6. All system’s overheads, for example, context switch times, are negligible   
      3. Limitation of the basic model  
         1. It means that there are no synchronization constraints among processes at all, so no process must even wait for another  
            1. This rules out, for instance, mutual exclusion and synchronization semaphores  
         2. The deadline of a process is not always related to its period, and is often shorter than it  
         3. Some processes are sporadic rather than periodic. In other words, they are executed “on demand” when an external event, for example an alarm, occurs.  
         4. For some applications and hardware architectures, scheduling and context switch times may not be negligible.  
         5. The behavior of some nondeterministic hardware components, for example, caches, must sometimes be taken into account, and this makes it difficult to determine a reasonably tight upper bound on the process execution time.  
      4. The cyclic execution   
         1. The basic idea is to lay out offline a completely static schedule such that its repeated execution causes all tasks to run at their correct rate and finish within its deadline   
      5. The choice of minor and major cycle time   
         1. All task periods must be an integer multiple of the minor cycle period. Otherwise, it would be impossible to execute them at the proper rate   
         2. On the other hand, it is also desirable to keep the minor cycle length as large as possible. This is useful not only to reduce synchronization overheads but also make it easier to accommodate tasks with a large execution time  
         3. To satisfy both constraints the minor cycle length is set to be equal to the Greatest Common Divisor of the periods of the tasks to be scheduled   
         4. The cyclic execution repeats the same schedule over and over at each major cycle, therefore, the major   
         5. A sensible choice is to let the major cycle length of the Least Common Multiple of the task periods. Sometimes it is also called hyperperiod of the task set 

# Lecture 6: Task based scheduling 

1. ### Fixed and variable priorities in real time scheduling 

   1. Variable priority assigned to asked is usually performed in non-real time systems in order to make the system more fluid  
      1. Based on the concept that a task that is going to use the processor for the shortest time should take it first   
      2. This maximize the number of tasks executed per unit of time   
   2. Fixed priorities assignments favorises important tasks that must be executed first  
   3. In linux and windows tasks above a given priority are not subject to dynamic priority management  
   4. Dynamic priorities are also used in real-time systems   
      1. On the one side, they are more complicated to implement   
      2. On the other side, the processor utilization is better exploited 

2. ### Critical instant 

   1. The critical instant, that is the worst situation that may occur when a set of periodic tasks given periods and computation times are scheduled  
   2. Task jobs can in fact be released at arbitrary instants within their period, and the time between period occurrence and job release is called the phase of the task   
   3. We shall see that the worst situation will occur when all the jobs are initially released at the same time   
   4. Proving that system under consideration is schedulable in such a bad situation means proving that it will be schedulable for every task phase

3. ### Critical instant theorem 

   1. The relative deadline of a task is equal to its period, that is, Di \= Ti∀i.  
   2. Hence, for each task instance, the absolute deadline is the time of its next release, that is, di,j \= ri,j+1.  
   3. Overflow t if the tasks misses the deadline  
   4. A scheduling algorithm is feasible for a given task if they are scheduled so that no overflows ever occur  
   5. A critical instant for a task is an instant at which the release of the task will produce the largest response time   
   6. A critical time zone for a task is the interval between a critical instant and the end of the task response   
4. Critical instant Theorem: a critical instant for any task occurs whenever it is released simultaneously with the release of all high-priority task    
   1. It is a worst-case scenario where the task is released simultaneously with high-priority task

5. ### Rate Monotonic priority assignment 

   1. Rate monotonic is a policy for fixed-priority assignment in periodic tasks, which assigns a priority that is inversely proportional to the task period: the shorter the task period, the higher the priority

6. ### Optimality for RM

   1. RM is the optimal priority assignment policy, i.e. every system that is schedulable using fixed priorities is schedulable using RM policy  
   2. In other words, if a system is not schedulable under RM policy, then it will remain not schedulable under any other fixed priority assignment

7. ### Earliest Deadline First 

   1. This algorithm selects the task with closest deadline 

# Lecture 7: schedulability analysis based on utilization and response time analysis

1. ### Schedulability analysis 

   1. Fixed priority, the RM is optimal   
   2. and variable priority assignment, the optimality of EDF  
2. Before deciding the algorithm, to understand whether the program is scheduable 

3. ### Least UpperBound (ULUB) 

4. ### EDF and schedulability 

   1. Theorem: A set of N periodic tasks is schedulable with the Earliest Deadline First algorithm if and only its Processor Utilization is not greater than 1

# Lecture 8: real-time linux

1. Preemptible kernel   
   1. This means that a kernel operation had to finish before giving the chance for another task to resume, before calling schedule()  
   2. Interrupts of course occur, including those the may make a high priority task newly ready, but the call to schedule() is deferred until the termination of the pending kernel operation  
2. Kernel threads  
   1. When invoked via soft interrupt (the only way to move programmatically to kernel mode) kernel code is running in interrupt context  
   2. As such a kernel section cannot be preempted, only suspended by a higher priority interrupt   
   3. Therefore it is necessary to let some kernel operations be carried out by **kernel thread**  
   4. Kernel threads do not live within the context of any process, but they share the same kernel virtual address  
   5. In this way, using the same scheduler mechanism it is possible to suspend a kernel thread when another thread/process with higher priority becomes ready, and eventually resume it  
   6. Kernel threads are also important in reducing the amount of code executed at interrupt level in drivers, moving actions that are not essential (such as writing an immediate answer into the device registers) to a kernel thread and therefore reducing again the dead time in system responsiveness  
      1. An interrupt routine can be interrupted only by a higher priority HW interrupt 

3. ### Protecting critical sections in kernel threads

   1. It **cannot** rely on the scheduler mechanism because critical sections may be required also by interrupt routines and therefore a lower level mechanism is required   
   2. On a single processor system, an immediate way to ensure mutual exclusion is to disable HW interrupts when the critical section is accessed  
   3. For multiprocessor system, this is no more enough, as the critical section can be accessed by code running on a different processor  
   4. In this case, **spinlocks** are used, based on shared memory, looping until the critical section is accessible   
      1. As interrupts are disabled, only a separate processor can be competing for the critical section   
   5. Spinlocks require some sort of atomic Test\&set HW mechanism, that is provided by most, if not all, platforms

4. ### PREEMPT\_RT patch 

   1. In pre-emptible kernel, system latency is mainly due to   
      1. Critical sections in the kernel code that are protected by spinlocks, preemption is in fact disabled as long as a single spinlock is active  
      2. Interrupt service routines ISR running outside any task context, and therefore potentially introducing delays in the system reaction to events because the scheduler cannot be invoked until no pending interrupts are present   
   2. The PREEMPT RT linux patch represents one step further towards hard real time Linux performance.  PREEMPT RT provides the following features:  
      1. Preemptible critical sections  
      2. Priority inheritance for in-kernel spinlocks and semaphores  
      3. Preemptible interrupt handlers  
   3. Real-time performance of the Linux MRG are now very close to those of specialized real-time system such as vxWorks (that has been used in the NASA Mars missions)  
5. Pre-emptible critical sections  
   1. In preempt rt, a new locking mechanism is made available. It is no more implemented as the cyclic atomic test and set but is internally implemented by a semaphore called **re-semaphore**.   
      1. This semaphore is implemented in a very efficient way if the underlying architecture supports atomic compare and exchange  
      2. Otherwise, an internal spinlock mechanism is used. Therefore, the task entering a critical section can now be interrupted  
   2. The integrity of the critical section is still ensured since, if a new task tries to acquire same lock, it will be put on wait  
      1. Spinlocks are still required for ISR because they are outside the kernel thread context  
   3. The impact of this difficult, semaphore-based mechanism is not trivial since it may lead to deadlocks using spinlocks  
      1. In fact, in this case the task owning a spinlock is put on wait, there would be no chance for other tasks to gain processor usage

6. ### Priority inheritance for in kernel spinlocks and semaphores

   1. Priority inversion may lead to potentially unbounded delays in task response even when task priorities are accurately planned  
   2. Observe that for spinlocks priority inversion cannot occur because the task taking ownership disables interrupts and therefore implicitly becomes the highest priority task in the system (interrupts disabled \-\> the task cannnot be preempted by the higher priority tasks   
   3. For rt-semophores PREEMPT-RT implements priority inheritance   
      1. The kernel knows the priority of the threads owning semaphore and of the requesting thread and in case can therefore increment the priority of the current owner, lowering it at its original value when the semaphore is released.

7. ### Pre-emptible interrupt handlers

   1. Well-written device driver avoid defining lengthy ISR code  
      1. Rather, the ISR code should be made as short as possible, delegating the rest of the work to kernel threads  
   2. Preempt RT takes one step further and forces almost all interrupts handlers to run in task context unless marked SA NODELAY to cause it to run in interrupt context  
      1. By default, only a very limited set of interrupts is marked as SA NODELAY  
      2. Among them, only the timer interrupt is normally used  
   3. In this way, it is possible to define the priority associated with every interrupt source in order to guarantee a faster response to important events  
      1. This would not have been possible if ISR were handled at interrupt level, even when using Interrupt Priority levels (normally limited to 8  
   4. Summary  
      1. How to improve the real-time kernel, esp with the PREEEMPT-RT   
      2. Pre-emptible Kernel  
         1. **内核操作的限制**：在可抢占内核中，内核操作必须完成后，才能调用调度器（schedule()）切换任务。然而，这可能导致系统延迟，因为调度器的调用会被延迟，直到当前的内核操作结束  
      3. Kernel Threads  
         1. **中断上下文**：内核代码运行在中断上下文中，这种上下文下的代码不能被抢占，只能被更高优先级的中断挂起。为了解决这个问题，内核线程被用来处理那些不能在中断上下文中完成的任务。  
         2. **内核线程的特点**：内核线程不依赖于任何用户进程，但它们共享内核虚拟地址。这样，调度器可以像调度其他线程或进程一样调度内核线程，改善系统的响应能力。  
         3. **减少中断级代码**：内核线程可以减少在中断级别执行的代码量，将非核心操作（例如写入设备寄存器的立即响应）转移到内核线程中，从而提高系统的响应速度。

         ### **3\. 保护内核线程中的关键部分**

* **单处理器系统**：在单处理器系统中，可以通过禁用硬件中断来确保互斥访问关键部分。  
* **多处理器系统**：在多处理器系统中，仅禁用硬件中断不够，需要使用自旋锁（spinlocks），它们基于共享内存工作，直到关键部分变得可访问。自旋锁通常依赖原子Test\&Set硬件机制来工作。

  ### **4\. PREEMPT\_RT补丁的功能**

* **可抢占的关键部分**：PREEMPT\_RT补丁引入了一种新的锁机制（re-semaphore），使得关键部分可以被抢占，尽管这可能导致死锁等复杂问题。  
* **优先级继承**：补丁实现了优先级继承机制，这可以避免优先级反转问题，即低优先级任务持有锁时，高优先级任务被阻塞的情况。内核可以提升低优先级任务的优先级到高优先级任务的级别，直到锁被释放。  
* **可抢占的中断处理程序**：PREEMPT\_RT补丁使大多数中断处理程序在任务上下文中运行，而不是在中断上下文中，除非特别标记为`SA_NODELAY`。这种方式允许为每个中断源定义优先级，以确保对重要事件的快速响应。默认情况下，只有少数中断被标记为`SA_NODELAY`，例如计时器中断。

  ### **总结**

  这节讲座介绍了在实时Linux中如何通过PREEMPT\_RT补丁改善内核的实时性能。补丁通过引入可抢占的关键部分、优先级继承机制和可抢占的中断处理程序，减少了系统延迟，提高了对关键事件的响应速度。这些改进使得Linux的实时性能接近专门的实时操作系统，如VxWorks。

