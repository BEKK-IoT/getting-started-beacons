# Mix colors

In this task you will assign a RGB color to each beacon you discover. Then, mix the colors of each beacon in range and display the resulting color on screen.

To mix the colors you can use the average of each color channel :

```
(r1,g1,b1)+...+(rn,gn,bn)=((rn+...+rn)/n,(g1+...+gn)/n,(b1+...+bn)/n)
```

If you want to complicate things, let the distance to a beacon control the impact of its color.

If you want to complicate things even more, you can get a list of the beacons and their respective colors from firebase:

```
firebase.get('beacons', function(beaconList) {
  ...    
});
```

Example data:

```
[ {minor:0, color:"#AABBCC", name:"merlot"}, ... ]
```

The beacons can be identified by their minor number that correlates to their index in the array.
