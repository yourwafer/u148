export default `
html {
    font-family: Helvetica, "Hiragino Sans GB W3";
    line-height: 120%;
    background: #f0f0f0;
    overflow-x: hidden;
    padding: 0 4%;
    margin: 0;
    color: #333;
}

body, div, a {
    padding: 0;
    margin: 0;
    word-wrap: break-word;
}

#title {
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: bold;
    padding: 20px 0 10px 0;
    width: 100%;
}

#wrapper {
    width: 100%;
    overflow: hidden;
    font-size: 0.8em;
    color: #999;
    padding-bottom: 10px;
}

#left {
    width: 50%;
    float: left;
}

#right {
    width: 50%;
    float: right;
    text-align: right;
}

#content {
    width: 100%;
    font-size: 1.0em;
    line-height: 160%;
    text-align: justify;
    margin-bottom: 40px;
}

h1, h2, h3, h4, h5, h6 {
    font-size: 1.2em;
    font-weight: bold;
    clear: both;
}

#content a {
    color: #455767;
    text-decoration: underline;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

}

#content p, #content div {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    font-size: 1em;
    clear: both;
}

#content li {
    margin-left: 10px;
    clear: both;
}

#content img {
    margin: 5px auto;
    max-width: 100%;
    display: block;
    clear: both;
}

#content .content-loading {
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #666;
    text-shadow: 1px 1px 1px white;
}

#content table {
    float: left;
    clear: both;
}

#view-comment {
    width: 100%;
    background: white;
    border-radius: 6px;
    font-size: 1.2em;
    border: solid 1px #e5e5e5;
    padding: 14px 0;
    color: #999;
    margin-bottom: 6%;
}

#view-comment span {
    position: relative;
    display: block;
    width: 50%;
    margin-left: 4%;
    vertical-align: middle;
}

#view-comment img {
    position: relative;
    margin-top: -20px;
    margin-left: auto;
    margin-right: 4%;
    width: 11px;
    height: 18px;
}

#view-comment:hover{
    background-color: rgba(201, 201, 201, 0.2);
    border: solid 1px #e5e5e5;
}

.night {
    background: #222;
}

.night, .night #wrapper {
    color: #666;
}

.night #title {
    color: #999;
}

.night #content {
    color: #999;
}

.night #view-comment {
    background-color: #333;
    color: #666;
    border: solid 1px #333;
}

.night #view-comment:hover {
    background-color: rgba(51, 51, 51, 0.2);
    border: solid 1px #333;
}

`
