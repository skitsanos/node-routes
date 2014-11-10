/**
 * Random Image Generator based on Trianglify
 * https://github.com/qrohlf/trianglify
 * Created by skitsanos on 10/11/14.
 */

var Trianglify = require('trianglify');
var url = require('url');

var RandomImageHandler = function (request, response, app)
{
	var urlParts = url.parse(request.url, true);
	var command = urlParts.path.split('/')[2];

	if (command == '')
	{
		app.utils.serveError(404, 'Not Found');
	}
	else
	{
		var filename = command.split('.')[0];
		var dimensions = filename.split('x');
		var random = Math.round(Math.random() * 100);
		var t = new Trianglify({
			cellsize: 35
		});
		var pattern = t.generate(Number(dimensions[0]), Number(dimensions[1]));

		response.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
		response.setHeader('Expires', '-1');
		response.setHeader('Pragma', 'no-cache');

		app.utils.serveRAW(pattern.svgString, 'image/svg+xml');
	}
};

module.exports = RandomImageHandler;
