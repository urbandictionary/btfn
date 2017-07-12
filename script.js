var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "\
body {\
  background: url('https://urbandictionary.github.io/btfn/bg.jpg') no-repeat fixed center !important;\
  background-size: cover !important;\
}\
#urban-top-bar, #dark_top { background-color: transparent !important }\
";
parent.document.body.appendChild(css);