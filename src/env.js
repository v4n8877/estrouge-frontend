const ENV = {
	LCL: {
		REACT_APP_API_SERVER: 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com',
	},

	DEV: {
    REACT_APP_API_SERVER: 'https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com',
	},

	STG: {

	},

	PRO: {

	}
};

const config = ENV[process.env.REACT_APP_STAGE || "LCL"];

const getEnv = (name, defaultValue) => {
	return process.env[name] || config[name] || defaultValue;
};

export { getEnv };
