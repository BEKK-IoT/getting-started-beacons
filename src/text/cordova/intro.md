# Getting started with a Photon

In this tutorial we will claim a photon device, install some new software to our device and listen to
events with a small javascript program.

The first thing we need to do is to claim our Photon device. The easiest way to do this is to download the mobile app.
Follow the link for [setting up a Photon](https://docs.particle.io/guide/getting-started/start/photon/) to get started.

## Creating new software and monitoring
After we have claimed our photon we are ready to start messing with it.

* The [console](https://console.particle.io/devices) allows us to check logs and the status of our photons, and
* The [build](https://build.particle.io/) page that makes it possible to flash new software to our device.
#

With these two pages we can see the status and flash new software for our device!

## Schematic of the sample program

![Schematic](static/img/gadget/photon_button_led_bb.png)

The schematic [(large version)](static/img/gadget/photon_button_led_bb.png) shows a circuit with a button and a LED.
Our goal is to interact with the led and the button using the particle.io cloud. To do this we need to update the firmware
of our photon. We will use a JavaScript program to remotely communicate with the cloud, reading and sending events.

## Flashing our photon
The software we will be updating our photon with is a [simple program](https://github.com/veiset/hooksparticle/blob/master/build.particle.c)
that reads some digital pins and creates some events on a button press. To install the program log on to the [build](https://build.particle.io/) page
and copy the content of the program, verify it and hit the flash button.

## Reading events with JavaScript

Ok. So now we are ready to read some events with JavaScript. Head on to [https://github.com/veiset/hooksparticle](https://github.com/veiset/hooksparticle)
and clone and install the repo.

```
git clone git@github.com:veiset/hooksparticle.git
cd hooksparticle
npm install
```


Open the `main.js` file and update the following variables with your [device info](https://build.particle.io/):

```
const auth = '...';
const deviceId = '...';
```

The run the app type `node main.js`. Let the hacking begin!