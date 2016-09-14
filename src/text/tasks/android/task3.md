# Turn on a led with a button

In the two previous tasks we have shown you how you can make a LED blink with the Arduino and how to control a lamp in the real world with the help of Firebase.

In this task we want you to use the knowledge gained from these to task to control the LED instead of the Lamp.

Below is a short template to get you started:-

```js
import { five } from 'devices-core';
import Particle from 'particle-io';

const board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

board.on("ready", function() {

  //TODO change x and y to the correct pins
  const led = new five.Led(x);
  const button = new five.Button(y);

  //TODO turn the led on when pressing the button
  //TODO turn the led off when releasing the button
});
```
` `

#### Tip:
To turn on the led use:
```js
led.on();
```

To turn off the led use:
```js
led.off();
```

` `

#### Ekstra tip:
You can get through this taks by copy pasting the code showed here and the previous two tasks.
