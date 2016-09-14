const AppConstants = {
    GET_ARTICLE: 'GET_ARTICLE',
    GADGETS: {
    	datamaskin : {
        setup: true,
    		name: 'Datamaskin',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: [
				{
					path: 'datamaskin/task1',
					name: 'Datamaskin: finn på'
				}]
    	},
    	android : {
        setup: true,
    		name: 'Android',
    		url: 'https://github.com/BEKK-IoT/photon',
    		git: 'https://github.com/BEKK-IoT/photon.git',
    		tasks: [
				{
					path: 'android/task1',
					name: 'android: finn på'
				}
			  ]
    	},
      ios : {
        setup: false,
    		name: 'iOS',
    		url: 'https://github.com/BEKK-IoT/arduino-uno',
    		git: 'https://github.com/BEKK-IoT/arduino-uno.git',
    		tasks: [
				{
					path: 'ios/task1',
					name: 'ios: finn på'
				}]
    	},
    },
    GENERAL_TASKS: []
};

module.exports = AppConstants;
