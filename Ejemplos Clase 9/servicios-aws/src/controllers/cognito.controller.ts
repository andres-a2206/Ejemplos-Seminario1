import { Request, Response } from 'express';
import { AttributeType, CognitoIdentityProviderClient, SignUpCommand, SignUpCommandInput } from '@aws-sdk/client-cognito-identity-provider';
import { aws_keys } from '../utils/credentials';

export class CognitoController {

    CreateUser(req: Request, res: Response): any {

        const client: CognitoIdentityProviderClient = new CognitoIdentityProviderClient({ region: aws_keys.rekognition.region, credentials: { accessKeyId: aws_keys.rekognition.credentials.accessKeyId, secretAccessKey: aws_keys.rekognition.credentials.secretAccessKey } });

        const nombre: string = req.body.name || "Seminario 1";
        const contraseña: string = req.body.pass || "12345";
        const carnet: string = req.body.id || "201900000";

        const nombreAttribute: AttributeType = {
            Name: "name",
            Value: nombre
        }

        const carnetAttribute: AttributeType = {
            Name: "custom:carnet",
            Value: carnet
        }

        const emailAttribute: AttributeType = {
            Name: "email",
            Value: "correo@gmail.com"
        }

        const params: SignUpCommandInput = {
            ClientId: aws_keys.cognito.ClientId,
            Username: nombre,
            Password: contraseña,
            UserAttributes: [nombreAttribute, emailAttribute, carnetAttribute],
        }

        const command = new SignUpCommand(params);

        client.send(command)
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json({ message: err.message });
            });
    }
}
export default new CognitoController();