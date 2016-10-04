const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	node : {
        setup: true,
    		name: 'Node - Computer',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: []
    	},
    	cordova : {
        setup: true,
    		name: 'Cordova - Mobile',
        url: 'https://github.com/BEKK-IoT/beacon-cordova',
    		git: 'https://github.com/BEKK-IoT/beacon-cordova.git',
    		tasks: []
    	},
    },
    GENERAL_TASKS: [
    {
      path: 'fakebeacon',
      name: 'Task1: Faking a iBeacon - Node only'
    },{
      path: 'beaconscanner',
      name: 'Task2: Beacon scanner'
    },{
      path: 'monitoring',
      name: 'Task3: Monitoring a beacon region - Cordova only'
    },{
      path: 'hotandcold',
      name: 'Task4: Hot and cold'
    },{
      path: 'colormixer',
      name: 'Task5: Mixing colors - Cordova only'
    },{
      path: 'telemetry',
      name: 'Task6: Read sensor data - Node only'
    },{
      path: 'ifttt',
      name: 'Task7: If this than that'
    },{
      path: 'game',
      name: 'Bonus task'
    }]
};

module.exports = AppConstants;
