<script type="text/javascript">
!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set ","trackEvent","trackPageview","trackClicks","ready","fetchGlobalID","fetchUserSegments"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/1.9.2/td.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("Treasure",this);

var createImage = function(url) {
  var img = document.createElement('img');
  img.src = (('https:' == document.location.protocol) ? 'https://' : 'http://') + url;
  img.width=1;img.height=1;img.style.display='none';
  document.body.appendChild(img);
};

var sync_callback = function() {
  var td_client_id = td.client.track.uuid;
  var region = td.client.host.split('.')[0];
  var account = (region === 'in' ? 'aws-':(region === 'tokyo' ? 'aws-tokyo-':'idcf-')) + td.client.writeKey.split('/')[0];
  var dbm_url = 'cm.g.doubleclick.net/pixel?google_nid=treasuredata_dmp&google_cm&td_write_key=8151/fcd628065149d648b80f11448b4083528c0d8a91&td_global_id=td_global_id' + '&td_client_id=' + td_client_id + '&account=' + account + '&td_host=' + document.location.host;
  createImage(dbm_url);
};

// Configure an instance for your database
var td = new Treasure({
  host: 'in.treasuredata.com',
  writeKey: '9245/36083a629905e1319ef47f071c5d06ff870ec9a4',
  database: 'test_db'
});
// set additional info
//td.set('00_basic', {member_id: {{MemberID}} });
// Track pageview information to table
td.trackPageview('se_1356',sync_callback);
</script>
