# The awesome button!

![Button](http://johnny-five.io/img/breadboard/button.png)

Example code to control the button

```js
import { five } from 'devices-core';
import Particle from 'particle-io'

const board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

board.on("ready", function() {
  button = new five.Button('D2');

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
  });
});
```

` `

- Try to turn on/off the lamp with the button.

_Hint:_
Check how to talk to the lamp under tasks
