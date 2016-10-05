# Beacons with node (computer)

This is a node-project to get you started working with beacons.
Your computer has bluetooth and is recessive for beacons.
This project comes with two library dependencies: Firebase and Beacon.
Beacon is a forked node library from [Bleacon](https://github.com/sandeepmistry/node-bleacon).
We have included support for reading sensor data by incorporating [estimote specs](https://github.com/Estimote/estimote-specs).

![Computer](static/img/gadget/computer.png)



## Setup

```sh
git clone https://github.com/BEKK-IoT/beacon-node.git
cd beacon-node
npm install
npm run app
```

` `

## Beacon API

` `

```js
import { beacon } from 'beacon';
```

` `

#### Start advertising

` `

"Create" an iBeacon

```js
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; //  (measured RSSI at 1 meter)

beacon.startAdvertising(uuid, major, minor, measuredPower);
```

` `

#### Stop advertising

` `

Stop your iBeacon

```js
beacon.stopAdvertising();
```

` `

#### Start scanning (Ranging)

` `

```js
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535

beacon.startScanning([uuid], [major], [minor]);
```

` `

Examples

```js
// scan for any beacons
beacon.startScanning();

// scan for beacons with a particular uuid
beacon.startScanning(uuid);

// scan for beacons with a particular uuid and major
beacon.startScanning(uuid, major);

// scan for beacons with a particular uuid. major, and minor
beacon.startScanning(uuid, major, minor);  
```

` `

#### Stop scanning (Ranging)

` `

```js
beacon.stopScanning();
```

` `

#### Events

` `

`Discover`

` `

```js
beacon.on('discover', function(beacon) {
    /* beacon contains the following data
    uuid          :  advertised uuid,
    major         :  advertised major
    minor         :  advertised minor
    measuredPower :  advertised measured RSSI at 1 meter away
    rssi          :  current RSSI
    accuracy      :  ca meters, based on measuredPower and RSSI
    proximity     :  current proximity
                     ('unknown', 'immediate', 'near', or 'far')
    */
});
```

` `

`Telemetry data`

` `

```js
bleacon.on('telemetrydata', function(telemetrydata) {


  /*
    Due limited size on package, telemetry data is separated
    in two packages. Package A and Package B.
  */

  /* telemetrydata of Package A contains:
  shortIdentifier     : The short identifier of the beacons
  package             : A or B
  acceleration        : acceleration of the beacon
  isMoving            : bool
  motionStateDuration : duration of the current and previous
                        movement.
  gpio                : status on state on pins: high or low
  errors              : clock or firmware errors
  */


  /* telemetrydata of Package B contains:
  shortIdentifier     : The short identifier of the beacons
  package             : A or B
  temperature         : temperature in the room
  ambientLightLevel   : ambient light in the room
  uptime              : how long the beacon has been active
  batteryVoltage      : battery voltage
  batteryLevel        : battery left
  errors              : clock or firmware errors
  */
});
```

` `

## Firebase

[Firebase](https://www.firebase.com/docs/) is a realtime cloud database which allows you to store and synchronize data.


In the following code example we use Firebase to send and receive events.

``` js
// Import the Firebase library
import { firebase } from 'devices-core-firebase';

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

` `

Register beacon with firebase:

``` js
// Listen for your teams greet event and log the msg
fb.foundBeacon( {
  minor : 1234,
  proximity : "near"
});
```


` `
