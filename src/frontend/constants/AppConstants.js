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
      path: 'hotandcold',
      name: 'Task3: Hot and cold'
    },{
      path: 'ifttt',
      name: 'Task4: If this than that'
    },{
      path: 'colormixer',
      name: 'Task5: Mixing colors'
    }]
};

module.exports = AppConstants;
