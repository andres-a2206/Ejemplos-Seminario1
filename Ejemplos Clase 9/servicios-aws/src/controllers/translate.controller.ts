import { Request, Response } from 'express';
import { TranslateClient, TranslateTextCommand, TranslateTextCommandInput } from '@aws-sdk/client-translate';
import { aws_keys } from '../utils/credentials';

export class TranslateController {

    async TranslateText(req: Request, res: Response): Promise<any> {

        const client: TranslateClient = new TranslateClient({ region: aws_keys.rekognition.region, credentials: { accessKeyId: aws_keys.rekognition.credentials.accessKeyId, secretAccessKey: aws_keys.rekognition.credentials.secretAccessKey } });

        const text: string = req.body.text || "Hello";

        const params: TranslateTextCommandInput = {
            SourceLanguageCode: 'auto',
            TargetLanguageCode: 'es',
            Text: text
        }

        const command = new TranslateTextCommand(params);

        client.send(command)
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });
    }
}
export default new TranslateController();