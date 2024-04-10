# SilentGuardApp
Example companion app for BME 261L semester project. Provides a way for user to track audio events while wearing the device. Device is an assistance device designed to help deaf people detect danger through vibrations where normal-hearing people would usually get alerted through sound. The device transmits audio data to the phone app which holds a machine learning model to analyze and categorize real-time audio data. The ML model will alert the device of any dangerous sounds and record the event in history. This app provides users with records of audio events, customization of the device, and the ability to pull the latest model hosted on a cloud service provider.

## Requirements for developers
Must have Node.js installed (v20.12.1)  
Must have React installed  
`npm install -g create-react-app`  
Must have expo installed  
`npm install expo`  
Must have Material UI installed  
`npm install @mui/material @emotion/react @emotion/styled`  
Android Studio installed to emulate android  

##
In order to view the app while developing, the developer must have run the app on their local machine using `npm start`. This allows anychanges to appear on the app after every local save. `npm install` to install all current dependencies

## Interactions with Device
Changing the state of the settings should send values to the Arduino listening through bluetooth. Implementation of vibration patterns and intensity is done on the device side. Update model would send a Request to server to update but has timeout as a placeholder. Any events flagged by the machine learning model should populate the table in the notifications tab. Dummy data as placeholder currently.