## SPheRo Iz Coolz

It's time to bend time and space, controll the sphere with easy commands.

API:

```javascript
// Move the sphere in a direction (left, up, right, down)
fb.send('move', 'left', 'gadgets/sphero');

// Listen to the acceleration
fb.on('accel', 'gadgets/sphero', (values) => console.log('Nice!')); 

// Listen to the groove (gyro)
fb.on('gyro', 'gadgets/sphero', (values) => console.log('Nice!')); 

// But wait, there is more. Change the color:
fb.send('color', {red: 255, blue: 0, green: 0}, 'gadgets/sphero');
```
