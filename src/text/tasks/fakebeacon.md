# Faking a iBeacon - *Node only*

It is possible to emulate beacons with Node. These 4 parameters are required:

` `

- __UUID:__ Universally unique identifier, usually set by the manufacturer.
- __Major and Minor:__ Major and Minor values are numbers assigned to your iBeacons in order to identify them with greater accuracy than using UUID alone. These are usually set by the owner.
- __measuredPower:__ Advertised measured RSSI(signal power) at 1 meter away. Together with RSSI, this value is used to estimate the distance to the Beacon. Use the following table for an example on how far your distance will be when setting the measuredPower:

` `

| Measured Power - > |	Range (ca meters)  |
| --------------: |:---------------:|
| -115 dBm |	2 |
| -84 dBm  |	4 |
| -81 dBm  |	10 |
| -77 dBm  |	20 |
| -72 dBm  |	30 |
| -69 dBm  |	40 |
| -65 dBm  |	60 |
| -59 dBm  |	70 |

` `

## Task

Create a fake iBeacon. Validate with a phone app (example: estimote) or your own beacon scanner.
