(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,e,t){n.exports=t.p+"static/media/landing_img.26c57035.svg"},29:function(n,e,t){n.exports=t(45)},34:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(20),i=t.n(a),c=(t(34),t(8)),l=t(7),u=t(16),d=t(12),s=t.n(d),p=t(21),f=function(){var n=Object(p.a)(s.a.mark(function n(e){var t,r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.cityName,"&APIKEY=8004ec5d469862255ead99a28fafbe12&units=metric&lang=pl"));case 2:if(200===(t=n.sent).status){n.next=7;break}throw new Error("cannot fetch this city!");case 7:return n.next=9,t.json();case 9:return r=n.sent,n.abrupt("return",{lon:r.coord.lon,lat:r.coord.lat,temp:r.main.temp,description:r.weather[0].description,pressure:r.main.pressure,humidity:r.main.humidity,wind:r.wind.speed});case 11:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),m=t(3),h=t(2);function g(){var n=Object(m.a)(["\n    font-family: Roboto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content:center;\n    grid-row: 7/14;\n    grid-column: 5/9;\n    background-color:  #fff;\n    border: 2px solid  #0D68F1;\n    border-radius: 10px;\n    animation: "," 1s  linear;\n    position: relative;\n    color: #0D68F1;\n    & h3{\n        position: absolute;\n        font-weight: 800;\n        top: 20px;\n        font-size: 3em;\n    }\n    & p{\n        font-size: 2em;\n        text-align: left;\n        line-height: 1.5;\n    }\n"]);return g=function(){return n},n}function b(){var n=Object(m.a)(["\nfrom {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n\n  }\n"]);return b=function(){return n},n}var w=Object(h.keyframes)(b()),x=h.default.div(g(),w),v=function(n){return o.a.createElement(x,null,o.a.createElement("h3",null,"Pogoda dla ",n.cityName),o.a.createElement("p",null,"Temperatura: ",n.data.temp,"\xb0C"),o.a.createElement("p",null,n.data.description),o.a.createElement("p",null,"Ci\u015bnienie: ",n.data.pressure," hPa"),o.a.createElement("p",null,"Wilgotno\u015b\u0107: ",n.data.humidity,"%"),o.a.createElement("p",null,"Pr\u0119dko\u015b\u0107 wiatru: ",n.data.wind," m/s"))};function y(){var n=Object(m.a)(["\n    grid-column: 5/9;\n    grid-row: 4;\n    display: flex;\n    justify-content: center;\n\n    align-items: center;\n    & input{\n        width: 80%;\n        height: 100%;\n        border: none;\n        border-top-left-radius: 10px ;\n        border-bottom-left-radius: 10px ;\n        border: 2px solid #0D68F1;\n        padding: 10px;\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.4);\n        box-sizing:  border-box;\n        font-size: 1.5em;\n        color: #0D68F1;\n        border-right:none;\n        font-weight: 700;\n    }\n    & button {\n        width: 20%;\n        height: 100%;\n        border: none;\n        border: 1px solid #0D68F1;\n        border-top-right-radius: 10px ;\n        border-bottom-right-radius: 10px ;\n        color: white;\n        font-weight: 700;\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.4);\n        background-color:  #0D68F1;\n        transition-duration: 0.5s;\n    }\n    & button:hover{\n        color: #0D68F1;\n        background-color: white;\n        cursor: pointer;\n\n    }\n"]);return y=function(){return n},n}var E=h.default.div(y()),k=function(n){return o.a.createElement(E,null,o.a.createElement("input",{onChange:function(e){return n.inputChangeEventListener(e.target.value)},placeholder:"Podaj miasto"}),o.a.createElement("button",{onClick:n.buttonEventListener},"Sprawd\u017a pogod\u0119"))};function j(){var n=Object(m.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto&display=swap');\n    width:100vw;\n    max-width: 100%;\n    font-size: 10px;\n    height: auto;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n    grid-auto-rows: 5vh;\n    grid-gap: 20px;\n"]);return j=function(){return n},n}var z=h.default.div(j()),O=function(n){return o.a.createElement(z,null,n.children)};function D(){var n=Object(m.a)(["\n    grid-column: 1/13;\n    grid-row: 1;\n    height: 7vh;\n    background-color :white;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    & h1{\n        color: #0D68F1;\n        font-family: Pacifico;\n        font-size: 2.7em;\n    }\n"]);return D=function(){return n},n}var F=h.default.header(D()),P=function(){return o.a.createElement(F,null,o.a.createElement("h1",null,"Pogodynka"))},C=function(){var n=Object(r.useState)("Krosno"),e=Object(u.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)({lon:"",lat:"",temp:0,description:""}),c=Object(u.a)(i,2),l=c[0],d=c[1];return o.a.createElement(O,null,o.a.createElement(P,null),o.a.createElement(k,{buttonEventListener:function(){f({cityName:t}).then(function(n){return d(n)})},inputChangeEventListener:function(n){a(n)}}),""!==l.lon&&o.a.createElement(v,{cityName:t,data:l}))},R=t(24),N=t(25),W=t.n(N);function L(){var n=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 10vw;\n    height: 5vh;\n    background-color: #fff;\n    border: 3px solid #0D68F1;\n    grid-column: 2;\n    border-radius: 10px;\n    grid-row: 9;\n    color: #0D68F1;\n    font-size: 2em;\n    font-family: Roboto;\n    text-decoration: none;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    transition-duration: 0.5s;\n    &:hover{\n        transform: scale(1.1);\n        cursor: pointer;\n    }\n"]);return L=function(){return n},n}function S(){var n=Object(m.a)(["\nfont-family: Roboto;\ngrid-column: 2/6;\ngrid-row: 6;\nfont-size: 2em;\ncolor: #0D68F1;\nopacity: 0.7;\nfont-weight: 400;\nline-height: 1.5;\n"]);return S=function(){return n},n}function A(){var n=Object(m.a)(["\nposition: absolute;\nbottom: 20vh;\nright: 5vw;\nheight: 60vh;\nwidth: auto;\n"]);return A=function(){return n},n}function B(){var n=Object(m.a)(["\n    position: absolute;\n    bottom: 0px;\n    width: 100vw;\n    height: 20vh;\n    background-color: #0D68F1;\n"]);return B=function(){return n},n}function I(){var n=Object(m.a)(["\n    font-family: Roboto;\n    grid-column: 2/5;\n    grid-row: 4;\n    font-size: 3.6em;\n    color: #0D68F1;\n    font-weight: 700;\n"]);return I=function(){return n},n}var J=h.default.h1(I()),K=h.default.footer(B()),q=h.default.img(A()),T=h.default.p(S()),Y=Object(h.default)(c.b)(L()),$=function(){return o.a.createElement(O,null,o.a.createElement(P,null),o.a.createElement(J,null,"Sprawd\u017a pogod\u0119 w okolicy!"),o.a.createElement(T,null,"No og\xf3lnie to kiedy\u015b b\u0119dzie tutaj jaki\u015b fajny opis. W skr\xf3cie Pogodynka to taka aplikacja \u017ce sobie sprawdzasz pogod\u0119 napisana tylko po to \u017ceby utrwali\u0107 pewne skillsy. Dzi\u0119ki za uwag\u0119. Ps korzystam z Open Weather Api. Ps szukam pracy"),o.a.createElement(q,{src:W.a}),o.a.createElement(Y,{to:"/client"},"Przejd\u017a do aplikacji"),o.a.createElement(K,null,"a"))},_=function(){return o.a.createElement(c.a,null,o.a.createElement(R.Reset,null),o.a.createElement(l.a,{exact:!0,path:"/",component:$}),o.a.createElement(l.a,{path:"/client",component:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(c.a,{basename:"/pogodynka"},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.85367236.chunk.js.map