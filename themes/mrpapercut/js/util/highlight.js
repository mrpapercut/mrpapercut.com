'use strict';

import {highlightBlock, registerLanguage} from 'highlight.js';

import bash       from 'highlight.js/lib/languages/bash';
import css        from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json       from 'highlight.js/lib/languages/json';
import php        from 'highlight.js/lib/languages/php';
import scss       from 'highlight.js/lib/languages/scss';
import xml        from 'highlight.js/lib/languages/xml';

const highlightSyntax = () => {
	const languages = {
		'bash': bash,
		'css': css,
		'js': javascript,
		'json': json,
		'php': php,
		'scss': scss,
		'html': xml
	};

	for (const i in languages) registerLanguage(i, languages[i]);
	[...document.getElementsByTagName('pre'), ...document.getElementsByTagName('code')].forEach(highlightBlock);
}

export default highlightSyntax;
