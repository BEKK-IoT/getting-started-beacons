# The Epic button!

![Button](http://johnny-five.io/img/breadboard/button.png)

Example usage of button


```js
import { five } from 'devices-core';
const board = new five.Board();

board.on("ready", function() {
  button = new five.Button(2);

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

- Send an "greet" event with msg "hello" to another team when pressing the button the first time.
- Send an "greet" event with msg "bye" to another team when pressing the button the second time.
