import puppeteer from 'puppeteer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { htmlContent } = req.body;

        console.log(htmlContent,"Hiiiiiii");
        

        try {
            // Launch puppeteer browser
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(htmlContent);

            // Generate PDF from the page
            const pdfBuffer = await page.pdf({
                format: 'A4',
                printBackground: true,
            });

            await browser.close();

            // Send the PDF as a response
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="receipt.pdf"');
            res.status(200).send(pdfBuffer);

        } catch (error) {
            res.status(500).json({ error: 'Failed to generate PDF' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
