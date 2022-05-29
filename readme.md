# Auto Messenger [AM]

AM sends scheduled messages to any number of recipients on WhatsApp via the Web interface.

The idea was to find a easier way to send repeated messages to contact list using as little external dependencies as possible.

#### Approach

At 60 seconds intervals, a message queuer checks the time threshold for all message jobs in an array of objects, if a time match is found between current time and message trigger time, a messenger function is called which runs required UI process for sending a chat message.

- This flow requires an existing chat with the recipient
    - Intended changes on [Issue 3](https://github.com/chrisenitan/autoMessenger/issues/3)

### Stack

- [Node](https://github.com/nodejs/node) and Javascript
- [Playwright](https://github.com/microsoft/playwright)

### Setup

- Clone project
- Install dependencies `npm install`
- Configure time and message settings in `/index.js`
  - WIP: This will be abstracted to a UI step in future updates
- Run `npm run setup` to configure and sign into WhatsApp Web
- Run `npm start` to start the app in background
