# Laser Tag

Its time for a real challenge and put everything you have learned to the test. We want you to work togheter with another group and make a native laser tag application.

![Lasers](http://www.thehindu.com/multimedia/dynamic/02366/08MP_LAZERTAG1_2366457g.jpg)

One team with their Arduino will be responseable for making the laser target, while the other group will be repsonsible for making the laser pistol.

## Laser target

To make the laser target we will reuse what you have made in task 4, the Light sensor application.

When the laser hits the light sensor the value read will tell us if the laser pistol is hitting the sensor, or not. If the laster pistol is hitting the light sensor, the value read will be much higher then not hitting the sensor. Somewhere above 500 (you should probably double check this, just in case).

Whats missing is the laser target logic. You should implement the following steps:
- The laser target should wait for the laser pistol to tell that the game has started.
- The laser target should then count the amount of hits and misses while the game is running.
- When the laser pistol tells the laser target that the game is over, the final score should be sent back to the laser pistol.  

## Laser pistol

To make the laser pistol you will need a laser and a Arduino. The diagram bellow shows how the two components should be connected.

![Lasers_Pistol](https://static.bocoup.com/blog/laser-intrusion-breadboard.png?_ga=1.102770181.408851207.1455559182)

The laser works very much the same way as the Led in task1, as shown in the code bellow.

```js
import { five } from 'devices-core';
const board = new five.Board();

//wait for the board to be ready
board.on('ready', function() {
  const laser = new five.Led(9);

  //turn the laser on
  laser.on();

  //turn the laser off
  laser.off();
});
```

Whats missing from the code is your laser pistol logic.
You will need to complete the following steps:

- Tell the laser target that the game is started.
- When you decide the game has ended, you will need to tell the laser target to stop counting the score.
- You need to receive the score from the laser target and print the final score to know how well the game went.

` `

