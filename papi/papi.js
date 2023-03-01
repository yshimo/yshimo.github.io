!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["blockEvents","unblockEvents","setSignedMode","setAnonymousMode","resetUUID","addRecord","fetchGlobalID","set","trackEvent","trackPageview","trackClicks","ready"],n=0;n<s.length;n++){var c=s[n];e[t].prototype[c]=r(c)}var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/2.5/td.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}}("Treasure",this);

var td = new Treasure({
  host: 'in.treasuredata.com',
  writeKey: '10778/e059e2c3bd78f4773654fe583b2ae981e86a2fab',
  database: 'test_shimo',
  startInSignedMode: true
});
var table = 'papi';

var success = function(audiences) {

  console.log(audiences);

  var segments = [];
  for (var i = 0; i < audiences.length; i++) {
    var seg = audiences[i].values || [];
    segments = segments.concat(seg);
  }

  console.log(segments);
  if (segments[0] == 190846) {
    alert('直近1分間に3回以上アクセスしました！（190846）');
  } else if (segments[0] == 190845) {
    alert('直近1分間に0回アクセスです！（190845）');
  }
  
};

var error = function(err) {
  console.log(err);
};

var fetchSegments = function(){ 
  td.fetchUserSegments({
    audienceToken: ['b9af8cd4-6a00-4083-9f2e-8ccc6c4bdec9'],
    keys: {
      td_client_id: '23b56e29-8808-420d-b1d2-ce6f365f9dcc',
    }
  },success,error);
};

td.set('$global', 'td_global_id', 'td_global_id');
td.trackPageview(table, fetchSegments);

