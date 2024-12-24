import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

//Testing Main Production

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { htmlContent } = req.body;

        try {
            // Launch Puppeteer browser
            const browser = await puppeteer.launch({
                headless: true,
                args: process.env.NODE_ENV === 'production' ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
            });
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
