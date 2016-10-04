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
      name: 'Task1: Faking a beacon'
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
      name: 'Task5: Mixing colors'
    },{
      path: 'ifttt',
      name: 'Task6: If this than that'
    },{
      path: 'telemetry',
      name: 'Task7: Read sensor data'
    },{
      path: 'arduino',
      name: 'Task8: Maybe  arduino ???? TODO'
    }]
};

module.exports = AppConstants;
