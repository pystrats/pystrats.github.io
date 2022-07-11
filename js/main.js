
let header = document.getElementById("header");
header.innerHTML = `
<div class="container">
<header id="header_level_1" class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
 <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
   <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
 </a>
 <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
  <li><a href="./index.html" class="nav-link px-2 link-dark">Home</a></li>
   <li>
     <div class="dropdown">
       <a class="btn btn-body dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
         MM
       </a>

       <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
         <li><a class="dropdown-item" href="./real_rates.html">Rates</a></li>
         <li><a class="dropdown-item" href="./yield_curve.html">Yield Curve</a></li>
         <li><a class="dropdown-item" href="./treasury_spreads.html">Treasury Spreads</a></li>
         <li><a class="dropdown-item" href="./corporate_spreads.html">Corporate Spreads</a></li>
         <li><a class="dropdown-item" href="./money_supply.html">Money Supply</a></li>
         <li><a class="dropdown-item" href="./monetary_policy.html">Monetary Policy</a></li>
       </ul>
     </div>
   </li>
   <li>
     <div class="dropdown">
       <a class="btn btn-body dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
         Surveys
       </a>

       <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
         <li><a class="dropdown-item" href="./ism_report.html">ISM Report On Business</a></li>
         <li><a class="dropdown-item" href="./consumer_sentiment.html">Consumer Sentiment</a></li>
         <li><a class="dropdown-item" href="./building_permits.html">Building Permits</a></li>
         <li><a class="dropdown-item" href="./small_business.html">Small Business</a></li>
         <li><a class="dropdown-item" href="./inflation.html">Inflation and Prices</a></li>
         <li><a class="dropdown-item" href="./other.html">Other Stats</a></li>
       </ul>
     </div>
   </li>
   <li>
     <div class="dropdown">
       <a class="btn btn-body dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
         World
       </a>

       <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
         <li><a class="dropdown-item" href="./europe.html">Europe</a></li>
         <li><a class="dropdown-item" href="./china.html">China</a></li>
       </ul>
     </div>
   </li>
   <li>
     <div class="dropdown">
       <a class="btn btn-body dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
         Timing
       </a>
       <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
         <li><a class="dropdown-item" href="./tactical.html">Tactical</a></li>
         <li><a class="dropdown-item" href="./recession.html">Recession</a></li>
         <li><a class="dropdown-item" href="./alternative.html">Alternative Models</a></li>
       </ul>
     </div>
   </li>
 </ul>

 <div class="col-md-3 text-end"></div>

</header>
</div>
`;


function popup(mylink, windowname) {
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href;
    window.open(href, windowname, 'width=400,height=200,scrollbars=yes');
    return false;
  }

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('header').classList.add('fixed-top');
          document.getElementById('header_level_1').classList.remove('mb-4');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.header').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('header').classList.remove('fixed-top');
          document.getElementById('header_level_1').classList.add('mb-4');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        }
    });
  });
