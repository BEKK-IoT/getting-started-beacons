# Faking a Beacon.

We can emulate beacons with our computer or mobile phones. We can do that with the Beacon module. You have to send 4 parameters:

` `

- uuid: Universally unique identifier
- major, minor: Major and Minor values are numbers assigned to your iBeacons, in order to identify them with greater accuracy than using UUID alone.
- measuredPower: advertised measured RSSI at 1 meter away

` `

| Hexadecimal value 	| TX Power level  |	Decimal value  |	RSSI @ 1 metre   |	Range (metres)  |
| ----------------- |:--------------:| :-------------:| :--------------:| --------------:|
| e2	| 0	| -30 dBm	| -115 dBm |	2 |
| ec	| 1 |	-20 dBm |	-84 dBm |	4 |
| f0  | 2 |	-16 dBm |	-81 dBm |	10 |
| f42	| 3	| -12 dBm |	-77 dBm |	20 |
| f8	| 4	| -8 dBm |	-72 dBm |	30 |
| fc	| 5	| -4 dBm |	-69 dBm |	40 |
| 00	| 6	| 0 dBm |	-65 dBm |	60 |
| 04	| 7	| 4 dBm |	-59 dBm |	70 |

` `

## Create beacon

```
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; //  (measured RSSI at 1 meter)

Beacon.startAdvertising(uuid, major, minor, measuredPower);

```

## Stop beacon

```
Beacon.stopAdvertising();
```

### Task

Create a fake beacon. Validate with a phone app (exampler: estimote) or your own beacon scanner.