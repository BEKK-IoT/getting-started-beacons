## Getting familiar with the libraries


Firebase is a cloud-database with a very neat API that makes it easy to share and store data.


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
