// Shared site nav. Brand-only (no nav links). Include with <script src="nav.js"></script> right after <body>.
// EDIT BRAND NAME HERE.
(function(){
  var BRAND='MAGOR // SPATIAL ARCHIVE';
  var p=location.pathname.split('/').pop()||'index.html';
  var viewer=p.indexOf('viewer')===0;
  var n=document.createElement('nav');n.className='sitenav brand-only'+(viewer?' onviewer':'');n.setAttribute('aria-label','Site');
  n.innerHTML='<a class="brand" href="index.html"><span class="dot"></span><span class="bfull">'+BRAND+'</span><span class="bshort">MAGOR //</span></a>';
  document.body.insertBefore(n,document.body.firstChild);
})();
