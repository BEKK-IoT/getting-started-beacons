# Beacons with node (computer)

This is a node-project to get you started working with beacons.
Your computer has bluetooth and is recessive for beacons.
This project comes with two library dependencies: Firebase and Beacon.
Beacon is a forked node library from [Bleacon](https://github.com/sandeepmistry/node-bleacon).
We have included support for reading sensor data by incorporating [estimote specs](https://github.com/Estimote/estimote-specs).

![Computer](static/img/gadget/computer.png)



## Setup

```
git clone  https://github.com/BEKK-IoT/Beacon.git
cd Beacon
npm install
npm run app

```

` `

## Firebase

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

` `

## Beacon API

` `

```javascript
import { Beacon } from 'beacon';
```

` `

#### Start advertising

` `

"Create" an iBeacon

```javascript
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; //  (measured RSSI at 1 meter)

Beacon.startAdvertising(uuid, major, minor, measuredPower);
```

` `

#### Stop advertising

` `

Stop your iBeacon

```javascript
Beacon.stopAdvertising();
```

` `

#### Start scanning

` `

```javascript
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535

Beacon.startScanning([uuid], [major], [minor]);
```

` `

Examples

```javascript
// scan for any beacons
Beacon.startScanning();

// scan for beacons with a particular uuid
Beacon.startScanning(uuid);

// scan for beacons with a particular uuid and major
Beacon.startScanning(uuid, major);

// scan for beacons with a particular uuid. major, and minor
Beacon.startScanning(uuid, major, minor);  
```

` `

#### Stop scanning

` `

```javascript
Beacon.stopScanning();
```

` `

#### Events

` `

`Discover`

` `

```javascript
Bleacon.on('discover', function(bleacon) {
    // ...
});
```

` `

 * uuid
   * advertised uuid
 * major
   * advertised major
 * minor
   * advertised minor
 * measuredPower
   * advertised measured RSSI at 1 meter away
 * rssi
   * current RSSI
 * accuracy
   * +/- meters, based on measuredPower and RSSI
 * proximity
   * current proximity ('unknown', 'immediate', 'near', or 'far')

` `

`Telemetry data`

` `

```javascript
Bleacon.on('telemetrydata', function(telemetrydata) {
    // ...
});
```

` `

Due limited size on package, telemetry data is seperated in two packages.

Package A:

 * shortIdentifier
   * The short identifier of the beacons
 * protocolVersion
   * protocol version of service, our beacons use protocol 1
 * acceleration
   * acceleration of the beacon
 * isMoving
   * bool
 * motionStateDuration
   * duration of current and previous motion state.
 * gpio
    * status on state on pins: high or low
 * pressure
    * not supported by our beacons
 * errors
    * clock or firmware errors

` `

Package B:

 * shortIdentifier
   * the short identifier of the beacons
 * protocolVersion
   * protocol version of service, our beacons use protocol 1
 * magneticField
   * not supported by our beacons
 * ambientLightLevel
   * ambient light in the room
 * temperature
   * temperature in the room
 * uptime
    * how long the beacon has been active
 * batteryVoltage
    * battery voltage
 * batteryLevel
    * % battery left
 * errors
    * clock or firmware errors
