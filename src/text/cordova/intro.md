# Cordova - Mobile

This tutorial shows how to create and build native mobile apps in Javascript, HTML and CSS using [Apache Cordova](https://cordova.apache.org/). So lets started.

![Android](static/img/gadget/android.png)
![Iphone](static/img/gadget/iphone.png)

## Installation
Clone and build the start template project. This project contains the code for a simple starting template. It contains the necessary setup for creating native iBeacon apps in Android and IOS.

```sh
git clone https://github.com/BEKK-IoT/beacon-cordova.git
cd beacon-cordova/www/
npm install
gulp build
```

` `

The www/ folder contains the HTML, CSS and Javascript code Cordova uses to run your app.

` `

You can set the system to automatically build changes by using:
```sh
gulp watch
```

` `

## Setup
There is two main ways you can build and play around with the template in IOS or Android. You can either install Cordova and get it to run the app natively, or you can use the Evothings ecosystem which allows you to install and run your app through their system. You can of course use both. We recommend using the Evothings ecosystem as it allows for a quicker workflow. You must use Cordova natively if you want to publish you app, but it is not required for this workshop.


#### Cordova
You can skip this step if you don't want to try to run the app natively on your phone.

1. Install Cordova
```sh
npm install -g cordova
```

` `

2. Install the mobile platforms you wish to develop for by following the guides provided. It should also be possible to run the app in the emulator.
    - [Android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
    - [iOS](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)

` `

3. You can check if the installation finished correctly by using the following command
```sh
cordova requirements
```

` `

4. You build the code with
```sh
cordova build <platform name>
```

` `

5. You can run and build the code with
```sh
cordova run <platform name>
```

` `

#### Evothings ecosystem
Evothings is a mobile platform enabler for building internet of things (IoT) applications. The system contains two main parts, a mobile app and the Evothings studio. The Evothings studio works as a server and the mobile app as the viewer. Your code is served by the Evothigns studio and runned on the mobile apps connected to the studio. When your code changes, the Evothings studio automatically detects and refreshes the code changes on the mobile viewers. The Evothings studio should already be installed on your machine. The mobile app can found at:
  - [Android](https://play.google.com/store/apps/details?id=com.evothings.evothingsviewer)
  - [iOS](https://itunes.apple.com/se/app/evothings-viewer/id1029452707?mt=8)

` `

` `

### Using Evothings:
  - Start Evothings Studio.
  - Launch Evothings App on your mobile
  - Get a connect code in the Studio by clicking "Get Code" under the "Connect" tab.
  - Input the connect code in the mobile app
  - In the studio change the tab to "Examples" and push run on the Hello World app. You should now see the the Hello World app running on your mobile.
  - To insert your own app into the Studio. Change the tab to "My Apps" and drag and drop your application (this template www/ folder) into the tab. You should now be able to run your app through the studio.

` `

## API Documentation
Basic code examples on how to do the different things with Cordova.

#### Beacon Ranging

` `

### Setup ranging
```js
var delegate = new cordova.plugins.locationManager.Delegate();

// Set the delegate object to use.
cordova.plugins.locationManager.setDelegate(delegate);

// This is needed on iOS 8.
cordova.plugins.locationManager.requestAlwaysAuthorization();

const estimoteUUID = "B9407F30-F5F8-466E-AFF9-25556B57FE6D";
var beaconRegion = new cordova.plugins.locationManager
        .BeaconRegion(
          'identifier',
          estimoteUUID);

// Start ranging.
cordova.plugins.locationManager
  .startRangingBeaconsInRegion(beaconRegion)
	.fail(console.error)
	.done();

```

### Get ranging result
```js

// Called continuously when ranging beacons.
delegate.didRangeBeaconsInRegion = function(result){
  //result contains beacons found:
  /*
  result : {
    beacons: {
        major: xxxx,
        minor: xxxx,
        proximity: "enum: how far away",
        accuracy: Distance in meters away
      }
   }
  */
}
```          

` `

#### Beacon monitoring

` `

### Setup monitoring
```js
var delegate = new cordova.plugins.locationManager.Delegate();

// Set the delegate object to use.
cordova.plugins.locationManager.setDelegate(delegate);

// This is needed on iOS 8.
cordova.plugins.locationManager.requestAlwaysAuthorization();

const estimoteUUID = "B9407F30-F5F8-466E-AFF9-25556B57FE6D";
var beaconRegion = new cordova.plugins.locationManager
  .BeaconRegion(
    'identifier',
    estimoteUUID);

// Start monitoring.
cordova.plugins.locationManager
  .startMonitoringForRegion(beaconRegion)
	.fail(console.error)
	.done();
```

` `

#### Get monitoring result
```js
// Called when starting to monitor a region.
delegate.didStartMonitoringForRegion = function(result){
  //maybe do something
};

delegate.didDetermineStateForRegion = function(result){
  if (result.region.typeName == 'BeaconRegion' &&
    result.state == 'CLRegionStateInside'){
      //Entered beacon region
      //Do something here
  }
};
```

` `

#### Mobile notifications
```js
cordova.plugins.notification.local.schedule({
  id: 0, //Some unique int here
  title: 'title',
  text: 'description'
});
```

## Firebase

[Firebase](https://www.firebase.com/docs/) is a realtime cloud database which allows you to store and synchronize data.


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

Register beacon with firebase:

``` js
// Listen for your teams greet event and log the msg
fb.foundBeacon( {
  minor : 1234,
  proximity : "near"
});
