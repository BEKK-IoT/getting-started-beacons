const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	node : {
        setup: true,
    		name: 'Node - Computer',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: [
				{
					path: 'datamaskin/fakebeacon',
					name: 'Datamaskin: Faking a beacon'
				},{
          path: 'datamaskin/beaconscanner',
          name: 'Datamaskin: Beacon scanner'
        },{
					path: 'datamaskin/hotandcold',
					name: 'Datamaskin: Hot and cold'
				},{
          path: 'datamaskin/ifttt',
					name: 'Datamaskin: If this than that'
        }]
    	},
    	cordova : {
        setup: true,
    		name: 'Cordova - Mobile',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'https://github.com/BEKK-IoT/photon.git',
    		tasks: [
				{
					path: 'android/task1',
					name: 'android: finn på'
				}
			  ]
    	},
    },
    GENERAL_TASKS: []
};

module.exports = AppConstants;
