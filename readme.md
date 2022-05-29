### Auto Messenger [AM]
AM sends scheduled messages to any number of recipients on WhatsApp via the Web interface. 

The idea was to find a easier way to send repeated messages to contact list using the barest minimum native code as possible. 

### Stack
- Node and JS
- Playwright

### Setup
- Clone project
- Install dependencies `npm install`
- Configure time and message settings in `/index.js` 
    - WIP: This will be abstracted to a UI step in future updates 
- Run `npm run setup` to configure and sign into WhatsApp Web
- Run `npm start` to start the app in background

