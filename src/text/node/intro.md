# Firebase localhost og cloud host

Firebase is a really get started fast hosting and data service from Google.
Follow these steps to get started quickly

![Computer](https://blog.raananweber.com/content/images/2016/07/logo_lockup_firebase_horizontal_wht.png)
` `
## Setup
` `
```sh
npm install -g firebase
firebase login
```
` `
## Get template
` `
Go clone code from: [https://github.com/BEKK-IoT/NTNU-firebase](https://github.com/BEKK-IoT/NTNU-firebase)

Go into the folder

` `
## Init Firebase
` `

```sh
firebase init
```
#
* Choose "Hosting"
* Choose "Set up a new project"
* Use default database rule file.
* Your public directory should be: ./
* Dont configure as single page app
* Dont overwrite index.html
* Follow instructions on creating a project through their google console!
#


## Host locally
#
Just run:

```sh
firebase serve
```
#
You will see two gauges!


## Host in the cloud
#
Just run:

```sh
firebase deploy
```
