## Example: Blinking LED

` `

```js
import { firebase, five } from 'devices-core';
const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on("ready", function() {
  //use pin 13 for the LED
  const led = new five.Led(13);

  // Send a greet event to firebase
  fb.send('greet', {name: 'world'});

  // Wait for a greet event from firebase to turn the led on
  fb.on('greet', `users/${TEAM}`, () => led.on());

});
```
