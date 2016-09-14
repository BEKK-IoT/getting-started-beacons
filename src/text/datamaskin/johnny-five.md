### Johnny-Five
[Johnny-Five](http://johnny-five.io/api/) is a JavaScript Robotics programming framework.
It allows users to control a bunch of different micro-controllers through JavaScript from their own computers.

To use our Johnny-Five wrapper include the **five** module from the **devices-core**. The following example shows how to make a LED blink:


```js
import { five } from 'devices-core';
const board = new five.Board();

board.on("ready", function() {
  const led = new five.Led(11);
  led.blink(500);
});
```
