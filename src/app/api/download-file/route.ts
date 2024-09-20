// pages/api/download-file.js
import { NextApiRequest, NextApiResponse } from 'next';

const downloadFile = async (req: NextApiRequest, res: NextApiResponse) => {
    const fileContent = 'Hello, World!'; // Replace with your file content
    const filename = 'file.pdf';

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    res.write(fileContent);
    res.end();
};

export default downloadFile;
