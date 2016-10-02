# Blinking LED a led with Johnny-Five

In this example we will make a LED blink with Johnny-Five on an Photon. First we will need to connect the LED to the Arduino.
The Photon has multiple pins that can send and receive electric current.
In this example we use pin "D7" and the GND pin.
The digital pin "D7" allows us to turn the current on or off.
The ground (GND) pin receives the current.
See the diagram bellow to see how this should be done.

![Led](https://raw.githubusercontent.com/BEKK-IoT/getting-started/master/fritzing/task1_bb.jpg)


The LED has a positive (+) and a negative (-) side. The slightly crooked/longer pin is the positive one.
Current flows from positive to negative. This means that you should connect the Photon voltage pin (pin D7) to the positive
end of the LED. The negative end should be connected to ground (GND).
If the LED doesn't work, you probably have connected it the wrong way. Try to flip it around.


When everything is connected it's time to start coding:


```js
// Import the Johnny-five library
import { five } from 'devices-core';
import Particle from 'particle-io';

// Create a representation of the micro-controller board
const board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

// Wait for the board to get ready before we do anything
board.on("ready", function() {
  // Tell johnny-five that we have a LED connected on port D7
  const led = new five.Led("D7");
  // Interact with the LED
  led.blink(500);
});
```

Run the code:

```sh
npm run app
```

` `

The LED API contains functionality for controlling the brightness, fading, toggling and so on.
The API reference can be found [here](https://github.com/rwaldron/johnny-five/wiki/Led).

If it didn't work as expected, maybe something went wrong along the way?
Double check your code and Photon connection, maybe the LED is connected the wrong way?
If you are stuck, let us know!
