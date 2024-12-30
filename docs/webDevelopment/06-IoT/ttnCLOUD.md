---
sidebar_position: 4
title: 4 - TTN and the cloud
---

# TTN Cloud Integration Options

The Things Network (TTN) offers several ways to integrate with cloud platforms. Here are the main cloud services that TTN officially supports:

## 1. AWS IoT

- Direct integration with AWS IoT Core
- Can use AWS IoT Rules to route data to other AWS services
- Supports both uplink and downlink messages
- Easy setup using TTN Console

## 2. Azure IoT Hub

- Native integration with Microsoft Azure IoT Hub
- Supports device-to-cloud and cloud-to-device messaging
- Can leverage Azure's IoT services ecosystem
- Built-in support for device management

## 3. Google Cloud IoT Core

- Direct integration with Google Cloud Platform
- Supports MQTT and HTTP protocols
- Easy data pipeline setup with Cloud Pub/Sub
- Integration with other Google Cloud services

## 4. IBM Watson IoT

- Connect TTN devices to IBM Cloud
- Real-time data processing capabilities
- Analytics and machine learning integration
- Enterprise-grade security

## 5. LoRa Cloud
- Lora Cloud provides value added APIs that enable simple solutions for common tasks related to LoRaWAN networks and LoRa-based devices. You can setup our LoRaCloud integrations below.

## Integration Methods

You can integrate TTN with cloud platforms using:

1. **MQTT Integration**

   - Most flexible approach
   - Works with any cloud platform supporting MQTT
   - Full control over data format

MQTT is a publish/subscribe messaging protocol designed for IoT. Every application on TTS automatically exposes an MQTT endpoint. In order to connect to the MQTT server you need to create a new API key, which will function as connection password. You can also use an existing API key, as long as it has the necessary rights granted. 

2. **HTTP Webhooks**

   - Simple REST API integration
   - Supports POST/GET requests
   - Easy to implement with most cloud services

3. **Storage Integration**
   - Direct database connections
   - Support for various data formats
   - Built-in data transformation

## Getting Started

To set up a cloud integration:

1. Log in to TTN Console
2. Navigate to your application
3. Go to Integrations
4. Select your preferred cloud platform
5. Follow the platform-specific configuration steps

> Note: Each cloud provider has its own pricing structure and requirements. Choose based on your specific needs, budget, and technical requirements.
