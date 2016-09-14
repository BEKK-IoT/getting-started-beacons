## Getting familiar with the libraries

We are using two libraries, Johnny-five and Firebase.
Johnny-five is an abstraction that makes it easy for us to write programs for micro-controllers.
Firebase is a cloud-database with a very neat API that makes it easy to share and store data.

### Johnny-Five
[Johnny-Five](http://johnny-five.io/api/) is a JavaScript Robotics programming framework.
It allows us to control a bunch of different micro-controllers with JavaScript.

In the following code example we use Johnny-five to interact with a LED.

```js
// Import the Johnny-five library
import { five } from 'devices-core';

// Create a representation of the micro-controller board
const board = new five.Board();

// Wait for the board to get ready before we do anything
board.on("ready", function() {
  // Tell johnny-five that we have a LED connected on port 11
  const led = new five.Led(11);
  // Interact with the LED
  led.blink(500);
});
```


### Firebase

[Firebase](https://www.firebase.com/docs/) is a realtime cloud database which allows you to store and synchronize data.
What makes Firebase interesting is that it makes it really easy to synchronize data between multiple clients.

Firebase will only send new events when the content of the realtime database is changed. And the changes always overrides the older values, so it's not a database for storing history.

In the following code example we use Firebase to send and receive events.

``` js
// Import the Firebase library
import { firebase } from 'devices-core';

// Register your team name on firebase
const fb = new firebase('team-unicorns');

// Send an event from your team to firebase,
// the event name is 'greet' and the content is 'msg: world'
fb.send('greet', {msg: 'world'});

// Listen for your teams greet event and log the msg
fb.on('greet', `users/team-unicorns`, function(event) {
  console.log(`Hello, ${event.msg}!`);
});
```
