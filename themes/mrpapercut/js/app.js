'use strict';
console.log('wtf');
require('../sass/app.scss');

import 'core-js/fn/array/from';
import 'core-js/fn/array/fill';

import highlightSyntax from './util/highlight.js';
import obfuscate from './util/obfuscate.js';

class App {
	constructor() {
		highlightSyntax();
		this.fillBackground();
	}

	fillBackground() {
		const code = new Array(15).fill(obfuscate('console.log("obfuscation is awesome")'));
		const style = document.createElement('style');
		style.innerHTML = 'body:before{content:"' + code.join() + '"}';
		document.body.appendChild(style);
	}
}

window.addEventListener('load', () => new App());
