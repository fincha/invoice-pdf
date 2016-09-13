/**
 * Created by fribu on 13.09.16.
 */

'use strict';

/**
 *
 * @param sourceFileName
 * @param targetFileName
 * @param context
 */
module.exports = function (sourceFileName, targetFileName, context) {
	let p = new Promise(function (resolve, reject) {
		const fs = require('fs');
		const Mark = require("markup-js");
		const pdf = require('html-pdf');
		
		fs.readFile(sourceFileName, "utf8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				let renderedHtml = Mark.up(data, context);
				pdf.create(renderedHtml).toFile(targetFileName, (err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.filename);
					}
				});
			}
		});
	});
	
	return p;
};
