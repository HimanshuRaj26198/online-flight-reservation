import fs from 'fs';
import path from 'path';
import chromium from '@sparticuz/chromium';
import { headless } from 'chrome-aws-lambda';



let chrome = {};
let puppeteer;
if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    chrome = require("chrome-aws-lambda");
    puppeteer = require("puppeteer-core");
} else {
    puppeteer = require("puppeteer");
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { htmlContent } = req.body;

        try {
            let options = {};

            if (process.env.AWS_LAMBDA_FUNCTION_VERSION || process.env.NODE_ENV == "production") {
                options = {
                    args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
                    executablePath: await chromium.executablePath()
                }
            } else {
                options = {
                    headless: true,
                    args: ['--no-sandbox', '--disable-setuid-sandbox']
                }
            }
            // Launch Puppeteer browser
            const browser = await puppeteer.launch(options);
            const page = await browser.newPage();
            await page.setContent(htmlContent);

            // Generate PDF
            const pdfBuffer = await page.pdf({
                format: 'A4',
                printBackground: true,
            });

            await browser.close();

            // Define the local file path
            const baseDir = process.env.NODE_ENV === 'production'
                ? path.join(process.cwd(), 'public', 'generated') // Adjust for production
                : path.resolve('public', 'generated'); // Development path

            const fileName = `receipt_${Date.now()}.pdf`;
            const localPath = path.join(baseDir, fileName);

            // Ensure the directory exists
            fs.mkdirSync(baseDir, { recursive: true });

            // Save the PDF to the local file path
            fs.writeFileSync(localPath, pdfBuffer);

            // Respond with the path
            const publicUrl = process.env.NODE_ENV === 'production'
                ? `/generated/${fileName}` // Publicly accessible URL in production
                : localPath; // Full file path for development

            console.log('File Path:', publicUrl);

            res.status(200).json({ message: 'PDF generated successfully!', filePath: publicUrl });
        } catch (error) {
            res.status(500).json({ error: `Failed to generate PDF: ${error.message}` });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
