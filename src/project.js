window.__require=function t(e,n,i){function s(r,a){if(!n[r]){if(!e[r]){var c=r.split("/");if(c=c[c.length-1],!e[c]){var h="function"==typeof __require&&__require;if(!a&&h)return h(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+r+"'")}r=c}var u=n[r]={exports:{}};e[r][0].call(u.exports,function(t){return s(e[r][1][t]||t)},u,u.exports,t,e,n,i)}return n[r].exports}for(var o="function"==typeof __require&&__require,r=0;r<i.length;r++)s(i[r]);return s}({BGLayer:[function(t,e,n){"use strict";cc._RF.push(e,"0d3d8eI+NhC9bSAMZF9vfJi","BGLayer");var i=t("GameInfo");cc.Class({extends:cc.Component,properties:{listFrame:[cc.SpriteFrame],bg1:cc.Sprite,bg2:cc.Sprite,speed:20},start:function(){},update:function(t){this.speed=i.instance.GameSpeed;var e=t*this.speed;this.bg1.node.x-=e,this.bg2.node.x-=e,this.bg1.node.x<0&&(this.bg2.node.x=this.bg1.node.x+this.bg1.node.width),this.bg2.node.x<0&&(this.bg1.node.x=this.bg2.node.x+this.bg2.node.width)}}),cc._RF.pop()},{GameInfo:"GameInfo"}],BottomBar:[function(t,e,n){"use strict";cc._RF.push(e,"79b9c5WzktC6YBCL/hyjoyv","BottomBar");var i=t("GameInfo"),s=t("GameConst"),o=t("EventCode"),r=t("GameEmitter");cc.Class({extends:cc.Component,properties:{btnJump:cc.Node,btnDash:cc.Node},start:function(){this.btnJump.on(cc.Node.EventType.TOUCH_END,this.onBtnJump,this),this.btnDash.on(cc.Node.EventType.TOUCH_START,this.onBtnDash,this),this.btnDash.on(cc.Node.EventType.TOUCH_END,this.onBtnEnd,this),this.btnDash.on(cc.Node.EventType.TOUCH_CANCEL,this.onBtnEnd,this)},onBtnJump:function(){r.instance.emit(o.PLAYER_JUMP)},onBtnDash:function(t){i.instance.GameSpeed=s.DASH_SPEED,r.instance.emit(o.PLAYER_DASH)},onBtnEnd:function(){i.instance.GameSpeed=s.NORMAL_SPEED}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter",GameInfo:"GameInfo"}],BulletLayer:[function(t,e,n){"use strict";cc._RF.push(e,"429d82zpKVL1KE3zW/mGAL7","BulletLayer");var i=t("EventCode"),s=t("GameEmitter"),o=t("GameConst");cc.Class({extends:cc.Component,properties:{fireball:cc.Prefab,explosion:cc.Prefab,player:cc.Node},onLoad:function(){this.initEvents()},initEvents:function(){s.instance.registerEvent(i.FIRE,this.onFire.bind(this)),s.instance.registerEvent(i.UFO_CRASH,this.onUFOCrash.bind(this))},onFire:function(t){s.instance.emit(i.Sound.PLAYFX,o.SOUND.FIRE);var e=cc.instantiate(this.fireball);e.position=this.player.position,e.getComponent("Bullet").initObj(t),this.node.addChild(e)},onUFOCrash:function(t){var e=cc.instantiate(this.explosion);e.position=t.pos,this.node.addChild(e),e.getComponent(cc.Animation).on("finished",function(){e.removeFromParent(!0)},this)}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter"}],Bullet:[function(t,e,n){"use strict";cc._RF.push(e,"939f31K0bRBF6RFy8Nc+sjm","Bullet");var i=t("EventCode"),s=t("GameEmitter"),o=t("Helpers"),r=o.getAngleInDegree,a=o.getAngleInRadian,c=t("GameConst");cc.Class({extends:cc.Component,properties:{speed:1400},initObj:function(t){var e=this.node.position,n=r(e,t),i=a(e,t);this.node.angle=n,this.moveX=this.speed*Math.cos(i),this.moveY=this.speed*Math.sin(i)},checkOutScreen:function(){var t=this.node.x,e=this.node.y;(t>1920||t<0||e>1080||e<0)&&this.node.removeFromParent(!0)},update:function(t){this.node.x+=this.moveX*t,this.node.y+=this.moveY*t,this.checkOutScreen()},onCollisionEnter:function(t){t.tag==c.TAG.ENEMY&&(s.instance.emit(i.Sound.PLAYFX,c.SOUND.EXPLOSION),this.node.removeFromParent(!0))}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter",Helpers:"Helpers"}],EmemyLayer:[function(t,e,n){"use strict";cc._RF.push(e,"2fb32vnBANAj69f+hcRD/B/","EmemyLayer");t("EventCode"),t("GameEmitter"),t("GameConst");var i=t("Helpers");cc.Class({extends:cc.Component,properties:{enemies:[cc.Prefab],spawnTime:1,maxH:900,minH:200},start:function(){this.schedule(this.spawnEnemy,this.spawnTime)},spawnEnemy:function(){var t=i.getRandomInt(this.minH,this.maxH),e=this.enemies.length,n=i.getRandomInt(0,e-1),s=cc.instantiate(this.enemies[n]);s.y=t,s.x=1940,this.node.addChild(s)}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter",Helpers:"Helpers"}],EventCode:[function(t,e,n){"use strict";cc._RF.push(e,"6a634UvLlNKwqIVLdrbWvx2","EventCode");e.exports={PLAYER_JUMP:"PLAYER_JUMP",PLAYER_DASH:"PLAYER_DASH",PLAYER_END_DASH:"PLAYER_END_DASH",FIRE:"FIRE",UFO_CRASH:"UFO_CRASH",UFO_ATTACK:"UFO_ATTACK",Sound:{PLAYFX:"SOUND_PLAYFX"}},cc._RF.pop()},{}],1:[function(t,e,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function s(t){return"function"==typeof t}function o(t){return"number"==typeof t}function r(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(t){if(!o(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},i.prototype.emit=function(t){var e,n,i,o,c,h;if(this._events||(this._events={}),"error"===t&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var u=new Error('Uncaught, unspecified "error" event. ('+e+")");throw u.context=e,u}if(a(n=this._events[t]))return!1;if(s(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(r(n))for(o=Array.prototype.slice.call(arguments,1),i=(h=n.slice()).length,c=0;c<i;c++)h[c].apply(this,o);return!0},i.prototype.addListener=function(t,e){var n;if(!s(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,s(e.listener)?e.listener:e),this._events[t]?r(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,r(this._events[t])&&!this._events[t].warned&&(n=a(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(t,e){if(!s(e))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(t,i),n||(n=!0,e.apply(this,arguments))}return i.listener=e,this.on(t,i),this},i.prototype.removeListener=function(t,e){var n,i,o,a;if(!s(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(o=(n=this._events[t]).length,i=-1,n===e||s(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(r(n)){for(a=o;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},i.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(s(n=this._events[t]))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},i.prototype.listeners=function(t){return this._events&&this._events[t]?s(this._events[t])?[this._events[t]]:this._events[t].slice():[]},i.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(s(e))return 1;if(e)return e.length}return 0},i.listenerCount=function(t,e){return t.listenerCount(e)}},{}],2:[function(t,e,n){(function(t,i){"object"==typeof n&&"object"==typeof e?e.exports=i():"function"==typeof define&&define.amd?define("StateMachine",[],i):"object"==typeof n?n.StateMachine=i():t.StateMachine=i()})(this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s;for(n=1;n<arguments.length;n++)for(s in i=arguments[n])i.hasOwnProperty(s)&&(t[s]=i[s]);return t}},function(t,e,n){"use strict";var i=n(0);t.exports={build:function(t,e){var n,s,o,r=e.plugins;for(n=0,s=r.length;n<s;n++)(o=r[n]).methods&&i(t,o.methods),o.properties&&Object.defineProperties(t,o.properties)},hook:function(t,e,n){var i,s,o,r,a=t.config.plugins,c=[t.context];for(n&&(c=c.concat(n)),i=0,s=a.length;i<s;i++)r=a[i],(o=a[i][e])&&o.apply(r,c)}}},function(t,e,n){"use strict";function i(t){if(0===t.length)return t;var e,n,i=t.split(/[_-]/);if(1===i.length&&i[0][0].toLowerCase()===i[0][0])return t;for(n=i[0].toLowerCase(),e=1;e<i.length;e++)n=n+i[e].charAt(0).toUpperCase()+i[e].substring(1).toLowerCase();return n}i.prepended=function(t,e){return t+(e=i(e))[0].toUpperCase()+e.substring(1)},t.exports=i},function(t,e,n){"use strict";var i=n(0),s=n(2);function o(t,e){t=t||{},this.options=t,this.defaults=e.defaults,this.states=[],this.transitions=[],this.map={},this.lifecycle=this.configureLifecycle(),this.init=this.configureInitTransition(t.init),this.data=this.configureData(t.data),this.methods=this.configureMethods(t.methods),this.map[this.defaults.wildcard]={},this.configureTransitions(t.transitions||[]),this.plugins=this.configurePlugins(t.plugins,e.plugin)}i(o.prototype,{addState:function(t){this.map[t]||(this.states.push(t),this.addStateLifecycleNames(t),this.map[t]={})},addStateLifecycleNames:function(t){this.lifecycle.onEnter[t]=s.prepended("onEnter",t),this.lifecycle.onLeave[t]=s.prepended("onLeave",t),this.lifecycle.on[t]=s.prepended("on",t)},addTransition:function(t){this.transitions.indexOf(t)<0&&(this.transitions.push(t),this.addTransitionLifecycleNames(t))},addTransitionLifecycleNames:function(t){this.lifecycle.onBefore[t]=s.prepended("onBefore",t),this.lifecycle.onAfter[t]=s.prepended("onAfter",t),this.lifecycle.on[t]=s.prepended("on",t)},mapTransition:function(t){var e=t.name,n=t.from,i=t.to;return this.addState(n),"function"!=typeof i&&this.addState(i),this.addTransition(e),this.map[n][e]=t,t},configureLifecycle:function(){return{onBefore:{transition:"onBeforeTransition"},onAfter:{transition:"onAfterTransition"},onEnter:{state:"onEnterState"},onLeave:{state:"onLeaveState"},on:{transition:"onTransition"}}},configureInitTransition:function(t){return"string"==typeof t?this.mapTransition(i({},this.defaults.init,{to:t,active:!0})):"object"==typeof t?this.mapTransition(i({},this.defaults.init,t,{active:!0})):(this.addState(this.defaults.init.from),this.defaults.init)},configureData:function(t){return"function"==typeof t?t:"object"==typeof t?function(){return t}:function(){return{}}},configureMethods:function(t){return t||{}},configurePlugins:function(t,e){var n,i,s;for(n=0,i=(t=t||[]).length;n<i;n++)"function"==typeof(s=t[n])&&(t[n]=s=s()),s.configure&&s.configure(this);return t},configureTransitions:function(t){var e,n,i,s,o,r=this.defaults.wildcard;for(n=0;n<t.length;n++)for(i=t[n],s=Array.isArray(i.from)?i.from:[i.from||r],o=i.to||r,e=0;e<s.length;e++)this.mapTransition({name:i.name,from:s[e],to:o})},transitionFor:function(t,e){var n=this.defaults.wildcard;return this.map[t][e]||this.map[n][e]},transitionsFor:function(t){var e=this.defaults.wildcard;return Object.keys(this.map[t]).concat(Object.keys(this.map[e]))},allStates:function(){return this.states},allTransitions:function(){return this.transitions}}),t.exports=o},function(t,e,n){var i=n(0),s=n(6),o=n(1),r=[null,[]];function a(t,e){this.context=t,this.config=e,this.state=e.init.from,this.observers=[t]}i(a.prototype,{init:function(t){if(i(this.context,this.config.data.apply(this.context,t)),o.hook(this,"init"),this.config.init.active)return this.fire(this.config.init.name,[])},is:function(t){return Array.isArray(t)?t.indexOf(this.state)>=0:this.state===t},isPending:function(){return this.pending},can:function(t){return!this.isPending()&&!!this.seek(t)},cannot:function(t){return!this.can(t)},allStates:function(){return this.config.allStates()},allTransitions:function(){return this.config.allTransitions()},transitions:function(){return this.config.transitionsFor(this.state)},seek:function(t,e){var n=this.config.defaults.wildcard,i=this.config.transitionFor(this.state,t),s=i&&i.to;return"function"==typeof s?s.apply(this.context,e):s===n?this.state:s},fire:function(t,e){return this.transit(t,this.state,this.seek(t,e),e)},transit:function(t,e,n,i){var s=this.config.lifecycle,o=this.config.options.observeUnchangedState||e!==n;return n?this.isPending()?this.context.onPendingTransition(t,e,n):(this.config.addState(n),this.beginTransit(),i.unshift({transition:t,from:e,to:n,fsm:this.context}),this.observeEvents([this.observersForEvent(s.onBefore.transition),this.observersForEvent(s.onBefore[t]),o?this.observersForEvent(s.onLeave.state):r,o?this.observersForEvent(s.onLeave[e]):r,this.observersForEvent(s.on.transition),o?["doTransit",[this]]:r,o?this.observersForEvent(s.onEnter.state):r,o?this.observersForEvent(s.onEnter[n]):r,o?this.observersForEvent(s.on[n]):r,this.observersForEvent(s.onAfter.transition),this.observersForEvent(s.onAfter[t]),this.observersForEvent(s.on[t])],i)):this.context.onInvalidTransition(t,e,n)},beginTransit:function(){this.pending=!0},endTransit:function(t){return this.pending=!1,t},failTransit:function(t){throw this.pending=!1,t},doTransit:function(t){this.state=t.to},observe:function(t){if(2===t.length){var e={};e[t[0]]=t[1],this.observers.push(e)}else this.observers.push(t[0])},observersForEvent:function(t){for(var e,n=0,i=this.observers.length,s=[];n<i;n++)(e=this.observers[n])[t]&&s.push(e);return[t,s,!0]},observeEvents:function(t,e,n,i){if(0===t.length)return this.endTransit(void 0===i||i);var s=t[0][0],r=t[0][1],a=t[0][2];if(e[0].event=s,s&&a&&s!==n&&o.hook(this,"lifecycle",e),0===r.length)return t.shift(),this.observeEvents(t,e,s,i);var c=r.shift(),h=c[s].apply(c,e);return h&&"function"==typeof h.then?h.then(this.observeEvents.bind(this,t,e,s)).catch(this.failTransit.bind(this)):!1===h?this.endTransit(!1):this.observeEvents(t,e,s,h)},onInvalidTransition:function(t,e,n){throw new s("transition is invalid in current state",t,e,n,this.state)},onPendingTransition:function(t,e,n){throw new s("transition is invalid while previous transition is still in progress",t,e,n,this.state)}}),t.exports=a},function(t,e,n){"use strict";var i=n(0),s=n(2),o=n(1),r=n(3),a=n(4),c={is:function(t){return this._fsm.is(t)},can:function(t){return this._fsm.can(t)},cannot:function(t){return this._fsm.cannot(t)},observe:function(){return this._fsm.observe(arguments)},transitions:function(){return this._fsm.transitions()},allTransitions:function(){return this._fsm.allTransitions()},allStates:function(){return this._fsm.allStates()},onInvalidTransition:function(t,e,n){return this._fsm.onInvalidTransition(t,e,n)},onPendingTransition:function(t,e,n){return this._fsm.onPendingTransition(t,e,n)}},h={state:{configurable:!1,enumerable:!0,get:function(){return this._fsm.state},set:function(t){throw Error("use transitions to change state")}}};function u(t){return f(this||{},t)}function f(t,e){return l(t,new r(e,u)),t._fsm(),t}function l(t,e){if("object"!=typeof t||Array.isArray(t))throw Error("StateMachine can only be applied to objects");o.build(t,e),Object.defineProperties(t,h),i(t,c),i(t,e.methods),e.allTransitions().forEach(function(e){t[s(e)]=function(){return this._fsm.fire(e,[].slice.call(arguments))}}),t._fsm=function(){this._fsm=new a(this,e),this._fsm.init(arguments)}}u.version="3.0.1",u.factory=function(){var t,e;"function"==typeof arguments[0]?(t=arguments[0],e=arguments[1]||{}):(t=function(){this._fsm.apply(this,arguments)},e=arguments[0]||{});var n=new r(e,u);return l(t.prototype,n),t.prototype._fsm.config=n,t},u.apply=f,u.defaults={wildcard:"*",init:{name:"init",from:"none"}},t.exports=u},function(t,e,n){"use strict";t.exports=function(t,e,n,i,s){this.message=t,this.transition=e,this.from=n,this.to=i,this.current=s}}])})},{}],GameConst:[function(t,e,n){"use strict";cc._RF.push(e,"3dac4dFQANMbZYi5xDwHJLu","GameConst");e.exports={NORMAL_SPEED:200,SLOW_SPEED:20,DASH_SPEED:2e3,JUMP_HIGH:500,MAX_HP:50,TAG:{GROUND:3,ENEMY:2,BULLET:1,PLAYER:4},SOUND:{JUMP:"SOUND_JUMP",FIRE:"SOUND_FIRE",EXPLOSION:"SOUND_EXPLOSION"}},cc._RF.pop()},{}],GameEmitter:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}cc._RF.push(e,"bfa4ctVv3FNY5T7u9L53Cdc","GameEmitter");var r=t("events"),a=function(){function t(){i(this,t),this._emitter=new r,this._emitter.setMaxListeners(20)}return o(t,[{key:"emit",value:function(t,e){this._emitter.emit(t,e)}},{key:"registerEvent",value:function(t,e){this._emitter.on(t,e)}},{key:"removeEvent",value:function(t,e){this._emitter.removeListener(t,e)}},{key:"destroy",value:function(){this._emitter.removeAllListeners(),this._emitter=null}}]),t}();a.instance=null,e.exports=a,cc._RF.pop()},{events:1}],GameFSM:[function(t,e,n){"use strict";cc._RF.push(e,"cb12f02fEZPKo0IzKnHD4oa","GameFSM");var i=t("GameInfo"),s=t("GameEmitter");cc.Class({extends:cc.Component,properties:{},onLoad:function(){i.instance=new i,s.instance=new s,cc.director.getCollisionManager().enabled=!0}}),cc._RF.pop()},{GameEmitter:"GameEmitter",GameInfo:"GameInfo"}],GameInfo:[function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}cc._RF.push(e,"835acO+EHhKmamtOtAAkozG","GameInfo");var r=function(){function t(){i(this,t),this.GameSpeed=200,this.Point=0,this.playerX=500,this.SettingInfo={MusicEnable:!0,SoundEnable:!0}}return o(t,[{key:"funcDemo",value:function(t){}}]),t}();r.instance=null,e.exports=r,cc._RF.pop()},{}],Helpers:[function(t,e,n){"use strict";cc._RF.push(e,"ed1d8goo+xP7430xnVy4Q3L","Helpers"),e.exports={getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t))+t},getAngleInRadian:function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},getAngleInDegree:function(t,e){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI},getDistance:function(t,e){var n=x1-x2,i=y1-y2;return Math.sqrt(n*n+i*i)}},cc._RF.pop()},{}],Player:[function(t,e,n){"use strict";cc._RF.push(e,"c2b4eZsHqZLbY4Ztmn/xlw0","Player");var i=t("EventCode"),s=t("GameEmitter"),o=t("GameConst"),r=t("javascript-state-machine"),a="RUN",c="JUMP",h="DASH",u="goRun",f="goJump",l="goDash";cc.Class({extends:cc.Component,properties:{fsm:{default:null,visible:!1},canJump:{default:!0,visible:!1},anim:{type:cc.Animation,default:null,visible:!1}},onLoad:function(){},start:function(){this.anim=this.node.getComponent(cc.Animation),this.canJump=!0,this.initStateMachine(a),this.initEvents()},onDestroy:function(){s.instance.removeEvent(i.PLAYER_JUMP,this.jumpHandler),s.instance.removeEvent(i.PLAYER_JUMP,this.jumpHandler)},initEvents:function(){this.jumpHandler=this.onJumpHandler.bind(this),this.dashHandler=this.onDashHandler.bind(this),s.instance.registerEvent(i.PLAYER_JUMP,this.jumpHandler)},onJumpHandler:function(){this.goToTransition(f)},onDashHandler:function(){this.goToTransition(l)},onRunHandler:function(){this.goToTransition(u)},initStateMachine:function(t){this.fsm||(this.fsm=new r({init:t,transitions:[{name:u,from:[c,h],to:a},{name:l,from:[a,c],to:h},{name:f,from:a,to:c}],methods:{onRun:this.onRun.bind(this),onJump:this.onJump.bind(this),onDash:this.onDash.bind(this)}}))},goToTransition:function(t){switch(this.fsm.can(t)||cc.warn("Can't go "+t+" from "+this.fsm.state),t){case u:this.fsm.goRun();break;case l:this.fsm.goDash();break;case f:this.fsm.goJump();break;default:this.fsm.goRun()}},onRun:function(){this.anim.play("Player_Run")},onDash:function(){},onJump:function(){var t=this;this.anim.play("Player_Jump"),s.instance.emit(i.Sound.PLAYFX,o.SOUND.JUMP);var e=cc.jumpTo(1,cc.v2(this.node.x,this.node.y),o.JUMP_HIGH,1);this.node.runAction(cc.sequence(e,cc.callFunc(function(){t.goToTransition(u)},this)))},onCollisionEnter:function(t){t.tag==o.TAG.GROUND&&(this.canJump=!0)}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter","javascript-state-machine":2}],SoundController:[function(t,e,n){"use strict";cc._RF.push(e,"d9fceM0A7RCb7gbCB3DRvkT","SoundController");var i=t("EventCode"),s=t("GameEmitter"),o=t("GameConst");cc.Class({extends:cc.Component,properties:{background:{default:null,type:cc.AudioClip},fxFire:{default:null,type:cc.AudioClip},fxJump:{default:null,type:cc.AudioClip},fxExplosion:{default:null,type:cc.AudioClip},bgMusic:{default:null,visible:!1},fx:{default:null,visible:!1}},onLoad:function(){this.bgMusic=cc.audioEngine.play(this.background,!0,1),s.instance.registerEvent(i.Sound.PLAYFX,this.playfx.bind(this))},onDestroy:function(){cc.audioEngine.stop(this.bgMusic),cc.audioEngine.stop(this.fx)},playfx:function(t){switch(t){case o.SOUND.JUMP:this.fx=cc.audioEngine.play(this.fxJump,!1,.3);break;case o.SOUND.FIRE:this.fx=cc.audioEngine.play(this.fxFire,!1,.3);break;case o.SOUND.EXPLOSION:this.fx=cc.audioEngine.play(this.fxExplosion,!1,.3)}this.fx=cc.audioEngine.play(this.fxFire,!1,.3)}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter"}],TopBar:[function(t,e,n){"use strict";cc._RF.push(e,"ad9c0pTY1xOwJ8jBF35szr2","TopBar");var i=t("EventCode"),s=t("GameEmitter"),o=t("GameConst");cc.Class({extends:cc.Component,properties:{hpBar:cc.ProgressBar,lblCoin:cc.Label,coin:{default:0,visible:!1},hp:{default:0,visible:!1}},onLoad:function(){s.instance.registerEvent(i.UFO_CRASH,this.onUFOCrash.bind(this)),s.instance.registerEvent(i.UFO_ATTACK,this.onUFOAttack.bind(this))},start:function(){this.hp=o.MAX_HP,this.updateHPBar()},onUFOCrash:function(t){this.coin+=t.value,this.lblCoin.string=this.coin},updateHPBar:function(){this.hpBar.progress=this.hp/o.MAX_HP},onUFOAttack:function(t){this.hp-=t,this.updateHPBar()}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter"}],TouchLayer:[function(t,e,n){"use strict";cc._RF.push(e,"e09d54fthlHz6x/aII0xlkt","TouchLayer");var i=t("EventCode"),s=t("GameEmitter"),o=(t("GameConst"),t("GameInfo"));cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.node.on(cc.Node.EventType.TOUCH_END,this.onEndTouch.bind(this))},onEndTouch:function(t,e){var n=t.getLocation();n.x<o.instance.playerX&&(n.x=o.instance.playerX),s.instance.emit(i.FIRE,n)}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter",GameInfo:"GameInfo"}],UFO:[function(t,e,n){"use strict";cc._RF.push(e,"04fb4Lah6pEM4hOyGgUJYlz","UFO");var i=t("GameConst"),s=t("GameInfo"),o=t("EventCode"),r=t("GameEmitter");cc.Class({extends:cc.Component,properties:{speed:{default:300,visible:!0},value:1,attackNode:cc.Node,isAttacking:{default:!1,visible:!1}},onLoad:function(){this.attackAnim=this.attackNode.getComponent(cc.Animation)},start:function(){this.attackNode.active=!1},onCollisionEnter:function(t){if(t.tag==i.TAG.BULLET){var e={pos:this.node.position,value:this.value};r.instance.emit(o.UFO_CRASH,e),this.node.removeFromParent(!0)}else t.tag==i.TAG.PLAYER&&(r.instance.emit(o.UFO_ATTACK,this.value),this.node.removeFromParent(!0))},update:function(t){var e=this;if(!this.isAttacking){var n=s.instance.GameSpeed/i.NORMAL_SPEED;this.node.x-=this.speed*t*n,this.node.x<=s.instance.playerX&&(this.isAttacking=!0,this.speed=0,this.attackNode.active=!0,this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(3),cc.callFunc(function(){e.attackAnim.play("ufo_attack"),r.instance.emit(o.UFO_ATTACK,e.value)},this))))),this.node.x<0&&this.node.removeFromParent(!0)}}}),cc._RF.pop()},{EventCode:"EventCode",GameConst:"GameConst",GameEmitter:"GameEmitter",GameInfo:"GameInfo"}]},{},["EventCode","GameConst","GameEmitter","GameFSM","GameInfo","Helpers","BGLayer","BottomBar","Bullet","BulletLayer","EmemyLayer","Player","SoundController","TopBar","TouchLayer","UFO"]);