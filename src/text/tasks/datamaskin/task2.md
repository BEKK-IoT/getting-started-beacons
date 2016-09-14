# Controlling the lamp

It's now time to do something exciting. We are going to use our device to control something in the real world.
We are now going to use a button with the Arduino to control a lamp.

The diagram below shows how we can connect a button to the Arduino.

![Button](http://johnny-five.io/img/breadboard/button.png)

The button works as a switch. The Arduion is contansly sending electricity to the button while listening on the connected pin 2 for a completed circut. When the button is pressed the circut is completed and the Arduino will pick up on it.


The code below shows how to take advantage of the connection above.

```js
// Import the Johnny-five and Firebase library
import { firebase, five } from 'devices-core';

// set a team name
const TEAM = 'team-unicorns';

//connect to firebase with your team name
const fb = new firebase(TEAM);

//setup the board
const board = new five.Board();

//wait for the board to be ready
board.on('ready', function() {
  // Create a representation of a button
  const button = new five.Button(2);

  // The button is pressed
  button.on('down', function() {
    // Turn the lamp on through Firebase
    fb.send('switch', true, 'gadgets/lamp');
  });

  // The button is released
  button.on('up', function() {
    // Turn the lamp off through Firebase
    fb.send('switch', false, 'gadgets/lamp');
  });
});
```


Run the code:

```sh
npm run app
```
