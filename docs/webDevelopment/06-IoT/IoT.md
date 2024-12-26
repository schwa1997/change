---
sidebar_position: 1
title: IoT
---

## device information

- Geneal
  Temperature Unit
  Reporting Interval
  LED indictor

- Collection
- Calibration
- Threshold
  - Temperature
  - CO2/ppm

### device

### network

1. device EUI
2. APP EUI (JOinEUI)
3. Application Port
4. LoRaWAN version
5. Work Mode
6. Join Type
7. Application key
8. Rejoin Node
9. Set the number of detection signals sent
10. Support Frequency
11. ADR mode
12. Sprading factor
13. TXPower
14. RX2 Data Rate
15. RX2 Frequency

### Network Parameters

1. **Device EUI (Extended Unique Identifier)**

   - A globally unique 64-bit identifier for each device
   - Similar to a MAC address for LoRaWAN devices
   - Format: 8-byte hexadecimal number (e.g., 70B3D57ED0008C3D)

2. **APP EUI (JoinEUI)**

   - Globally unique identifier for the application/joining server
   - Used during the device activation process
   - 64-bit identifier that helps route messages to the correct application

   ### Application/Joining Server

   - A network server component that manages device activation and security
   - Key responsibilities:
     - Handles OTAA (Over-The-Air Activation) join procedures
     - Manages application session keys
     - Validates device authenticity
     - Routes application data between devices and applications
   - Security features:
     - Stores root keys for devices
     - Generates session keys for secure communication
     - Ensures only authorized devices can join the network

3. **Application Port**

   - Used to multiplex different data types/applications on the same device
   - Values range from 1 to 223
   - Helps distinguish between different types of payloads

4. **LoRaWAN Version**

   - Specifies the protocol version (e.g., 1.0.2, 1.0.3, 1.1)
   - Determines available features and security mechanisms

5. **Work Mode**

   - Defines how the device operates (e.g., Class A, B, or C)
   - Class A: Most energy efficient, bidirectional communication
   - Class B: Scheduled receive windows
   - Class C: Continuously listening

6. **Join Type**

   - OTAA (Over-the-Air Activation): Dynamic secure activation
   - ABP (Activation By Personalization): Static activation with pre-programmed keys

7. **Application Key**

   - 128-bit AES key used for secure device activation in OTAA
   - Root key for deriving session keys

8. **Rejoin Node**

   - Configuration for periodic rejoin requests
   - Helps maintain network security and connection reliability

9. **Number of Detection Signals**

   - Defines how many times the device attempts to send join requests
   - Affects connection reliability and power consumption

10. **Support Frequency**

    - Frequency band used for communication (e.g., EU868, US915, AS923)
    - Region-specific and must comply with local regulations

11. **ADR Mode (Adaptive Data Rate)**

    - Automatically optimizes data rates and power usage
    - Balances range, airtime, and power consumption

12. **Spreading Factor (SF)**

    - Determines the chirp duration (SF7-SF12)
    - Higher SF = longer range but slower data rate
    - Lower SF = shorter range but faster data rate

13. **TXPower**

    - Transmission power level in dBm
    - Affects communication range and battery life
    - Must comply with regional regulations

14. **RX2 Data Rate**

    - Data rate for the second receive window
    - Used when the first receive window fails
    - Region-specific parameter

15. **RX2 Frequency**
    - Frequency used for the second receive window
    - Fixed frequency per region
    - Backup communication channel
