# Contacts App

This is a simple contacts app built using React Native. It allows you to fetch and display contacts from your device and provides search functionality to filter the contacts based on name. You can also view details of a selected contact in a modal.

## Installation

To run the Contacts app on your device or emulator, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the Metro bundler.
5. Scan the QR code with your Expo app to run the app on your device, or press `a` to run the app on an Android emulator, or press `i` to run the app on an iOS simulator.

## Libraries and Plugins Used

The Contacts app utilizes the following libraries and plugins:

- **React**: A JavaScript library for building user interfaces.
- **React Native**: A framework for building native apps using React.
- **expo-permissions**: A module that provides an API to request various permissions, including the CONTACTS permission used in this app.
- **expo-contacts**: A module that provides an API to fetch contacts from the device's contact list.
- **@expo/vector-icons**: A package that provides a collection of customizable icons.
- **randomcolor**: A library that generates random colors.

## Components

### App

The main component of the Contacts app is the `App` function component. It serves as the entry point of the app and contains the logic for fetching and displaying contacts, handling user interactions, and managing the state of the app.

The `App` component uses the following hooks:

- `useState`: To manage the state variables `contacts`, `searchText`, and `selectedContact`.
- `useEffect`: To fetch the contacts when the component mounts.

The `App` component consists of the following elements:

- `TextInput`: A search input field to filter the contacts based on name.
- `TouchableOpacity`: A button to clear the search text.
- `FlatList`: A component to render the filtered contacts as a scrollable list.
- `Modal`: A modal component to display the details of a selected contact.

### Styles

The `styles` object contains the CSS styles for the various components in the app. It uses the `StyleSheet.create` method provided by React Native to define the styles.

## APK File

The APK (Android Application Package) file is generated when you build your React Native app for the Android platform. It is the installation file for Android devices and allows users to install and run your app.

## Expo Login and Using Expo in the Browser

Before generating the APK file, you need to log in to Expo and use it in the browser for building and managing your React Native app. Here are the steps:

1. Open a terminal or command prompt and navigate to your project directory.
2. Run the following command to log in to Expo:

` eas login`

This will prompt you to enter your Expo username and password. If you don't have an Expo account, you can create it from expo website on browser.

To generate the APK file for your Contacts app, follow these steps:

3. Run the following command to generate the APK:
   `eas build -p android --profile preview`

4. Wait for the build process to complete. This may take some time.
5. Once the build is successful, you will receive a download link for the APK file.
6. Download the APK file to your computer. You can download it from expo too.

## Installing the APK

To install the APK file on your Android device, follow these steps:

1. Transfer the downloaded APK file to your Android device using a USB cable, email, or any other file transfer method.
2. Tap on the APK file to start the installation process.
3. Follow the on-screen instructions to complete the installation.
4. Once the installation is complete, you will find the Contacts app installed on your Android device.
