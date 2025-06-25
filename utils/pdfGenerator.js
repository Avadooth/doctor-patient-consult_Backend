import fs from 'fs';
import PDFDocument from 'pdfkit';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const generatePdfAndSave = async ({ consult, doctor, patient, care, medicines }) => {
    return new Promise((resolve, reject) => {
        const fileName = `${uuidv4()}.pdf`;
        const filePath = path.join(__dirname, '..', 'uploads', fileName);

        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(filePath));

        doc.fontSize(16).text('Prescription', { align: 'center' });
        doc.moveDown();
        doc.fontSize(12).text(`Doctor ID: ${doctor}`);
        doc.text(`Patient ID: ${patient}`);
        doc.text(`Consult ID: ${consult}`);
        doc.moveDown();
        doc.text(`Care Instructions: ${care}`);
        doc.text(`Medicines: ${medicines}`);

        doc.end();

        doc.on('finish', () => {
            resolve(`/uploads/${fileName}`);
        });

        doc.on('error', reject);
    });
};

export default generatePdfAndSave;  

