declare var require: any;
require('../css/main.css');

import MVCApp from './MVCApp';

window.onload = () => {
	console.log("MVC APP Setup");
	const mvcApp = new MVCApp();
	mvcApp.setup();
}