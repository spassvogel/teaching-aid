(this["webpackJsonpteaching-aid"]=this["webpackJsonpteaching-aid"]||[]).push([[0],{35:function(e){e.exports=JSON.parse('[{"position":[3560,1400],"text":"Distributiecentrum (DC)","target":"steurweg"},{"position":[4700,1800],"text":"Productie","target":"zalmweg"},{"position":[600,1700],"text":"Goederenstroom","target":"steurweg"}]')},36:function(e){e.exports=JSON.parse('[{"position":[1560,1000],"text":"Stellingen","content":[{"label":"Over stellingen.pptx","url":"https://docs.google.com/presentation/d/e/2PACX-1vSYN5W6YHGcyAqrDxPTh8_CQWAOYAAjOfG1Yfmry_ercJ1cbSzxC3RrSBdNk3cZ4o-b-2V3JtjBLNRV/pub?start=false&loop=false&delayms=3000"},{"label":"Youtube","url":"https://www.youtube.com/embed/a3X9OJd8-_M"}]},{"position":[2700,1100],"text":"Overig","content":[{"label":"Warehouse management.pdf","url":"https://www.veeqo.com/wp-content/uploads/2018/04/Warehouse-Management-PDF.pdf"}]},{"position":[1600,700],"text":"Expeditie","content":[{"label":"youtube","url":"https://www.youtube.com/embed/iWKu6WNFf9M"}]}]')},37:function(e){e.exports=JSON.parse('[{"position":[2070,800],"text":"Veiligheidsroutes / signalering / eerste hulp","content":[]},{"position":[3177,1080],"text":"Routing","content":[]},{"position":[4337,1340],"text":"Overig","content":[]},{"position":[2467,1240],"text":"Stellingen","content":[]},{"position":[1037,1240],"text":"Interne transportmiddelen","content":[]},{"position":[797,1512],"text":"Losdock","content":[]},{"position":[1357,1660],"text":"Kantoor","content":[]},{"position":[1577,2180],"text":"Buitengebied","content":[]},{"position":[2172,1640],"text":"VAL/VAS","content":[]}]')},42:function(e){e.exports=JSON.parse('{"alpha":{"start":0.25,"end":0},"scale":{"start":0.04,"end":3.59,"minimumScaleMultiplier":1},"color":{"start":"#85888d","end":"#100f0c"},"speed":{"start":100,"end":200,"minimumSpeedMultiplier":1},"acceleration":{"x":-40,"y":-100},"maxSpeed":200,"startRotation":{"min":265,"max":270},"noRotation":false,"rotationSpeed":{"min":8,"max":0},"lifetime":{"min":0.5,"max":4.05},"blendMode":"normal","frequency":0.0005,"emitterLifetime":-1,"maxParticles":300,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}')},45:function(e,t,n){e.exports=n(76)},50:function(e,t,n){},51:function(e,t,n){},63:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),r=n(26),o=n.n(r),c=(n(50),n(20)),l=(n(51),n(35)),s=n(36),u=n(37),m=n(4),d=n(19),p=n(12),g=n(39),f=i.a.forwardRef((function(e,t){var n=Object(p.useApp)();if(n){var a="url('".concat("/teaching-aid","/img/cursors/dwarven_gauntlet_extra_6.png'), auto");n.renderer.plugins.interaction.cursorStyles.pointer=a}return i.a.createElement(h,Object.assign({app:n},e,{ref:t}))})),h=Object(p.PixiComponent)("Viewport",{create:function(e){var t=new g.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker,interaction:e.app.renderer.plugins.interaction}),n=e.minScale,a=void 0===n?.25:n,i=e.maxScale,r=void 0===i?1:i;return t.drag().pinch().wheel().clamp({direction:"x"}).clampZoom({minScale:a,maxScale:r}).decelerate(),t}}),w=f,v=n(78),b=i.a.forwardRef((function(e,t){var n=Object(a.useRef)(null),r=e.text,o=Object(a.useMemo)((function(){return new m.TextStyle({align:"center",lineHeight:50,wordWrap:!0,wordWrapWidth:440,fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:40,textBaseline:"alphabetic",fontWeight:"400"})}),[]),c=Object(a.useMemo)((function(){var e=m.TextMetrics.measureText(r,o);return Math.min(e.height+60,210)}),[r,o]);return Object(a.useEffect)((function(){var e=n.current,t=new m.Graphics;t.beginFill(12245589),t.drawRect(-220,0,440,c-60),t.endFill(),e.mask=t,e.addChild(t)}),[c,n]),i.a.createElement(p.Container,Object.assign({interactive:!0,buttonMode:!0,anchor:[.5,1],ref:t},e),i.a.createElement(p.Graphics,{draw:function(e){e.lineStyle(4,0),e.beginFill(16777215),e.drawRoundedRect(-250,0,500,-c,10),e.endFill()}},i.a.createElement(p.Text,{ref:n,text:r,anchor:[.5,0],y:30-c,style:o})))}));v.a.registerPIXI(m),d.a.registerPlugin(v.a);var x,E=function(e){var t=e.content,n=e.image,r=e.children,o=e.worldWidth,c=e.worldHeight,l=e.canvasWidth,s=e.canvasHeight,u=e.blur,g=void 0!==u&&u,f=Object(a.useRef)(null),h=Object(a.useRef)(null);Object(a.useEffect)((function(){if(f.current){var e=f.current;return e.resize(l,s,o,c),e.scale=new m.Point(.5,.5),e.moveCenter(o/2,c/2),function(){}}}),[l,s,o,c]),Object(a.useEffect)((function(){g?d.a.to(f.current,{duration:.5,pixi:{blur:20}}):d.a.to(f.current,{duration:.5,pixi:{blur:0}})}),[g]);var v=function(t){var n=new m.Point(t.position[0],t.position[1]);return i.a.createElement(b,{key:t.text,text:t.text,name:t.text,position:n,pointertap:function(){return function(t){e.labelClick(t,f.current,h.current)}(t)},interactive:!0})};return i.a.createElement(p.Stage,{width:l,height:s,options:{transparent:!0}},i.a.createElement(w,{screenWidth:l,screenHeight:s,worldWidth:o,worldHeight:c,ref:f},i.a.createElement(p.Sprite,{image:"".concat("/teaching-aid","/").concat(n),ref:h},r,t.map((function(e,t){return v(e)})))))},O=n(44),S=n(40),W=Object(p.PixiComponent)("ParticleEmitter",{create:function(){return new m.ParticleContainer},applyProps:function(e,t,n){var a=n.image,i=n.config,r=Object(O.a)(n,["image","config"]);Object(p.applyDefaultProps)(e,t,r);var o=this._emitter;if(!o){o=new S.a(e,[m.Texture.from(a)],i);var c=performance.now();o.emit=!0,function e(){o.raf=requestAnimationFrame(e);var t=performance.now();o.update(3e-4*(t-c)),c=t}()}this._emitter=o},willUnmount:function(){this._emitter&&(this._emitter.emit=!1,cancelAnimationFrame(this._emitter.raf))}}),k=n(41),j=n(42),C=function(e){var t=e.content,n=e.canvasWidth,a=e.canvasHeight;return console.log("overview"),i.a.createElement(E,{content:t,image:"images/map/landscape.png",worldWidth:6528,worldHeight:2202,canvasWidth:n,canvasHeight:a,labelClick:function(t,i,r){var o=new k.a(.05,[n/2,a/2],300);r.filters=[o],d.a.to(o,{duration:.8,strength:.09});var c=new m.Point(t.position[0],t.position[1]-30);d.a.to(i,{duration:.8,onUpdate:function(){i.moveCenter(c)},pixi:{scale:1},onComplete:function(){e.labelClicked(t)}})}},i.a.createElement(W,{name:"smoke",x:2491,y:793,image:"".concat("/teaching-aid","/images/map/smoke.png"),config:j}))},y=(n(63),n(43)),H=n.n(y),P=(n(75),function(e){var t=e.content,n=e.onClose,a=function(){n()};return i.a.createElement(H.a,{isOpen:!0,ariaHideApp:!1,overlayClassName:"modal-overlay",className:"modal",onRequestClose:a},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,t.text," "),i.a.createElement("div",{className:"modal-close",onClick:function(){return a()}})),i.a.createElement("ul",null,t.content.map((function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.label))})))))}),z=function(e){var t=e.content,n=e.canvasWidth,r=e.canvasHeight,o=Object(a.useState)(null),l=Object(c.a)(o,2),s=l[0],u=l[1],m=M(e.map);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"button-home",onClick:e.goBack}),i.a.createElement(E,{content:t,image:m,worldWidth:5487,worldHeight:2707,canvasWidth:n,canvasHeight:r,labelClick:function(e){u(e)}}),s&&i.a.createElement(P,{content:s,onClose:function(){u(null)}}))},M=function(e){switch(e){case x.zalmweg:return"images/map/zalmweg.png";case x.steurweg:default:return"images/map/steurweg.png"}};!function(e){e[e.overview=0]="overview",e[e.zalmweg=1]="zalmweg",e[e.steurweg=2]="steurweg"}(x||(x={}));var R=function(){var e=Object(a.useState)(x.overview),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(1200),m=Object(c.a)(o,2),d=m[0],p=m[1],g=Object(a.useState)(600),f=Object(c.a)(g,2),h=f[0],w=f[1];Object(a.useEffect)((function(){var e=function(){var e=Math.min(window.innerWidth,window.outerWidth),t=Math.min(window.innerHeight,window.outerHeight);p(e),w(t)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var v=function(e){switch(e.target){case"zalmweg":r(x.zalmweg);break;case"steurweg":r(x.steurweg)}},b=function(){r(x.overview)};return i.a.createElement(i.a.Fragment,null,n===x.overview&&i.a.createElement(C,{content:l,labelClicked:v,canvasWidth:d,canvasHeight:h}),n===x.steurweg&&i.a.createElement(z,{content:u,map:x.steurweg,labelClicked:v,goBack:b,canvasWidth:d,canvasHeight:h}),n===x.zalmweg&&i.a.createElement(z,{content:s,map:x.zalmweg,labelClicked:v,goBack:b,canvasWidth:d,canvasHeight:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.2b5e86ca.chunk.js.map