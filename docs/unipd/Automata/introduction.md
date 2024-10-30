## Sep：introduction of automata
- what is automata? 
    transition of states 
- why to study automata 
    to understand what is computable and what is not
- what can automata do 
    compiler to check whether a language can be accepted 
    models such as on/off, vending machine, state machines 
    advanced application like language model, natural language model.
## October Week 1: 
### chapter 2, beginning of chapter 3:   DFA NFA Regular language
- how to define a Language that can be recognized by a NFA or DFA 
- induction, using the base and induction 
    - before starting, to understand how to start the induction, usually it is the length of the w=xa, a here is the constant that is defined 
- how to express a NFA and DFA 
    - graph
    - using definition 
- relationship between NFA and DFA
    - NFA = DFA + other NFA , and a DFA is a NFA, a NFA can be a DFA
    - a typical example, a langauge can be recognized by a NFA, if and only if it could be recognized by DFA, how to proof this? 
        - part 1: if a language can be recognized by DFA, it can be recognized by a NFA, BY prooving that a DFA is a NFA. which is obvious from the definition and construction of them. 
        - part 2: only if a language can be recognized by a DFA, it can be recognized by a NFA, by prooving every NFA can be converted into an equivalent DFA. so the direction from NFA to DFA is correct. 
- regular language 


