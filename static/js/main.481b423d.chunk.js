(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(12),n(3)),s=n(4),l=n(6),u=n(5),h=(n(13),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robot"}),r.a.createElement("h3",null,t),r.a.createElement("p",null,n))}),m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,email:e.email})})))},d=(n(14),function(e){return r.a.createElement("input",{className:"input",type:"search",onChange:e.search,placeholder:"Search for Robots"})}),f=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={robots:[],searchField:""},e.onSearch=function(t){e.setState({searchField:t.target.value})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"header"},"ROBOFRIENDS"),r.a.createElement(d,{search:this.onSearch}),r.a.createElement(m,{robots:t}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.481b423d.chunk.js.map