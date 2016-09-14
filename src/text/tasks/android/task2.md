# Controlling the lamp

It's now time to do something exciting. We are going to use our device to control something in the real world.
We are now going to use a button with the Arduino to control a lamp.

The diagram below shows how we can connect a button to the Arduino.

![Button](https://raw.githubusercontent.com/BEKK-IoT/getting-started/master/fritzing/task2_bb.jpg)

The button works as a switch. The Arduion is contansly sending electricity to the button while listening on the connected pin 2 for a completed circut. When the button is pressed the circut is completed and the Arduino will pick up on it.


The code below shows how to take advantage of the connection above.

```js
// Import the Johnny-five and Firebase library
import { firebase, five } from 'devices-core';
import Particle from 'particle-io';

// set a team name
const TEAM = 'team-unicorns';

//connect to firebase with your team name
const fb = new firebase(TEAM);

// Create a representation of the micro-controller board
const board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

//wait for the board to be ready
board.on('ready', function() {

  let toggle = false;

  // Create a representation of a button
  const button = new five.Button('D2');

  // The button is pressed
  // Photon register both up and down as an up-event.
  button.on('up', function() {
    // Toggle lamp through Firebase
    toggle = !toggle;
    fb.send('switch', toggle, 'gadgets/lamp');
  });
});
```


Run the code:

```sh
npm run app
```
