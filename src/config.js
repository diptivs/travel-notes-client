

const dev = {
	s3: {
		REGION: "us-west-2",
		BUCKET: "travel-notes-api-dev-attachmentsbucket-13u4qc7jdzwuc"
	},
	apiGateway: {
		REGION: "us-west-2",
		URL: "https://vl8sqwopgj.execute-api.us-west-2.amazonaws.com/dev"
	},
	cognito: {
		REGION: "us-west-2",
		USER_POOL_ID: "us-west-2_BK5ofqyFE",
		APP_CLIENT_ID: "6m7b7mqf6grfhmafip7cj2c6bn",
		IDENTITY_POOL_ID: "us-west-2:e55ca212-e3fc-4900-b616-96d8a98cb68e"
	},
	social: {
		FB: "542629866184897"
	}
};

const prod = {
	s3: {
		REGION: "us-west-2",
		BUCKET: "travel-notes-api-prod-attachmentsbucket-ghwvis11r7vr"
	},
	apiGateway: {
		REGION: "us-west-2",
		URL: "https://6yyx0r0c85.execute-api.us-west-2.amazonaws.com/prod"
	},
	cognito: {
		REGION: "us-west-2",
		USER_POOL_ID: "us-west-2_qgHXsKGK2",
		APP_CLIENT_ID: "58ukc75rmbbbrsq9uhtugnc0m2",
		IDENTITY_POOL_ID: "us-west-2:0fbcc3b3-93ca-492a-bb4f-f54f7545d5e3	"
	},
	social: {
		FB: "542629866184897"
	}
};


const config = process.env.REACT_APP_ENV === 'prod'
	? prod
	: dev;	

export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	...config
};