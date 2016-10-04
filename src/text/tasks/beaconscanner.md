# Beacon scanner

Now, we are going to listen to all the beacons in the room. The Beacon module includes a parser which parses Estimote iBeacons.

` `

After 9 bytes of constant preamble, the Proximity UUID, Major and Minor values are transmitted.

UUID is 16 bytes long, Major and Minor are 2 bytes long. Together they form an ID for your iBeacon. Mobile devices recognize which Beacon they approach on the basis of these values.

The final byte is the packet is used to calculate distance from the iBeacon. It represents measuredPower which is transmission power for the iBeacon. Together with the  RSSI value (Received Signal Strength Indication) measured at 1 meter from the iBeacon, the Beacon API calculates the accuracy(distance) and the proximity of the beacon.

## The formula for distance

The most accurate predictor of distance based on signal strength (RSSI) can be obtained by doing a power regression against a known table of distance/RSSI values for a specific device.
Here is the formula used in the node API to calculate the accuracy(distance):

`var accuracy = Math.pow(12.0, 1.5 * ((rssi / measuredPower) - 1));`

## Proximity zones

iBeacon defines four proximity zones for estimating distance to a beacon:
- immediate (very close to the beacon)
- near (about 1-3 m from the beacon)
- far (further away or the signal is fluctuating too much to make a better estimate)
- unknown

## Tasks

- Log beacons to the console when they  are discovered
- Listen to one particular beacon.
