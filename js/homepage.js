window.onload = function() {
  window.onresize = function(e) {
    resizePageContent();
  }
  window.dispatchEvent(new Event('resize'));
}

function resizePageContent() {
  var FONT_SCALE_FACTOR = 25;
  var QUOTE_WRAPPER_SCALE_FACTOR = 4.0;
  var MIN_FONT_SIZE = 30;
  var MIN_WRAPPER_HEIGHT = 250;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var fS = Math.max(MIN_FONT_SIZE, parseInt(width/FONT_SCALE_FACTOR));
  var quoteFontSize = fS.toString() + 'px';
  var quoteReferenceFontSize = parseInt(0.2*width/FONT_SCALE_FACTOR).toString() + 'px';
  var quoteWrapperHeight = Math.max(MIN_WRAPPER_HEIGHT, parseInt(width/QUOTE_WRAPPER_SCALE_FACTOR)).toString() + 'px';
  var quoteReferenceMarginTop = parseInt(0.5*width/QUOTE_WRAPPER_SCALE_FACTOR).toString() + 'px';

  var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + 'quote' + ' ')
                > -1) {
            elems[i].style.fontSize = quoteFontSize;
        }
        if((' ' + elems[i].className + ' ').indexOf(' ' + 'quote-wrapper' + ' ')
                > -1) {
            elems[i].style.height = quoteWrapperHeight;
        }
        if((' ' + elems[i].className + ' ').indexOf(' ' + 'quote-reference' + ' ')
                > -1) {
            elems[i].style.fontSize = quoteReferenceFontSize;
            elems[i].style.marginTop = quoteReferenceMarginTop;
            if(parseInt(0.2*width/FONT_SCALE_FACTOR) < 8) {
              elems[i].innerHTML = "";
            }
            else {
              elems[i].innerHTML = "- probably Erasmus, probably Genesis Rabbah";
            }
        }
    }
}
