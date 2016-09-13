# invoice-pdf
creating a pdf invoice from html with some placeholders

# How to use

I use Markup.js as html engine, so if you create your invoice you should follow this guide:

https://github.com/adammark/Markup.js

```

const invoicePdf = require("invoice-pdf");
let pdfFile = __dirname + "/invoice.pdf";
let htmlFile = __dirname + "/invoice.html";
	

invoicePdf(htmlFile, pdfFile, { name: 'My Name'})
  .then(function (fileUrl) {
	  console.log("file was created %s", fileUrl)
	})
	.catch(function(err) {
		throw err;
	});
});
	
```