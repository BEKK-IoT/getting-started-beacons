# If this than that - ![Logo](https://assets.ifttt.com/assets/v2/ifttt-logo-1d341126b2a8e80318c2a5ef64e7cb1c.svg)
` `
Ifttt is a platform where you can connect different applications using recipes. There are two types of Recipes: DO Recipes and IF Recipes. We are going to focus on the IF Recipes, but feel free to experiment with the DO recipes. An IF Recipe takes an input (this) which trigger an action (that) - If *this* then *that*.To get started you you have to register an account [here](https://ifttt.com/join).

` `
## Task1
We are going to create a recipe to get to know the platform better. Click on `my recipes` then on the `Create a recipe` button. Click on `this` then choose a trigger. If you cant find anything you like, try `weather` and choose `Today's weather report`. Select a time near now. Then click on `that` and select an action. For example, you can try `google drive` and `Add row to spreadsheet`. When you are finished validate your recipe.

` `
## Task2
Task1 was fun, but did not involve any beacons. Since there is no support for Estimote beacons, we have to make the trigger by ourselves. Ifttt has its own maker trigger and action. To setup ifttt maker go to the [maker page](https://ifttt.com/maker). Click on the `How to trigger Events` link to read how to trigger events on your account.
Then create a new recipe with `maker` as trigger and an action of your choice. Use data from beacons to trigger the maker event.

` `
### Possible recipes:
- If you enter near a beacon, log the time to spreadsheet. When you leave, log the time you are leaving.
- If you enter near a beacon, mute your phone. When you leave, unmute your phone.
- If you leave a beacon, send a message to somebody.
- If the beacon is moving, send a mail to yourself.

` `
## Example trigger

```js

fetch('https://maker.ifttt.com/trigger/{eventname}/with/key/{key}', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    value1: '1',
    value2: '2',
    value3: '3'
  })
})

```
