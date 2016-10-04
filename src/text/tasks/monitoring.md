# Monitor a beacon region - *Cordova only*

Apps can interact with beacons in two ways: Monitoring and Ranging.
Monitoring allows you to scan for beacon regions, while Ranging is for interacting
with individual beacons. This task address the Monitoring aspect.

Monitoring a region enables your app to know when a device enters or exits the
defined beacons regions, and works no matter whether the app is running,
suspended, or killed. An app monitoring a beacon region will automatically trigger
either an "enter" or "exit" actions when the device enters or leaves the different beacon regions.

## Tasks:
  1. Monitor a specific beacon region. Pick a single beacon to monitor. Log the
  different actions to the console.

  2. Add a mobile notifications to your monitor app. Can you get a notification when
  you enter the region and remove it when you leave ? Can you only show notification when the
  application is running in the background?

  3. Use the monitor event for something useful. Light the lamp when in entering the region
  and turn it off when leaving.
