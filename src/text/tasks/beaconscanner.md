# Beacon scanner

Now, we are going to listen to all the beacons in the room. The Beacon module includes a parser which parses Estimote iBeacons and telemetry data.

` `

## Start scanning

```
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535

Beacon.startScanning([uuid], [major], [minor]);

```

` `

### Examples

```
Beacon.startScanning(); // scan for any bleacons

Beacon.startScanning(uuid); // scan for bleacons with a particular uuid

Beacon.startScanning(uuid, major); // scan for bleacons with a particular uuid and major

Beacon.startScanning(uuid, major, minor); // scan for bleacons with a particular uuid. major, and minor

```

` `

## Stop startScanning

```
Beacon.stopScanning();
```

` `

## Listen to discovery of beacons

```
Beacon.on('discover', function(beacon) {
    // ...
});
```

` ``

## Tasks

- Log beacons to the console when they  are discovered
- Listen to one particular beacon.
