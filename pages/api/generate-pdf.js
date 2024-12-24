import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// added all changes

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { htmlContent } = req.body;

        if (!htmlContent) {
            return res.status(400).json({ error: 'HTML content is required.' });
        }

        try {
            // Launch Puppeteer
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'], // Required for production
            });

            const page = await browser.newPage();
            await page.setContent(htmlContent);

            // Generate PDF
            const pdfBuffer = await page.pdf({
                format: 'A4',
                printBackground: true,
            });

            await browser.close();

            // Define the file path for saving the PDF
            const baseDir = process.env.NODE_ENV === 'production'
                ? '/tmp/generated' // Temporary directory for production
                : path.resolve('public', 'generated'); // Local directory for development

            const fileName = `receipt_${Date.now()}.pdf`; // Correct string interpolation
            const localPath = path.join(baseDir, fileName);

            // Ensure the directory exists
            fs.mkdirSync(baseDir, { recursive: true });

            // Save the PDF
            fs.writeFileSync(localPath, pdfBuffer);

            // Publicly accessible path or local file path
            const publicUrl = process.env.NODE_ENV === 'production'
                ? `/generated/${fileName}` // Correct string interpolation
                : localPath;

            console.log('PDF Generated:', publicUrl);
            res.status(200).json({ message: 'PDF generated successfully!', filePath: publicUrl });
        } catch (error) {
            console.error('PDF Generation Error:', error);
            res.status(500).json({ error: `Failed to generate PDF: ${error.message}` }); // Correct error message formatting
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
