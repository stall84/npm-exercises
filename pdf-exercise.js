const PDFDocument = require('pdfkit');
const catFacts = require('cat-facts');
const fs = require('fs');

const doc = new PDFDocument();


doc.pipe(fs.createWriteStream('outputNEWEST.pdf'));
doc.text('SOME FUCKING TEXT!! LETS HOPE THIS DUMB SHIT WORKS!!');
