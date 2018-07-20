!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["blockEvents","unblockEvents","setSignedMode","setAnonymousMode","resetUUID","addRecord","fetchGlobalID","set","trackEvent","trackPageview","trackClicks","ready"],n=0;n<s.length;n++){var c=s[n];e[t].prototype[c]=r(c)}var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/2.1/td.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}}("Treasure",this);

!function(t,s,n,e){"use strict";var i=function(t){this.version="0.1.5",this.customParam=t.customParam||{},this.success=this._prepareSuccessCallback(t.successCallback||[]),this.fail=t.errorCallback||void 0,this.table=t.table,this.tableName=t.tableName,this.trackClicks=t.trackClicks||!1,this.trackCrossDomain=t.trackCrossDomain||!1,this.id="tdw_"+Math.random().toString(36).substring(7),this.sent=!1,this.tokenIntimateMerger=t.tokenIntimateMerger||void 0,this.dmpCb={list:{},funcs:[],cnt:0};var i=new s.Treasure(t.initParams);return i.set(this.table,this.customParam),this.trackClicks&&(i.set(this.tableName,this.customParam),i.trackClicks(this.tableName)),this.trackCrossDomain&&i.set("$global","td_global_id","td_global_id"),this.td=i,s[e][this.id]=this};i.prototype._setDmpCallbacks=function(){var t=this;if(void 0!==t.tokenIntimateMerger){var i={parent:t,onReceive:function(t){var i={};void 0!==t.imid&&(i.imid=t.imid),void 0!==t.segment_eids&&(i.im_segmentids=t.segment_eids),this.parent._onDmpCallback(i)}},s="//sync.im-apps.net/imid/segment?token="+t.tokenIntimateMerger+"&callback="+encodeURIComponent(e+"."+t.id+".dmpCb.list.im.onReceive");t.dmpCb.list.im=i,t.dmpCb.funcs.push(t._buildCreateScriptFunc(s))}},i.prototype._onDmpCallback=function(t){this.td.set(this.table,t),this.dmpCb.cnt++,Object.keys(this.dmpCb.list).length===this.dmpCb.cnt&&this.sendRequest()},i.prototype._prepareSuccessCallback=function(t){var i=[];return void 0!==typeof t&&"function"==typeof t&&i.push(t),function(){i.forEach(function(t){t()})}},i.prototype._buildCreateScriptFunc=function(e){return function(){var t=e,i=n.createElement("script");i.type="text/javascript",i.async=!0,i.src=t;var s=n.getElementsByTagName("script")[0];s.parentNode.insertBefore(i,s)}},i.prototype.sendRequest=function(){this.sent||(this.td.trackEvent(this.table,{},this.success,this.fail),this.sent=!0)},i.prototype.boot=function(){this._setDmpCallbacks(),0!==this.dmpCb.funcs.length?this.dmpCb.funcs.forEach(function(t){t()}):this.sendRequest()},s[e]=i}(0,window,document,"TDWrapper");

var _opts = {
  initParams : {
    host: 'in.treasuredata.com',
    writeKey: '9245/36083a629905e1319ef47f071c5d06ff870ec9a4',
    database: 'test_db',
    startInSignedMode: true
  },
  table : 'se_1323',
  tableName : 'clicks',
  tokenIntimateMerger : 'MOQPTLyxUnQxiIkb8Mzm7Q',
  customParam: {login_id: 'shimo'},
  trackClicks : true,
  trackCrossDomain : true,
};
var tdw = new TDWrapper(_opts);
tdw.boot();
