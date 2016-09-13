'use strict';

const expect     = require('chai').expect,
      invoicePdf = require('../index'),
      fs         = require('fs');


describe('create pdf', function () {
	let pdfFile = __dirname + "/invoice.pdf";
	let htmlFile = __dirname + "/invoice.html";
	
	beforeEach(function () {
		fs.chmodSync(htmlFile, "777");
		if (fs.existsSync(pdfFile))
			fs.unlinkSync(pdfFile)
	});
	
	it('convert html to pdf', function () {
		return invoicePdf(htmlFile, pdfFile, {
			name: "Alexander Frischbutter",
			brothers: ["Jack", "Joe", "Jim"]
		})
			.then(function (fileUrl) {
				expect(fs.existsSync(pdfFile)).to.equal(true);
				expect(fileUrl).to.equal(pdfFile);
			})
			.catch(function(err) {
				throw err;
			});
	});
});
