(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)a=i[p],s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),s=o.n(n);s.a},"080f":function(e,t,o){},2625:function(e,t,o){"use strict";var n=o("9698"),s=o.n(n);s.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],a=(o("6b54"),o("a481"),o("66f9")),i=(o("1ec6"),o("cc7d")),c=o.n(i),l={name:"app",components:{chessboard:a["chessboard"]},watch:{positionInfo:function(e,t){var o=this;console.log("new move"),e!==t&&(console.log(e),o.socket.send(JSON.stringify({fen:e.fen})))}},data:function(){return{currentFen:"",positionInfo:null,player:"white",socket:null,uuid:null}},methods:{uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,o="x"==e?t:3&t|8;return o.toString(16)})},showInfo:function(e){this.positionInfo=e},resetGame:function(){if(!confirm("Want to promote to rook? Queen by default"))return!1;this.currentFen=""},promote:function(){return confirm("Want to promote to rook? Queen by default")?"r":"q"}},created:function(){},mounted:function(){}},u=l,p=(o("034f"),o("2877")),f=Object(p["a"])(u,s,r,!1,null,null,null),m=f.exports,d=o("8c4f"),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"room"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.room_name,expression:"room_name"}],staticClass:"btn",attrs:{type:"text",placeholder:"Digite o nome da sala"},domProps:{value:e.room_name},on:{input:function(t){t.target.composing||(e.room_name=t.target.value)}}}),o("router-link",{staticClass:"btn",attrs:{to:"/"+e.room_name}},[e._v("Entrar")]),o("table",{staticClass:"rooms_table"},[e._m(0),o("tbody",e._l(e.rooms,function(t,n){return o("tr",[o("td",[e._v("\n         "+e._s(n)+"\n       ")]),o("td",[e._v("\n         "+e._s(t.sessions.length)+"\n       ")]),o("td",[o("router-link",{staticClass:"btn",attrs:{to:"/"+n}},[e._v("Join")])],1)])}),0)])],1)},v=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("\n         Room\n       ")]),o("th",[e._v("\n         Users\n       ")]),o("th")])])}],y=o("7618"),h={name:"app",components:{chessboard:a["chessboard"]},watch:{positionInfo:function(e,t){var o=this;console.log("new move"),e!==t&&(console.log(e),o.socket.send(JSON.stringify({fen:e.fen})))}},data:function(){return{currentFen:"",positionInfo:null,player:"white",socket:null,rooms:null,room_name:"",ws_server:"/ws"}},methods:{showInfo:function(e){this.positionInfo=e},resetGame:function(){if(!confirm("Want to promote to rook? Queen by default"))return!1;this.currentFen=""},promote:function(){return confirm("Want to promote to rook? Queen by default")?"r":"q"}},created:function(){},mounted:function(){var e=this;this.socket=new c.a(this.ws_server),this.socket.onopen=function(){console.log("connected");setInterval(function(){e.socket.send(JSON.stringify({type:"get_rooms"}))},2e3)},e.socket.onmessage=function(t){var o;console.log(t.data),console.log(Object(y["a"])(t.data)),o="string"==typeof t.data?JSON.parse(t.data):t.data,e.rooms=o,console.log(o),console.log(o)},e.socket.onclose=function(){e.socket=new c.a(this.ws_server),console.log("close")}}},_=h,b=(o("2625"),Object(p["a"])(_,g,v,!1,null,null,null)),w=b.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"game"}},[o("div",{attrs:{id:"board"}},[o("div",{attrs:{id:"table"}},["watcher"==e.player.role?o("span",[e._v("You've joined as watcher")]):e._e(),e.positionInfo&&e.positionInfo.turn!==e.player.role?o("p",[e._v("Now it's "),o("span",{staticStyle:{}},[e._v(e._s(e.positionInfo.turn)+"'s ")]),e._v(" turn")]):e._e(),e.positionInfo&&e.positionInfo.turn==e.player.role?o("p",[e._v("It's "),o("span",{staticStyle:{color:"#FF0000"}},[e._v("your")]),e._v(" turn")]):e._e(),"white"==e.player.role?o("chessboard",{staticClass:"chessboard",attrs:{fen:e.currentFen,onPromotion:e.promote},on:{onMove:e.showInfo}}):e._e(),"black"==e.player.role?o("chessboard",{staticClass:"chessboard",attrs:{orientation:"black",fen:e.currentFen,onPromotion:e.promote},on:{onMove:e.showInfo}}):e._e(),"watcher"==e.player.role?o("chessboard",{staticClass:"chessboard",staticStyle:{"pointer-events":"none"},attrs:{fen:e.currentFen}}):e._e()],1),"watcher"!==e.player.role?o("div",{attrs:{id:"chat-box"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],staticClass:"msg_area",attrs:{rows:"4",cols:"30",placeholder:"Digite a mensagem"},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}}),o("br"),o("button",{staticClass:"btn",on:{click:function(t){return e.sendMessage()}}},[e._v("Send")])]):e._e(),o("div",{staticClass:"message-board",staticStyle:{"max-height":"100px","overflow-y":"scroll"}},e._l(e.messages,function(t){return o("div",["player_message"==t.type&&t.player==e.player.id?o("span",{staticClass:"me"},[e._v("\n      "+e._s(t.time)+": "+e._s(t.msg)+"\n      ")]):e._e(),"player_message"==t.type&&t.player!==e.player.id?o("span",{staticClass:"remote"},[e._v("\n    "+e._s(t.time)+": "+e._s(t.msg)+"\n    ")]):e._e(),"sys_message"==t.type?o("span",{staticClass:"sys_message"},[e._v("\n    "+e._s(t.msg)+"\n    ")]):e._e(),o("br"),o("br")])}),0)])])},k=[],I={name:"app",components:{chessboard:a["chessboard"]},watch:{currentFen:function(e,t){var o=this;console.log("new move"),console.log(o.positionInfo)}},data:function(){return{currentFen:"",positionInfo:null,player:"white",username:"",msg:"",messages:[],socket:null,ws_server:"/ws"}},methods:{sendMessage:function(){var e=this;if(""==e.msg.length)return!1;var t=new Date;e.socket.send(JSON.stringify({type:"new_message",player_id:e.player.id,room:e.room,msg:e.msg,time:t.toLocaleTimeString()})),this.msg=""},showInfo:function(e){var t=this;t.socket&&t.socket.send(JSON.stringify({type:"new_move",player:t.player.role,room:t.room,fen:e.fen})),this.positionInfo=e,console.log(t.positionInfo),t.positionInfo.turn==t.player.role?(console.log("enable click"),document.getElementById("table").style.pointerEvents="auto"):(console.log("disable click"),document.getElementById("table").style.pointerEvents="none")},resetGame:function(){if(!confirm("Want to reset the game?"))return!1;this.currentFen=""},promote:function(){return confirm("Want to promote to rook? Queen by default")?"r":"q"}},created:function(){this.room=this.$route.params.room_name},mounted:function(){var e=this;this.socket=new c.a(this.ws_server,"websocket",{debug:!0}),this.socket.onopen=function(){console.log("connected");setInterval(function(){e.socket.send(JSON.stringify({type:"keepalive"}))},3e3);e.socket.send(JSON.stringify({type:"new_player",room:e.room}))},e.socket.onmessage=function(t){var o;console.log("ao"),console.log(t.data),console.log(Object(y["a"])(t.data)),o="string"==typeof t.data?JSON.parse(t.data):t.data,console.log(o.type),"set_player"==o.type&&(console.log("setting color"),e.player=o,console.log(e.player)),"update"==o.type&&(console.log("new move"),e.currentFen=o.fen),"sys_message"==o.type&&(console.log("new sys message"),e.messages.unshift({type:"sys_message",msg:o.text})),"message"==o.type&&(console.log("new message"),e.messages.unshift({type:"player_message",player:o.player_id,time:o.time,msg:o.text}))},e.socket.onclose=function(){e.socket=new c.a(this.ws_server,"websocket",{debug:!0}),console.log("close")}}},O=I,S=(o("7975"),Object(p["a"])(O,x,k,!1,null,null,null)),j=S.exports;n["a"].use(d["a"]);var C=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"room",component:w},{path:"/:room_name",name:"play",component:j}]});n["a"].config.productionTip=!1,new n["a"]({router:C,render:function(e){return e(m)}}).$mount("#app")},"64a9":function(e,t,o){},7975:function(e,t,o){"use strict";var n=o("080f"),s=o.n(n);s.a},9698:function(e,t,o){}});
//# sourceMappingURL=app.cd45e951.js.map