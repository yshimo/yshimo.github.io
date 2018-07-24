!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set","trackEvent","trackPageview","trackClicks","ready","fetchGlobalID","fetchUserSegments"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/1.9.2/td.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("Treasure",this);

var createImage = function(url) {
  var img = document.createElement('img');
  img.src = url;img.width=1;img.height=1;img.style.display='none';
  document.body.appendChild(img);
};

var syncCallback1 = function(client_id,domain) {
  var region = td.client.host.split('.')[0];
  var account = (region === 'in' ? 'aws-':(region === 'tokyo' ? 'aws-tokyo-':'idcf-')) + td.client.writeKey.split('/')[0];
  var dbm_url = 'https://cm.g.doubleclick.net/pixel?google_nid=treasuredata_dmp&google_cm&td_write_key=8151/fcd628065149d648b80f11448b4083528c0d8a91&td_global_id=td_global_id' + '&td_client_id=' + client_id + '&account=' + account + '&td_host=' + domain;
  createImage(dbm_url);
};

var syncCallback2 = function(client_id,domain) {
  var src_url = 'https://in.treasuredata.com/postback/v3/event/test_db/tdid_gid_mapping?td_format=pixel&td_write_key=9245/36083a629905e1319ef47f071c5d06ff870ec9a4&td_global_id=td_global_id&gid=${GID_URLENCODE}&td_client_id=' + client_id + '&domain=' + domain;
  var redirect_url = "https://cs.gssprt.jp/yie/ld/rd?dest=" + encodeURIComponent(src_url);
  createImage(redirect_url);
};

var successCallback = function() {
  var client_id = encodeURIComponent(td.getCookie('_td'));
  var domain = encodeURIComponent(document.location.host);
  syncCallback1(client_id,domain);
  syncCallback2(client_id,domain);
};

var td = new Treasure({
  host: 'in.treasuredata.com',
  writeKey: '9245/36083a629905e1319ef47f071c5d06ff870ec9a4',
  database: 'test_db'
});

td.set('$global', 'td_global_id', 'td_global_id');

td.trackPageview('se_1335',successCallback);
