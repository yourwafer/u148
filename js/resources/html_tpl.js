import js from './js_tpl';
import css from './css_tpl';

export default fdd = `<!DOCTYPE HTML>
<html lang="zh-CN" class="{SCREEN_MODE}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta charset="utf-8">
    <style type="text/css">
    ${css}
		</style>
    <script type="text/javascript">
      ${js}
    </script>
    <script type="text/javascript">
        String.prototype.trim = function() {
            return this.replace(/^\s+/, '').replace(/\s+$/, '');
        };
        document.addEventListener("DOMContentLoaded", function() {
            loadData();
        }, false);
    </script>
</head>
<body>
<div id="title">{TITLE}</div>
<div id="wrapper">
    <div id="left">{U_AUTHOR}</div>
    <div id="right"></div>
</div>
<div id="content">{CONTENT}</div>
</body>
</html>
`