# Control the wallboard game

Try to control the wallboard game. Map action to at least three beacons and send the action corresponding to the nearest beacon to the game through firebase.

Available control actions:

```
firebase.send('move', 'left', 'game');    
firebase.send('move', 'upleft', 'game');    
firebase.send('move', 'right', 'game');    
firebase.send('move', 'upright', 'game');
```
