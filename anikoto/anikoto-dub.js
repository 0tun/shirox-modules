var CryptoJS=(()=>{var tr=(C=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(C,{get:(f,A)=>(typeof require!="undefined"?require:f)[A]}):C)(function(C){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+C+'" is not supported')});var I=(C,f)=>()=>{try{return f||C((f={exports:{}}).exports,f),f.exports}catch(A){throw f=0,A}};var nr=I(()=>{});var N=I((T,ir)=>{(function(C,f){typeof T=="object"?ir.exports=T=f():typeof define=="function"&&define.amd?define([],f):C.CryptoJS=f()})(T,function(){var C=C||(function(f,A){var z;if(typeof window!="undefined"&&window.crypto&&(z=window.crypto),typeof self!="undefined"&&self.crypto&&(z=self.crypto),typeof globalThis!="undefined"&&globalThis.crypto&&(z=globalThis.crypto),!z&&typeof window!="undefined"&&window.msCrypto&&(z=window.msCrypto),!z&&typeof global!="undefined"&&global.crypto&&(z=global.crypto),!z&&typeof tr=="function")try{z=nr()}catch(r){}var K=function(){if(z){if(typeof z.getRandomValues=="function")try{return z.getRandomValues(new Uint32Array(1))[0]}catch(r){}if(typeof z.randomBytes=="function")try{return z.randomBytes(4).readInt32LE()}catch(r){}}throw new Error("Native crypto module could not be used to get secure random number.")},H=Object.create||(function(){function r(){}return function(e){var d;return r.prototype=e,d=new r,r.prototype=null,d}})(),P={},i=P.lib={},k=i.Base=(function(){return{extend:function(r){var e=H(this);return r&&e.mixIn(r),(!e.hasOwnProperty("init")||this.init===e.init)&&(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var r=this.extend();return r.init.apply(r,arguments),r},init:function(){},mixIn:function(r){for(var e in r)r.hasOwnProperty(e)&&(this[e]=r[e]);r.hasOwnProperty("toString")&&(this.toString=r.toString)},clone:function(){return this.init.prototype.extend(this)}}})(),y=i.WordArray=k.extend({init:function(r,e){r=this.words=r||[],e!=A?this.sigBytes=e:this.sigBytes=r.length*4},toString:function(r){return(r||x).stringify(this)},concat:function(r){var e=this.words,d=r.words,l=this.sigBytes,S=r.sigBytes;if(this.clamp(),l%4)for(var b=0;b<S;b++){var W=d[b>>>2]>>>24-b%4*8&255;e[l+b>>>2]|=W<<24-(l+b)%4*8}else for(var B=0;B<S;B+=4)e[l+B>>>2]=d[B>>>2];return this.sigBytes+=S,this},clamp:function(){var r=this.words,e=this.sigBytes;r[e>>>2]&=4294967295<<32-e%4*8,r.length=f.ceil(e/4)},clone:function(){var r=k.clone.call(this);return r.words=this.words.slice(0),r},random:function(r){for(var e=[],d=0;d<r;d+=4)e.push(K());return new y.init(e,r)}}),_=P.enc={},x=_.Hex={stringify:function(r){for(var e=r.words,d=r.sigBytes,l=[],S=0;S<d;S++){var b=e[S>>>2]>>>24-S%4*8&255;l.push((b>>>4).toString(16)),l.push((b&15).toString(16))}return l.join("")},parse:function(r){for(var e=r.length,d=[],l=0;l<e;l+=2)d[l>>>3]|=parseInt(r.substr(l,2),16)<<24-l%8*4;return new y.init(d,e/2)}},h=_.Latin1={stringify:function(r){for(var e=r.words,d=r.sigBytes,l=[],S=0;S<d;S++){var b=e[S>>>2]>>>24-S%4*8&255;l.push(String.fromCharCode(b))}return l.join("")},parse:function(r){for(var e=r.length,d=[],l=0;l<e;l++)d[l>>>2]|=(r.charCodeAt(l)&255)<<24-l%4*8;return new y.init(d,e)}},t=_.Utf8={stringify:function(r){try{return decodeURIComponent(escape(h.stringify(r)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(r){return h.parse(unescape(encodeURIComponent(r)))}},o=i.BufferedBlockAlgorithm=k.extend({reset:function(){this._data=new y.init,this._nDataBytes=0},_append:function(r){typeof r=="string"&&(r=t.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes},_process:function(r){var e,d=this._data,l=d.words,S=d.sigBytes,b=this.blockSize,W=b*4,B=S/W;r?B=f.ceil(B):B=f.max((B|0)-this._minBufferSize,0);var E=B*b,F=f.min(E*4,S);if(E){for(var n=0;n<E;n+=b)this._doProcessBlock(l,n);e=l.splice(0,E),d.sigBytes-=F}return new y.init(e,F)},clone:function(){var r=k.clone.call(this);return r._data=this._data.clone(),r},_minBufferSize:0}),w=i.Hasher=o.extend({cfg:k.extend(),init:function(r){this.cfg=this.cfg.extend(r),this.reset()},reset:function(){o.reset.call(this),this._doReset()},update:function(r){return this._append(r),this._process(),this},finalize:function(r){r&&this._append(r);var e=this._doFinalize();return e},blockSize:512/32,_createHelper:function(r){return function(e,d){return new r.init(d).finalize(e)}},_createHmacHelper:function(r){return function(e,d){return new m.HMAC.init(r,d).finalize(e)}}}),m=P.algo={};return P})(Math);return C})});var Z=I((O,ar)=>{(function(C,f){typeof O=="object"?ar.exports=O=f(N()):typeof define=="function"&&define.amd?define(["./core"],f):f(C.CryptoJS)})(O,function(C){return(function(){var f=C,A=f.lib,z=A.WordArray,K=f.enc,H=K.Base64={stringify:function(i){var k=i.words,y=i.sigBytes,_=this._map;i.clamp();for(var x=[],h=0;h<y;h+=3)for(var t=k[h>>>2]>>>24-h%4*8&255,o=k[h+1>>>2]>>>24-(h+1)%4*8&255,w=k[h+2>>>2]>>>24-(h+2)%4*8&255,m=t<<16|o<<8|w,r=0;r<4&&h+r*.75<y;r++)x.push(_.charAt(m>>>6*(3-r)&63));var e=_.charAt(64);if(e)for(;x.length%4;)x.push(e);return x.join("")},parse:function(i){var k=i.length,y=this._map,_=this._reverseMap;if(!_){_=this._reverseMap=[];for(var x=0;x<y.length;x++)_[y.charCodeAt(x)]=x}var h=y.charAt(64);if(h){var t=i.indexOf(h);t!==-1&&(k=t)}return P(i,k,_)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function P(i,k,y){for(var _=[],x=0,h=0;h<k;h++)if(h%4){var t=y[i.charCodeAt(h-1)]<<h%4*2,o=y[i.charCodeAt(h)]>>>6-h%4*2,w=t|o;_[x>>>2]|=w<<24-x%4*8,x++}return z.create(_,x)}})(),C.enc.Base64})});var X=I((V,or)=>{(function(C,f){typeof V=="object"?or.exports=V=f(N()):typeof define=="function"&&define.amd?define(["./core"],f):f(C.CryptoJS)})(V,function(C){return(function(f){var A=C,z=A.lib,K=z.WordArray,H=z.Hasher,P=A.algo,i=[],k=[];(function(){function x(w){for(var m=f.sqrt(w),r=2;r<=m;r++)if(!(w%r))return!1;return!0}function h(w){return(w-(w|0))*4294967296|0}for(var t=2,o=0;o<64;)x(t)&&(o<8&&(i[o]=h(f.pow(t,1/2))),k[o]=h(f.pow(t,1/3)),o++),t++})();var y=[],_=P.SHA256=H.extend({_doReset:function(){this._hash=new K.init(i.slice(0))},_doProcessBlock:function(x,h){for(var t=this._hash.words,o=t[0],w=t[1],m=t[2],r=t[3],e=t[4],d=t[5],l=t[6],S=t[7],b=0;b<64;b++){if(b<16)y[b]=x[h+b]|0;else{var W=y[b-15],B=(W<<25|W>>>7)^(W<<14|W>>>18)^W>>>3,E=y[b-2],F=(E<<15|E>>>17)^(E<<13|E>>>19)^E>>>10;y[b]=B+y[b-7]+F+y[b-16]}var n=e&d^~e&l,p=o&w^o&m^w&m,g=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),s=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25),D=S+s+n+k[b]+y[b],q=g+p;S=l,l=d,d=e,e=r+D|0,r=m,m=w,w=o,o=D+q|0}t[0]=t[0]+o|0,t[1]=t[1]+w|0,t[2]=t[2]+m|0,t[3]=t[3]+r|0,t[4]=t[4]+e|0,t[5]=t[5]+d|0,t[6]=t[6]+l|0,t[7]=t[7]+S|0},_doFinalize:function(){var x=this._data,h=x.words,t=this._nDataBytes*8,o=x.sigBytes*8;return h[o>>>5]|=128<<24-o%32,h[(o+64>>>9<<4)+14]=f.floor(t/4294967296),h[(o+64>>>9<<4)+15]=t,x.sigBytes=h.length*4,this._process(),this._hash},clone:function(){var x=H.clone.call(this);return x._hash=this._hash.clone(),x}});A.SHA256=H._createHelper(_),A.HmacSHA256=H._createHmacHelper(_)})(Math),C.SHA256})});var J=I((j,sr)=>{(function(C,f){typeof j=="object"?sr.exports=j=f(N()):typeof define=="function"&&define.amd?define(["./core"],f):f(C.CryptoJS)})(j,function(C){(function(){var f=C,A=f.lib,z=A.Base,K=f.enc,H=K.Utf8,P=f.algo,i=P.HMAC=z.extend({init:function(k,y){k=this._hasher=new k.init,typeof y=="string"&&(y=H.parse(y));var _=k.blockSize,x=_*4;y.sigBytes>x&&(y=k.finalize(y)),y.clamp();for(var h=this._oKey=y.clone(),t=this._iKey=y.clone(),o=h.words,w=t.words,m=0;m<_;m++)o[m]^=1549556828,w[m]^=909522486;h.sigBytes=t.sigBytes=x,this.reset()},reset:function(){var k=this._hasher;k.reset(),k.update(this._iKey)},update:function(k){return this._hasher.update(k),this},finalize:function(k){var y=this._hasher,_=y.finalize(k);y.reset();var x=y.finalize(this._oKey.clone().concat(_));return x}})})()})});var cr=I((U,fr)=>{(function(C,f,A){typeof U=="object"?fr.exports=U=f(N(),X(),J()):typeof define=="function"&&define.amd?define(["./core","./sha256","./hmac"],f):f(C.CryptoJS)})(U,function(C){return C.HmacSHA256})});var ur=I((M,vr)=>{(function(C,f){typeof M=="object"?vr.exports=M=f(N()):typeof define=="function"&&define.amd?define(["./core"],f):f(C.CryptoJS)})(M,function(C){return(function(){var f=C,A=f.lib,z=A.WordArray,K=A.Hasher,H=f.algo,P=[],i=H.SHA1=K.extend({_doReset:function(){this._hash=new z.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(k,y){for(var _=this._hash.words,x=_[0],h=_[1],t=_[2],o=_[3],w=_[4],m=0;m<80;m++){if(m<16)P[m]=k[y+m]|0;else{var r=P[m-3]^P[m-8]^P[m-14]^P[m-16];P[m]=r<<1|r>>>31}var e=(x<<5|x>>>27)+w+P[m];m<20?e+=(h&t|~h&o)+1518500249:m<40?e+=(h^t^o)+1859775393:m<60?e+=(h&t|h&o|t&o)-1894007588:e+=(h^t^o)-899497514,w=o,o=t,t=h<<30|h>>>2,h=x,x=e}_[0]=_[0]+x|0,_[1]=_[1]+h|0,_[2]=_[2]+t|0,_[3]=_[3]+o|0,_[4]=_[4]+w|0},_doFinalize:function(){var k=this._data,y=k.words,_=this._nDataBytes*8,x=k.sigBytes*8;return y[x>>>5]|=128<<24-x%32,y[(x+64>>>9<<4)+14]=Math.floor(_/4294967296),y[(x+64>>>9<<4)+15]=_,k.sigBytes=y.length*4,this._process(),this._hash},clone:function(){var k=K.clone.call(this);return k._hash=this._hash.clone(),k}});f.SHA1=K._createHelper(i),f.HmacSHA1=K._createHmacHelper(i)})(),C.SHA1})});var rr=I((G,hr)=>{(function(C,f,A){typeof G=="object"?hr.exports=G=f(N(),ur(),J()):typeof define=="function"&&define.amd?define(["./core","./sha1","./hmac"],f):f(C.CryptoJS)})(G,function(C){return(function(){var f=C,A=f.lib,z=A.Base,K=A.WordArray,H=f.algo,P=H.MD5,i=H.EvpKDF=z.extend({cfg:z.extend({keySize:128/32,hasher:P,iterations:1}),init:function(k){this.cfg=this.cfg.extend(k)},compute:function(k,y){for(var _,x=this.cfg,h=x.hasher.create(),t=K.create(),o=t.words,w=x.keySize,m=x.iterations;o.length<w;){_&&h.update(_),_=h.update(k).finalize(y),h.reset();for(var r=1;r<m;r++)_=h.finalize(_),h.reset();t.concat(_)}return t.sigBytes=w*4,t}});f.EvpKDF=function(k,y,_){return i.create(_).compute(k,y)}})(),C.EvpKDF})});var er=I(($,dr)=>{(function(C,f,A){typeof $=="object"?dr.exports=$=f(N(),rr()):typeof define=="function"&&define.amd?define(["./core","./evpkdf"],f):f(C.CryptoJS)})($,function(C){C.lib.Cipher||(function(f){var A=C,z=A.lib,K=z.Base,H=z.WordArray,P=z.BufferedBlockAlgorithm,i=A.enc,k=i.Utf8,y=i.Base64,_=A.algo,x=_.EvpKDF,h=z.Cipher=P.extend({cfg:K.extend(),createEncryptor:function(n,p){return this.create(this._ENC_XFORM_MODE,n,p)},createDecryptor:function(n,p){return this.create(this._DEC_XFORM_MODE,n,p)},init:function(n,p,g){this.cfg=this.cfg.extend(g),this._xformMode=n,this._key=p,this.reset()},reset:function(){P.reset.call(this),this._doReset()},process:function(n){return this._append(n),this._process()},finalize:function(n){n&&this._append(n);var p=this._doFinalize();return p},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:(function(){function n(p){return typeof p=="string"?F:W}return function(p){return{encrypt:function(g,s,D){return n(s).encrypt(p,g,s,D)},decrypt:function(g,s,D){return n(s).decrypt(p,g,s,D)}}}})()}),t=z.StreamCipher=h.extend({_doFinalize:function(){var n=this._process(!0);return n},blockSize:1}),o=A.mode={},w=z.BlockCipherMode=K.extend({createEncryptor:function(n,p){return this.Encryptor.create(n,p)},createDecryptor:function(n,p){return this.Decryptor.create(n,p)},init:function(n,p){this._cipher=n,this._iv=p}}),m=o.CBC=(function(){var n=w.extend();n.Encryptor=n.extend({processBlock:function(g,s){var D=this._cipher,q=D.blockSize;p.call(this,g,s,q),D.encryptBlock(g,s),this._prevBlock=g.slice(s,s+q)}}),n.Decryptor=n.extend({processBlock:function(g,s){var D=this._cipher,q=D.blockSize,L=g.slice(s,s+q);D.decryptBlock(g,s),p.call(this,g,s,q),this._prevBlock=L}});function p(g,s,D){var q,L=this._iv;L?(q=L,this._iv=f):q=this._prevBlock;for(var R=0;R<D;R++)g[s+R]^=q[R]}return n})(),r=A.pad={},e=r.Pkcs7={pad:function(n,p){for(var g=p*4,s=g-n.sigBytes%g,D=s<<24|s<<16|s<<8|s,q=[],L=0;L<s;L+=4)q.push(D);var R=H.create(q,s);n.concat(R)},unpad:function(n){var p=n.words[n.sigBytes-1>>>2]&255;n.sigBytes-=p}},d=z.BlockCipher=h.extend({cfg:h.cfg.extend({mode:m,padding:e}),reset:function(){var n;h.reset.call(this);var p=this.cfg,g=p.iv,s=p.mode;this._xformMode==this._ENC_XFORM_MODE?n=s.createEncryptor:(n=s.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==n?this._mode.init(this,g&&g.words):(this._mode=n.call(s,this,g&&g.words),this._mode.__creator=n)},_doProcessBlock:function(n,p){this._mode.processBlock(n,p)},_doFinalize:function(){var n,p=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(p.pad(this._data,this.blockSize),n=this._process(!0)):(n=this._process(!0),p.unpad(n)),n},blockSize:128/32}),l=z.CipherParams=K.extend({init:function(n){this.mixIn(n)},toString:function(n){return(n||this.formatter).stringify(this)}}),S=A.format={},b=S.OpenSSL={stringify:function(n){var p,g=n.ciphertext,s=n.salt;return s?p=H.create([1398893684,1701076831]).concat(s).concat(g):p=g,p.toString(y)},parse:function(n){var p,g=y.parse(n),s=g.words;return s[0]==1398893684&&s[1]==1701076831&&(p=H.create(s.slice(2,4)),s.splice(0,4),g.sigBytes-=16),l.create({ciphertext:g,salt:p})}},W=z.SerializableCipher=K.extend({cfg:K.extend({format:b}),encrypt:function(n,p,g,s){s=this.cfg.extend(s);var D=n.createEncryptor(g,s),q=D.finalize(p),L=D.cfg;return l.create({ciphertext:q,key:g,iv:L.iv,algorithm:n,mode:L.mode,padding:L.padding,blockSize:n.blockSize,formatter:s.format})},decrypt:function(n,p,g,s){s=this.cfg.extend(s),p=this._parse(p,s.format);var D=n.createDecryptor(g,s).finalize(p.ciphertext);return D},_parse:function(n,p){return typeof n=="string"?p.parse(n,this):n}}),B=A.kdf={},E=B.OpenSSL={execute:function(n,p,g,s,D){if(s||(s=H.random(64/8)),D)var q=x.create({keySize:p+g,hasher:D}).compute(n,s);else var q=x.create({keySize:p+g}).compute(n,s);var L=H.create(q.words.slice(p),g*4);return q.sigBytes=p*4,l.create({key:q,iv:L,salt:s})}},F=z.PasswordBasedCipher=W.extend({cfg:W.cfg.extend({kdf:E}),encrypt:function(n,p,g,s){s=this.cfg.extend(s);var D=s.kdf.execute(g,n.keySize,n.ivSize,s.salt,s.hasher);s.iv=D.iv;var q=W.encrypt.call(this,n,p,D.key,s);return q.mixIn(D),q},decrypt:function(n,p,g,s){s=this.cfg.extend(s),p=this._parse(p,s.format);var D=s.kdf.execute(g,n.keySize,n.ivSize,p.salt,s.hasher);s.iv=D.iv;var q=W.decrypt.call(this,n,p,D.key,s);return q}})})()})});var pr=I((Q,lr)=>{(function(C,f){typeof Q=="object"?lr.exports=Q=f(N()):typeof define=="function"&&define.amd?define(["./core"],f):f(C.CryptoJS)})(Q,function(C){return(function(f){var A=C,z=A.lib,K=z.WordArray,H=z.Hasher,P=A.algo,i=[];(function(){for(var t=0;t<64;t++)i[t]=f.abs(f.sin(t+1))*4294967296|0})();var k=P.MD5=H.extend({_doReset:function(){this._hash=new K.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,o){for(var w=0;w<16;w++){var m=o+w,r=t[m];t[m]=(r<<8|r>>>24)&16711935|(r<<24|r>>>8)&4278255360}var e=this._hash.words,d=t[o+0],l=t[o+1],S=t[o+2],b=t[o+3],W=t[o+4],B=t[o+5],E=t[o+6],F=t[o+7],n=t[o+8],p=t[o+9],g=t[o+10],s=t[o+11],D=t[o+12],q=t[o+13],L=t[o+14],R=t[o+15],a=e[0],c=e[1],v=e[2],u=e[3];a=y(a,c,v,u,d,7,i[0]),u=y(u,a,c,v,l,12,i[1]),v=y(v,u,a,c,S,17,i[2]),c=y(c,v,u,a,b,22,i[3]),a=y(a,c,v,u,W,7,i[4]),u=y(u,a,c,v,B,12,i[5]),v=y(v,u,a,c,E,17,i[6]),c=y(c,v,u,a,F,22,i[7]),a=y(a,c,v,u,n,7,i[8]),u=y(u,a,c,v,p,12,i[9]),v=y(v,u,a,c,g,17,i[10]),c=y(c,v,u,a,s,22,i[11]),a=y(a,c,v,u,D,7,i[12]),u=y(u,a,c,v,q,12,i[13]),v=y(v,u,a,c,L,17,i[14]),c=y(c,v,u,a,R,22,i[15]),a=_(a,c,v,u,l,5,i[16]),u=_(u,a,c,v,E,9,i[17]),v=_(v,u,a,c,s,14,i[18]),c=_(c,v,u,a,d,20,i[19]),a=_(a,c,v,u,B,5,i[20]),u=_(u,a,c,v,g,9,i[21]),v=_(v,u,a,c,R,14,i[22]),c=_(c,v,u,a,W,20,i[23]),a=_(a,c,v,u,p,5,i[24]),u=_(u,a,c,v,L,9,i[25]),v=_(v,u,a,c,b,14,i[26]),c=_(c,v,u,a,n,20,i[27]),a=_(a,c,v,u,q,5,i[28]),u=_(u,a,c,v,S,9,i[29]),v=_(v,u,a,c,F,14,i[30]),c=_(c,v,u,a,D,20,i[31]),a=x(a,c,v,u,B,4,i[32]),u=x(u,a,c,v,n,11,i[33]),v=x(v,u,a,c,s,16,i[34]),c=x(c,v,u,a,L,23,i[35]),a=x(a,c,v,u,l,4,i[36]),u=x(u,a,c,v,W,11,i[37]),v=x(v,u,a,c,F,16,i[38]),c=x(c,v,u,a,g,23,i[39]),a=x(a,c,v,u,q,4,i[40]),u=x(u,a,c,v,d,11,i[41]),v=x(v,u,a,c,b,16,i[42]),c=x(c,v,u,a,E,23,i[43]),a=x(a,c,v,u,p,4,i[44]),u=x(u,a,c,v,D,11,i[45]),v=x(v,u,a,c,R,16,i[46]),c=x(c,v,u,a,S,23,i[47]),a=h(a,c,v,u,d,6,i[48]),u=h(u,a,c,v,F,10,i[49]),v=h(v,u,a,c,L,15,i[50]),c=h(c,v,u,a,B,21,i[51]),a=h(a,c,v,u,D,6,i[52]),u=h(u,a,c,v,b,10,i[53]),v=h(v,u,a,c,g,15,i[54]),c=h(c,v,u,a,l,21,i[55]),a=h(a,c,v,u,n,6,i[56]),u=h(u,a,c,v,R,10,i[57]),v=h(v,u,a,c,E,15,i[58]),c=h(c,v,u,a,q,21,i[59]),a=h(a,c,v,u,W,6,i[60]),u=h(u,a,c,v,s,10,i[61]),v=h(v,u,a,c,S,15,i[62]),c=h(c,v,u,a,p,21,i[63]),e[0]=e[0]+a|0,e[1]=e[1]+c|0,e[2]=e[2]+v|0,e[3]=e[3]+u|0},_doFinalize:function(){var t=this._data,o=t.words,w=this._nDataBytes*8,m=t.sigBytes*8;o[m>>>5]|=128<<24-m%32;var r=f.floor(w/4294967296),e=w;o[(m+64>>>9<<4)+15]=(r<<8|r>>>24)&16711935|(r<<24|r>>>8)&4278255360,o[(m+64>>>9<<4)+14]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360,t.sigBytes=(o.length+1)*4,this._process();for(var d=this._hash,l=d.words,S=0;S<4;S++){var b=l[S];l[S]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360}return d},clone:function(){var t=H.clone.call(this);return t._hash=this._hash.clone(),t}});function y(t,o,w,m,r,e,d){var l=t+(o&w|~o&m)+r+d;return(l<<e|l>>>32-e)+o}function _(t,o,w,m,r,e,d){var l=t+(o&m|w&~m)+r+d;return(l<<e|l>>>32-e)+o}function x(t,o,w,m,r,e,d){var l=t+(o^w^m)+r+d;return(l<<e|l>>>32-e)+o}function h(t,o,w,m,r,e,d){var l=t+(w^(o|~m))+r+d;return(l<<e|l>>>32-e)+o}A.MD5=H._createHelper(k),A.HmacMD5=H._createHmacHelper(k)})(Math),C.MD5})});var yr=I((Y,_r)=>{(function(C,f,A){typeof Y=="object"?_r.exports=Y=f(N(),Z(),pr(),rr(),er()):typeof define=="function"&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],f):f(C.CryptoJS)})(Y,function(C){return(function(){var f=C,A=f.lib,z=A.BlockCipher,K=f.algo,H=[],P=[],i=[],k=[],y=[],_=[],x=[],h=[],t=[],o=[];(function(){for(var r=[],e=0;e<256;e++)e<128?r[e]=e<<1:r[e]=e<<1^283;for(var d=0,l=0,e=0;e<256;e++){var S=l^l<<1^l<<2^l<<3^l<<4;S=S>>>8^S&255^99,H[d]=S,P[S]=d;var b=r[d],W=r[b],B=r[W],E=r[S]*257^S*16843008;i[d]=E<<24|E>>>8,k[d]=E<<16|E>>>16,y[d]=E<<8|E>>>24,_[d]=E;var E=B*16843009^W*65537^b*257^d*16843008;x[S]=E<<24|E>>>8,h[S]=E<<16|E>>>16,t[S]=E<<8|E>>>24,o[S]=E,d?(d=b^r[r[r[B^b]]],l^=r[r[l]]):d=l=1}})();var w=[0,1,2,4,8,16,32,64,128,27,54],m=K.AES=z.extend({_doReset:function(){var r;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var e=this._keyPriorReset=this._key,d=e.words,l=e.sigBytes/4,S=this._nRounds=l+6,b=(S+1)*4,W=this._keySchedule=[],B=0;B<b;B++)B<l?W[B]=d[B]:(r=W[B-1],B%l?l>6&&B%l==4&&(r=H[r>>>24]<<24|H[r>>>16&255]<<16|H[r>>>8&255]<<8|H[r&255]):(r=r<<8|r>>>24,r=H[r>>>24]<<24|H[r>>>16&255]<<16|H[r>>>8&255]<<8|H[r&255],r^=w[B/l|0]<<24),W[B]=W[B-l]^r);for(var E=this._invKeySchedule=[],F=0;F<b;F++){var B=b-F;if(F%4)var r=W[B];else var r=W[B-4];F<4||B<=4?E[F]=r:E[F]=x[H[r>>>24]]^h[H[r>>>16&255]]^t[H[r>>>8&255]]^o[H[r&255]]}}},encryptBlock:function(r,e){this._doCryptBlock(r,e,this._keySchedule,i,k,y,_,H)},decryptBlock:function(r,e){var d=r[e+1];r[e+1]=r[e+3],r[e+3]=d,this._doCryptBlock(r,e,this._invKeySchedule,x,h,t,o,P);var d=r[e+1];r[e+1]=r[e+3],r[e+3]=d},_doCryptBlock:function(r,e,d,l,S,b,W,B){for(var E=this._nRounds,F=r[e]^d[0],n=r[e+1]^d[1],p=r[e+2]^d[2],g=r[e+3]^d[3],s=4,D=1;D<E;D++){var q=l[F>>>24]^S[n>>>16&255]^b[p>>>8&255]^W[g&255]^d[s++],L=l[n>>>24]^S[p>>>16&255]^b[g>>>8&255]^W[F&255]^d[s++],R=l[p>>>24]^S[g>>>16&255]^b[F>>>8&255]^W[n&255]^d[s++],a=l[g>>>24]^S[F>>>16&255]^b[n>>>8&255]^W[p&255]^d[s++];F=q,n=L,p=R,g=a}var q=(B[F>>>24]<<24|B[n>>>16&255]<<16|B[p>>>8&255]<<8|B[g&255])^d[s++],L=(B[n>>>24]<<24|B[p>>>16&255]<<16|B[g>>>8&255]<<8|B[F&255])^d[s++],R=(B[p>>>24]<<24|B[g>>>16&255]<<16|B[F>>>8&255]<<8|B[n&255])^d[s++],a=(B[g>>>24]<<24|B[F>>>16&255]<<16|B[n>>>8&255]<<8|B[p&255])^d[s++];r[e]=q,r[e+1]=L,r[e+2]=R,r[e+3]=a},keySize:256/32});f.AES=z._createHelper(m)})(),C.AES})});var Br=I((Sr,xr)=>{var gr=N();Z();X();J();cr();er();yr();xr.exports=gr});return Br();})();

var AK_AUDIO = "dub";
/* Anikoto module core. The build prepends trimmed CryptoJS and `var AK_AUDIO = "sub" | "dub";`. */
var AK_BASE = 'https://anikototv.to';
var AK_CFG = {
    aesKey: 'i?LMTAx0Q6,:}50U',
    aesIv: "W0;27ToaUpl_P%'c",
    hmacSecret: 'MpCdnT0k3n!9f2K#xQ7vL5mR8wN1pY4s',
    tokenTtl: 90,        // seconds a signed stream URL stays valid
    concurrency: 3,      // parallel server resolutions
    timeoutMs: 12000,    // per request
    retries: 1,          // retries for network errors / 5xx (never 4xx)
    cacheMs: 60000       // short-lived page / episode-list cache
};

/* ---------- small helpers ---------- */
var AK_ENTITIES = {amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' '};
function akDecode(value) {
    return String(value || '').replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, function(all, key) {
        if (key[0] !== '#') return AK_ENTITIES[key.toLowerCase()] || all;
        var n = key[1].toLowerCase() === 'x' ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
        return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : all;
    });
}
function akText(value) {
    return akDecode(String(value || '').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}
function akAttrs(tag) {
    // Fresh /g regex per call: a shared one would leak lastIndex across awaits.
    var result = {}, re = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g, m;
    while ((m = re.exec(tag))) {
        result[m[1].toLowerCase()] = akDecode(m[2] !== undefined ? m[2] : (m[3] !== undefined ? m[3] : m[4])).trim();
    }
    return result;
}
function akAbsolute(url, base) {
    url = String(url || '').trim();
    if (!url) return '';
    if (/^(?:data|blob):/i.test(url) || /^https?:\/\//i.test(url)) return url;
    if (url.indexOf('//') === 0) return 'https:' + url;
    var originMatch = String(base || AK_BASE).match(/^(https?:\/\/[^/]+)/i);
    var origin = originMatch ? originMatch[1] : AK_BASE;
    if (url.charAt(0) === '/') return origin + url;
    var basePath = String(base || AK_BASE).split(/[?#]/)[0];
    return basePath.slice(0, basePath.lastIndexOf('/') + 1) + url;
}
function akPage(url) {
    var match = String(url).match(/^https?:\/\/anikototv\.to\/watch\/([^/?#]+)/i);
    if (!match) throw new Error('Invalid Anikoto show URL');
    return AK_BASE + '/watch/' + match[1];
}
function akLog(error) { console.log('Anikoto: ' + String(error && error.message || error)); }

/* ---------- precompiled, stateless (non-/g) regexes ---------- */
var AK_RE = {
    listStart: /id\s*=\s*["']list-items["']/i,
    footer: /<footer\b/i,
    card: /<div\b[^>]*class\s*=\s*["'][^"']*\bitem\b[^"']*["'][^>]*>/i,
    status: new RegExp('ep-status\\s+' + AK_AUDIO + '\\b', 'i'),
    cardLink: /<a\b[^>]*href\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)[^>]*>[\s\S]*?<img\b[^>]*>/i,
    aTag: /<a\b[^>]*>/i,
    imgTag: /<img\b[^>]*>/i,
    title: /<a\b[^>]*class\s*=\s*["'][^"']*\bd-title\b[^"']*["'][^>]*>([\s\S]*?)<\/a>/i,
    synopsis: /class=["'][^"']*\bsynopsis\b[^"']*["'][^>]*>[\s\S]*?class=["']content["'][^>]*>([\s\S]*?)<\/div>/i,
    names: /class=["']names\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i,
    aired: /Aired:\s*<span[^>]*>([\s\S]*?)<\/span>/i,
    watchMain: /<div\b[^>]*id=["']watch-main["'][^>]*>/i,
    player: /<div\b[^>]*id=["']megaplay-player["'][^>]*>/i
};

/* ---------- network: timeout + retry, plus a promise cache ---------- */
async function akFetchOnce(url, referer, ajax, method, body, extraHeaders) {
    if (typeof fetchv2 !== 'function') throw new Error('Host fetchv2 bridge is unavailable');
    var headers = {'Referer': referer || AK_BASE + '/', 'User-Agent': 'Mozilla/5.0'};
    if (ajax) headers['X-Requested-With'] = 'XMLHttpRequest';
    if (extraHeaders) Object.keys(extraHeaders).forEach(function(key) { headers[key] = extraHeaders[key]; });
    var response = await fetchv2(String(url), headers, method || 'GET', body == null ? null : body);
    if (typeof response === 'string') return response;
    if (response == null) throw new Error('Empty host fetch response');
    var status = Number(response.status || response.statusCode || 0);
    if (status >= 400) { var err = new Error('HTTP ' + status + ' for ' + url); err.status = status; throw err; }
    if (typeof response.text === 'function') return await response.text();
    if (typeof response.body === 'string') return response.body;
    if (typeof response.responseText === 'string') return response.responseText;
    if (typeof response.data === 'string') return response.data;
    throw new Error('Unsupported host fetch response');
}
function akWithTimeout(promise, ms, label) {
    if (typeof setTimeout !== 'function' || !ms) return promise; // host may not provide timers
    return new Promise(function(resolve, reject) {
        var timer = setTimeout(function() { reject(new Error('Timeout after ' + ms + 'ms: ' + label)); }, ms);
        promise.then(function(v) { clearTimeout(timer); resolve(v); }, function(e) { clearTimeout(timer); reject(e); });
    });
}
async function akFetch(url, referer, ajax, method, body, extraHeaders) {
    for (var attempt = 0; ; attempt++) {
        try { return await akWithTimeout(akFetchOnce(url, referer, ajax, method, body, extraHeaders), AK_CFG.timeoutMs, url); }
        catch (error) {
            var status = error && error.status;
            if (attempt >= AK_CFG.retries || (status >= 400 && status < 500)) throw error;
        }
    }
}
async function akJSON(url, referer) {
    var raw = await akFetch(url, referer, true);
    var data;
    try { data = JSON.parse(raw); }
    catch (error) { throw new Error('Invalid JSON from ' + url + ': ' + String(error && error.message || error)); }
    if (!data || typeof data !== 'object') throw new Error('Unexpected JSON response from ' + url);
    if (data.status != null && data.status !== '' && Number(data.status) !== 200 && Number(data.status) !== 0) {
        throw new Error('Anikoto: ' + (data.message || data.result || data.status));
    }
    return data;
}
var akCache = Object.create(null);
function akCached(key, loader) {
    var hit = akCache[key];
    if (hit && Date.now() - hit.at < AK_CFG.cacheMs) return hit.promise;
    var promise = loader();
    akCache[key] = {at: Date.now(), promise: promise};
    promise.catch(function() { if (akCache[key] && akCache[key].promise === promise) delete akCache[key]; });
    return promise;
}
// extractDetails and extractEpisodes both need this page; fetch it once.
function akWatchHtml(page) { return akCached('html:' + page, function() { return akFetch(page); }); }

/* ---------- search / details ---------- */
async function searchResults(keyword) {
    try {
        var html = await akFetch(AK_BASE + '/filter?keyword=' + encodeURIComponent(String(keyword || '').trim()));
        var start = html.search(AK_RE.listStart);
        if (start < 0) return '[]';
        html = html.slice(start).split(AK_RE.footer)[0];
        var results = [], seen = Object.create(null), cards = html.split(AK_RE.card).slice(1);
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (!AK_RE.status.test(card)) continue;
            var anchor = card.match(AK_RE.cardLink);
            if (!anchor || !/\/watch\//i.test(anchor[0])) continue;
            var aTag = anchor[0].match(AK_RE.aTag), imgTag = anchor[0].match(AK_RE.imgTag);
            if (!aTag || !imgTag) continue;
            var link = akAttrs(aTag[0]), img = akAttrs(imgTag[0]);
            if (!link.href) continue;
            var href;
            try { href = akPage(akAbsolute(link.href, AK_BASE + '/')); } catch (_) { continue; }
            var titleMatch = card.match(AK_RE.title);
            var title = titleMatch ? akText(titleMatch[1]) : (img.alt || '');
            var key = href.replace(/#.*$/, '').replace(/\/$/, '').toLowerCase();
            if (title && !seen[key]) {
                seen[key] = true;
                results.push({title: title, image: akAbsolute(img['data-src'] || img['data-original'] || img.src, AK_BASE + '/'), href: href});
            }
        }
        return JSON.stringify(results);
    } catch (error) { akLog(error); return '[]'; }
}
async function extractDetails(url) {
    try {
        var html = await akWatchHtml(akPage(url));
        var description = html.match(AK_RE.synopsis), aliases = html.match(AK_RE.names), aired = html.match(AK_RE.aired);
        return JSON.stringify([{
            description: description ? akText(description[1]) : 'No description available.',
            aliases: aliases ? akText(aliases[1]) : '',
            airdate: aired ? akText(aired[1]) : ''
        }]);
    } catch (error) { akLog(error); return JSON.stringify([{description: 'Unable to load details.', aliases: '', airdate: ''}]); }
}

/* ---------- episodes ---------- */
function akEpisodes(url) {
    var page = akPage(url);
    return akCached('eps:' + page, async function() {
        var html = await akWatchHtml(page);
        var tag = html.match(AK_RE.watchMain);
        var id = tag && akAttrs(tag[0])['data-id'];
        if (!id || !/^\d+$/.test(id)) throw new Error('Show ID not found');
        var data = await akJSON(AK_BASE + '/ajax/episode/list/' + id + '?style=1', page);
        var episodes = [], seen = {}, re = /<a\b[^>]*>/gi, m;
        while ((m = re.exec(data.result || ''))) {
            var a = akAttrs(m[0]), number = Number(a['data-num']);
            if (!a['data-num'] || !isFinite(number) || !a['data-ids'] || a.enabled === '0' || Number(a['data-' + AK_AUDIO] || 0) <= 0 || seen[number]) continue;
            seen[number] = true;
            var slug = a['data-slug'] || a['data-num'];
            // The server-list ids travel inside the href so playback needs no episode-list round trip.
            episodes.push({href: page + '/ep-' + encodeURIComponent(slug) + '?ids=' + encodeURIComponent(a['data-ids']), number: number, slug: encodeURIComponent(slug), ids: a['data-ids']});
        }
        episodes.sort(function(a, b) { return a.number - b.number; });
        return episodes;
    });
}
async function extractEpisodes(url) {
    try { return JSON.stringify((await akEpisodes(url)).map(function(ep) { return {href: ep.href, number: ep.number}; })); }
    catch (error) { akLog(error); return '[]'; }
}

/* ---------- crypto ---------- */
var akKeys = null;
function akPadded(text, bytes) {
    var words = CryptoJS.enc.Utf8.parse(text).words.slice();
    while (words.length < bytes / 4) words.push(0);
    return CryptoJS.lib.WordArray.create(words, bytes);
}
function akBase64url(words) { return CryptoJS.enc.Base64.stringify(words).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, ''); }
function akDecodeSource(encoded) {
    if (!akKeys) akKeys = {key: akPadded(AK_CFG.aesKey, 32), iv: akPadded(AK_CFG.aesIv, 16)}; // derive once
    var ciphertext = CryptoJS.enc.Base64.parse(encoded.replace(/-/g, '+').replace(/_/g, '/'));
    var plain = CryptoJS.AES.decrypt({ciphertext: ciphertext}, akKeys.key, {iv: akKeys.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
    var result = JSON.parse(plain.toString(CryptoJS.enc.Utf8));
    if (!result || typeof result.file !== 'string') throw new Error('Player source format changed');
    return result;
}
function akSign(url) {
    if (/[?&]token=/.test(url)) return url;
    var path = url.match(/\/([a-f0-9]{32}\/[a-f0-9]{32})\//i);
    if (!path) return url;
    var message = String(Math.floor(Date.now() / 1000) + AK_CFG.tokenTtl) + '|' + path[1].toLowerCase();
    var token = akBase64url(CryptoJS.enc.Utf8.parse(message)) + '.' + akBase64url(CryptoJS.HmacSHA256(message, AK_CFG.hmacSecret));
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'token=' + encodeURIComponent(token);
}

/* ---------- player resolution ---------- */
async function akResolve(embed, label) {
    if (!/^https:\/\/megaplay\.buzz\//i.test(embed)) throw new Error('Unsupported player host: ' + String(embed).split('/')[2]);
    var origin = String(embed).match(/^https:\/\/[^/]+/i)[0];
    var html = await akFetch(embed, AK_BASE + '/');
    var tag = html.match(AK_RE.player);
    var id = tag && akAttrs(tag[0])['data-id'];
    if (!id) throw new Error('Player ID not found');
    var server = String(embed).match(/[?&]s=([^&#]+)/);
    var data = await akJSON(origin + '/stream/getSourcesNew?id=' + encodeURIComponent(id) + '&platform=IOS' + (server ? '&s=' + encodeURIComponent(server[1]) : ''), embed);
    var payload = data.enc ? akDecodeSource(data.enc) : null; // the decrypted object may carry tracks too
    var source = payload || data.sources;
    if (typeof source === 'string') {
        try { source = JSON.parse(source); } catch (_) { source = {file: source}; }
    }
    if (!Array.isArray(source)) source = source ? [source] : [];
    var headers = {Referer: origin + '/', Origin: origin};
    var streams = source.filter(function(item) {
        return item && /^https?:\/\//i.test(item.file || item.url || '');
    }).map(function(item) {
        return {title: AK_AUDIO.toUpperCase() + ' • ' + label + (item.label ? ' • ' + item.label : ''), streamUrl: akSign(item.file || item.url), headers: headers};
    });
    var subtitles = [];
    if (AK_AUDIO === 'sub') { // dub builds never use tracks, so don't process them
        var raw = (Array.isArray(data.tracks) ? data.tracks : []).concat(payload && Array.isArray(payload.tracks) ? payload.tracks : []);
        subtitles = raw.filter(function(track) {
            if (!track || typeof track.file !== 'string' || !track.file.trim()) return false;
            var kind = String(track.kind || '');
            // Accept captions/subtitles AND tracks with no kind; reject thumbnails/sprites.
            return (!kind || /captions|subtitles/i.test(kind)) && !/\.(?:jpe?g|png|webp|gif)(?:[?#]|$)/i.test(track.file);
        }).map(function(track) {
            return {
                url: akAbsolute(track.file, origin + '/'),
                lang: String(track.label || track.srclang || track.language || '').trim() || 'Unknown',
                headers: headers,
                isDefault: track.default === true || String(track.default).toLowerCase() === 'true' || String(track.default) === '1'
            };
        }).filter(function(track) { return /^https?:\/\//i.test(track.url); });
        akLog('tracks: data=' + (Array.isArray(data.tracks) ? data.tracks.length : 'none') + ', payload=' + (payload && Array.isArray(payload.tracks) ? payload.tracks.length : 'none') + ', usable=' + subtitles.length);
    }
    return {streams: streams, subtitles: subtitles};
}
async function akServers(referer, ids) {
    var data = await akJSON(AK_BASE + '/ajax/server/list?servers=' + encodeURIComponent(ids), referer);
    var groups = /<div\b[^>]*data-type=["']([^"']+)["'][^>]*>([\s\S]*?)<\/ul>/gi, group, servers = [];
    while ((group = groups.exec(data.result || ''))) {
        if (group[1] !== AK_AUDIO) continue;
        var re = /<li\b([^>]*)>([\s\S]*?)<\/li>/gi, match;
        while ((match = re.exec(group[2]))) {
            var id = akAttrs(match[1])['data-link-id'];
            if (id) servers.push({id: id, title: akText(match[2])});
        }
    }
    return servers;
}
async function akResolveServer(server, referer) {
    var info = await akJSON(AK_BASE + '/ajax/server?get=' + encodeURIComponent(server.id), referer);
    var embed = info.result && info.result.url;
    if (!embed) return null;
    var resolved = await akResolve(embed, server.title);
    return {key: String(embed).replace('/videojs/', '/'), streams: resolved.streams, subtitles: resolved.subtitles};
}
async function akMapLimit(items, limit, fn) {
    var out = new Array(items.length), next = 0;
    async function worker() {
        while (true) {
            var i = next++;
            if (i >= items.length) return;
            try { out[i] = await fn(items[i]); } catch (error) { akLog(error); }
        }
    }
    var workers = [];
    for (var n = Math.min(limit, items.length); n > 0; n--) workers.push(worker());
    await Promise.all(workers);
    return out;
}
async function extractStreamUrl(url) {
    try {
        var slug = String(url).match(/\/ep-([^/?#]+)/);
        if (!slug) throw new Error('Select an episode first');
        var referer = String(url).replace(/[?#].*$/, '');
        var idsMatch = String(url).match(/[?&]ids=([^&#]+)/);
        var ids = idsMatch ? decodeURIComponent(idsMatch[1]) : '';
        var servers = ids ? await akServers(referer, ids) : [];
        if (!servers.length) { // legacy href without ids, or ids went stale: look them up once
            var episode = (await akEpisodes(url)).filter(function(ep) { return ep.slug === slug[1]; })[0];
            if (!episode) throw new Error('Episode is unavailable in ' + AK_AUDIO);
            if (episode.ids !== ids) servers = await akServers(referer, episode.ids);
        }
        var resolved = await akMapLimit(servers, AK_CFG.concurrency, function(server) { return akResolveServer(server, referer); });
        var streams = [], subtitles = [], seenServers = Object.create(null), seenStreams = Object.create(null), seenSubtitles = Object.create(null);
        resolved.forEach(function(item) {
            if (!item || seenServers[item.key]) return;
            seenServers[item.key] = true;
            item.streams.forEach(function(stream) {
                var key = String(stream.streamUrl || '').replace(/[?#].*$/, '');
                if (key && !seenStreams[key]) { seenStreams[key] = true; streams.push(stream); }
            });
            item.subtitles.forEach(function(track) {
                var key = String(track.url || '').replace(/[?#].*$/, '').toLowerCase();
                if (key && !seenSubtitles[key]) { seenSubtitles[key] = true; subtitles.push(track); }
            });
        });
        // English first, then the player's default track (Array.sort is not guaranteed stable on old engines, so rank explicitly).
        function rank(t) { return (/english/i.test(t.lang) ? 0 : 2) + (t.isDefault ? 0 : 1); }
        subtitles = subtitles.map(function(t, i) { return {t: t, i: i}; }).sort(function(a, b) { return rank(a.t) - rank(b.t) || a.i - b.i; }).map(function(x) { return x.t; });
        var primary = subtitles[0] || null;
        // Shirox only reads `subtitle`/`subtitles` when it is a STRING (the primary track); the full list goes in `allSubtitles`.
        return JSON.stringify({
            streams: streams,
            subtitle: primary ? primary.url : '',
            subtitles: primary ? primary.url : '',
            subtitleHeaders: primary ? primary.headers : {},
            allSubtitles: subtitles.map(function(t) { return {title: t.lang, url: t.url, headers: t.headers}; })
        });
    } catch (error) { akLog(error); return JSON.stringify({streams: [], subtitle: '', subtitles: '', subtitleHeaders: {}, allSubtitles: []}); }
}
