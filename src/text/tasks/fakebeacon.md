# Faking a iBeacon.

We can emulate beacons with our computer or mobile phones.  You have to send 4 parameters:

` `

- uuid: Universally unique identifier
- major, minor: Major and Minor values are numbers assigned to your iBeacons, in order to identify them with greater accuracy than using UUID alone.
- measuredPower: advertised measured RSSI at 1 meter away

` `

| Hexadecimal value  -   | TX Power level  -    |	Decimal value -    |	RSSI @ 1 metre -   |	Range (metres)  |
| :---------------- |:--------------:| :-------------:| :--------------:| --------------:|
| e2	| 0	| -30 dBm	| -115 dBm |	2 |
| ec	| 1 |	-20 dBm |	-84 dBm |	4 |
| f0  | 2 |	-16 dBm |	-81 dBm |	10 |
| f42	| 3	| -12 dBm |	-77 dBm |	20 |
| f8	| 4	| -8 dBm |	-72 dBm |	30 |
| fc	| 5	| -4 dBm |	-69 dBm |	40 |
| 00	| 6	| 0 dBm |	-65 dBm |	60 |
| 04	| 7	| 4 dBm |	-59 dBm |	70 |

` `

## Task

Create a fake iBeacon. Validate with a phone app (example: estimote) or your own beacon scanner.
