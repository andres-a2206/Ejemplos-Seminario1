import { Request, Response } from 'express';
import { RekognitionClient, CompareFacesCommand, CompareFacesCommandInput } from '@aws-sdk/client-rekognition';
import { aws_keys } from '../utils/credentials';
const fs = require('fs');


export class RekognitionController {

    async CompareFaces(req: Request, res: Response): Promise<any> {

        const client: RekognitionClient = new RekognitionClient({
            region: aws_keys.rekognition.region,
            credentials: {
                accessKeyId: aws_keys.rekognition.credentials.accessKeyId,
                secretAccessKey: aws_keys.rekognition.credentials.secretAccessKey
            }
        });

        const files: { [fieldname: string]: Express.Multer.File[] } = req.files as { [fieldname: string]: Express.Multer.File[] };
        const SourceImage = fs.readFileSync(files.SourceImage[0].path);
        const TargetImage = fs.readFileSync(files.TargetImage[0].path);

        const params: CompareFacesCommandInput = {
            SourceImage: {
                Bytes: SourceImage
            },
            TargetImage: {
                Bytes: TargetImage
            }
        };

        fs.unlinkSync(files.SourceImage[0].path);
        fs.unlinkSync(files.TargetImage[0].path);

        const command = new CompareFacesCommand(params);
        client.send(command)
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });
    }
}
export default new RekognitionController();