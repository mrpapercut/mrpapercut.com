---
Title: Test Highlighter.js
Date: 2016-09-06 12:30
Description: Testing Highlighter.js for Bash, CSS, Javascript, JSON, PHP, SCSS and XML
Template: blog-post
Tags: javascript, useless
Filter: javascript, useless
---

## Bash
```bash
function scanlan() {
 START=2
 END=255
 if [[ $1 != '' ]]; then
 	START=$1
 fi
 if [[ $2 != '' ]]; then
 	END=$2
 fi
 if [[ "$1" -gt "$2" ]]; then
 	echo "Invalid range"
 	return 0
 fi

 if hash resolveip 2>/dev/null; then
 	for i in $(eval echo "{$START..$END}"); do
   echo -e -n "192.168.2.$i\t"
   resolve=$(resolveip 192.168.2.$i 2>/dev/null)

   if [[ $resolve != '' ]]; then
    echo $resolve | sed -r 's/.* ([0-9.]+) is (.*)/\2/'
   else
    if [[ $(ping 192.168.2.$i -n 1 | grep '\(unreachable\|timed\)') ]]; then
    	echo ""
    else
    	echo "hostname not found"
    fi
   fi
 	done
 else
 	echo "package 'resolveip' is not installed"
 fi
}
```

## CSS
```css
body {
 background: url(../assets/code-bg.png) no-repeat top center;
 margin: 0 auto;
}

a:hover {
 text-decoration: underline;
}
```

## Javascript
```javascript
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
```

## JSON
```json
{
 "bash": "bash",
 "css": ["css"],
 "js": [
 	"javascript",
 	"js"
 ],
 "json": {
 	"j": "json",
 	"son": "json"
 },
 "php": "php",
 "scss": "scss",
 "html": "xml"
}
```

## php
```php
public function getPageUrl($page, $queryData = null) {
 if (is_array($queryData)) {
 	$queryData = http_build_query($queryData, '', '&');
 } elseif (($queryData !== null) && !is_string($queryData)) {
 	throw new InvalidArgumentException(
   'Argument 2 passed to ' . get_called_class() . '::getPageUrl() must be of the type array or string, '
   . (is_object($queryData) ? get_class($queryData) : gettype($queryData)) . ' given'
 	);
 }
 if (!empty($queryData)) {
 	$page = !empty($page) ? $page : 'index';
 	$queryData = $this->isUrlRewritingEnabled() ? '?' . $queryData : '&' . $queryData;
 }

 if (empty($page)) {
 	return $this->getBaseUrl() . $queryData;
 } elseif (!$this->isUrlRewritingEnabled()) {
 	return $this->getBaseUrl() . '?' . rawurlencode($page) . $queryData;
 } else {
 	return $this->getBaseUrl() . implode('/', array_map('rawurlencode', explode('/', $page))) . $queryData;
 }
}
```

## SCSS
```scss
@import 'background';

@font-face {
 font-family: 'FFF-Forward';
 src: url('../fonts/FFF-Forward.ttf.woff') format('woff'),
 	url('../fonts/FFF-Forward.ttf.svg#FFF-Forward') format('svg'),
 	url('../fonts/FFF-Forward.ttf.eot'),
 	url('../fonts/FFF-Forward.ttf.eot?#iefix') format('embedded-opentype');
 font-weight: normal;
 font-style: normal;
}

.container {
 p {
 	line-height: 1.2em;
 	padding: 0 .5em;

 	&.date {
   float: right;
 	}

 	&.description {
   clear: both;
 	}
 }

 a {
 	color: #23538a;
 	text-decoration: none;

 	&:hover,
 	&:focus {
   color: #0a3a71;
   text-decoration: underline;
 	}

 	&:active,
 	&:hover {
   outline: 0;
 	}
 }
}
```

## XML
```xml
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8" />

 <title>Non-Alphanumeric JS obfuscator | Mr. Papercut</title>
 <meta name="description" content="Non-Alphanumeric JS obfuscator">

 <link rel="stylesheet" href="http://localhost:8000/mrpapercut-pico/themes/mrpapercut/public/main.css" type="text/css" />

 <script src="http://localhost:8000/mrpapercut-pico/themes/mrpapercut/public/bundle.js"></script>

 <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

 <header id="header">
 	<div class="inner clearfix">
   <h1><a href="http://localhost:8000/mrpapercut-pico/index" id="logo">Mr. Papercut</a></h1>
 	</div>
 </header>
</head>
</html>
```
