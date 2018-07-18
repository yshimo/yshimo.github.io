!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set","trackEvent","trackPageview","trackClicks","ready"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/1.9.1/td.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("Treasure",this);

!function(t,s,n,i){"use strict";var e=function(t){this.version="0.1.5",this.customParam=t.customParam||{},this.success=this._prepareSuccessCallback(t.successCallback||[]),this.fail=t.errorCallback||void 0,this.table=t.table,this.trackClicks=t.trackClicks||!1,this.trackCrossDomain=t.trackCrossDomain||!1,this.id="tdw_"+Math.random().toString(36).substring(7),this.sent=!1,this.tokenIntimateMerger=t.tokenIntimateMerger||void 0,this.dmpCb={list:{},funcs:[],cnt:0};var e=new s.Treasure(t.initParams);return e.set(this.table,this.customParam),this.trackClicks&&e.trackClicks(),this.trackCrossDomain&&e.set("$global","td_global_id","td_global_id"),this.td=e,s[i][this.id]=this};e.prototype._setDmpCallbacks=function(){var t=this;if(void 0!==t.tokenIntimateMerger){var e={parent:t,onReceive:function(t){var e={};void 0!==t.imid&&(e.imid=t.imid),void 0!==t.segment_eids&&(e.im_segmentids=t.segment_eids),this.parent._onDmpCallback(e)}},s="//sync.im-apps.net/imid/segment?token="+t.tokenIntimateMerger+"&callback="+encodeURIComponent(i+"."+t.id+".dmpCb.list.im.onReceive");t.dmpCb.list.im=e,t.dmpCb.funcs.push(t._buildCreateScriptFunc(s))}},e.prototype._onDmpCallback=function(t){this.td.set(this.table,t),this.dmpCb.cnt++,Object.keys(this.dmpCb.list).length===this.dmpCb.cnt&&this.sendRequest()},e.prototype._prepareSuccessCallback=function(t){var e=[];return void 0!==typeof t&&"function"==typeof t&&e.push(t),function(){e.forEach(function(t){t()})}},e.prototype._buildCreateScriptFunc=function(i){return function(){var t=i,e=n.createElement("script");e.type="text/javascript",e.async=!0,e.src=t;var s=n.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s)}},e.prototype.sendRequest=function(){this.sent||(this.td.trackEvent(this.table,{},this.success,this.fail),this.sent=!0)},e.prototype.boot=function(){this._setDmpCallbacks(),0!==this.dmpCb.funcs.length?this.dmpCb.funcs.forEach(function(t){t()}):this.sendRequest()},s[i]=e}(0,window,document,"TDWrapper");

var _opts = {
  initParams : {
    host: 'in.treasuredata.com',
    writeKey: '9245/36083a629905e1319ef47f071c5d06ff870ec9a4',
    database: 'test_db'
  },
  table : 'se_1323',
  tokenIntimateMerger : 'MOQPTLyxUnQxiIkb8Mzm7Q',
  trackClicks : true,
  trackCrossDomain : true,
};
var tdw = new TDWrapper(_opts);
tdw.boot();
