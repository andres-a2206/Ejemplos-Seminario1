const fs = require('fs');

export class UtilsService {

    public getBase64(file: Express.Multer.File): string {
        var bitmap = fs.readFileSync(file.buffer);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    }

}
export default new UtilsService();