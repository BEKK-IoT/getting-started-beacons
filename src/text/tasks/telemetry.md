# Beacons and telemetry data. (Node only)

In addition to the normal packages beacons emits, the Beacons emits packages with data from build in sensors. Location Beacons also have an gpio (genral pin input output) which can be used to read from other sensors or control other devices.

You can access sensor data in two different ways. The first one is by pairing with the Beacon.
When connected to the beacon, you get access to an API.

The connection requirement can be a problem because: You can only have one connection to the beacon at a time. Connecting to the beacon requires you to be pretty close to it (up to a few meters), even if the beacon's advertising range is tens of meters.
In "old" Proximity Beacons (hardware revision "D"), beacon stops broadcasting its iBeacon/Eddystone packets when connected to.
With the new Location Beacons (hardware revision "F") and Proximity Beacons (hardware revision "G"), you can instead enable Estimote Telemetry packet, which contains motion status; no need to connect.

Unfortunately, we only have the old Proximity Beacons, but you can access the telemetry packages for the Location beacons.

## Location beacon sensors

- motion
- temperature
- ambient light
- magnetometer

## Proximity beacons sensors

- motion
- temperature

## Prerequisites

- Location (hardware revision “F”) or next-generation Proximity (hardware revision “G”) Beacons.
- iOS or Android device with Bluetooth 4.0 support.

## Telemetry packages

Packest from the Estimote family (Telemetry, Connectivity, etc.) are broadcast as Service Data with the Service UUID 'fe9a'.

## Tasks

### Task 1

Read sensors data from telemetry package.

### Task 2

Send temperature data to firebase

### Task 3

Use light sensor data to on the light using firebase or ifttt

### Task 4

Check if the beacons is in motion. (Do something)
