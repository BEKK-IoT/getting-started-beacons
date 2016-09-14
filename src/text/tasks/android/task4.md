# Light sensor

In this example we are going to read values from a photoresistor.
A photoresistor messures light intensity. It reads values between 0 and 1024,
where 0 is darkness and 1024 is very bright.
See how to connect the photoresistor sensor on the diagram bellow.

![Photoresistor](https://raw.githubusercontent.com/BEKK-IoT/getting-started/master/fritzing/task4_bb.jpg)


We create the board and firebase object(fb) as usual. Then we create a new `photoresistor`, so that we can read data from the sensor by listening to the data event.

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
  // Create a new `photoresistor`
  let photoresistor = new five.Sensor({
    pin: "A2", //Read from pin 'A2' at a 250 ms frequency
    freq: 250
  });

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    //Write sensor values to the terminal
    console.log(this.value);
    // Send a value as an event to firebase
  	fb.send('lightvalue', this.value);
  });
});
```

Then run the code.
