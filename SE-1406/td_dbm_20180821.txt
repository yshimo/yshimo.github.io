<script type="text/javascript">
 !function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set","trackEvent","trackPageview","trackClicks","ready","fetchGlobalID","fetchUserSegments"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/1.9.2/td.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("Treasure",this);
</script>
<script type="text/javascript">
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
  var td = new Treasure({
    host: 'in.treasuredata.com',
    writeKey: '9245/1a8b95309566283847eac038d8c6ee0ec96df167',
    database: 'test_db'
  });
  td.set('$global', 'td_global_id', 'td_global_id');
  //td.set('gendai_access', {
  //  ism_article_id: '',
  //  ism_skin:'indexes/media_top',
  //  ism_category:'',
  //  ism_subcategories:[],
  //  ism_keywords:[],
  //  ism_authors:[],
  //  ism_title:'',
  //  ism_page:'0',
  //  ism_totalpage:'0',
  //  ism_lastpage:'no'
  //});
  td.trackPageview('se_1406',sync_callback);
</script>
