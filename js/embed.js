if (document.createStyleSheet){
  document.createStyleSheet('https://fred.stlouisfed.org/graph/css/embed.css');
} else  {
  loadCssFile('https://fred.stlouisfed.org/graph/css/embed.css')
}

function loadCssFile(filename) {
  var fileref = document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

window.onload = function() {

window.onresize = function(e) {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        var baseurl = iframes[i].getAttribute("src");

        var isGraph = baseurl.indexOf("graph-landing");
        if (isGraph >= 0) {
            var width = iframes[i].parentElement.clientWidth;
            var height = iframes[i].clientHeight;

            var height_factor = 25;
            if (width > 700) {
                height_factor = 75;
            }

            var paramString = "&width=" + width + "&height=" + (height - 35);
            var graphsource = baseurl;
            graphsource = graphsource.replace(/&width=.*&/, "&width=" + width + "&");
            graphsource = graphsource.replace(/&height=.*/, "&height=" + (height - height_factor));
            iframes[i].src = graphsource;
          }
      }

  }

  window.dispatchEvent(new Event('resize'));
}
