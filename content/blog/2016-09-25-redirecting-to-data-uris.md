---
Title: Redirecting to Data-URIs
Author: Mr. Papercut
Date: 2016-09-25
Template: blog-post
Description: How to safely redirect to data-URI pages
Tags: html, php, data-uri
Filter: html, php, data-uri
Published: true
---
# Redirecting to data-URI
Redirecting to data-URIs isn't as straight forward as you'd expect. A hard redirect with statuscode 3XX will return in an ERR_UNSAFE_REDIRECT in Chrome.

## Creating data-URI
First we create a simple data-URI containing HTML, executing `window.alert("w00t")`.
```javascript
> btoa('window.alert("w00t")'); 
"d2luZG93LmFsZXJ0KCJ3MDB0Iik=" 

> btoa('<!doctype html><html><script src="data:application/javascript;base64,d2luZG93LmFsZXJ0KCJ3MDB0Iik="></script></html>'); 
"PCFkb2N0eXBlIGh0bWw+PGh0bWw+PHNjcmlwdCBzcmM9ImRhdGE6YXBwbGljYXRpb24vamF2YXNjcmlwdDtiYXNlNjQsZDJsdVpHOTNMbUZzWlhKMEtDSjNNREIwSWlrPSI+PC9zY3JpcHQ+PC9odG1sPg==" 
``` 

Complete data-URI:
```
data:text/html;base64,PCFkb2N0eXBlIGh0bWw+PGh0bWw+PHNjcmlwdCBzcmM9ImRhdGE6YXBwbGljYXRpb24vamF2YXNjcmlwdDtiYXNlNjQsZDJsdVpHOTNMbUZzWlhKMEtDSjNNREIwSWlrPSI+PC9zY3JpcHQ+PC9odG1sPg==
```

If we try to redirect by using a 3XX Redirection status code, like from PHP, Chrome will throw an error:
```php
<?php
header('Location: data:text/html;base64,PCFkb2N0eXBlIGh0bWw+PGh0bWw+PHNjcmlwdCBzcmM9ImRhdGE6YXBwbGljYXRpb24vamF2YXNjcmlwdDtiYXNlNjQsZDJsdVpHOTNMbUZzWlhKMEtDSjNNREIwSWlrPSI+PC9zY3JpcHQ+PC9odG1sPg==');
```
![ERR_UNSAFE_REDIRECT](%base_url%/assets/ERR_UNSAGE_REDIRECT.png)
*ERR_UNSAFE_REDIRECT*

Note: setting the [http_response_code](https://secure.php.net/manual/en/function.http-response-code.php) manually returns the same result.

However, a soft refesh using the `meta http-equiv="refresh"` in HTML does work:
```html
<!doctype html>
<meta http-equiv="refresh" content="0,URL=data:text/html;base64,PCFkb2N0eXBlIGh0bWw+PGh0bWw+PHNjcmlwdCBzcmM9ImRhdGE6YXBwbGljYXRpb24vamF2YXNjcmlwdDtiYXNlNjQsZDJsdVpHOTNMbUZzWlhKMEtDSjNNREIwSWlrPSI+PC9zY3JpcHQ+PC9odG1sPg==">
```

