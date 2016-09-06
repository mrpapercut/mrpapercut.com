'use strict';

require('../sass/app.scss');

// import marked from 'marked';

import highlightSyntax from './util/highlight.js';
import obfuscate from './util/obfuscate.js';

class App {
	constructor() {
		highlightSyntax();
	}
}

window.addEventListener('load', () => new App());
