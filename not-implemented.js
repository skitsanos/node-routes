/**
 * Created by skitsanos on 11/03/2014.
 */

var NotImplementedHandler = function (request, response, app)
{
	if (request.headers['content-type'] != undefined && !(request.headers['content-type'].startsWith('application/json')))
	{
		app.utils.serveJson('error', 'Incorrect Content-Type were sent. Only application/json is allowed');
		return;
	}

	app.utils.serveJson('error', 'Not implemented');
};

module.exports = NotImplementedHandler;
