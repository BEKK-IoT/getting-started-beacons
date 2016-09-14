# Multi-colored LED light

![Button](https://learn.adafruit.com/system/assets/assets/000/013/714/medium640/leds_Ring12.jpg)

So far we have controlled a single light with a single color.
We are now going to control multiple multi-colored LEDs 
and use RGB values to control the color of the lights.
To see how RGB colors work check out the [Adobe Color Picker](https://color.adobe.com/).


## API

The API accepts a list of light-objects.
Each light-object has an id and the RGB colors.
The data format for one light is `[id, r, g, b]`,
so to change the second light to blue you would write
`[2, 0, 0, 255]`. 
To change both the second and fifth light to red you
would write `[[2, 255, 0, 0], [5, 255, 0, 0]]`.



Changing color of a single light:

```
fb.send('light', [[1, 20, 230, 40]], 'gadgets/neopixel');
```


` `


Changing color of multiple lights (up to a max of 15):

```
fb.send('light', [[1, 255, 0, 30], [2, 0, 70, 0]], 'gadgets/neopixel');
```


` `

Full example


```
import { firebase, five } from 'devices-core';
const TEAM = 'team-unicorns';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on('ready', function() {
    fb.send('light', [[1, 40, 40, 233]], 'gadgets/neopixel');
});
```

` `

## Tasks 

```
import { firebase, five } from 'devices-core';
const TEAM = 'team-unicorns';
const fb = new firebase(TEAM);
const board = new five.Board();

board.on('ready', function() {

  // TODO: Make a light blink 

  // TODO: Turn five lights on

  // TODO: Create a rainbow
  
  // TODO: Make a loop that turns on one and one light,
  //       going from light #1 to light #60.


});
```

