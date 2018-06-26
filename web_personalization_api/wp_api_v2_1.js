!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["blockEvents","unblockEvents","setSignedMode","setAnonymousMode","resetUUID","addRecord","fetchGlobalID","set","trackEvent","trackPageview","trackClicks","ready"],n=0;n<s.length;n++){var c=s[n];e[t].prototype[c]=r(c)}var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/2.1/td.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}}("Treasure",this);

var td = new Treasure({
  host: 'in.treasuredata.com',
  writeKey: '5891/dd111c183b193e90e6f0a3e195cd07e8b2ffe569',
  database: 'shimo_test',
  startInSignedMode: true
});
var table = 'web_personalization_api_20180621';

var success = function(audiences) {

  console.log(audiences);

  var segments = [];
  for (var i = 0; i < audiences.length; i++) {
    var seg = audiences[i].values || [];
    segments = segments.concat(seg);
  }

  console.log(segments);
};

var error = function(err) {
  console.log(err);
};

var fetchSegments = function(){ 
  td.fetchUserSegments({
    audienceToken: ['471d4634-c848-416b-b4b1-add97a35e9ef','372dd1d1-1947-4a5f-9e91-fd627dfdbdcd'],
    keys: {
      td_client_id: 'c2a593b8-87f9-4589-93c8-6650c7f75927',
      td_global_id: 'e74a43e1-abce-4233-ae12-3e060300fc69'
    }
  },success,error);
};

td.set('$global', 'td_global_id', 'td_global_id');
td.trackPageview(table, fetchSegments);

