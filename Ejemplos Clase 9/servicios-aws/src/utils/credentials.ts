require('dotenv').config();
export const aws_keys = {
	rekognition: {
		region: process.env.AWS_REGION || "",
		credentials: {
			accessKeyId: process.env.ACCESS_KEY_ID || "",
			secretAccessKey: process.env.SECRET_ACCESS_KEY || "",
		}
	},
	translate: {
		region: process.env.AWS_REGION,
		credentials: {
			accessKeyId: process.env.ACCESS_KEY_ID,
			secretAccessKey: process.env.SECRET_ACCESS_KEY,
		}
	},
	cognito: {
		UserPoolId: process.env.USER_POOL_ID,
		ClientId: process.env.CLIENT_ID
	}
};