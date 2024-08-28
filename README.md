# *JourneyCraft*
# Welcome to your Expo Trip Management App 👋

*JourneyCraft*

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```
This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Overview
The User Trip Management App is a React Native application designed to help users manage their travel plans. The app allows users to view details of their latest and past trips, including trip locations, dates, and the number of travelers. Additionally, users can delete trips from their list if needed.

## Features
Display User Trips: Shows a list of trips with details such as location, dates, and traveler count.
AI: provides recommendations and helps streamline the planning process, making it easier for users to organize their trips.
Latest Trip Highlight: The most recent trip is highlighted with an image and detailed information.
Trip Deletion: Users can delete a trip from the list with a confirmation prompt.
Navigation to Trip Details: Users can navigate to a detailed view of each trip by tapping on the trip card.

## Technologies Used
<ul>
<li>React Native: For building the mobile application.</li> 
<li>Expo Router: For handling navigation between different screens.</li>
<li>Firebase Firestore: For storing and retrieving trip data.</li>
<li>Moment.js: For date formatting and manipulation.</li>
<li>Google Maps API: For retrieving and displaying trip location images.</li>
<li>Gemini AI Integration : Gemini AI provides recommendations and helps streamline the planning process, making it easier for users to organize their trips.</li>
</ul>

## Setup and Installation
Prerequisites
Node.js and npm installed on your machine.
Expo CLI installed globally (npm install -g expo-cli).
A Firebase project with Firestore enabled.
A Google Cloud project with Places API enabled.
A google Gemini AI API

Clone the Repository

Copy code
git clone https://github.com/your-username/user-trip-management-app.git

cd user-trip-management-app

Install Dependencies

## Environment Variables
Create a .env file in the root directory and add the following environment variables:
```bash
EXPO_PUBLIC_GOOGLE_MAP_KEY=your_google_maps_api_key
EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY=your_google_maps_api_key
```
## Firebase Configuration
Replace the Firebase configuration in FirebaseConfig.js with your own Firebase project's configuration:

javascript
Copy code
```bash
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```
Run the Application

## Start the development server:
```bash
 npx expo start
```
You can run the app on an Android/iOS emulator or directly on a physical device using the Expo Go app.

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Usage
Viewing Trips
The app automatically displays the user's trips. The most recent trip is highlighted at the top.
Users can view additional details by tapping the "See your Plan" button on the latest trip or by selecting any of the previous trips.
Deleting Trips
Users can delete a trip by tapping the trash icon on the trip card.
A confirmation prompt will appear to prevent accidental deletions.
After confirming, the trip is removed from the list and the Firestore database.

## Troubleshooting
Common Issues
Image Not Loading: Ensure the Google Maps API key is valid and has the required permissions.
Firestore Errors: Double-check the Firebase configuration and ensure Firestore is correctly set up in your Firebase project.
Expo Issues: If you encounter problems with Expo, try restarting the server or clearing the cache with expo start -c.
Debugging
Use console.log statements or React Native's built-in debugging tools to troubleshoot issues. Firebase errors will typically provide specific messages in the console.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

Contact
If you have any questions or suggestions, feel free to open an issue or reach out to me at [rohithfaizal25@yahoo.com].
