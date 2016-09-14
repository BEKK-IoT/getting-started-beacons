# The Awsome potentiometer!

![Potentiometer](http://johnny-five.io/img/breadboard/potentiometer.png)

Example usage of Potentiometer code


```js
import { five } from 'devices-core';
const board = new five.Board();

board.on("ready", function() {
  // Create a new `potentiometer` hardware instance.
  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
    console.log(this.value, this.raw);
  });
});
```

` `

- Potentiometer returns values from the range 0-1024. Use the value to control the RGB light range for the Sphero.
