(function(e){function t(t){for(var r,u,i=t[0],s=t[1],l=t[2],p=0,f=[];p<i.length;p++)u=i[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("27fb"),o=n.n(r);o.a},"27fb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h3",[e._v("Связанные компоненты на Vue")]),n("TwoWayDataBinding")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"button fit small",attrs:{placeholder:"Мы связаны!"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("hr"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"button fit small",attrs:{placeholder:"Мы связаны!"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])},i=[],s={props:{message:String}},l=s,c=n("2877"),p=Object(c["a"])(l,u,i,!1,null,null,null),f=p.exports,d={name:"app",components:{TwoWayDataBinding:f}},m=d,v=(n("034f"),Object(c["a"])(m,o,a,!1,null,null,null)),g=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.382327c1.js.map