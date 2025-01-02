---
sidebar_position: 4
title: 4 - TTN and the AWS cloud
---

# TTN Cloud Integration Options

The Things Network (TTN) offers several ways to integrate with cloud platforms. Here are the main cloud services that TTN officially supports:

## AWS IoT configuration

![structure](images/4/image.png)
Follow this [instruction](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/aws-iot/) to configure in both AWS and TTN to establish the connection between the AWS cloud and the TTN.

### AWS

### TTS

## Test

### uplink

![uplinktest](images/4/image-6.png)
This image shows the uplink received by the AWS cloud from the TTS console.

![uplinktwoplatforms](images/4/image-9.png)
In this image, it shows the uplink timestamp
![uplinkwithdecoded](images/4/image-10.png)
The uplink is decoded payload

### downlink

This is the download publish command from the AWS cloud.
![downlinktest](images/4/image-4.png)

```json
{
  "thingName": "24E124707C141230",
  "bytes": "/y0AAA==",
  "fPort": 85,
  "confirmed": true
}
```

Note: the bytes here is different from the byte in the ttn console. This is a Base64 encoded FRMPayload.
The downlink has the quenedm, ack, etc...
![downlink](images/4/image-8.png)

![ttnresult](images/4/image-5.png)
In the TTN console, there is downlink recorded and the screen display is diabled.

## Structure

![structure](images/4/image-7.png)

The key resources deployed in AWS account :

- Cross-account role for The Things Stack to connect to your AWS IoT Core MQTT endpoint
- AWS Lambda functions to create the thing type and configure the integration as pub/sub in The Things Stack
- AWS Lambda functions for creating devices and for handling uplink and downlink messages
- Secret with key encryption key (KEK) to leverage LoRaWAN end-to-end encryption
- IoT Core rules to trigger the Lambda functions based on topics and attributes

### Message

In LoRaWAN, there are two main types of messages that happen before regular uplinks:

- Join Request/Accept (LoRaWAN OTAA - Over The Air Activation):
  This is the initial "handshake" mechanism in LoRaWAN
  Device sends a Join Request
  Network Server responds with Join Accept
  This establishes the session keys for secure communication
- Regular Uplinks:
  After joining, devices can send uplinks directly
  No additional handshake is needed for each uplink

![message](images/4/image-11.png)
The message you're seeing one minute before the uplink is not a handshake - it's a status/metadata message from TTN to AWS that includes:
Device identification (device_id, dev_eui, etc.)
Session information (session_key_id)
Network details (network_ids)
Gateway metadata (rx_metadata)
This message appears because:
TTN forwards device status and metadata separately from the actual payload
AWS IoT receives both the metadata and the actual uplink message
This helps with device management and monitoring in AWS
The actual LoRaWAN handshake happens at the TTN level, not at the AWS cloud level. AWS simply receives the forwarded messages from TTN, which is why you don't see the handshake mechanism in AWS.
### AWS Lambda
AWS Lambda is the event-based serverless computing service for the AWS platform. Event-driven functions are compute events that happen automatically in response to various inputs known as triggers. This is sometimes called Functions-as-a-Service (FaaS), although the AWS Lambda ecosystem extends beyond that. 