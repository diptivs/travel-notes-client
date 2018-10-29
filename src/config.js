export default {

	MAX_ATTACHMENT_SIZE: 5000000,
	
	s3: {
		REGION: "us-west-2",
		BUCKET: "usernotes-attachments"
	},

	apiGateway: {
		REGION: "us-west-2",
		URL: "https://l0hxofv8c8.execute-api.us-west-2.amazonaws.com/dev"
	},

	cognito: {
		REGION: "us-west-2",
		USER_POOL_ID: "us-west-2_AEJweOiqZ",
		APP_CLIENT_ID: "5c7f26atitaro0gb486noji3gc",
		IDENTITY_POOL_ID: "us-west-2:ef3b8a86-fe6c-4f6c-bfc1-1c4227b77109"
	},

	social: {
    FB: "542629866184897",
    GOOGLE: "826640784896-nleodgj7ubs5ak4i1979t3rag2hta2k3.apps.googleusercontent.com"
  }


};