# Control a LED with the Light sensor

Now, it's time to try doing things on your own. Use the code you have written in the previous tasks to complete this task. The goal is to turn a LED 'off' when the light is bright and 'on' when the light is dim.

![Photoresistor](http://johnny-five.io/img/breadboard/photoresistor.png)
![Led](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_bb.png)


Start with creating a LED and photoresistor. First, use the data from your photoresistor to turn the LED on and off. Then use values from another group to do the same.

Remember:
- You have to send data to firebase for other groups to read them
- 0 = dark, 1024 = light


```js
import { firebase, five } from 'devices-core';
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

    //TODO: Create a photoresitor
    //TODO: Create a LED

    photoresistor.on("data", function() {
       //TODO: Turn LED 'on', on low values and 'off' on high values
    });

    //TODO: Use data from another group through
    //      firebase to control your LED. 
});
```
