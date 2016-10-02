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
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'https://github.com/BEKK-IoT/photon.git',
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
      path: 'findabeacon',
      name: 'Task3: Find a beacon'
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
      name: 'Task6: Read sensor data'
    },{
      path: 'pair',
      name: 'Task7: Connect to a beacon ? check if works'
    },{
      path: 'gpio',
      name: 'Task8: Maybe  gpio ???? TODO'
    },{
      path: 'arduino',
      name: 'Task8: Maybe  arduino ???? TODO'
    }]
};

module.exports = AppConstants;
