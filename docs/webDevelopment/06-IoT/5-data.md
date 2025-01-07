---
sidebar_position: 5
title: 5- Understand the data flow
---

## Message Types used in LoRaWAN

These message types are used to transport MAC commands and application data.

## Uplink and Downlink Message

Uplink messages - Uplink messages are sent by end devices to the Network Server relayed by one or many gateways. If the uplink message belongs to the Application Server or the Join Server, the Network server forwards it to the correct receiver.

Downlink messages - Each downlink message is sent by the Network Server to only one end device and is relayed by a single gateway. This includes some messages initiated by the Application Server and the Join Server too.

```
End device ---uplink--------- (one or many gateways)--> network server
           <--downlink------(one gateway)--------------

```
## MAC Message Types

### Sending MAC Commands and Application-Specific Data

