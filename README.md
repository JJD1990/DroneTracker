## Real-time Drone Tracker

This is a real-time drone tracker built using React and Google Maps API. The app listens to changes in the drone's coordinates stored in a Firestore database and updates the map accordingly. This project was with a time limit of 90 mins. I was unable to get more of the priority work done within that time frame. At present, the map, hospital markers and authentication is completed. Needs doing: Drone Maker, PWA & Hosting.

---

Installation
To run this app on your local machine, follow these steps:

Clone this repository to your local machine
In the project directory, run npm install to install the necessary dependencies
Create a new Firebase project and set up Firestore as the database
In the Firebase console, go to Project Settings and add a web app to the project
Copy the Firebase config values and paste them into the firebase.js file in the project directory
In the Firebase console, create a new collection called drones and add a document with a unique ID (e.g. drone1)
Add a coords field to the document and set it to an object containing the initial coordinates of the drone (e.g. { lat: 51.505, lng: -0.09 })
In the project directory, run npm start to start the app
Open http://localhost:3000 to view the app in the browser.

---

Usage
The app displays a Google Map with three markers: Guy's Hospital, St Thomas' Hospital, and a drone marker. The drone marker updates in real-time based on the coordinates stored in the Firestore database.

To use the app, you can move the drone manually in the Firestore database by changing the coords field of the document corresponding to the drone (e.g. drones/drone1). The map will update in real-time to reflect the new coordinates.

---

Dependencies
This app uses the following dependencies:

React - a JavaScript library for building user interfaces
Google Maps Platform - a set of APIs and SDKs for maps and location-based services
Firebase - a mobile and web application development platform by Google
Google Map React - a library for using Google Maps in React
React Bootstrap - a library of reusable UI components for React
Typescript - for the Markers

---

Future Improvements (Other than making it work!)
Here are some potential improvements to this app:

Add multiple drones to the map
Allow users to add and remove drones from the Firestore database
Display more information about the drone (e.g. altitude, battery level, etc.)
Add real-time tracking of the user's location using the browser's geolocation API.
