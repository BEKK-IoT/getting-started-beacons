# Beacons and telemetry data - *Node only*

There exists newer beacons that can emit packages with extra data from build-in sensors. One of these types are named Location Beacons.

You can access sensor data in two different ways. The first one is by pairing with the Beacon. With the new Location Beacons you can also scan for Estimote Telemetry packet, no need to connect.

Unfortunately, we mostly have the old type of beacons, but we do have a pair of the new Location beacons with us.

` `

## Location beacon sensors

- motion
- accelerometer
- temperature
- ambient light

` `

## Tasks

1. Read sensors data from telemetry package.

2. Send temperature data to firebase

3. Use light sensor data to turn on the lamp using firebase

4. Check if the beacons is in motion. (Do something)
