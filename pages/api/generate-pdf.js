import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { htmlContent } = req.body;

        try {
            // Launch Puppeteer browser
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(htmlContent);

            // Generate PDF
            const pdfBuffer = await page.pdf({
                format: 'A4',
                printBackground: true,
            });

            await browser.close();

            // Define the local file path
            const localPath = path.resolve('public', 'generated', `receipt_${Date.now()}.pdf`);

            // Ensure the directory exists
            fs.mkdirSync(path.dirname(localPath), { recursive: true });

            // Save the PDF to the local file path
            fs.writeFileSync(localPath, pdfBuffer);

            res.status(200).json({ message: 'PDF generated successfully!', filePath: localPath });
        } catch (error) {
            res.status(500).json({ error: `Failed to generate PDF: ${error.message}` });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
