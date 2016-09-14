# The Magic led!

![Led](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_bb.png)

` `

```js
// Send a greet event to firebase
fb.send('greet', {name: 'world'});

// Wait for a greet event from firebase to turn the led on
fb.on('greet', 'users/some-team-name', () => led.on());
```


` `

- Turn the led on if someone sends an event on "greet" with msg "hello".
- Turn the led off if someone sends an event on "greet" with msg "bye"
