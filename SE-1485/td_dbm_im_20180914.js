// td-js-sdk
!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this[“_”+t]=this[“_”+t]||[],this[“_”+t].push(Array.prototype.slice.call(arguments)),this}},s=[“addRecord”,“set”,“trackEvent”,“trackPageview”,“trackClicks”,“ready”,“fetchGlobalID”,“fetchUserSegments”],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement(“script”);n.type=“text/javascript”,n.async=!0,n.src=(“https:“===document.location.protocol?“https:“:”http:“)+“//cdn.treasuredata.com/sdk/1.9.2/td.min.js”;var i=document.getElementsByTagName(“script”)[0];i.parentNode.insertBefore(n,i)}}(“Treasure”,this);
// tdwrapper
!function(t,e,n,s){"use strict";var i=function(t){this.version="0.1.6",this.customParam=t.customParam||{},this.idSyncList=t.idSyncList||[],this.table=t.table,this.trackClicks=t.trackClicks||!1,this.trackCrossDomain=t.trackCrossDomain||!1,this.id="tdw_"+Math.random().toString(36).substring(7),this.sent=!1,this.tokenIntimateMerger=t.tokenIntimateMerger||void 0,this.clickTable=t.clickTable||"clicks",this.dmpCb={list:{},funcs:[],cnt:0},this.ac=this._getAccountInfo(t.initParams);var i=new e.Treasure(t.initParams);return i.set("$global",this.customParam),this.trackClicks&&i.trackClicks({tableName:this.clickTable}),this.trackCrossDomain&&i.set("$global","td_global_id","td_global_id"),this.success=this._prepareSuccessCallback(t.successCallback||[]),this.fail=t.errorCallback||void 0,this.td=i,e[s][this.id]=this};i.prototype._getAccountInfo=function(t){var i=t.writeKey.split("/")[0],e=t.host.split(".")[0];return("in"===e?"aws-":"tokyo"===e?"aws-tokyo-":"idcf-")+i},i.prototype._setDmpCallbacks=function(){var t=this;if(void 0!==t.tokenIntimateMerger){var i={parent:t,onReceive:function(t){var i={};void 0!==t.imid&&(i.imid=t.imid),void 0!==t.segment_eids&&(i.im_segmentids=t.segment_eids),this.parent._onDmpCallback(i)}},e="//sync.im-apps.net/imid/segment?token="+t.tokenIntimateMerger+"&callback="+encodeURIComponent(s+"."+t.id+".dmpCb.list.im.onReceive");t.dmpCb.list.im=i,t.dmpCb.funcs.push(t._buildCreateScriptFunc(e))}},i.prototype._onDmpCallback=function(t){this.td.set("$global",t),this.dmpCb.cnt++,Object.keys(this.dmpCb.list).length===this.dmpCb.cnt&&this.sendRequest()},i.prototype._prepareSuccessCallback=function(t){var i=[];if(void 0!==typeof t&&"function"==typeof t&&i.push(t),0!==this.idSyncList.length){if(0<=this.idSyncList.indexOf("google")){var s=this;i.push(function(){var t,i,e="&td_client_id="+s.td.client.track.uuid+"&td_host="+document.location.host+"&account="+s.ac;t="cm.g.doubleclick.net/pixel?google_nid=treasuredata_dmp&google_cm&td_write_key=8151/fcd628065149d648b80f11448b4083528c0d8a91&td_global_id=td_global_id"+e,(i=document.createElement("img")).src=("https:"===document.location.protocol?"https://":"http://")+t,i.width=1,i.height=1,i.style.display="none",document.body.appendChild(i)})}}return function(){i.forEach(function(t){t()})}},i.prototype._buildCreateScriptFunc=function(s){return function(){var t=s,i=n.createElement("script");i.type="text/javascript",i.async=!0,i.src=t;var e=n.getElementsByTagName("script")[0];e.parentNode.insertBefore(i,e)}},i.prototype.sendRequest=function(){this.sent||(this.td.trackEvent(this.table,{},this.success,this.fail),this.sent=!0)},i.prototype.boot=function(){this._setDmpCallbacks(),0!==this.dmpCb.funcs.length?this.dmpCb.funcs.forEach(function(t){t()}):this.sendRequest()},e[s]=i}(0,window,document,"TDWrapper");

//var tdVisitorId = {{candidate_id}};
var tdVisitorId = 'aaa';
var _opts = {
  initParams : {
    host: 'in.treasuredata.com',
    writeKey: '9245/36083a629905e1319ef47f071c5d06ff870ec9a4',
    database: 'test_db'
  },
  table : 'se_1485',
  tokenIntimateMerger : 'MOQPTLyxUnQxiIkb8Mzm7Q',
  customParam : {user_id: tdVisitorId},
  trackCrossDomain : true,
  idSyncList : ['google'],
};
var tdw = new TDWrapper(_opts);
tdw.boot();
