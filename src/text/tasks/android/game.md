# Control the game

In this task you are going to control the player on the dashboard game by using a joystick.
Connect the joystick using the diagram below.

![Joystick](https://raw.githubusercontent.com/rwaldron/johnny-five/master/docs/breadboard/joystick-sparkfun.png)

How to initiate the joystick

```js
let joystick = new five.Joystick({
  pins: ["A0", "A1"], 
  invertY: true
});
```
` `

Values that can be read

```js
    1
1   *  -1
   -1  
```
` `

Joystick Events
- change: The "change" event is emitted whenever the value of an axis changes.
- data: The "data" event is fired as frequently as the user defined freq will allow in milliseconds.

` `

How to control the player through firebase

```js
//This moves the character left
fb.send('move', 'left', 'gadgets/game');
//Move him up right/left?
fb.send('move', 'upright', 'gadgets/game'); 
//Other ways to move are, right and upleft. So left, right, upright, upleft
```

` `


Use what you have learned in the previous exercies and the information above to control the player on the dashboard game.


```js
import { firebase, five } from 'devices-core';
import { five } from 'devices-core';
import Particle from 'particle-io';

const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);

const board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

board.on("ready", function() {

    //TODO: Create potentiomet + button / joystick (input)

    //TODO: Read data from input

    //TODO: Send input data to game
});
```