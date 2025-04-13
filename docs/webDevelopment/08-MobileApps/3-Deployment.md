---
sidebar_position: 3
title: App Deployment
---

## Android Studio

### Device Debugging & Deployment
1. **QR Code Debugging** (Wireless ADB):  
   - Enable **Developer Options** on the device.  
   - In Android Studio:  
     ```bash
     adb pair <IP:Port>  # Scan QR code from device's "Pair using Wi-Fi" option
     adb connect <IP:Port>
     ```  
   - Deploy directly to the device without USB.

2. **Build & Sign APK/AAB**  
   ```bash
   ./gradlew assembleRelease  # Generate APK
   ./gradlew bundleRelease    # Generate App Bundle (AAB)
   ```  
   - Sign with a keystore:  
     ```gradle
     android {
       signingConfigs {
         release {
           storeFile file("my-release-key.jks")
           storePassword "password"
           keyAlias "alias"
           keyPassword "password"
         }
       }
     }
     ```

3. **Deployment Tools**  
   - **Firebase App Distribution**: Beta testing for Android/iOS.  
   - **Play Store**: Use `Internal Testing` track for staged rollouts.  

---

## Apple System (iOS/macOS)

### Xcode Setup & Debugging
1. **Device Pairing**  
   - Connect via USB or **Wireless Debugging** (Settings > Developer > Wireless Debugging).  
   - Use **Quick Look** in Xcode’s debugger to inspect UI elements.  

2. **Code Signing**  
   - Automatically manage certificates/profiles in Xcode:  
     ```swift
     // Xcode -> Signing & Capabilities -> Automatically manage signing
     ```  
   - Manual signing for enterprise apps:  
     Upload `.ipa` via **Apple Configurator 2**.  

3. **App Store Deployment**  
   - Archive the app in Xcode (`Product > Archive`).  
   - Submit via **App Store Connect** or automate with:  
     ```bash
     xcodebuild -exportArchive -archivePath <path> -exportOptionsPlist ExportOptions.plist
     ```  

4. **TestFlight**  
   - Distribute beta builds to testers via Apple’s TestFlight platform.  

---

## Cross-Platform Deployment Tools

### Hybrid Frameworks
- **Flutter**:  
  ```bash
  flutter build apk         # Android
  flutter build ios         # iOS (requires Xcode)
  ```  
- **React Native**:  
  ```bash
  npx react-native run-android
  npx react-native run-ios
  ```  

### CI/CD Automation
- **Android**:  
  - GitHub Actions with `android-build` workflow.  
  - **Bitrise** for Play Store uploads.  
- **iOS**:  
  - **Fastlane** for automated screenshots and App Store submissions:  
    ```ruby
    lane :beta do
      build_app(scheme: "MyApp")
      upload_to_testflight
    end
    ```  
  - **Xcode Cloud** (Apple’s native CI/CD).  

---

## Monitoring & Analytics
| Tool               | Purpose                          |  
|--------------------|----------------------------------|  
| **Firebase Crashlytics** | Real-time crash reporting |  
| **Sentry**         | Cross-platform error tracking    |  
| **New Relic**      | Performance monitoring           |  

---

## Pro Tips  
- Use **environment variables** for API keys (e.g., `.env` files).  
- Test on **emulators** (Android Studio) and **simulators** (Xcode) before physical devices.  
- For Apple deployments, renew **APNs certificates** annually.  

## Learning Resources  
- [Android Developers Guide](https://developer.android.com/guide)  
- [Apple Developer Documentation](https://developer.apple.com/documentation/)  
- [Flutter Deployment Checklist](https://flutter.dev/docs/deployment)  
``` 
