(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="128",an={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sc=0,Do=1,Tc=2,ul=1,Ec=2,Pi=3,Zi=0,tt=1,Ji=2,dl=1,hn=0,Di=1,No=2,Fo=3,Bo=4,Ac=5,Jn=100,Lc=101,Rc=102,Oo=103,zo=104,Cc=200,Pc=201,Ic=202,Dc=203,fl=204,pl=205,Nc=206,Fc=207,Bc=208,Oc=209,zc=210,Uc=0,Hc=1,Gc=2,Os=3,kc=4,Vc=5,Wc=6,qc=7,Or=0,Xc=1,jc=2,ei=0,Yc=1,Zc=2,Jc=3,Kc=4,Qc=5,ml=300,Qs=301,$s=302,Uo=303,Ho=304,zr=306,eo=307,ri=1e3,mt=1001,Ir=1002,Ze=1003,zs=1004,Us=1005,Xe=1006,gl=1007,hi=1008,Yt=1009,$c=1010,eh=1011,Dr=1012,th=1013,Pr=1014,_t=1015,Tn=1016,nh=1017,ih=1018,rh=1019,Ni=1020,sh=1021,Ot=1022,yt=1023,oh=1024,ah=1025,xl=yt,ti=1026,Ui=1027,lh=1028,ch=1029,hh=1030,uh=1031,dh=1032,fh=1033,Go=33776,ko=33777,Vo=33778,Wo=33779,qo=35840,Xo=35841,jo=35842,Yo=35843,ph=36196,Zo=37492,Jo=37496,mh=37808,gh=37809,xh=37810,vh=37811,_h=37812,yh=37813,Mh=37814,bh=37815,wh=37816,Sh=37817,Th=37818,Eh=37819,Ah=37820,Lh=37821,Rh=36492,Ch=37840,Ph=37841,Ih=37842,Dh=37843,Nh=37844,Fh=37845,Bh=37846,Oh=37847,zh=37848,Uh=37849,Hh=37850,Gh=37851,kh=37852,Vh=37853,Wh=2200,qh=2201,Xh=2202,Hi=2300,si=2301,$r=2302,Kn=2400,Qn=2401,Nr=2402,to=2500,vl=2501,jh=0,Yh=1,_l=2,ct=3e3,En=3001,no=3007,Ur=3002,Zh=3003,yl=3004,Ml=3005,bl=3006,Jh=3200,Kh=3201,Ln=0,Qh=1,es=7680,$h=519,Gi=35044,Fr=35048,Ko="300 es";class Jt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const nt=[];for(let s=0;s<256;s++)nt[s]=(s<16?"0":"")+s.toString(16);let $i=1234567;const Fi=Math.PI/180,ki=180/Math.PI;function Mt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nt[s&255]+nt[s>>8&255]+nt[s>>16&255]+nt[s>>24&255]+"-"+nt[e&255]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[t&63|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[n&255]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]).toUpperCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function io(s,e){return(s%e+e)%e}function eu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function tu(s,e,t){return s!==e?(t-s)/(e-s):0}function Bi(s,e,t){return(1-t)*s+t*e}function nu(s,e,t,n){return Bi(s,e,1-Math.exp(-t*n))}function iu(s,e=1){return e-Math.abs(io(s,e*2)-e)}function ru(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function su(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ou(s,e){return s+Math.floor(Math.random()*(e-s+1))}function au(s,e){return s+Math.random()*(e-s)}function lu(s){return s*(.5-Math.random())}function cu(s){return s!==void 0&&($i=s%2147483647),$i=$i*16807%2147483647,($i-1)/2147483646}function hu(s){return s*Fi}function uu(s){return s*ki}function Hs(s){return(s&s-1)===0&&s!==0}function wl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function du(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var fu=Object.freeze({__proto__:null,DEG2RAD:Fi,RAD2DEG:ki,generateUUID:Mt,clamp:dt,euclideanModulo:io,mapLinear:eu,inverseLerp:tu,lerp:Bi,damp:nu,pingpong:iu,smoothstep:ru,smootherstep:su,randInt:ou,randFloat:au,randFloatSpread:lu,seededRandom:cu,degToRad:hu,radToDeg:uu,isPowerOfTwo:Hs,ceilPowerOfTwo:wl,floorPowerOfTwo:Sl,setQuaternionFromProperEuler:du});class Y{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}Y.prototype.isVector2=!0;class it{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],v=i[3],m=i[6],p=i[1],M=i[4],T=i[7],A=i[2],_=i[5],R=i[8];return r[0]=o*x+a*p+l*A,r[3]=o*v+a*M+l*_,r[6]=o*m+a*T+l*R,r[1]=c*x+h*p+u*A,r[4]=c*v+h*M+u*_,r[7]=c*m+h*T+u*R,r[2]=d*x+f*p+g*A,r[5]=d*v+f*M+g*_,r[8]=d*m+f*T+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}it.prototype.isMatrix3=!0;let Pn;class ui{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Pn.width=e.width,Pn.height=e.height;const n=Pn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let pu=0;class ot extends Jt{constructor(e=ot.DEFAULT_IMAGE,t=ot.DEFAULT_MAPPING,n=mt,i=mt,r=Xe,o=hi,a=yt,l=Yt,c=1,h=ct){super(),Object.defineProperty(this,"id",{value:pu++}),this.uuid=Mt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Mt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ts(i[o].image)):r.push(ts(i[o]))}else r=ts(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ri:e.x=e.x-Math.floor(e.x);break;case mt:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ri:e.y=e.y-Math.floor(e.y);break;case mt:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ot.DEFAULT_IMAGE=void 0;ot.DEFAULT_MAPPING=ml;ot.prototype.isTexture=!0;function ts(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ui.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Oe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],v=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+v)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(f+1)/2,A=(m+1)/2,_=(h+d)/4,R=(u+x)/4,F=(g+v)/4;return M>T&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=_/n,r=R/n):T>A?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=_/i,r=F/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=F/r),this.set(n,i,r,t),this}let p=Math.sqrt((v-g)*(v-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(v-g)/p,this.y=(u-x)/p,this.z=(d-h)/p,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Oe.prototype.isVector4=!0;class un extends Jt{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t),n=n||{},this.texture=new ot(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}un.prototype.isWebGLRenderTarget=!0;class mu extends un{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}mu.prototype.isWebGLMultisampleRenderTarget=!0;class rt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let v=1-a;const m=l*d+c*f+h*g+u*x,p=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),_=Math.atan2(A,m*p);v=Math.sin(v*_)/A,a=Math.sin(a*_)/A}const T=a*p;if(l=l*v+d*T,c=c*v+f*T,h=h*v+g*T,u=u*v+x*T,v===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}rt.prototype.isQuaternion=!0;class w{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Qo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,u=l*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}w.prototype.isVector3=!0;const ns=new w,Qo=new rt;class vt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox),is.applyMatrix4(e.matrixWorld),this.union(is));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new w),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),er.subVectors(this.max,_i),In.subVectors(e.a,_i),Dn.subVectors(e.b,_i),Nn.subVectors(e.c,_i),Kt.subVectors(Dn,In),Qt.subVectors(Nn,Dn),yn.subVectors(In,Nn);let t=[0,-Kt.z,Kt.y,0,-Qt.z,Qt.y,0,-yn.z,yn.y,Kt.z,0,-Kt.x,Qt.z,0,-Qt.x,yn.z,0,-yn.x,-Kt.y,Kt.x,0,-Qt.y,Qt.x,0,-yn.y,yn.x,0];return!rs(t,In,Dn,Nn,er)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,In,Dn,Nn,er))?!1:(tr.crossVectors(Kt,Qt),t=[tr.x,tr.y,tr.z],rs(t,In,Dn,Nn,er))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new w),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}vt.prototype.isBox3=!0;const kt=[new w,new w,new w,new w,new w,new w,new w,new w],vi=new w,is=new vt,In=new w,Dn=new w,Nn=new w,Kt=new w,Qt=new w,yn=new w,_i=new w,er=new w,tr=new w,Mn=new w;function rs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mn.fromArray(s,r);const a=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),h=n.dot(Mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gu=new vt,$o=new w,ss=new w,os=new w;class Rn{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new w),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new vt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(os.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return ss.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint($o.copy(e.center).add(ss)),this.expandByPoint($o.copy(e.center).sub(ss)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vt=new w,as=new w,nr=new w,$t=new w,ls=new w,ir=new w,cs=new w;class di{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new w),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new w),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.direction).multiplyScalar(t).add(this.origin),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){as.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),$t.copy(this.origin).sub(as);const r=e.distanceTo(t)*.5,o=-this.direction.dot(nr),a=$t.dot(this.direction),l=-$t.dot(nr),c=$t.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(nr).multiplyScalar(d).add(as),f}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);const n=Vt.dot(this.direction),i=Vt.dot(Vt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,n,i,r){ls.subVectors(t,e),ir.subVectors(n,e),cs.crossVectors(ls,ir);let o=this.direction.dot(cs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$t.subVectors(this.origin,e);const l=a*this.direction.dot(ir.crossVectors($t,ir));if(l<0)return null;const c=a*this.direction.dot(ls.cross($t));if(c<0||l+c>o)return null;const h=-a*$t.dot(cs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,x,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fn.setFromMatrixColumn(e,0).length(),r=1/Fn.setFromMatrixColumn(e,1).length(),o=1/Fn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,vu)}lookAt(e,t,n){const i=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),en.crossVectors(n,gt),en.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),en.crossVectors(n,gt)),en.normalize(),rr.crossVectors(gt,en),i[0]=en.x,i[4]=rr.x,i[8]=gt.x,i[1]=en.y,i[5]=rr.y,i[9]=gt.y,i[2]=en.z,i[6]=rr.z,i[10]=gt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],v=n[10],m=n[14],p=n[3],M=n[7],T=n[11],A=n[15],_=i[0],R=i[4],F=i[8],D=i[12],z=i[1],U=i[5],O=i[9],L=i[13],N=i[2],I=i[6],P=i[10],q=i[14],Z=i[3],J=i[7],oe=i[11],se=i[15];return r[0]=o*_+a*z+l*N+c*Z,r[4]=o*R+a*U+l*I+c*J,r[8]=o*F+a*O+l*P+c*oe,r[12]=o*D+a*L+l*q+c*se,r[1]=h*_+u*z+d*N+f*Z,r[5]=h*R+u*U+d*I+f*J,r[9]=h*F+u*O+d*P+f*oe,r[13]=h*D+u*L+d*q+f*se,r[2]=g*_+x*z+v*N+m*Z,r[6]=g*R+x*U+v*I+m*J,r[10]=g*F+x*O+v*P+m*oe,r[14]=g*D+x*L+v*q+m*se,r[3]=p*_+M*z+T*N+A*Z,r[7]=p*R+M*U+T*I+A*J,r[11]=p*F+M*O+T*P+A*oe,r[15]=p*D+M*L+T*q+A*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],v=e[11],m=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+v*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],v=e[14],m=e[15],p=u*v*c-x*d*c+x*l*f-a*v*f-u*l*m+a*d*m,M=g*d*c-h*v*c-g*l*f+o*v*f+h*l*m-o*d*m,T=h*x*c-g*u*c+g*a*f-o*x*f-h*a*m+o*u*m,A=g*u*l-h*x*l-g*a*d+o*x*d+h*a*v-o*u*v,_=t*p+n*M+i*T+r*A;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/_;return e[0]=p*R,e[1]=(x*d*r-u*v*r-x*i*f+n*v*f+u*i*m-n*d*m)*R,e[2]=(a*v*r-x*l*r+x*i*c-n*v*c-a*i*m+n*l*m)*R,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=M*R,e[5]=(h*v*r-g*d*r+g*i*f-t*v*f-h*i*m+t*d*m)*R,e[6]=(g*l*r-o*v*r-g*i*c+t*v*c+o*i*m-t*l*m)*R,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=T*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*m-t*u*m)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=A*R,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*v+t*u*v)*R,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*v-t*a*v)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,v=o*u,m=a*u,p=l*c,M=l*h,T=l*u,A=n.x,_=n.y,R=n.z;return i[0]=(1-(x+m))*A,i[1]=(f+T)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(f-T)*_,i[5]=(1-(d+m))*_,i[6]=(v+p)*_,i[7]=0,i[8]=(g+M)*R,i[9]=(v-p)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Fn.set(i[0],i[1],i[2]).length();const o=Fn.set(i[4],i[5],i[6]).length(),a=Fn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],St.copy(this);const c=1/r,h=1/o,u=1/a;return St.elements[0]*=c,St.elements[1]*=c,St.elements[2]*=c,St.elements[4]*=h,St.elements[5]*=h,St.elements[6]*=h,St.elements[8]*=u,St.elements[9]*=u,St.elements[10]*=u,t.setFromRotationMatrix(St),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-r),u=(t+e)*l,d=(n+i)*c,f=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}he.prototype.isMatrix4=!0;const Fn=new w,St=new he,xu=new w(0,0,0),vu=new w(1,1,1),en=new w,rr=new w,gt=new w,ea=new he,ta=new rt;class fi{constructor(e=0,t=0,n=0,i=fi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ea,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return ta.setFromEuler(this),this.setFromQuaternion(ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}fi.prototype.isEuler=!0;fi.DefaultOrder="XYZ";fi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class _u{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let yu=0;const na=new w,Bn=new rt,Wt=new he,sr=new w,yi=new w,Mu=new w,bu=new rt,ia=new w(1,0,0),ra=new w(0,1,0),sa=new w(0,0,1),wu={type:"added"},oa={type:"removed"};class Ce extends Jt{constructor(){super(),Object.defineProperty(this,"id",{value:yu++}),this.uuid=Mt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DefaultUp.clone();const e=new w,t=new fi,n=new rt,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new it}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(ia,e)}rotateY(e){return this.rotateOnAxis(ra,e)}rotateZ(e){return this.rotateOnAxis(sa,e)}translateOnAxis(e,t){return na.copy(e).applyQuaternion(this.quaternion),this.position.add(na.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ia,e)}translateY(e){return this.translateOnAxis(ra,e)}translateZ(e){return this.translateOnAxis(sa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sr.copy(e):sr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(yi,sr,this.up):Wt.lookAt(sr,yi,this.up),this.quaternion.setFromRotationMatrix(Wt),i&&(Wt.extractRotation(i.matrixWorld),Bn.setFromRotationMatrix(Wt),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oa)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new rt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,Mu),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,bu,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ce.DefaultUp=new w(0,1,0);Ce.DefaultMatrixAutoUpdate=!0;Ce.prototype.isObject3D=!0;const hs=new w,Su=new w,Tu=new it;class Dt{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hs.subVectors(n,t).cross(Su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new w);const n=e.delta(hs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tu.getNormalMatrix(e),i=this.coplanarPoint(hs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Dt.prototype.isPlane=!0;const Tt=new w,qt=new w,us=new w,Xt=new w,On=new w,zn=new w,aa=new w,ds=new w,fs=new w,ps=new w;class $e{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new w),i.subVectors(n,t),Tt.subVectors(e,t),i.cross(Tt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tt.subVectors(i,t),qt.subVectors(n,t),us.subVectors(e,t);const o=Tt.dot(Tt),a=Tt.dot(qt),l=Tt.dot(us),c=qt.dot(qt),h=qt.dot(us),u=o*c-a*a;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new w),u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xt),Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Xt),l.set(0,0),l.addScaledVector(r,Xt.x),l.addScaledVector(o,Xt.y),l.addScaledVector(a,Xt.z),l}static isFrontFacing(e,t,n,i){return Tt.subVectors(n,t),qt.subVectors(e,t),Tt.cross(qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Tt.cross(qt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $e.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Dt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $e.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return $e.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $e.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $e.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new w);const n=this.a,i=this.b,r=this.c;let o,a;On.subVectors(i,n),zn.subVectors(r,n),ds.subVectors(e,n);const l=On.dot(ds),c=zn.dot(ds);if(l<=0&&c<=0)return t.copy(n);fs.subVectors(e,i);const h=On.dot(fs),u=zn.dot(fs);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(On,o);ps.subVectors(e,r);const f=On.dot(ps),g=zn.dot(ps);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(zn,a);const v=h*g-f*u;if(v<=0&&u-h>=0&&f-g>=0)return aa.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(aa,a);const m=1/(v+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(On,o).addScaledVector(zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Eu=0;function Je(){Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Mt(),this.name="",this.type="Material",this.fog=!0,this.blending=Di,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Je.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Je,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(s){if(s!==void 0)for(const e in s){const t=s[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===dl;continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(s){const e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(t.blending=this.blending),this.side!==Zi&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){const r=[];for(const o in i){const a=i[o];delete a.metadata,r.push(a)}return r}if(e){const i=n(s.textures),r=n(s.images);i.length>0&&(t.textures=i),r.length>0&&(t.images=r)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(s){this.name=s.name,this.fog=s.fog,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const e=s.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Je.prototype,"needsUpdate",{set:function(s){s===!0&&this.version++}});const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={h:0,s:0,l:0},or={h:0,s:0,l:0};function ms(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class ae{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=io(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=ms(r,i,e+1/3),this.g=ms(r,i,e),this.b=ms(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Tl[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i);let a,l;const c=(o+r)/2;if(o===r)a=0,l=0;else{const h=r-o;switch(l=c<=.5?h/(r+o):h/(2-r-o),r){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Et),Et.h+=e,Et.s+=t,Et.l+=n,this.setHSL(Et.h,Et.s,Et.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Et),e.getHSL(or);const n=Bi(Et.h,or.h,t),i=Bi(Et.s,or.s,t),r=Bi(Et.l,or.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ae.NAMES=Tl;ae.prototype.isColor=!0;ae.prototype.r=1;ae.prototype.g=1;ae.prototype.b=1;class Ft extends Je{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}Ft.prototype.isMeshBasicMaterial=!0;const He=new w,ar=new Y;class We{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Gi,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ae),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Y),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new w),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Oe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}We.prototype.isBufferAttribute=!0;class El extends We{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends We{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Au extends We{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Au.prototype.isFloat16BufferAttribute=!0;class je extends We{constructor(e,t,n){super(new Float32Array(e),t,n)}}function Ll(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}let Lu=0;const Ct=new he,vs=new Ce,Un=new w,xt=new vt,Mi=new vt,et=new w;class Fe extends Jt{constructor(){super(),Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Mt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ll(e)>65535?Al:El)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return vs.lookAt(e),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];xt.setFromBufferAttribute(r),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,xt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,xt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(xt.min),this.boundingBox.expandByPoint(xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(et.addVectors(xt.min,Mi.min),xt.expandByPoint(et),et.addVectors(xt.max,Mi.max),xt.expandByPoint(et)):(xt.expandByPoint(Mi.min),xt.expandByPoint(Mi.max))}xt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)et.fromBufferAttribute(a,c),l&&(Un.fromBufferAttribute(e,c),et.add(Un)),i=Math.max(i,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new We(new Float32Array(4*a),4));const l=t.tangent.array,c=[],h=[];for(let z=0;z<a;z++)c[z]=new w,h[z]=new w;const u=new w,d=new w,f=new w,g=new Y,x=new Y,v=new Y,m=new w,p=new w;function M(z,U,O){u.fromArray(i,z*3),d.fromArray(i,U*3),f.fromArray(i,O*3),g.fromArray(o,z*2),x.fromArray(o,U*2),v.fromArray(o,O*2),d.sub(u),f.sub(u),x.sub(g),v.sub(g);const L=1/(x.x*v.y-v.x*x.y);isFinite(L)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-x.y).multiplyScalar(L),p.copy(f).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(L),c[z].add(m),c[U].add(m),c[O].add(m),h[z].add(p),h[U].add(p),h[O].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let z=0,U=T.length;z<U;++z){const O=T[z],L=O.start,N=O.count;for(let I=L,P=L+N;I<P;I+=3)M(n[I+0],n[I+1],n[I+2])}const A=new w,_=new w,R=new w,F=new w;function D(z){R.fromArray(r,z*3),F.copy(R);const U=c[z];A.copy(U),A.sub(R.multiplyScalar(R.dot(U))).normalize(),_.crossVectors(F,U);const L=_.dot(h[z])<0?-1:1;l[z*4]=A.x,l[z*4+1]=A.y,l[z*4+2]=A.z,l[z*4+3]=L}for(let z=0,U=T.length;z<U;++z){const O=T[z],L=O.start,N=O.count;for(let I=L,P=L+N;I<P;I+=3)D(n[I+0]),D(n[I+1]),D(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,v=l.length;x<v;x++){f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new Fe().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Fe.prototype.isBufferGeometry=!0;const la=new he,Hn=new di,_s=new Rn,tn=new w,nn=new w,rn=new w,ys=new w,Ms=new w,bs=new w,lr=new w,cr=new w,hr=new w,ur=new Y,dr=new Y,fr=new Y,ws=new w,pr=new w;class st extends Ce{constructor(e=new Fe,t=new Ft){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),e.ray.intersectsSphere(_s)===!1)||(la.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(la),n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,v=f.length;x<v;x++){const m=f[x],p=i[m.materialIndex],M=Math.max(m.start,g.start),T=Math.min(m.start+m.count,g.start+g.count);for(let A=M,_=T;A<_;A+=3){const R=a.getX(A),F=a.getX(A+1),D=a.getX(A+2);o=mr(this,p,e,Hn,l,c,h,u,d,R,F,D),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=x,p=v;m<p;m+=3){const M=a.getX(m),T=a.getX(m+1),A=a.getX(m+2);o=mr(this,i,e,Hn,l,c,h,u,d,M,T,A),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,v=f.length;x<v;x++){const m=f[x],p=i[m.materialIndex],M=Math.max(m.start,g.start),T=Math.min(m.start+m.count,g.start+g.count);for(let A=M,_=T;A<_;A+=3){const R=A,F=A+1,D=A+2;o=mr(this,p,e,Hn,l,c,h,u,d,R,F,D),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=x,p=v;m<p;m+=3){const M=m,T=m+1,A=m+2;o=mr(this,i,e,Hn,l,c,h,u,d,M,T,A),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}st.prototype.isMesh=!0;function Ru(s,e,t,n,i,r,o,a){let l;if(e.side===tt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==Ji,a),l===null)return null;pr.copy(a),pr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:s}}function mr(s,e,t,n,i,r,o,a,l,c,h,u){tn.fromBufferAttribute(i,c),nn.fromBufferAttribute(i,h),rn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(e.morphTargets&&r&&d){lr.set(0,0,0),cr.set(0,0,0),hr.set(0,0,0);for(let g=0,x=r.length;g<x;g++){const v=d[g],m=r[g];v!==0&&(ys.fromBufferAttribute(m,c),Ms.fromBufferAttribute(m,h),bs.fromBufferAttribute(m,u),o?(lr.addScaledVector(ys,v),cr.addScaledVector(Ms,v),hr.addScaledVector(bs,v)):(lr.addScaledVector(ys.sub(tn),v),cr.addScaledVector(Ms.sub(nn),v),hr.addScaledVector(bs.sub(rn),v)))}tn.add(lr),nn.add(cr),rn.add(hr)}s.isSkinnedMesh&&e.skinning&&(s.boneTransform(c,tn),s.boneTransform(h,nn),s.boneTransform(u,rn));const f=Ru(s,e,t,n,tn,nn,rn,ws);if(f){a&&(ur.fromBufferAttribute(a,c),dr.fromBufferAttribute(a,h),fr.fromBufferAttribute(a,u),f.uv=$e.getUV(ws,tn,nn,rn,ur,dr,fr,new Y)),l&&(ur.fromBufferAttribute(l,c),dr.fromBufferAttribute(l,h),fr.fromBufferAttribute(l,u),f.uv2=$e.getUV(ws,tn,nn,rn,ur,dr,fr,new Y));const g={a:c,b:h,c:u,normal:new w,materialIndex:0};$e.getNormal(tn,nn,rn,g.normal),f.face=g}return f}class Hr extends Fe{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function g(x,v,m,p,M,T,A,_,R,F,D){const z=T/R,U=A/F,O=T/2,L=A/2,N=_/2,I=R+1,P=F+1;let q=0,Z=0;const J=new w;for(let oe=0;oe<P;oe++){const se=oe*U-L;for(let de=0;de<I;de++){const me=de*z-O;J[x]=me*p,J[v]=se*M,J[m]=N,c.push(J.x,J.y,J.z),J[x]=0,J[v]=0,J[m]=_>0?1:-1,h.push(J.x,J.y,J.z),u.push(de/R),u.push(1-oe/F),q+=1}}for(let oe=0;oe<F;oe++)for(let se=0;se<R;se++){const de=d+se+I*oe,me=d+se+I*(oe+1),V=d+(se+1)+I*(oe+1),De=d+(se+1)+I*oe;l.push(de,me,De),l.push(me,V,De),Z+=6}a.addGroup(f,Z,D),f+=Z,d+=q}}}function oi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function at(s){const e={};for(let t=0;t<s.length;t++){const n=oi(s[t]);for(const i in n)e[i]=n[i]}return e}const Cu={clone:oi,merge:at};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Je{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Pu,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}An.prototype.isShaderMaterial=!0;class ro extends Ce{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ro.prototype.isCamera=!0;class lt extends ro{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}lt.prototype.isPerspectiveCamera=!0;const Gn=90,kn=1;class so extends Ce{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new lt(Gn,kn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const r=new lt(Gn,kn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);const o=new lt(Gn,kn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new w(0,1,0)),this.add(o);const a=new lt(Gn,kn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new w(0,-1,0)),this.add(a);const l=new lt(Gn,kn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);const c=new lt(Gn,kn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class Gr extends ot{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qs,a=a!==void 0?a:Ot,super(e,t,n,i,r,o,a,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Gr.prototype.isCubeTexture=!0;class Rl extends un{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Gr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xe,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=yt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hr(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tt,blending:hn});r.uniforms.tEquirect.value=t;const o=new st(i,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=Xe),new so(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}Rl.prototype.isWebGLCubeRenderTarget=!0;class oo extends ot{constructor(e,t,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:Ze,this.minFilter=h!==void 0?h:Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}oo.prototype.isDataTexture=!0;const Vn=new Rn,gr=new w;class kr{constructor(e=new Dt,t=new Dt,n=new Dt,i=new Dt,r=new Dt,o=new Dt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],x=n[11],v=n[12],m=n[13],p=n[14],M=n[15];return t[0].setComponents(a-i,u-l,x-d,M-v).normalize(),t[1].setComponents(a+i,u+l,x+d,M+v).normalize(),t[2].setComponents(a+r,u+c,x+f,M+m).normalize(),t[3].setComponents(a-r,u-c,x-f,M-m).normalize(),t[4].setComponents(a-o,u-h,x-g,M-p).normalize(),t[5].setComponents(a+o,u+h,x+g,M+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(gr.x=i.normal.x>0?e.max.x:e.min.x,gr.y=i.normal.y>0?e.max.y:e.min.y,gr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cl(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Du(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let g=5126;return u instanceof Float32Array?g=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:u instanceof Int16Array?g=5122:u instanceof Uint32Array?g=5125:u instanceof Int32Array?g=5124:u instanceof Int8Array?g=5120:u instanceof Uint8Array&&(g=5121),{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Nu extends Fe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],v=[];for(let m=0;m<h;m++){const p=m*d-o;for(let M=0;M<c;M++){const T=M*u-r;g.push(T,-p,0),x.push(0,0,1),v.push(M/a),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<a;p++){const M=p+c*m,T=p+c*(m+1),A=p+1+c*(m+1),_=p+1+c*m;f.push(M,T,_),f.push(T,A,_)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(v,2))}}var Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,zu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu="vec3 transformed = vec3( position );",Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Vu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,xd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Md=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ld=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,kd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,of=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,xf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,vf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_f=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,yf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ep=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const we={alphamap_fragment:Fu,alphamap_pars_fragment:Bu,alphatest_fragment:Ou,aomap_fragment:zu,aomap_pars_fragment:Uu,begin_vertex:Hu,beginnormal_vertex:Gu,bsdfs:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:ju,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Ku,common:Qu,cube_uv_reflection_fragment:$u,defaultnormal_vertex:ed,displacementmap_pars_vertex:td,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:rd,encodings_fragment:sd,encodings_pars_fragment:od,envmap_fragment:ad,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_fragment:xd,lightmap_pars_fragment:vd,lights_lambert_vertex:_d,lights_pars_begin:yd,lights_toon_fragment:bd,lights_toon_pars_fragment:wd,lights_phong_fragment:Sd,lights_phong_pars_fragment:Td,lights_physical_fragment:Ed,lights_physical_pars_fragment:Ad,lights_fragment_begin:Ld,lights_fragment_maps:Rd,lights_fragment_end:Cd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Bd,map_particle_fragment:Od,map_particle_pars_fragment:zd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:kd,morphtarget_vertex:Vd,normal_fragment_begin:Wd,normal_fragment_maps:qd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:Kd,project_vertex:Qd,dithering_fragment:$d,dithering_pars_fragment:ef,roughnessmap_fragment:tf,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:sf,shadowmap_vertex:of,shadowmask_pars_fragment:af,skinbase_vertex:lf,skinning_pars_vertex:cf,skinning_vertex:hf,skinnormal_vertex:uf,specularmap_fragment:df,specularmap_pars_fragment:ff,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmissionmap_fragment:gf,transmissionmap_pars_fragment:xf,uv_pars_fragment:vf,uv_pars_vertex:_f,uv_vertex:yf,uv2_pars_fragment:Mf,uv2_pars_vertex:bf,uv2_vertex:wf,worldpos_vertex:Sf,background_frag:Tf,background_vert:Ef,cube_frag:Af,cube_vert:Lf,depth_frag:Rf,depth_vert:Cf,distanceRGBA_frag:Pf,distanceRGBA_vert:If,equirect_frag:Df,equirect_vert:Nf,linedashed_frag:Ff,linedashed_vert:Bf,meshbasic_frag:Of,meshbasic_vert:zf,meshlambert_frag:Uf,meshlambert_vert:Hf,meshmatcap_frag:Gf,meshmatcap_vert:kf,meshtoon_frag:Vf,meshtoon_vert:Wf,meshphong_frag:qf,meshphong_vert:Xf,meshphysical_frag:jf,meshphysical_vert:Yf,normal_frag:Zf,normal_vert:Jf,points_frag:Kf,points_vert:Qf,shadow_frag:$f,shadow_vert:ep,sprite_frag:tp,sprite_vert:np},ee={common:{diffuse:{value:new ae(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new it},uv2Transform:{value:new it},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new it}},sprite:{diffuse:{value:new ae(15658734)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new it}}},Nt={basic:{uniforms:at([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:at([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.fog,ee.lights,{emissive:{value:new ae(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:at([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:at([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:at([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new ae(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:at([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:at([ee.points,ee.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:at([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:at([ee.common,ee.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:at([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:we.normal_vert,fragmentShader:we.normal_frag},sprite:{uniforms:at([ee.sprite,ee.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null}},vertexShader:we.background_vert,fragmentShader:we.background_frag},cube:{uniforms:at([ee.envmap,{opacity:{value:1}}]),vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:at([ee.common,ee.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:at([ee.lights,ee.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Nt.physical={uniforms:at([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ae(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};function ip(s,e,t,n,i){const r=new ae(0);let o=0,a,l,c=null,h=0,u=null;function d(g,x,v,m){let p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=e.get(p));const M=s.xr,T=M.getSession&&M.getSession();T&&T.environmentBlendMode==="additive"&&(p=null),p===null?f(r,o):p&&p.isColor&&(f(p,1),m=!0),(s.autoClear||m)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===zr)?(l===void 0&&(l=new st(new Hr(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:oi(Nt.cube.uniforms),vertexShader:Nt.cube.vertexShader,fragmentShader:Nt.cube.fragmentShader,side:tt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,_,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||h!==p.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=s.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new st(new Nu(2,2),new An({name:"BackgroundMaterial",uniforms:oi(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==s.toneMapping)&&(a.material.needsUpdate=!0,c=p,h=p.version,u=s.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function f(g,x){t.buffers.color.setClear(g.r,g.g,g.b,x,i)}return{getClearColor:function(){return r},setClearColor:function(g,x=1){r.set(g),o=x,f(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,f(r,o)},render:d}}function rp(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=x(null);let c=l;function h(L,N,I,P,q){let Z=!1;if(o){const J=g(P,I,N);c!==J&&(c=J,d(c.object)),Z=v(P,q),Z&&m(P,q)}else{const J=N.wireframe===!0;(c.geometry!==P.id||c.program!==I.id||c.wireframe!==J)&&(c.geometry=P.id,c.program=I.id,c.wireframe=J,Z=!0)}L.isInstancedMesh===!0&&(Z=!0),q!==null&&t.update(q,34963),Z&&(R(L,N,I,P),q!==null&&s.bindBuffer(34963,t.get(q).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function f(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,N,I){const P=I.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let Z=q[N.id];Z===void 0&&(Z={},q[N.id]=Z);let J=Z[P];return J===void 0&&(J=x(u()),Z[P]=J),J}function x(L){const N=[],I=[],P=[];for(let q=0;q<i;q++)N[q]=0,I[q]=0,P[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:P,object:L,attributes:{},index:null}}function v(L,N){const I=c.attributes,P=L.attributes;let q=0;for(const Z in P){const J=I[Z],oe=P[Z];if(J===void 0||J.attribute!==oe||J.data!==oe.data)return!0;q++}return c.attributesNum!==q||c.index!==N}function m(L,N){const I={},P=L.attributes;let q=0;for(const Z in P){const J=P[Z],oe={};oe.attribute=J,J.data&&(oe.data=J.data),I[Z]=oe,q++}c.attributes=I,c.attributesNum=q,c.index=N}function p(){const L=c.newAttributes;for(let N=0,I=L.length;N<I;N++)L[N]=0}function M(L){T(L,0)}function T(L,N){const I=c.newAttributes,P=c.enabledAttributes,q=c.attributeDivisors;I[L]=1,P[L]===0&&(s.enableVertexAttribArray(L),P[L]=1),q[L]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),q[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let I=0,P=N.length;I<P;I++)N[I]!==L[I]&&(s.disableVertexAttribArray(I),N[I]=0)}function _(L,N,I,P,q,Z){n.isWebGL2===!0&&(I===5124||I===5125)?s.vertexAttribIPointer(L,N,I,q,Z):s.vertexAttribPointer(L,N,I,P,q,Z)}function R(L,N,I,P){if(n.isWebGL2===!1&&(L.isInstancedMesh||P.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const q=P.attributes,Z=I.getAttributes(),J=N.defaultAttributeValues;for(const oe in Z){const se=Z[oe];if(se>=0){const de=q[oe];if(de!==void 0){const me=de.normalized,V=de.itemSize,De=t.get(de);if(De===void 0)continue;const Se=De.buffer,ge=De.type,fe=De.bytesPerElement;if(de.isInterleavedBufferAttribute){const Ee=de.data,Me=Ee.stride,be=de.offset;Ee&&Ee.isInstancedInterleavedBuffer?(T(se,Ee.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=Ee.meshPerAttribute*Ee.count)):M(se),s.bindBuffer(34962,Se),_(se,V,ge,me,Me*fe,be*fe)}else de.isInstancedBufferAttribute?(T(se,de.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=de.meshPerAttribute*de.count)):M(se),s.bindBuffer(34962,Se),_(se,V,ge,me,0,0)}else if(oe==="instanceMatrix"){const me=t.get(L.instanceMatrix);if(me===void 0)continue;const V=me.buffer,De=me.type;T(se+0,1),T(se+1,1),T(se+2,1),T(se+3,1),s.bindBuffer(34962,V),s.vertexAttribPointer(se+0,4,De,!1,64,0),s.vertexAttribPointer(se+1,4,De,!1,64,16),s.vertexAttribPointer(se+2,4,De,!1,64,32),s.vertexAttribPointer(se+3,4,De,!1,64,48)}else if(oe==="instanceColor"){const me=t.get(L.instanceColor);if(me===void 0)continue;const V=me.buffer,De=me.type;T(se,1),s.bindBuffer(34962,V),s.vertexAttribPointer(se,3,De,!1,12,0)}else if(J!==void 0){const me=J[oe];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(se,me);break;case 3:s.vertexAttrib3fv(se,me);break;case 4:s.vertexAttrib4fv(se,me);break;default:s.vertexAttrib1fv(se,me)}}}}A()}function F(){U();for(const L in a){const N=a[L];for(const I in N){const P=N[I];for(const q in P)f(P[q].object),delete P[q];delete N[I]}delete a[L]}}function D(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const I in N){const P=N[I];for(const q in P)f(P[q].object),delete P[q];delete N[I]}delete a[L.id]}function z(L){for(const N in a){const I=a[N];if(I[L.id]===void 0)continue;const P=I[L.id];for(const q in P)f(P[q].object),delete P[q];delete I[L.id]}}function U(){O(),c!==l&&(c=l,d(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:O,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:p,enableAttribute:M,disableUnusedAttributes:A}}function sp(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function op(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),d=s.getParameter(3379),f=s.getParameter(34076),g=s.getParameter(34921),x=s.getParameter(36347),v=s.getParameter(36348),m=s.getParameter(36349),p=u>0,M=o||e.has("OES_texture_float"),T=p&&M,A=o?s.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:A}}function ap(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dt,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,v=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!v)r?h(null):c();else{const p=r?0:n,M=p*4;let T=m.clippingState||null;l.value=T,T=h(g,d,M,f);for(let A=0;A!==M;++A)T[A]=t[A];m.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let v=null;if(x!==0){if(v=l.value,g!==!0||v===null){const m=f+x*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(v===null||v.length<m)&&(v=new Float32Array(m));for(let M=0,T=f;M!==x;++M,T+=4)o.copy(u[M]).applyMatrix4(p,a),o.normal.toArray(v,T),v[T+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function lp(s){let e=new WeakMap;function t(o,a){return a===Uo?o.mapping=Qs:a===Ho&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uo||a===Ho)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=s.getRenderTarget(),h=new Rl(l.height/2);return h.fromEquirectangularTexture(s,o),e.set(o,h),s.setRenderTarget(c),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function cp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hp(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let v=0,m=x.length;v<m;v++)e.update(x[v],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const p=f.array;x=f.version;for(let M=0,T=p.length;M<T;M+=3){const A=p[M+0],_=p[M+1],R=p[M+2];d.push(A,_,_,R,R,A)}}else{const p=g.array;x=g.version;for(let M=0,T=p.length/3-1;M<T;M+=3){const A=M+0,_=M+1,R=M+2;d.push(A,_,_,R,R,A)}}const v=new(Ll(d)>65535?Al:El)(d,1);v.version=x;const m=r.get(u);m&&e.remove(m),r.set(u,v)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function up(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*l),t.update(f,r,1)}function u(d,f,g){if(g===0)return;let x,v;if(i)x=s,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](r,f,a,d*l,g),t.update(f,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function dp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fp(s,e){return s[0]-e[0]}function pp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function mp(s){const e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,o,a,l){const c=r.morphTargetInfluences,h=c===void 0?0:c.length;let u=e[o.id];if(u===void 0){u=[];for(let v=0;v<h;v++)u[v]=[v,0];e[o.id]=u}for(let v=0;v<h;v++){const m=u[v];m[0]=v,m[1]=c[v]}u.sort(pp);for(let v=0;v<8;v++)v<h&&u[v][1]?(n[v][0]=u[v][0],n[v][1]=u[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(fp);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const m=n[v],p=m[0],M=m[1];p!==Number.MAX_SAFE_INTEGER&&M?(d&&o.getAttribute("morphTarget"+v)!==d[p]&&o.setAttribute("morphTarget"+v,d[p]),f&&o.getAttribute("morphNormal"+v)!==f[p]&&o.setAttribute("morphNormal"+v,f[p]),t[v]=M,g+=M):(d&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),f&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),t[v]=0)}const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function gp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Pl extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Pl.prototype.isDataTexture2DArray=!0;class Il extends ot{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Il.prototype.isDataTexture3D=!0;const Dl=new ot,xp=new Pl,vp=new Il,Nl=new Gr,ca=[],ha=[],ua=new Float32Array(16),da=new Float32Array(9),fa=new Float32Array(4);function pi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ca[i];if(r===void 0&&(r=new Float32Array(i),ca[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fl(s,e){let t=ha[e];t===void 0&&(t=new Int32Array(e),ha[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function _p(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),ht(t,e)}}function Mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),ht(t,e)}}function bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),ht(t,e)}}function wp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;fa.set(n),s.uniformMatrix2fv(this.addr,!1,fa),ht(t,n)}}function Sp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;da.set(n),s.uniformMatrix3fv(this.addr,!1,da),ht(t,n)}}function Tp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;ua.set(n),s.uniformMatrix4fv(this.addr,!1,ua),ht(t,n)}}function Ep(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ap(s,e){const t=this.cache;ft(t,e)||(s.uniform2iv(this.addr,e),ht(t,e))}function Lp(s,e){const t=this.cache;ft(t,e)||(s.uniform3iv(this.addr,e),ht(t,e))}function Rp(s,e){const t=this.cache;ft(t,e)||(s.uniform4iv(this.addr,e),ht(t,e))}function Cp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pp(s,e){const t=this.cache;ft(t,e)||(s.uniform2uiv(this.addr,e),ht(t,e))}function Ip(s,e){const t=this.cache;ft(t,e)||(s.uniform3uiv(this.addr,e),ht(t,e))}function Dp(s,e){const t=this.cache;ft(t,e)||(s.uniform4uiv(this.addr,e),ht(t,e))}function Np(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Dl,i)}function Fp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function Bp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Nl,i)}function Op(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xp,i)}function zp(s){switch(s){case 5126:return _p;case 35664:return yp;case 35665:return Mp;case 35666:return bp;case 35674:return wp;case 35675:return Sp;case 35676:return Tp;case 5124:case 35670:return Ep;case 35667:case 35671:return Ap;case 35668:case 35672:return Lp;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Pp;case 36295:return Ip;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return Op}}function Up(s,e){s.uniform1fv(this.addr,e)}function Hp(s,e){const t=pi(e,this.size,2);s.uniform2fv(this.addr,t)}function Gp(s,e){const t=pi(e,this.size,3);s.uniform3fv(this.addr,t)}function kp(s,e){const t=pi(e,this.size,4);s.uniform4fv(this.addr,t)}function Vp(s,e){const t=pi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wp(s,e){const t=pi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qp(s,e){const t=pi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xp(s,e){s.uniform1iv(this.addr,e)}function jp(s,e){s.uniform2iv(this.addr,e)}function Yp(s,e){s.uniform3iv(this.addr,e)}function Zp(s,e){s.uniform4iv(this.addr,e)}function Jp(s,e){s.uniform1uiv(this.addr,e)}function Kp(s,e){s.uniform2uiv(this.addr,e)}function Qp(s,e){s.uniform3uiv(this.addr,e)}function $p(s,e){s.uniform4uiv(this.addr,e)}function em(s,e,t){const n=e.length,i=Fl(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Dl,i[r])}function tm(s,e,t){const n=e.length,i=Fl(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Nl,i[r])}function nm(s){switch(s){case 5126:return Up;case 35664:return Hp;case 35665:return Gp;case 35666:return kp;case 35674:return Vp;case 35675:return Wp;case 35676:return qp;case 5124:case 35670:return Xp;case 35667:case 35671:return jp;case 35668:case 35672:return Yp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Kp;case 36295:return Qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35680:case 36300:case 36308:case 36293:return tm}}function im(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=zp(e.type)}function Bl(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=nm(e.type)}Bl.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),ht(e,s)};function Ol(s){this.id=s,this.seq=[],this.map={}}Ol.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,e[o.id],t)}};const Ss=/(\w+)(\])?(\[|\.)?/g;function pa(s,e){s.seq.push(e),s.map[e.id]=e}function rm(s,e,t){const n=s.name,i=n.length;for(Ss.lastIndex=0;;){const r=Ss.exec(n),o=Ss.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){pa(t,c===void 0?new im(a,s,e):new Bl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ol(a),pa(t,u)),t=u}}}function dn(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);rm(i,r,this)}}dn.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)};dn.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)};dn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}};dn.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function ma(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let sm=0;function om(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function zl(s){switch(s){case ct:return["Linear","( value )"];case En:return["sRGB","( value )"];case Ur:return["RGBE","( value )"];case yl:return["RGBM","( value, 7.0 )"];case Ml:return["RGBM","( value, 16.0 )"];case bl:return["RGBD","( value, 256.0 )"];case no:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Zh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function ga(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+om(r)}function bi(s,e){const t=zl(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function am(s,e){const t=zl(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function lm(s,e){let t;switch(e){case Yc:t="Linear";break;case Zc:t="Reinhard";break;case Jc:t="OptimizedCineon";break;case Kc:t="ACESFilmic";break;case Qc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cm(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function hm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function um(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i).name;t[o]=s.getAttribLocation(e,o)}return t}function Ii(s){return s!==""}function xa(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function va(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gs(s){return s.replace(dm,fm)}function fm(s,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gs(t)}const pm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _a(s){return s.replace(mm,Ul).replace(pm,gm)}function gm(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ul(s,e,t,n)}function Ul(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ya(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function vm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case $s:e="ENVMAP_TYPE_CUBE";break;case zr:case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _m(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function ym(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Or:e="ENVMAP_BLENDING_MULTIPLY";break;case Xc:e="ENVMAP_BLENDING_MIX";break;case jc:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xm(t),c=vm(t),h=_m(t),u=ym(t),d=s.gammaFactor>0?s.gammaFactor:1,f=t.isWebGL2?"":cm(t),g=hm(r),x=i.createProgram();let v,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[g].filter(Ii).join(`
`),v.length>0&&(v+=`
`),m=[f,g].filter(Ii).join(`
`),m.length>0&&(m+=`
`)):(v=[ya(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),m=[f,ya(t),"#define SHADER_NAME "+t.shaderName,g,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?we.tonemapping_pars_fragment:"",t.toneMapping!==ei?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",we.encodings_pars_fragment,t.map?bi("mapTexelToLinear",t.mapEncoding):"",t.matcap?bi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?bi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?bi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?bi("lightMapTexelToLinear",t.lightMapEncoding):"",am("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),o=Gs(o),o=xa(o,t),o=va(o,t),a=Gs(a),a=xa(a,t),a=va(a,t),o=_a(o),a=_a(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Ko?"":"out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=p+v+o,T=p+m+a,A=ma(i,35633,M),_=ma(i,35632,T);if(i.attachShader(x,A),i.attachShader(x,_),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const D=i.getProgramInfoLog(x).trim(),z=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(_).trim();let O=!0,L=!0;if(i.getProgramParameter(x,35714)===!1){O=!1;const N=ga(i,A,"vertex"),I=ga(i,_,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(x,35715),"gl.getProgramInfoLog",D,N,I)}else D!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",D):(z===""||U==="")&&(L=!1);L&&(this.diagnostics={runnable:O,programLog:D,vertexShader:{log:z,prefix:v},fragmentShader:{log:U,prefix:m}})}i.deleteShader(A),i.deleteShader(_);let R;this.getUniforms=function(){return R===void 0&&(R=new dn(i,x)),R};let F;return this.getAttributes=function(){return F===void 0&&(F=um(i,x)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=_,this}function bm(s,e,t,n,i,r){const o=[],a=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function x(_){const F=_.skeleton.bones;if(c)return 1024;{const z=Math.floor((h-20)/4),U=Math.min(z,F.length);return U<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+F.length+" bones. This GPU supports "+U+"."),0):U}}function v(_){let R;return _&&_.isTexture?R=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),R=_.texture.encoding):R=ct,R}function m(_,R,F,D,z){const U=D.fog,O=_.isMeshStandardMaterial?D.environment:null,L=e.get(_.envMap||O),N=f[_.type],I=z.isSkinnedMesh?x(z):0;_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let P,q;if(N){const oe=Nt[N];P=oe.vertexShader,q=oe.fragmentShader}else P=_.vertexShader,q=_.fragmentShader;const Z=s.getRenderTarget();return{isWebGL2:a,shaderID:N,shaderName:_.type,vertexShader:P,fragmentShader:q,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Z!==null?v(Z.texture):s.outputEncoding,map:!!_.map,mapEncoding:v(_.map),matcap:!!_.matcap,matcapEncoding:v(_.matcap),envMap:!!L,envMapMode:L&&L.mapping,envMapEncoding:v(L),envMapCubeUV:!!L&&(L.mapping===zr||L.mapping===eo),lightMap:!!_.lightMap,lightMapEncoding:v(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:v(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Qh,tangentSpaceNormalMap:_.normalMapType===Ln,clearcoatMap:!!_.clearcoatMap,clearcoatRoughnessMap:!!_.clearcoatRoughnessMap,clearcoatNormalMap:!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,alphaMap:!!_.alphaMap,gradientMap:!!_.gradientMap,sheen:!!_.sheen,transmissionMap:!!_.transmissionMap,combine:_.combine,vertexTangents:_.normalMap&&_.vertexTangents,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&z.geometry&&z.geometry.attributes.color&&z.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.transmissionMap)&&!!_.displacementMap,fog:!!U,useFog:_.fog,fogExp2:U&&U.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:l,skinning:_.skinning&&I>0,maxBones:I,useVertexTexture:c,morphTargets:_.morphTargets,morphNormals:_.morphNormals,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:_.toneMapped?s.toneMapping:ei,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,alphaTest:_.alphaTest,doubleSided:_.side===Ji,flipSided:_.side===tt,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.fragmentShader),R.push(_.vertexShader)),_.defines!==void 0)for(const F in _.defines)R.push(F),R.push(_.defines[F]);if(_.isRawShaderMaterial===!1){for(let F=0;F<g.length;F++)R.push(_[g[F]]);R.push(s.outputEncoding),R.push(s.gammaFactor)}return R.push(_.customProgramCacheKey),R.join()}function M(_){const R=f[_.type];let F;if(R){const D=Nt[R];F=Cu.clone(D.uniforms)}else F=_.uniforms;return F}function T(_,R){let F;for(let D=0,z=o.length;D<z;D++){const U=o[D];if(U.cacheKey===R){F=U,++F.usedTimes;break}}return F===void 0&&(F=new Mm(s,R,_,i),o.push(F)),F}function A(_){if(--_.usedTimes===0){const R=o.indexOf(_);o[R]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:A,programs:o}}function wm(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Sm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ma(s){const e=[];let t=0;const n=[],i=[],r={id:-1};function o(){t=0,n.length=0,i.length=0}function a(d,f,g,x,v,m){let p=e[t];const M=s.get(g);return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,program:M.program||r,groupOrder:x,renderOrder:d.renderOrder,z:v,group:m},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.program=M.program||r,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function l(d,f,g,x,v,m){const p=a(d,f,g,x,v,m);(g.transparent===!0?i:n).push(p)}function c(d,f,g,x,v,m){const p=a(d,f,g,x,v,m);(g.transparent===!0?i:n).unshift(p)}function h(d,f){n.length>1&&n.sort(d||Sm),i.length>1&&i.sort(f||Tm)}function u(){for(let d=t,f=e.length;d<f;d++){const g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transparent:i,init:o,push:l,unshift:c,finish:u,sort:h}}function Em(s){let e=new WeakMap;function t(i,r){let o;return e.has(i)===!1?(o=new Ma(s),e.set(i,[o])):r>=e.get(i).length?(o=new Ma(s),e.get(i).push(o)):o=e.get(i)[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Am(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ae};break;case"SpotLight":t={position:new w,direction:new w,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Lm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Rm=0;function Cm(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Pm(s,e){const t=new Am,n=Lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new w);const r=new w,o=new he,a=new he;function l(h){let u=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let g=0,x=0,v=0,m=0,p=0,M=0,T=0,A=0;h.sort(Cm);for(let R=0,F=h.length;R<F;R++){const D=h[R],z=D.color,U=D.intensity,O=D.distance,L=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=z.r*U,d+=z.g*U,f+=z.b*U;else if(D.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],U);else if(D.isDirectionalLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const I=D.shadow,P=n.get(D);P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,i.directionalShadow[g]=P,i.directionalShadowMap[g]=L,i.directionalShadowMatrix[g]=D.shadow.matrix,M++}i.directional[g]=N,g++}else if(D.isSpotLight){const N=t.get(D);if(N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(z).multiplyScalar(U),N.distance=O,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,D.castShadow){const I=D.shadow,P=n.get(D);P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,i.spotShadow[v]=P,i.spotShadowMap[v]=L,i.spotShadowMatrix[v]=D.shadow.matrix,A++}i.spot[v]=N,v++}else if(D.isRectAreaLight){const N=t.get(D);N.color.copy(z).multiplyScalar(U),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=N,m++}else if(D.isPointLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const I=D.shadow,P=n.get(D);P.shadowBias=I.bias,P.shadowNormalBias=I.normalBias,P.shadowRadius=I.radius,P.shadowMapSize=I.mapSize,P.shadowCameraNear=I.camera.near,P.shadowCameraFar=I.camera.far,i.pointShadow[x]=P,i.pointShadowMap[x]=L,i.pointShadowMatrix[x]=D.shadow.matrix,T++}i.point[x]=N,x++}else if(D.isHemisphereLight){const N=t.get(D);N.skyColor.copy(D.color).multiplyScalar(U),N.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[p]=N,p++}}m>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==g||_.pointLength!==x||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==M||_.numPointShadows!==T||_.numSpotShadows!==A)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotShadowMatrix.length=A,_.directionalLength=g,_.pointLength=x,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=M,_.numPointShadows=T,_.numSpotShadows=A,i.version=Rm++)}function c(h,u){let d=0,f=0,g=0,x=0,v=0;const m=u.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){const T=h[p];if(T.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(T.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(m),A.direction.normalize(),v++}}}return{setup:l,setupView:c,state:i}}function ba(s,e){const t=new Pm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(){t.setup(n)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Im(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new ba(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new ba(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Hl extends Je{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Jh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Hl.prototype.isMeshDepthMaterial=!0;class Gl extends Je{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Gl.prototype.isMeshDistanceMaterial=!0;var Dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function kl(s,e,t){let n=new kr;const i=new Y,r=new Y,o=new Oe,a=[],l=[],c={},h=t.maxTextureSize,u={0:tt,1:Zi,2:Ji},d=new An({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:Nm,fragmentShader:Dm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new st(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul,this.render=function(_,R,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||_.length===0)return;const D=s.getRenderTarget(),z=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),O=s.state;O.setBlending(hn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let L=0,N=_.length;L<N;L++){const I=_[L],P=I.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const q=P.getFrameExtents();if(i.multiply(q),r.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,P.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,P.mapSize.y=r.y)),P.map===null&&!P.isPointLightShadow&&this.type===Pi){const J={minFilter:Xe,magFilter:Xe,format:yt};P.map=new un(i.x,i.y,J),P.map.texture.name=I.name+".shadowMap",P.mapPass=new un(i.x,i.y,J),P.camera.updateProjectionMatrix()}if(P.map===null){const J={minFilter:Ze,magFilter:Ze,format:yt};P.map=new un(i.x,i.y,J),P.map.texture.name=I.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const Z=P.getViewportCount();for(let J=0;J<Z;J++){const oe=P.getViewport(J);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),O.viewport(o),P.updateMatrices(I,J),n=P.getFrustum(),A(R,F,P.camera,I,this.type)}!P.isPointLightShadow&&this.type===Pi&&m(P,F),P.needsUpdate=!1}v.needsUpdate=!1,s.setRenderTarget(D,z,U)};function m(_,R){const F=e.update(x);d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,s.setRenderTarget(_.mapPass),s.clear(),s.renderBufferDirect(R,null,F,d,x,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,s.setRenderTarget(_.map),s.clear(),s.renderBufferDirect(R,null,F,f,x,null)}function p(_,R,F){const D=_<<0|R<<1|F<<2;let z=a[D];return z===void 0&&(z=new Hl({depthPacking:Kh,morphTargets:_,skinning:R}),a[D]=z),z}function M(_,R,F){const D=_<<0|R<<1|F<<2;let z=l[D];return z===void 0&&(z=new Gl({morphTargets:_,skinning:R}),l[D]=z),z}function T(_,R,F,D,z,U,O){let L=null,N=p,I=_.customDepthMaterial;if(D.isPointLight===!0&&(N=M,I=_.customDistanceMaterial),I===void 0){let P=!1;F.morphTargets===!0&&(P=R.morphAttributes&&R.morphAttributes.position&&R.morphAttributes.position.length>0);let q=!1;_.isSkinnedMesh===!0&&(F.skinning===!0?q=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",_));const Z=_.isInstancedMesh===!0;L=N(P,q,Z)}else L=I;if(s.localClippingEnabled&&F.clipShadows===!0&&F.clippingPlanes.length!==0){const P=L.uuid,q=F.uuid;let Z=c[P];Z===void 0&&(Z={},c[P]=Z);let J=Z[q];J===void 0&&(J=L.clone(),Z[q]=J),L=J}return L.visible=F.visible,L.wireframe=F.wireframe,O===Pi?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:u[F.side],L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,D.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(D.matrixWorld),L.nearDistance=z,L.farDistance=U),L}function A(_,R,F,D,z){if(_.visible===!1)return;if(_.layers.test(R.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&z===Pi)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld);const L=e.update(_),N=_.material;if(Array.isArray(N)){const I=L.groups;for(let P=0,q=I.length;P<q;P++){const Z=I[P],J=N[Z.materialIndex];if(J&&J.visible){const oe=T(_,L,J,D,F.near,F.far,z);s.renderBufferDirect(F,null,L,oe,_,Z)}}}else if(N.visible){const I=T(_,L,N,D,F.near,F.far,z);s.renderBufferDirect(F,null,L,I,_,null)}}const O=_.children;for(let L=0,N=O.length;L<N;L++)A(O[L],R,F,D,z)}}function Fm(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const S=new Oe;let W=null;const ne=new Oe(0,0,0,0);return{setMask:function(G){W!==G&&!C&&(s.colorMask(G,G,G,G),W=G)},setLocked:function(G){C=G},setClear:function(G,ue,Te,Ge,Lt){Lt===!0&&(G*=Ge,ue*=Ge,Te*=Ge),S.set(G,ue,Te,Ge),ne.equals(S)===!1&&(s.clearColor(G,ue,Te,Ge),ne.copy(S))},reset:function(){C=!1,W=null,ne.set(-1,0,0,0)}}}function r(){let C=!1,S=null,W=null,ne=null;return{setTest:function(G){G?de(2929):me(2929)},setMask:function(G){S!==G&&!C&&(s.depthMask(G),S=G)},setFunc:function(G){if(W!==G){if(G)switch(G){case Uc:s.depthFunc(512);break;case Hc:s.depthFunc(519);break;case Gc:s.depthFunc(513);break;case Os:s.depthFunc(515);break;case kc:s.depthFunc(514);break;case Vc:s.depthFunc(518);break;case Wc:s.depthFunc(516);break;case qc:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);W=G}},setLocked:function(G){C=G},setClear:function(G){ne!==G&&(s.clearDepth(G),ne=G)},reset:function(){C=!1,S=null,W=null,ne=null}}}function o(){let C=!1,S=null,W=null,ne=null,G=null,ue=null,Te=null,Ge=null,Lt=null;return{setTest:function(Pe){C||(Pe?de(2960):me(2960))},setMask:function(Pe){S!==Pe&&!C&&(s.stencilMask(Pe),S=Pe)},setFunc:function(Pe,Ke,wt){(W!==Pe||ne!==Ke||G!==wt)&&(s.stencilFunc(Pe,Ke,wt),W=Pe,ne=Ke,G=wt)},setOp:function(Pe,Ke,wt){(ue!==Pe||Te!==Ke||Ge!==wt)&&(s.stencilOp(Pe,Ke,wt),ue=Pe,Te=Ke,Ge=wt)},setLocked:function(Pe){C=Pe},setClear:function(Pe){Lt!==Pe&&(s.clearStencil(Pe),Lt=Pe)},reset:function(){C=!1,S=null,W=null,ne=null,G=null,ue=null,Te=null,Ge=null,Lt=null}}}const a=new i,l=new r,c=new o;let h={},u=null,d={},f=null,g=!1,x=null,v=null,m=null,p=null,M=null,T=null,A=null,_=!1,R=null,F=null,D=null,z=null,U=null;const O=s.getParameter(35661);let L=!1,N=0;const I=s.getParameter(7938);I.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(I)[1]),L=N>=1):I.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),L=N>=2);let P=null,q={};const Z=new Oe(0,0,s.canvas.width,s.canvas.height),J=new Oe(0,0,s.canvas.width,s.canvas.height);function oe(C,S,W){const ne=new Uint8Array(4),G=s.createTexture();s.bindTexture(C,G),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let ue=0;ue<W;ue++)s.texImage2D(S+ue,0,6408,1,1,0,6408,5121,ne);return G}const se={};se[3553]=oe(3553,3553,1),se[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(2929),l.setFunc(Os),be(!1),K(Do),de(2884),Ee(hn);function de(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function me(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function V(C){C!==u&&(s.bindFramebuffer(36160,C),u=C)}function De(C,S){S===null&&u!==null&&(S=u),d[C]!==S&&(s.bindFramebuffer(C,S),d[C]=S,n&&(C===36009&&(d[36160]=S),C===36160&&(d[36009]=S)))}function Se(C){return f!==C?(s.useProgram(C),f=C,!0):!1}const ge={[Jn]:32774,[Lc]:32778,[Rc]:32779};if(n)ge[Oo]=32775,ge[zo]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(ge[Oo]=C.MIN_EXT,ge[zo]=C.MAX_EXT)}const fe={[Cc]:0,[Pc]:1,[Ic]:768,[fl]:770,[zc]:776,[Bc]:774,[Nc]:772,[Dc]:769,[pl]:771,[Oc]:775,[Fc]:773};function Ee(C,S,W,ne,G,ue,Te,Ge){if(C===hn){g===!0&&(me(3042),g=!1);return}if(g===!1&&(de(3042),g=!0),C!==Ac){if(C!==x||Ge!==_){if((v!==Jn||M!==Jn)&&(s.blendEquation(32774),v=Jn,M=Jn),Ge)switch(C){case Di:s.blendFuncSeparate(1,771,1,771);break;case No:s.blendFunc(1,1);break;case Fo:s.blendFuncSeparate(0,0,769,771);break;case Bo:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Di:s.blendFuncSeparate(770,771,1,771);break;case No:s.blendFunc(770,1);break;case Fo:s.blendFunc(0,769);break;case Bo:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,p=null,T=null,A=null,x=C,_=Ge}return}G=G||S,ue=ue||W,Te=Te||ne,(S!==v||G!==M)&&(s.blendEquationSeparate(ge[S],ge[G]),v=S,M=G),(W!==m||ne!==p||ue!==T||Te!==A)&&(s.blendFuncSeparate(fe[W],fe[ne],fe[ue],fe[Te]),m=W,p=ne,T=ue,A=Te),x=C,_=null}function Me(C,S){C.side===Ji?me(2884):de(2884);let W=C.side===tt;S&&(W=!W),be(W),C.blending===Di&&C.transparent===!1?Ee(hn):Ee(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ne=C.stencilWrite;c.setTest(ne),ne&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),$(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?de(32926):me(32926)}function be(C){R!==C&&(C?s.frontFace(2304):s.frontFace(2305),R=C)}function K(C){C!==Sc?(de(2884),C!==F&&(C===Do?s.cullFace(1029):C===Tc?s.cullFace(1028):s.cullFace(1032))):me(2884),F=C}function Q(C){C!==D&&(L&&s.lineWidth(C),D=C)}function $(C,S,W){C?(de(32823),(z!==S||U!==W)&&(s.polygonOffset(S,W),z=S,U=W)):me(32823)}function le(C){C?de(3089):me(3089)}function te(C){C===void 0&&(C=33984+O-1),P!==C&&(s.activeTexture(C),P=C)}function E(C,S){P===null&&te();let W=q[P];W===void 0&&(W={type:void 0,texture:void 0},q[P]=W),(W.type!==C||W.texture!==S)&&(s.bindTexture(C,S||se[C]),W.type=C,W.texture=S)}function b(){const C=q[P];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(C){Z.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function Ae(C){J.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),J.copy(C))}function pe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},P=null,q={},u=null,d={},f=null,g=!1,x=null,v=null,m=null,p=null,M=null,T=null,A=null,_=!1,R=null,F=null,D=null,z=null,U=null,Z.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:me,bindFramebuffer:De,bindXRFramebuffer:V,useProgram:Se,setBlending:Ee,setMaterial:Me,setFlipSided:be,setCullFace:K,setLineWidth:Q,setPolygonOffset:$,setScissorTest:le,activeTexture:te,bindTexture:E,unbindTexture:b,compressedTexImage2D:X,texImage2D:j,texImage3D:ie,scissor:ce,viewport:Ae,reset:pe}}function Bm(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let f,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,b){return g?new OffscreenCanvas(E,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(E,b,X,j){let ie=1;if((E.width>j||E.height>j)&&(ie=j/Math.max(E.width,E.height)),ie<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ce=b?Sl:Math.floor,Ae=ce(ie*E.width),pe=ce(ie*E.height);f===void 0&&(f=x(Ae,pe));const C=X?x(Ae,pe):f;return C.width=Ae,C.height=pe,C.getContext("2d").drawImage(E,0,0,Ae,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ae+"x"+pe+")."),C}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Hs(E.width)&&Hs(E.height)}function p(E){return a?!1:E.wrapS!==mt||E.wrapT!==mt||E.minFilter!==Ze&&E.minFilter!==Xe}function M(E,b){return E.generateMipmaps&&b&&E.minFilter!==Ze&&E.minFilter!==Xe}function T(E,b,X,j){s.generateMipmap(E);const ie=n.get(b);ie.__maxMipLevel=Math.log2(Math.max(X,j))}function A(E,b,X){if(a===!1)return b;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=b;return b===6403&&(X===5126&&(j=33326),X===5131&&(j=33325),X===5121&&(j=33321)),b===6407&&(X===5126&&(j=34837),X===5131&&(j=34843),X===5121&&(j=32849)),b===6408&&(X===5126&&(j=34836),X===5131&&(j=34842),X===5121&&(j=32856)),(j===33325||j===33326||j===34842||j===34836)&&e.get("EXT_color_buffer_float"),j}function _(E){return E===Ze||E===zs||E===Us?9728:9729}function R(E){const b=E.target;b.removeEventListener("dispose",R),D(b),b.isVideoTexture&&d.delete(b),o.memory.textures--}function F(E){const b=E.target;b.removeEventListener("dispose",F),z(b),o.memory.textures--}function D(E){const b=n.get(E);b.__webglInit!==void 0&&(s.deleteTexture(b.__webglTexture),n.remove(E))}function z(E){const b=E.texture,X=n.get(E),j=n.get(b);if(E){if(j.__webglTexture!==void 0&&s.deleteTexture(j.__webglTexture),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(X.__webglFramebuffer[ie]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[ie]);else s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&s.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer);n.remove(b),n.remove(E)}}let U=0;function O(){U=0}function L(){const E=U;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),U+=1,E}function N(E,b){const X=n.get(E);if(E.isVideoTexture&&K(E),E.version>0&&X.__version!==E.version){const j=E.image;if(j===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(X,E,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,X.__webglTexture)}function I(E,b){const X=n.get(E);if(E.version>0&&X.__version!==E.version){de(X,E,b);return}t.activeTexture(33984+b),t.bindTexture(35866,X.__webglTexture)}function P(E,b){const X=n.get(E);if(E.version>0&&X.__version!==E.version){de(X,E,b);return}t.activeTexture(33984+b),t.bindTexture(32879,X.__webglTexture)}function q(E,b){const X=n.get(E);if(E.version>0&&X.__version!==E.version){me(X,E,b);return}t.activeTexture(33984+b),t.bindTexture(34067,X.__webglTexture)}const Z={[ri]:10497,[mt]:33071,[Ir]:33648},J={[Ze]:9728,[zs]:9984,[Us]:9986,[Xe]:9729,[gl]:9985,[hi]:9987};function oe(E,b,X){if(X?(s.texParameteri(E,10242,Z[b.wrapS]),s.texParameteri(E,10243,Z[b.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,Z[b.wrapR]),s.texParameteri(E,10240,J[b.magFilter]),s.texParameteri(E,10241,J[b.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(b.wrapS!==mt||b.wrapT!==mt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,_(b.magFilter)),s.texParameteri(E,10241,_(b.minFilter)),b.minFilter!==Ze&&b.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(b.type===_t&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Tn&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(E,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function se(E,b){E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",R),E.__webglTexture=s.createTexture(),o.memory.textures++)}function de(E,b,X){let j=3553;b.isDataTexture2DArray&&(j=35866),b.isDataTexture3D&&(j=32879),se(E,b),t.activeTexture(33984+X),t.bindTexture(j,E.__webglTexture),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const ie=p(b)&&m(b.image)===!1,ce=v(b.image,ie,!1,h),Ae=m(ce)||a,pe=r.convert(b.format);let C=r.convert(b.type),S=A(b.internalFormat,pe,C);oe(j,b,Ae);let W;const ne=b.mipmaps;if(b.isDepthTexture)S=6402,a?b.type===_t?S=36012:b.type===Pr?S=33190:b.type===Ni?S=35056:S=33189:b.type===_t&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ti&&S===6402&&b.type!==Dr&&b.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Dr,C=r.convert(b.type)),b.format===Ui&&S===6402&&(S=34041,b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ni,C=r.convert(b.type))),t.texImage2D(3553,0,S,ce.width,ce.height,0,pe,C,null);else if(b.isDataTexture)if(ne.length>0&&Ae){for(let G=0,ue=ne.length;G<ue;G++)W=ne[G],t.texImage2D(3553,G,S,W.width,W.height,0,pe,C,W.data);b.generateMipmaps=!1,E.__maxMipLevel=ne.length-1}else t.texImage2D(3553,0,S,ce.width,ce.height,0,pe,C,ce.data),E.__maxMipLevel=0;else if(b.isCompressedTexture){for(let G=0,ue=ne.length;G<ue;G++)W=ne[G],b.format!==yt&&b.format!==Ot?pe!==null?t.compressedTexImage2D(3553,G,S,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,G,S,W.width,W.height,0,pe,C,W.data);E.__maxMipLevel=ne.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,S,ce.width,ce.height,ce.depth,0,pe,C,ce.data),E.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,S,ce.width,ce.height,ce.depth,0,pe,C,ce.data),E.__maxMipLevel=0;else if(ne.length>0&&Ae){for(let G=0,ue=ne.length;G<ue;G++)W=ne[G],t.texImage2D(3553,G,S,pe,C,W);b.generateMipmaps=!1,E.__maxMipLevel=ne.length-1}else t.texImage2D(3553,0,S,pe,C,ce),E.__maxMipLevel=0;M(b,Ae)&&T(j,b,ce.width,ce.height),E.__version=b.version,b.onUpdate&&b.onUpdate(b)}function me(E,b,X){if(b.image.length!==6)return;se(E,b),t.activeTexture(33984+X),t.bindTexture(34067,E.__webglTexture),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const j=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),ie=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let G=0;G<6;G++)!j&&!ie?ce[G]=v(b.image[G],!1,!0,c):ce[G]=ie?b.image[G].image:b.image[G];const Ae=ce[0],pe=m(Ae)||a,C=r.convert(b.format),S=r.convert(b.type),W=A(b.internalFormat,C,S);oe(34067,b,pe);let ne;if(j){for(let G=0;G<6;G++){ne=ce[G].mipmaps;for(let ue=0;ue<ne.length;ue++){const Te=ne[ue];b.format!==yt&&b.format!==Ot?C!==null?t.compressedTexImage2D(34069+G,ue,W,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+G,ue,W,Te.width,Te.height,0,C,S,Te.data)}}E.__maxMipLevel=ne.length-1}else{ne=b.mipmaps;for(let G=0;G<6;G++)if(ie){t.texImage2D(34069+G,0,W,ce[G].width,ce[G].height,0,C,S,ce[G].data);for(let ue=0;ue<ne.length;ue++){const Ge=ne[ue].image[G].image;t.texImage2D(34069+G,ue+1,W,Ge.width,Ge.height,0,C,S,Ge.data)}}else{t.texImage2D(34069+G,0,W,C,S,ce[G]);for(let ue=0;ue<ne.length;ue++){const Te=ne[ue];t.texImage2D(34069+G,ue+1,W,C,S,Te.image[G])}}E.__maxMipLevel=ne.length}M(b,pe)&&T(34067,b,Ae.width,Ae.height),E.__version=b.version,b.onUpdate&&b.onUpdate(b)}function V(E,b,X,j){const ie=b.texture,ce=r.convert(ie.format),Ae=r.convert(ie.type),pe=A(ie.internalFormat,ce,Ae);j===32879||j===35866?t.texImage3D(j,0,pe,b.width,b.height,b.depth,0,ce,Ae,null):t.texImage2D(j,0,pe,b.width,b.height,0,ce,Ae,null),t.bindFramebuffer(36160,E),s.framebufferTexture2D(36160,X,j,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(E,b,X){if(s.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let j=33189;if(X){const ie=b.depthTexture;ie&&ie.isDepthTexture&&(ie.type===_t?j=36012:ie.type===Pr&&(j=33190));const ce=be(b);s.renderbufferStorageMultisample(36161,ce,j,b.width,b.height)}else s.renderbufferStorage(36161,j,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){if(X){const j=be(b);s.renderbufferStorageMultisample(36161,j,35056,b.width,b.height)}else s.renderbufferStorage(36161,34041,b.width,b.height);s.framebufferRenderbuffer(36160,33306,36161,E)}else{const j=b.texture,ie=r.convert(j.format),ce=r.convert(j.type),Ae=A(j.internalFormat,ie,ce);if(X){const pe=be(b);s.renderbufferStorageMultisample(36161,pe,Ae,b.width,b.height)}else s.renderbufferStorage(36161,Ae,b.width,b.height)}s.bindRenderbuffer(36161,null)}function Se(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);const j=n.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===ti)s.framebufferTexture2D(36160,36096,3553,j,0);else if(b.depthTexture.format===Ui)s.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function ge(E){const b=n.get(E),X=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,E)}else if(X){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=s.createRenderbuffer(),De(b.__webglDepthbuffer[j],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),De(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function fe(E){const b=E.texture,X=n.get(E),j=n.get(b);E.addEventListener("dispose",F),j.__webglTexture=s.createTexture(),j.__version=b.version,o.memory.textures++;const ie=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultisampleRenderTarget===!0,Ae=b.isDataTexture3D||b.isDataTexture2DArray,pe=m(E)||a;if(a&&b.format===Ot&&(b.type===_t||b.type===Tn)&&(b.format=yt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ie){X.__webglFramebuffer=[];for(let C=0;C<6;C++)X.__webglFramebuffer[C]=s.createFramebuffer()}else if(X.__webglFramebuffer=s.createFramebuffer(),ce)if(a){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,X.__webglColorRenderbuffer);const C=r.convert(b.format),S=r.convert(b.type),W=A(b.internalFormat,C,S),ne=be(E);s.renderbufferStorageMultisample(36161,ne,W,E.width,E.height),t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,X.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),De(X.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ie){t.bindTexture(34067,j.__webglTexture),oe(34067,b,pe);for(let C=0;C<6;C++)V(X.__webglFramebuffer[C],E,36064,34069+C);M(b,pe)&&T(34067,b,E.width,E.height),t.bindTexture(34067,null)}else{let C=3553;Ae&&(a?C=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(C,j.__webglTexture),oe(C,b,pe),V(X.__webglFramebuffer,E,36064,C),M(b,pe)&&T(3553,b,E.width,E.height),t.bindTexture(3553,null)}E.depthBuffer&&ge(E)}function Ee(E){const b=E.texture,X=m(E)||a;if(M(b,X)){const j=E.isWebGLCubeRenderTarget?34067:3553,ie=n.get(b).__webglTexture;t.bindTexture(j,ie),T(j,b,E.width,E.height),t.bindTexture(j,null)}}function Me(E){if(E.isWebGLMultisampleRenderTarget)if(a){const b=E.width,X=E.height;let j=16384;E.depthBuffer&&(j|=256),E.stencilBuffer&&(j|=1024);const ie=n.get(E);t.bindFramebuffer(36008,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ie.__webglFramebuffer),s.blitFramebuffer(0,0,b,X,0,0,b,X,j,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ie.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function be(E){return a&&E.isWebGLMultisampleRenderTarget?Math.min(u,E.samples):0}function K(E){const b=o.render.frame;d.get(E)!==b&&(d.set(E,b),E.update())}let Q=!1,$=!1;function le(E,b){E&&E.isWebGLRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Q=!0),E=E.texture),N(E,b)}function te(E,b){E&&E.isWebGLCubeRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),$=!0),E=E.texture),q(E,b)}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=I,this.setTexture3D=P,this.setTextureCube=q,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Me,this.safeSetTexture2D=le,this.safeSetTextureCube=te}function Om(s,e,t){const n=t.isWebGL2;function i(r){let o;if(r===Yt)return 5121;if(r===nh)return 32819;if(r===ih)return 32820;if(r===rh)return 33635;if(r===$c)return 5120;if(r===eh)return 5122;if(r===Dr)return 5123;if(r===th)return 5124;if(r===Pr)return 5125;if(r===_t)return 5126;if(r===Tn)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===sh)return 6406;if(r===Ot)return 6407;if(r===yt)return 6408;if(r===oh)return 6409;if(r===ah)return 6410;if(r===ti)return 6402;if(r===Ui)return 34041;if(r===lh)return 6403;if(r===ch)return 36244;if(r===hh)return 33319;if(r===uh)return 33320;if(r===dh)return 36248;if(r===fh)return 36249;if(r===Go||r===ko||r===Vo||r===Wo)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qo||r===Xo||r===jo||r===Yo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===qo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ph)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Zo||r===Jo)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(r===Zo)return o.COMPRESSED_RGB8_ETC2;if(r===Jo)return o.COMPRESSED_RGBA8_ETC2_EAC}if(r===mh||r===gh||r===xh||r===vh||r===_h||r===yh||r===Mh||r===bh||r===wh||r===Sh||r===Th||r===Eh||r===Ah||r===Lh||r===Ch||r===Ph||r===Ih||r===Dh||r===Nh||r===Fh||r===Bh||r===Oh||r===zh||r===Uh||r===Hh||r===Gh||r===kh||r===Vh)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?r:null;if(r===Rh)return o=e.get("EXT_texture_compression_bptc"),o!==null?r:null;if(r===Ni)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Vl extends lt{constructor(e=[]){super(),this.cameras=e}}Vl.prototype.isArrayCamera=!0;class cn extends Ce{constructor(){super(),this.type="Group"}}cn.prototype.isGroup=!0;const zm={type:"move"};class Ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zm))),c&&e.hand){o=!0;for(const x of e.hand.values()){const v=t.getJointPose(x,n);if(c.joints[x.jointName]===void 0){const p=new cn;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[x.jointName]=p,c.add(p)}const m=c.joints[x.jointName];v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=v.radius),m.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class Um extends Jt{constructor(e,t){super();const n=this,i=e.state;let r=null,o=1,a=null,l="local-floor",c=null;const h=[],u=new Map,d=new lt;d.layers.enable(1),d.viewport=new Oe;const f=new lt;f.layers.enable(2),f.viewport=new Oe;const g=[d,f],x=new Vl;x.layers.enable(1),x.layers.enable(2);let v=null,m=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let L=h[O];return L===void 0&&(L=new Ts,h[O]=L),L.getTargetRaySpace()},this.getControllerGrip=function(O){let L=h[O];return L===void 0&&(L=new Ts,h[O]=L),L.getGripSpace()},this.getHand=function(O){let L=h[O];return L===void 0&&(L=new Ts,h[O]=L),L.getHandSpace()};function p(O){const L=u.get(O.inputSource);L&&L.dispatchEvent({type:O.type,data:O.inputSource})}function M(){u.forEach(function(O,L){O.disconnect(L)}),u.clear(),v=null,m=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){l=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){r.addEventListener("select",p),r.addEventListener("selectstart",p),r.addEventListener("selectend",p),r.addEventListener("squeeze",p),r.addEventListener("squeezestart",p),r.addEventListener("squeezeend",p),r.addEventListener("end",M),r.addEventListener("inputsourceschange",T);const L=t.getContextAttributes();L.xrCompatible!==!0&&await t.makeXRCompatible();const N={antialias:L.antialias,alpha:L.alpha,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o},I=new XRWebGLLayer(r,t,N);r.updateRenderState({baseLayer:I}),a=await r.requestReferenceSpace(l),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function T(O){const L=r.inputSources;for(let N=0;N<h.length;N++)u.set(L[N],h[N]);for(let N=0;N<O.removed.length;N++){const I=O.removed[N],P=u.get(I);P&&(P.dispatchEvent({type:"disconnected",data:I}),u.delete(I))}for(let N=0;N<O.added.length;N++){const I=O.added[N],P=u.get(I);P&&P.dispatchEvent({type:"connected",data:I})}}const A=new w,_=new w;function R(O,L,N){A.setFromMatrixPosition(L.matrixWorld),_.setFromMatrixPosition(N.matrixWorld);const I=A.distanceTo(_),P=L.projectionMatrix.elements,q=N.projectionMatrix.elements,Z=P[14]/(P[10]-1),J=P[14]/(P[10]+1),oe=(P[9]+1)/P[5],se=(P[9]-1)/P[5],de=(P[8]-1)/P[0],me=(q[8]+1)/q[0],V=Z*de,De=Z*me,Se=I/(-de+me),ge=Se*-de;L.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ge),O.translateZ(Se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const fe=Z+Se,Ee=J+Se,Me=V-ge,be=De+(I-ge),K=oe*J/Ee*fe,Q=se*J/Ee*fe;O.projectionMatrix.makePerspective(Me,be,K,Q,fe,Ee)}function F(O,L){L===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(L.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.getCamera=function(O){x.near=f.near=d.near=O.near,x.far=f.far=d.far=O.far,(v!==x.near||m!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),v=x.near,m=x.far);const L=O.parent,N=x.cameras;F(x,L);for(let P=0;P<N.length;P++)F(N[P],L);O.matrixWorld.copy(x.matrixWorld),O.matrix.copy(x.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const I=O.children;for(let P=0,q=I.length;P<q;P++)I[P].updateMatrixWorld(!0);return N.length===2?R(x,d,f):x.projectionMatrix.copy(d.projectionMatrix),x};let D=null;function z(O,L){if(c=L.getViewerPose(a),c!==null){const I=c.views,P=r.renderState.baseLayer;i.bindXRFramebuffer(P.framebuffer);let q=!1;I.length!==x.cameras.length&&(x.cameras.length=0,q=!0);for(let Z=0;Z<I.length;Z++){const J=I[Z],oe=P.getViewport(J),se=g[Z];se.matrix.fromArray(J.transform.matrix),se.projectionMatrix.fromArray(J.projectionMatrix),se.viewport.set(oe.x,oe.y,oe.width,oe.height),Z===0&&x.matrix.copy(se.matrix),q===!0&&x.cameras.push(se)}}const N=r.inputSources;for(let I=0;I<h.length;I++){const P=h[I],q=N[I];P.update(q,L,a)}D&&D(O,L)}const U=new Cl;U.setAnimationLoop(z),this.setAnimationLoop=function(O){D=O},this.dispose=function(){}}}function Hm(s){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,M,T){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),h(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?d(m,p):u(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),x(m,p)):p.isMeshNormalMaterial?(n(m,p),v(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,M,T):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap);const M=s.get(p).envMap;if(M){m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,m.reflectivity.value=p.reflectivity,m.refractionRatio.value=p.refractionRatio;const _=s.get(M).__maxMipLevel;_!==void 0&&(m.maxMipLevel.value=_)}p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let T;p.map?T=p.map:p.specularMap?T=p.specularMap:p.displacementMap?T=p.displacementMap:p.normalMap?T=p.normalMap:p.bumpMap?T=p.bumpMap:p.roughnessMap?T=p.roughnessMap:p.metalnessMap?T=p.metalnessMap:p.alphaMap?T=p.alphaMap:p.emissiveMap?T=p.emissiveMap:p.clearcoatMap?T=p.clearcoatMap:p.clearcoatNormalMap?T=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(T=p.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uv2Transform.value.copy(A.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uvTransform.value.copy(A.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),s.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p){u(m,p),m.reflectivity.value=p.reflectivity,m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&m.sheen.value.copy(p.sheen),p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===tt&&m.clearcoatNormalScale.value.negate()),m.transmission.value=p.transmission,p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function x(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function v(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Gm(){const s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function ze(s){s=s||{};const e=s.canvas!==void 0?s.canvas:Gm(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,o=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ct,this.physicallyCorrectLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const x=this;let v=!1,m=0,p=0,M=null,T=-1,A=null;const _=new Oe,R=new Oe;let F=null,D=e.width,z=e.height,U=1,O=null,L=null;const N=new Oe(0,0,D,z),I=new Oe(0,0,D,z);let P=!1;const q=new kr;let Z=!1,J=!1;const oe=new he,se=new w,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return M===null?U:1}let V=t;function De(y,H){for(let B=0;B<y.length;B++){const k=y[B],re=e.getContext(k,H);if(re!==null)return re}return null}try{const y={alpha:n,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",ue,!1),e.addEventListener("webglcontextrestored",Te,!1),V===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),V=De(H,y),V===null)throw De(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Se,ge,fe,Ee,Me,be,K,Q,$,le,te,E,b,X,j,ie,ce,Ae,pe,C,S,W;function ne(){Se=new cp(V),ge=new op(V,Se,s),Se.init(ge),S=new Om(V,Se,ge),fe=new Fm(V,Se,ge),Ee=new dp,Me=new wm,be=new Bm(V,Se,fe,Me,ge,S,Ee),K=new lp(x),Q=new Du(V,ge),W=new rp(V,Se,Q,ge),$=new hp(V,Q,Ee,W),le=new gp(V,$,Q,Ee),Ae=new mp(V),j=new ap(Me),te=new bm(x,K,Se,ge,W,j),E=new Hm(Me),b=new Em(Me),X=new Im(Se,ge),ce=new ip(x,K,fe,le,a),ie=new kl(x,le,ge),pe=new sp(V,Se,Ee,ge),C=new up(V,Se,Ee,ge),Ee.programs=te.programs,x.capabilities=ge,x.extensions=Se,x.properties=Me,x.renderLists=b,x.shadowMap=ie,x.state=fe,x.info=Ee}ne();const G=new Um(x,V);this.xr=G,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const y=Se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(y){y!==void 0&&(U=y,this.setSize(D,z,!1))},this.getSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),y=new Y),y.set(D,z)},this.setSize=function(y,H,B){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=y,z=H,e.width=Math.floor(y*U),e.height=Math.floor(H*U),B!==!1&&(e.style.width=y+"px",e.style.height=H+"px"),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),y=new Y),y.set(D*U,z*U).floor()},this.setDrawingBufferSize=function(y,H,B){D=y,z=H,U=B,e.width=Math.floor(y*B),e.height=Math.floor(H*B),this.setViewport(0,0,y,H)},this.getCurrentViewport=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),y=new Oe),y.copy(_)},this.getViewport=function(y){return y.copy(N)},this.setViewport=function(y,H,B,k){y.isVector4?N.set(y.x,y.y,y.z,y.w):N.set(y,H,B,k),fe.viewport(_.copy(N).multiplyScalar(U).floor())},this.getScissor=function(y){return y.copy(I)},this.setScissor=function(y,H,B,k){y.isVector4?I.set(y.x,y.y,y.z,y.w):I.set(y,H,B,k),fe.scissor(R.copy(I).multiplyScalar(U).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(y){fe.setScissorTest(P=y)},this.setOpaqueSort=function(y){O=y},this.setTransparentSort=function(y){L=y},this.getClearColor=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),y=new ae),y.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(y,H,B){let k=0;(y===void 0||y)&&(k|=16384),(H===void 0||H)&&(k|=256),(B===void 0||B)&&(k|=1024),V.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",Te,!1),b.dispose(),X.dispose(),Me.dispose(),K.dispose(),le.dispose(),W.dispose(),G.dispose(),G.removeEventListener("sessionstart",Eo),G.removeEventListener("sessionend",Ao),xn.stop()};function ue(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const y=Ee.autoReset,H=ie.enabled,B=ie.autoUpdate,k=ie.needsUpdate,re=ie.type;ne(),Ee.autoReset=y,ie.enabled=H,ie.autoUpdate=B,ie.needsUpdate=k,ie.type=re}function Ge(y){const H=y.target;H.removeEventListener("dispose",Ge),Lt(H)}function Lt(y){Pe(y),Me.remove(y)}function Pe(y){const H=Me.get(y).programs;H!==void 0&&H.forEach(function(B){te.releaseProgram(B)})}function Ke(y,H){y.render(function(B){x.renderBufferImmediate(B,H)})}this.renderBufferImmediate=function(y,H){W.initAttributes();const B=Me.get(y);y.hasPositions&&!B.position&&(B.position=V.createBuffer()),y.hasNormals&&!B.normal&&(B.normal=V.createBuffer()),y.hasUvs&&!B.uv&&(B.uv=V.createBuffer()),y.hasColors&&!B.color&&(B.color=V.createBuffer());const k=H.getAttributes();y.hasPositions&&(V.bindBuffer(34962,B.position),V.bufferData(34962,y.positionArray,35048),W.enableAttribute(k.position),V.vertexAttribPointer(k.position,3,5126,!1,0,0)),y.hasNormals&&(V.bindBuffer(34962,B.normal),V.bufferData(34962,y.normalArray,35048),W.enableAttribute(k.normal),V.vertexAttribPointer(k.normal,3,5126,!1,0,0)),y.hasUvs&&(V.bindBuffer(34962,B.uv),V.bufferData(34962,y.uvArray,35048),W.enableAttribute(k.uv),V.vertexAttribPointer(k.uv,2,5126,!1,0,0)),y.hasColors&&(V.bindBuffer(34962,B.color),V.bufferData(34962,y.colorArray,35048),W.enableAttribute(k.color),V.vertexAttribPointer(k.color,3,5126,!1,0,0)),W.disableUnusedAttributes(),V.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,H,B,k,re,Le){H===null&&(H=de);const xe=re.isMesh&&re.matrixWorld.determinant()<0,ye=Io(y,H,k,re);fe.setMaterial(k,xe);let Ue=B.index;const _e=B.attributes.position;if(Ue===null){if(_e===void 0||_e.count===0)return}else if(Ue.count===0)return;let Re=1;k.wireframe===!0&&(Ue=$.getWireframeAttribute(B),Re=2),(k.morphTargets||k.morphNormals)&&Ae.update(re,B,k,ye),W.setup(re,k,ye,B,Ue);let ve,Be=pe;Ue!==null&&(ve=Q.get(Ue),Be=C,Be.setIndex(ve));const Rt=Ue!==null?Ue.count:_e.count,ut=B.drawRange.start*Re,vn=B.drawRange.count*Re,Qe=Le!==null?Le.start*Re:0,_n=Le!==null?Le.count*Re:1/0,Ye=Math.max(ut,Qe),Qr=Math.min(Rt,ut+vn,Qe+_n)-1,pt=Math.max(0,Qr-Ye+1);if(pt!==0){if(re.isMesh)k.wireframe===!0?(fe.setLineWidth(k.wireframeLinewidth*me()),Be.setMode(1)):Be.setMode(4);else if(re.isLine){let Gt=k.linewidth;Gt===void 0&&(Gt=1),fe.setLineWidth(Gt*me()),re.isLineSegments?Be.setMode(1):re.isLineLoop?Be.setMode(2):Be.setMode(3)}else re.isPoints?Be.setMode(0):re.isSprite&&Be.setMode(4);if(re.isInstancedMesh)Be.renderInstances(Ye,pt,re.count);else if(B.isInstancedBufferGeometry){const Gt=Math.min(B.instanceCount,B._maxInstanceCount);Be.renderInstances(Ye,pt,Gt)}else Be.render(Ye,pt)}},this.compile=function(y,H){d=X.get(y),d.init(),y.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(),y.traverse(function(B){const k=B.material;if(k)if(Array.isArray(k))for(let re=0;re<k.length;re++){const Le=k[re];Kr(Le,y,B)}else Kr(k,y,B)})};let wt=null;function yc(y){wt&&wt(y)}function Eo(){xn.stop()}function Ao(){xn.start()}const xn=new Cl;xn.setAnimationLoop(yc),typeof window<"u"&&xn.setContext(window),this.setAnimationLoop=function(y){wt=y,G.setAnimationLoop(y),y===null?xn.stop():xn.start()},G.addEventListener("sessionstart",Eo),G.addEventListener("sessionend",Ao),this.render=function(y,H){let B,k;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),B=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),k=arguments[3]),H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(H=G.getCamera(H)),y.isScene===!0&&y.onBeforeRender(x,y,H,B||M),d=X.get(y,g.length),d.init(),g.push(d),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(oe),J=this.localClippingEnabled,Z=j.init(this.clippingPlanes,J,H),u=b.get(y,f.length),u.init(),f.push(u),Lo(y,H,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(O,L),Z===!0&&j.beginShadows();const re=d.state.shadowsArray;ie.render(re,y,H),d.setupLights(),d.setupLightsView(H),Z===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),B!==void 0&&this.setRenderTarget(B),ce.render(u,y,H,k);const Le=u.opaque,xe=u.transparent;Le.length>0&&Ro(Le,y,H),xe.length>0&&Ro(xe,y,H),M!==null&&(be.updateRenderTargetMipmap(M),be.updateMultisampleRenderTarget(M)),y.isScene===!0&&y.onAfterRender(x,y,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),W.resetDefaultState(),T=-1,A=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Lo(y,H,B,k){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){k&&se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(oe);const xe=le.update(y),ye=y.material;ye.visible&&u.push(y,xe,ye,B,se.z,null)}}else if(y.isImmediateRenderObject)k&&se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(oe),u.push(y,null,y.material,B,se.z,null);else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Ee.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ee.render.frame),!y.frustumCulled||q.intersectsObject(y))){k&&se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(oe);const xe=le.update(y),ye=y.material;if(Array.isArray(ye)){const Ue=xe.groups;for(let _e=0,Re=Ue.length;_e<Re;_e++){const ve=Ue[_e],Be=ye[ve.materialIndex];Be&&Be.visible&&u.push(y,xe,Be,B,se.z,ve)}}else ye.visible&&u.push(y,xe,ye,B,se.z,null)}}const Le=y.children;for(let xe=0,ye=Le.length;xe<ye;xe++)Lo(Le[xe],H,B,k)}function Ro(y,H,B){const k=H.isScene===!0?H.overrideMaterial:null;for(let re=0,Le=y.length;re<Le;re++){const xe=y[re],ye=xe.object,Ue=xe.geometry,_e=k===null?xe.material:k,Re=xe.group;if(B.isArrayCamera){const ve=B.cameras;for(let Be=0,Rt=ve.length;Be<Rt;Be++){const ut=ve[Be];ye.layers.test(ut.layers)&&(fe.viewport(_.copy(ut.viewport)),d.setupLightsView(ut),Co(ye,H,ut,Ue,_e,Re))}}else Co(ye,H,B,Ue,_e,Re)}}function Co(y,H,B,k,re,Le){if(y.onBeforeRender(x,H,B,k,re,Le),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),y.isImmediateRenderObject){const xe=Io(B,H,re,y);fe.setMaterial(re),W.reset(),Ke(y,xe)}else x.renderBufferDirect(B,H,k,re,y,Le);y.onAfterRender(x,H,B,k,re,Le)}function Kr(y,H,B){H.isScene!==!0&&(H=de);const k=Me.get(y),re=d.state.lights,Le=d.state.shadowsArray,xe=re.state.version,ye=te.getParameters(y,re.state,Le,H,B),Ue=te.getProgramCacheKey(ye);let _e=k.programs;k.environment=y.isMeshStandardMaterial?H.environment:null,k.fog=H.fog,k.envMap=K.get(y.envMap||k.environment),_e===void 0&&(y.addEventListener("dispose",Ge),_e=new Map,k.programs=_e);let Re=_e.get(Ue);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===xe)return Po(y,ye),Re}else ye.uniforms=te.getUniforms(y),y.onBuild(ye,x),y.onBeforeCompile(ye,x),Re=te.acquireProgram(ye,Ue),_e.set(Ue,Re),k.uniforms=ye.uniforms;const ve=k.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ve.clippingPlanes=j.uniform),Po(y,ye),k.needsLights=bc(y),k.lightsStateVersion=xe,k.needsLights&&(ve.ambientLightColor.value=re.state.ambient,ve.lightProbe.value=re.state.probe,ve.directionalLights.value=re.state.directional,ve.directionalLightShadows.value=re.state.directionalShadow,ve.spotLights.value=re.state.spot,ve.spotLightShadows.value=re.state.spotShadow,ve.rectAreaLights.value=re.state.rectArea,ve.ltc_1.value=re.state.rectAreaLTC1,ve.ltc_2.value=re.state.rectAreaLTC2,ve.pointLights.value=re.state.point,ve.pointLightShadows.value=re.state.pointShadow,ve.hemisphereLights.value=re.state.hemi,ve.directionalShadowMap.value=re.state.directionalShadowMap,ve.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ve.spotShadowMap.value=re.state.spotShadowMap,ve.spotShadowMatrix.value=re.state.spotShadowMatrix,ve.pointShadowMap.value=re.state.pointShadowMap,ve.pointShadowMatrix.value=re.state.pointShadowMatrix);const Be=Re.getUniforms(),Rt=dn.seqWithValue(Be.seq,ve);return k.currentProgram=Re,k.uniformsList=Rt,Re}function Po(y,H){const B=Me.get(y);B.outputEncoding=H.outputEncoding,B.instancing=H.instancing,B.numClippingPlanes=H.numClippingPlanes,B.numIntersection=H.numClipIntersection,B.vertexAlphas=H.vertexAlphas}function Io(y,H,B,k){H.isScene!==!0&&(H=de),be.resetTextureUnits();const re=H.fog,Le=B.isMeshStandardMaterial?H.environment:null,xe=M===null?x.outputEncoding:M.texture.encoding,ye=K.get(B.envMap||Le),Ue=B.vertexColors===!0&&k.geometry&&k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,_e=Me.get(B),Re=d.state.lights;if(Z===!0&&(J===!0||y!==A)){const Ye=y===A&&B.id===T;j.setState(B,y,Ye)}let ve=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Re.state.version||_e.outputEncoding!==xe||k.isInstancedMesh&&_e.instancing===!1||!k.isInstancedMesh&&_e.instancing===!0||_e.envMap!==ye||B.fog&&_e.fog!==re||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==j.numPlanes||_e.numIntersection!==j.numIntersection)||_e.vertexAlphas!==Ue)&&(ve=!0):(ve=!0,_e.__version=B.version);let Be=_e.currentProgram;ve===!0&&(Be=Kr(B,H,k));let Rt=!1,ut=!1,vn=!1;const Qe=Be.getUniforms(),_n=_e.uniforms;if(fe.useProgram(Be.program)&&(Rt=!0,ut=!0,vn=!0),B.id!==T&&(T=B.id,ut=!0),Rt||A!==y){if(Qe.setValue(V,"projectionMatrix",y.projectionMatrix),ge.logarithmicDepthBuffer&&Qe.setValue(V,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),A!==y&&(A=y,ut=!0,vn=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Ye=Qe.map.cameraPosition;Ye!==void 0&&Ye.setValue(V,se.setFromMatrixPosition(y.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Qe.setValue(V,"isOrthographic",y.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||B.skinning)&&Qe.setValue(V,"viewMatrix",y.matrixWorldInverse)}if(B.skinning){Qe.setOptional(V,k,"bindMatrix"),Qe.setOptional(V,k,"bindMatrixInverse");const Ye=k.skeleton;if(Ye){const Qr=Ye.bones;if(ge.floatVertexTextures){if(Ye.boneTexture===null){let pt=Math.sqrt(Qr.length*4);pt=wl(pt),pt=Math.max(pt,4);const Gt=new Float32Array(pt*pt*4);Gt.set(Ye.boneMatrices);const wc=new oo(Gt,pt,pt,yt,_t);Ye.boneMatrices=Gt,Ye.boneTexture=wc,Ye.boneTextureSize=pt}Qe.setValue(V,"boneTexture",Ye.boneTexture,be),Qe.setValue(V,"boneTextureSize",Ye.boneTextureSize)}else Qe.setOptional(V,Ye,"boneMatrices")}}return(ut||_e.receiveShadow!==k.receiveShadow)&&(_e.receiveShadow=k.receiveShadow,Qe.setValue(V,"receiveShadow",k.receiveShadow)),ut&&(Qe.setValue(V,"toneMappingExposure",x.toneMappingExposure),_e.needsLights&&Mc(_n,vn),re&&B.fog&&E.refreshFogUniforms(_n,re),E.refreshMaterialUniforms(_n,B,U,z),dn.upload(V,_e.uniformsList,_n,be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(dn.upload(V,_e.uniformsList,_n,be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Qe.setValue(V,"center",k.center),Qe.setValue(V,"modelViewMatrix",k.modelViewMatrix),Qe.setValue(V,"normalMatrix",k.normalMatrix),Qe.setValue(V,"modelMatrix",k.matrixWorld),Be}function Mc(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function bc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return M},this.setRenderTarget=function(y,H=0,B=0){M=y,m=H,p=B,y&&Me.get(y).__webglFramebuffer===void 0&&be.setupRenderTarget(y);let k=null,re=!1,Le=!1;if(y){const xe=y.texture;(xe.isDataTexture3D||xe.isDataTexture2DArray)&&(Le=!0);const ye=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(k=ye[H],re=!0):y.isWebGLMultisampleRenderTarget?k=Me.get(y).__webglMultisampledFramebuffer:k=ye,_.copy(y.viewport),R.copy(y.scissor),F=y.scissorTest}else _.copy(N).multiplyScalar(U).floor(),R.copy(I).multiplyScalar(U).floor(),F=P;if(fe.bindFramebuffer(36160,k),fe.viewport(_),fe.scissor(R),fe.setScissorTest(F),re){const xe=Me.get(y.texture);V.framebufferTexture2D(36160,36064,34069+H,xe.__webglTexture,B)}else if(Le){const xe=Me.get(y.texture),ye=H||0;V.framebufferTextureLayer(36160,36064,xe.__webglTexture,B||0,ye)}},this.readRenderTargetPixels=function(y,H,B,k,re,Le,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){fe.bindFramebuffer(36160,ye);try{const Ue=y.texture,_e=Ue.format,Re=Ue.type;if(_e!==yt&&S.convert(_e)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ve=Re===Tn&&(Se.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Re!==Yt&&S.convert(Re)!==V.getParameter(35738)&&!(Re===_t&&(ge.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?H>=0&&H<=y.width-k&&B>=0&&B<=y.height-re&&V.readPixels(H,B,k,re,S.convert(_e),S.convert(Re),Le):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ue=M!==null?Me.get(M).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(y,H,B=0){const k=Math.pow(2,-B),re=Math.floor(H.image.width*k),Le=Math.floor(H.image.height*k),xe=S.convert(H.format);be.setTexture2D(H,0),V.copyTexImage2D(3553,B,xe,y.x,y.y,re,Le,0),fe.unbindTexture()},this.copyTextureToTexture=function(y,H,B,k=0){const re=H.image.width,Le=H.image.height,xe=S.convert(B.format),ye=S.convert(B.type);be.setTexture2D(B,0),V.pixelStorei(37440,B.flipY),V.pixelStorei(37441,B.premultiplyAlpha),V.pixelStorei(3317,B.unpackAlignment),H.isDataTexture?V.texSubImage2D(3553,k,y.x,y.y,re,Le,xe,ye,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(3553,k,y.x,y.y,H.mipmaps[0].width,H.mipmaps[0].height,xe,H.mipmaps[0].data):V.texSubImage2D(3553,k,y.x,y.y,xe,ye,H.image),k===0&&B.generateMipmaps&&V.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(y,H,B,k,re=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Le,height:xe,data:ye}=B.image,Ue=S.convert(k.format),_e=S.convert(k.type);let Re;if(k.isDataTexture3D)be.setTexture3D(k,0),Re=32879;else if(k.isDataTexture2DArray)be.setTexture2DArray(k,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,k.flipY),V.pixelStorei(37441,k.premultiplyAlpha),V.pixelStorei(3317,k.unpackAlignment);const ve=V.getParameter(3314),Be=V.getParameter(32878),Rt=V.getParameter(3316),ut=V.getParameter(3315),vn=V.getParameter(32877);V.pixelStorei(3314,Le),V.pixelStorei(32878,xe),V.pixelStorei(3316,y.min.x),V.pixelStorei(3315,y.min.y),V.pixelStorei(32877,y.min.z),V.texSubImage3D(Re,re,H.x,H.y,H.z,y.max.x-y.min.x+1,y.max.y-y.min.y+1,y.max.z-y.min.z+1,Ue,_e,ye),V.pixelStorei(3314,ve),V.pixelStorei(32878,Be),V.pixelStorei(3316,Rt),V.pixelStorei(3315,ut),V.pixelStorei(32877,vn),re===0&&k.generateMipmaps&&V.generateMipmap(Re),fe.unbindTexture()},this.initTexture=function(y){be.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){m=0,p=0,M=null,fe.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class km extends ze{}km.prototype.isWebGL1Renderer=!0;class ao extends Ce{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}ao.prototype.isScene=!0;class gn{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mt(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new gn(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}gn.prototype.isInterleavedBuffer=!0;const qe=new w;class ai{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qe.x=this.getX(t),qe.y=this.getY(t),qe.z=this.getZ(t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.x=this.getX(t),qe.y=this.getY(t),qe.z=this.getZ(t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.x=this.getX(t),qe.y=this.getY(t),qe.z=this.getZ(t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new We(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ai(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ai.prototype.isInterleavedBufferAttribute=!0;class Wl extends Je{constructor(e){super(),this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Wl.prototype.isSpriteMaterial=!0;let Wn;const wi=new w,qn=new w,Xn=new w,jn=new Y,Si=new Y,ql=new he,xr=new w,Ti=new w,vr=new w,wa=new Y,Es=new Y,Sa=new Y;class Vm extends Ce{constructor(e){if(super(),this.type="Sprite",Wn===void 0){Wn=new Fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gn(t,5);Wn.setIndex([0,1,2,0,2,3]),Wn.setAttribute("position",new ai(n,3,0,!1)),Wn.setAttribute("uv",new ai(n,2,3,!1))}this.geometry=Wn,this.material=e!==void 0?e:new Wl,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qn.setFromMatrixScale(this.matrixWorld),ql.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qn.multiplyScalar(-Xn.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;_r(xr.set(-.5,-.5,0),Xn,o,qn,i,r),_r(Ti.set(.5,-.5,0),Xn,o,qn,i,r),_r(vr.set(.5,.5,0),Xn,o,qn,i,r),wa.set(0,0),Es.set(1,0),Sa.set(1,1);let a=e.ray.intersectTriangle(xr,Ti,vr,!1,wi);if(a===null&&(_r(Ti.set(-.5,.5,0),Xn,o,qn,i,r),Es.set(0,1),a=e.ray.intersectTriangle(xr,vr,Ti,!1,wi),a===null))return;const l=e.ray.origin.distanceTo(wi);l<e.near||l>e.far||t.push({distance:l,point:wi.clone(),uv:$e.getUV(wi,xr,Ti,vr,wa,Es,Sa,new Y),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Vm.prototype.isSprite=!0;function _r(s,e,t,n,i,r){jn.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Si.x=r*jn.x-i*jn.y,Si.y=i*jn.x+r*jn.y):Si.copy(jn),s.copy(e),s.x+=Si.x,s.y+=Si.y,s.applyMatrix4(ql)}const Ta=new w,Ea=new Oe,Aa=new Oe,Wm=new w,La=new he;class lo extends st{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new he,this.bindMatrixInverse=new he}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Oe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ea.fromBufferAttribute(i.attributes.skinIndex,e),Aa.fromBufferAttribute(i.attributes.skinWeight,e),Ta.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Aa.getComponent(r);if(o!==0){const a=Ea.getComponent(r);La.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Wm.copy(Ta).applyMatrix4(La),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}lo.prototype.isSkinnedMesh=!0;class co extends Ce{constructor(){super(),this.type="Bone"}}co.prototype.isBone=!0;const Ra=new he,qm=new he;class ho{constructor(e=[],t=[]){this.uuid=Mt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new he;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:qm;Ra.multiplyMatrices(a,t[r]),Ra.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ho(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new co),this.bones.push(o),this.boneInverses.push(new he().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const Ca=new he,Pa=new he,yr=[],Ei=new st;class Xm extends st{constructor(e,t,n){super(e,t),this.instanceMatrix=new We(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ei.geometry=this.geometry,Ei.material=this.material,Ei.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ca),Pa.multiplyMatrices(n,Ca),Ei.matrixWorld=Pa,Ei.raycast(e,yr);for(let o=0,a=yr.length;o<a;o++){const l=yr[o];l.instanceId=r,l.object=this,t.push(l)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new We(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Xm.prototype.isInstancedMesh=!0;class Cn extends Je{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}Cn.prototype.isLineBasicMaterial=!0;const Ia=new w,Da=new w,Na=new he,As=new di,Mr=new Rn;class Ki extends Ce{constructor(e=new Fe,t=new Cn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ia.fromBufferAttribute(t,i-1),Da.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ia.distanceTo(Da);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;Na.copy(i).invert(),As.copy(e.ray).applyMatrix4(Na);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,v=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let M=m,T=p-1;M<T;M+=f){const A=g.getX(M),_=g.getX(M+1);if(c.fromBufferAttribute(v,A),h.fromBufferAttribute(v,_),As.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(v.count,o.start+o.count);for(let M=m,T=p-1;M<T;M+=f){if(c.fromBufferAttribute(v,M),h.fromBufferAttribute(v,M+1),As.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ki.prototype.isLine=!0;const Fa=new w,Ba=new w;class Vr extends Ki{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Fa.fromBufferAttribute(t,i),Ba.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fa.distanceTo(Ba);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Vr.prototype.isLineSegments=!0;class Xl extends Ki{constructor(e,t){super(e,t),this.type="LineLoop"}}Xl.prototype.isLineLoop=!0;class uo extends Je{constructor(e){super(),this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}uo.prototype.isPointsMaterial=!0;const Oa=new he,ks=new di,br=new Rn,wr=new w;class jl extends Ce{constructor(e=new Fe,t=new uo){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;Oa.copy(i).invert(),ks.copy(e.ray).applyMatrix4(Oa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const v=c.getX(g);wr.fromBufferAttribute(u,v),za(wr,v,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)wr.fromBufferAttribute(u,g),za(wr,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}jl.prototype.isPoints=!0;function za(s,e,t,n,i,r,o){const a=ks.distanceSqToPoint(s);if(a<t){const l=new w;ks.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class jm extends ot{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.format=a!==void 0?a:Ot,this.minFilter=o!==void 0?o:Xe,this.magFilter=r!==void 0?r:Xe,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}jm.prototype.isVideoTexture=!0;class Ym extends ot{constructor(e,t,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Ym.prototype.isCompressedTexture=!0;class Yl extends ot{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.needsUpdate=!0}}Yl.prototype.isCanvasTexture=!0;class Zm extends ot{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:ti,h!==ti&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=Dr),n===void 0&&h===Ui&&(n=Ni),super(null,i,r,o,a,l,h,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1}}Zm.prototype.isDepthTexture=!0;const Jm={triangulate:function(s,e,t){t=t||2;const n=e&&e.length,i=n?e[0]*t:s.length;let r=Zl(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=tg(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return Vi(r,o,t,a,l,f),o}};function Zl(s,e,t,n,i){let r,o;if(i===dg(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Ua(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Ua(r,s[r],s[r+1],o);return o&&Wr(o,o.next)&&(qi(o),o=o.next),o}function mn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Wr(t,t.next)||Ve(t.prev,t,t.next)===0)){if(qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vi(s,e,t,n,i,r,o){if(!s)return;!o&&r&&og(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Qm(s,n,i,r):Km(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),qi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=$m(mn(s),e,t),Vi(s,e,t,n,i,r,2)):o===2&&eg(s,e,t,n,i,r):Vi(mn(s),e,t,n,i,r,1);break}}}function Km(s){const e=s.prev,t=s,n=s.next;if(Ve(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if($n(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ve(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Qm(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Ve(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=Vs(a,l,e,t,n),d=Vs(c,h,e,t,n);let f=s.prevZ,g=s.nextZ;for(;f&&f.z>=u&&g&&g.z<=d;){if(f!==s.prev&&f!==s.next&&$n(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0||(f=f.prevZ,g!==s.prev&&g!==s.next&&$n(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&Ve(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&$n(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==s.prev&&g!==s.next&&$n(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function $m(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Wr(i,r)&&Jl(i,n,n.next,r)&&Wi(i,r)&&Wi(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),qi(n),qi(n.next),n=s=r),n=n.next}while(n!==s);return mn(n)}function eg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cg(o,a)){let l=Kl(o,a);o=mn(o,o.next),l=mn(l,l.next),Vi(o,e,t,n,i,r),Vi(l,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function tg(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Zl(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(lg(c));for(i.sort(ng),r=0;r<i.length;r++)ig(i[r],t),t=mn(t,t.next);return t}function ng(s,e){return s.x-e.x}function ig(s,e){if(e=rg(s,e),e){const t=Kl(e,s);mn(e,e.next),mn(t,t.next)}}function rg(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&$n(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Wi(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&sg(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function sg(s,e){return Ve(s.prev,s,e.prev)<0&&Ve(e.next,s,s.next)<0}function og(s,e,t,n){let i=s;do i.z===null&&(i.z=Vs(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ag(i)}function ag(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Vs(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function lg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function $n(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function cg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!hg(s,e)&&(Wi(s,e)&&Wi(e,s)&&ug(s,e)&&(Ve(s.prev,s,e.prev)||Ve(s,e.prev,e))||Wr(s,e)&&Ve(s.prev,s,s.next)>0&&Ve(e.prev,e,e.next)>0)}function Ve(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Wr(s,e){return s.x===e.x&&s.y===e.y}function Jl(s,e,t,n){const i=Tr(Ve(s,e,t)),r=Tr(Ve(s,e,n)),o=Tr(Ve(t,n,s)),a=Tr(Ve(t,n,e));return!!(i!==r&&o!==a||i===0&&Sr(s,t,e)||r===0&&Sr(s,n,e)||o===0&&Sr(t,s,n)||a===0&&Sr(t,e,n))}function Sr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Tr(s){return s>0?1:s<0?-1:0}function hg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Wi(s,e){return Ve(s.prev,s,s.next)<0?Ve(s,e,s.next)>=0&&Ve(s,s.prev,e)>=0:Ve(s,e,s.prev)<0||Ve(s,s.next,e)<0}function ug(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Kl(s,e){const t=new Ws(s.i,s.x,s.y),n=new Ws(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ua(s,e,t,n){const i=new Ws(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ws(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class fn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return fn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ha(e),Ga(n,e);let o=e.length;t.forEach(Ha);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Ga(n,t[l]);const a=Jm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ha(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ga(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class qr extends Fe{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new je(i,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,g=t.bevelSize!==void 0?t.bevelSize:f-2,x=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:fg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let M,T=!1,A,_,R,F;m&&(M=m.getSpacedPoints(h),T=!0,d=!1,A=m.computeFrenetFrames(h,!1),_=new w,R=new w,F=new w),d||(v=0,f=0,g=0,x=0);const D=a.extractPoints(c);let z=D.shape;const U=D.holes;if(!fn.isClockWise(z)){z=z.reverse();for(let K=0,Q=U.length;K<Q;K++){const $=U[K];fn.isClockWise($)&&(U[K]=$.reverse())}}const L=fn.triangulateShape(z,U),N=z;for(let K=0,Q=U.length;K<Q;K++){const $=U[K];z=z.concat($)}function I(K,Q,$){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().multiplyScalar($).add(K)}const P=z.length,q=L.length;function Z(K,Q,$){let le,te,E;const b=K.x-Q.x,X=K.y-Q.y,j=$.x-K.x,ie=$.y-K.y,ce=b*b+X*X,Ae=b*ie-X*j;if(Math.abs(Ae)>Number.EPSILON){const pe=Math.sqrt(ce),C=Math.sqrt(j*j+ie*ie),S=Q.x-X/pe,W=Q.y+b/pe,ne=$.x-ie/C,G=$.y+j/C,ue=((ne-S)*ie-(G-W)*j)/(b*ie-X*j);le=S+b*ue-K.x,te=W+X*ue-K.y;const Te=le*le+te*te;if(Te<=2)return new Y(le,te);E=Math.sqrt(Te/2)}else{let pe=!1;b>Number.EPSILON?j>Number.EPSILON&&(pe=!0):b<-Number.EPSILON?j<-Number.EPSILON&&(pe=!0):Math.sign(X)===Math.sign(ie)&&(pe=!0),pe?(le=-X,te=b,E=Math.sqrt(ce)):(le=b,te=X,E=Math.sqrt(ce/2))}return new Y(le/E,te/E)}const J=[];for(let K=0,Q=N.length,$=Q-1,le=K+1;K<Q;K++,$++,le++)$===Q&&($=0),le===Q&&(le=0),J[K]=Z(N[K],N[$],N[le]);const oe=[];let se,de=J.concat();for(let K=0,Q=U.length;K<Q;K++){const $=U[K];se=[];for(let le=0,te=$.length,E=te-1,b=le+1;le<te;le++,E++,b++)E===te&&(E=0),b===te&&(b=0),se[le]=Z($[le],$[E],$[b]);oe.push(se),de=de.concat(se)}for(let K=0;K<v;K++){const Q=K/v,$=f*Math.cos(Q*Math.PI/2),le=g*Math.sin(Q*Math.PI/2)+x;for(let te=0,E=N.length;te<E;te++){const b=I(N[te],J[te],le);ge(b.x,b.y,-$)}for(let te=0,E=U.length;te<E;te++){const b=U[te];se=oe[te];for(let X=0,j=b.length;X<j;X++){const ie=I(b[X],se[X],le);ge(ie.x,ie.y,-$)}}}const me=g+x;for(let K=0;K<P;K++){const Q=d?I(z[K],de[K],me):z[K];T?(R.copy(A.normals[0]).multiplyScalar(Q.x),_.copy(A.binormals[0]).multiplyScalar(Q.y),F.copy(M[0]).add(R).add(_),ge(F.x,F.y,F.z)):ge(Q.x,Q.y,0)}for(let K=1;K<=h;K++)for(let Q=0;Q<P;Q++){const $=d?I(z[Q],de[Q],me):z[Q];T?(R.copy(A.normals[K]).multiplyScalar($.x),_.copy(A.binormals[K]).multiplyScalar($.y),F.copy(M[K]).add(R).add(_),ge(F.x,F.y,F.z)):ge($.x,$.y,u/h*K)}for(let K=v-1;K>=0;K--){const Q=K/v,$=f*Math.cos(Q*Math.PI/2),le=g*Math.sin(Q*Math.PI/2)+x;for(let te=0,E=N.length;te<E;te++){const b=I(N[te],J[te],le);ge(b.x,b.y,u+$)}for(let te=0,E=U.length;te<E;te++){const b=U[te];se=oe[te];for(let X=0,j=b.length;X<j;X++){const ie=I(b[X],se[X],le);T?ge(ie.x,ie.y+M[h-1].y,M[h-1].x+$):ge(ie.x,ie.y,u+$)}}}V(),De();function V(){const K=i.length/3;if(d){let Q=0,$=P*Q;for(let le=0;le<q;le++){const te=L[le];fe(te[2]+$,te[1]+$,te[0]+$)}Q=h+v*2,$=P*Q;for(let le=0;le<q;le++){const te=L[le];fe(te[0]+$,te[1]+$,te[2]+$)}}else{for(let Q=0;Q<q;Q++){const $=L[Q];fe($[2],$[1],$[0])}for(let Q=0;Q<q;Q++){const $=L[Q];fe($[0]+P*h,$[1]+P*h,$[2]+P*h)}}n.addGroup(K,i.length/3-K,0)}function De(){const K=i.length/3;let Q=0;Se(N,Q),Q+=N.length;for(let $=0,le=U.length;$<le;$++){const te=U[$];Se(te,Q),Q+=te.length}n.addGroup(K,i.length/3-K,1)}function Se(K,Q){let $=K.length;for(;--$>=0;){const le=$;let te=$-1;te<0&&(te=K.length-1);for(let E=0,b=h+v*2;E<b;E++){const X=P*E,j=P*(E+1),ie=Q+le+X,ce=Q+te+X,Ae=Q+te+j,pe=Q+le+j;Ee(ie,ce,Ae,pe)}}}function ge(K,Q,$){l.push(K),l.push(Q),l.push($)}function fe(K,Q,$){Me(K),Me(Q),Me($);const le=i.length/3,te=p.generateTopUV(n,i,le-3,le-2,le-1);be(te[0]),be(te[1]),be(te[2])}function Ee(K,Q,$,le){Me(K),Me(Q),Me(le),Me(Q),Me($),Me(le);const te=i.length/3,E=p.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);be(E[0]),be(E[1]),be(E[3]),be(E[1]),be(E[2]),be(E[3])}function Me(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function be(K){r.push(K.x),r.push(K.y)}}}toJSON(){const e=Fe.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return pg(t,n,e)}}const fg={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Y(r,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],v=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<.01?[new Y(o,1-l),new Y(c,1-u),new Y(d,1-g),new Y(x,1-m)]:[new Y(a,1-l),new Y(h,1-u),new Y(f,1-g),new Y(v,1-m)]}};function pg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mg extends Fe{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new je(i,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;fn.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,m=g.length;v<m;v++){const p=g[v];fn.isClockWise(p)===!0&&(g[v]=p.reverse())}const x=fn.triangulateShape(f,g);for(let v=0,m=g.length;v<m;v++){const p=g[v];f=f.concat(p)}for(let v=0,m=f.length;v<m;v++){const p=f[v];i.push(p.x,p.y,0),r.push(0,0,1),o.push(p.x,p.y)}for(let v=0,m=x.length;v<m;v++){const p=x[v],M=p[0]+u,T=p[1]+u,A=p[2]+u;n.push(M,T,A),l+=3}}}toJSON(){const e=Fe.prototype.toJSON.call(this),t=this.parameters.shapes;return gg(t,e)}}function gg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class xg extends Fe{constructor(e=1,t=8,n=6,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],g=[],x=[],v=[];for(let m=0;m<=n;m++){const p=[],M=m/n;let T=0;m==0&&o==0?T=.5/t:m==n&&l==Math.PI&&(T=-.5/t);for(let A=0;A<=t;A++){const _=A/t;u.x=-e*Math.cos(i+_*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+_*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),v.push(_+T,1-M),p.push(c++)}h.push(p)}for(let m=0;m<n;m++)for(let p=0;p<t;p++){const M=h[m][p+1],T=h[m][p],A=h[m+1][p],_=h[m+1][p+1];(m!==0||o>0)&&f.push(M,T,_),(m!==n-1||l<Math.PI)&&f.push(T,A,_)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(v,2))}}class vg extends Je{constructor(e){super(),this.type="ShadowMaterial",this.color=new ae(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}vg.prototype.isShadowMaterial=!0;class Xr extends An{constructor(e){super(e),this.type="RawShaderMaterial"}}Xr.prototype.isRawShaderMaterial=!0;class Qi extends Je{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}Qi.prototype.isMeshStandardMaterial=!0;class fo extends Qi{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=dt(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new ae).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}fo.prototype.isMeshPhysicalMaterial=!0;class _g extends Je{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}_g.prototype.isMeshPhongMaterial=!0;class yg extends Je{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}yg.prototype.isMeshToonMaterial=!0;class Mg extends Je{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Mg.prototype.isMeshNormalMaterial=!0;class bg extends Je{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}bg.prototype.isMeshLambertMaterial=!0;class wg extends Je{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ae(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ln,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}wg.prototype.isMeshMatcapMaterial=!0;class Sg extends Cn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Sg.prototype.isLineDashedMaterial=!0;const ke={arraySlice:function(s,e,t){return ke.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=ke.convertArray(u,c.times.constructor),c.values=ke.convertArray(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let x;if(r<=a.times[0]){const m=h,p=u-h;x=ke.arraySlice(a.values,m,p)}else if(r>=a.times[g]){const m=g*u+h,p=m+u-h;x=ke.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=h,M=u-h;m.evaluate(r),x=ke.arraySlice(m.resultBuffer,p,M)}l==="quaternion"&&new rt().fromArray(x).normalize().conjugate().toArray(x);const v=c.times.length;for(let m=0;m<v;++m){const p=m*f+d;if(l==="quaternion")rt.multiplyQuaternionsFlat(c.values,p,x,0,c.values,p);else{const M=f-d*2;for(let T=0;T<M;++T)c.values[p+T]-=x[T]}}}return s.blendMode=vl,s}};class Zt{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Zt.prototype.beforeStart_=Zt.prototype.copySampleValue_;Zt.prototype.afterEnd_=Zt.prototype.copySampleValue_;class Tg extends Zt{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kn,endingEnd:Kn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qn:r=e,a=2*t-n;break;case Nr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qn:o=e,l=2*n-t;break;case Nr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,v=x*g,m=-d*v+2*d*x-d*g,p=(1+d)*v+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*v+(1.5+f)*x+.5*g,T=f*v-f*x;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+p*o[c+A]+M*o[l+A]+T*o[u+A];return r}}class Ql extends Zt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Eg extends Zt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ut{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ke.convertArray(t,this.TimeBufferType),this.values=ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ke.convertArray(e.times,Array),values:ke.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hi:t=this.InterpolantFactoryMethodDiscrete;break;case si:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hi;case this.InterpolantFactoryMethodLinear:return si;case this.InterpolantFactoryMethodSmooth:return $r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ke.arraySlice(n,r,o),this.values=ke.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ke.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ke.arraySlice(this.times),t=ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===$r,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ke.arraySlice(e,0,o),this.values=ke.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ke.arraySlice(this.times,0),t=ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ut.prototype.TimeBufferType=Float32Array;Ut.prototype.ValueBufferType=Float32Array;Ut.prototype.DefaultInterpolation=si;class mi extends Ut{}mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Hi;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;class $l extends Ut{}$l.prototype.ValueTypeName="color";class Xi extends Ut{}Xi.prototype.ValueTypeName="number";class Ag extends Zt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)rt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class gi extends Ut{InterpolantFactoryMethodLinear(e){return new Ag(this.times,this.values,this.getValueSize(),e)}}gi.prototype.ValueTypeName="quaternion";gi.prototype.DefaultInterpolation=si;gi.prototype.InterpolantFactoryMethodSmooth=void 0;class xi extends Ut{}xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Hi;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends Ut{}ji.prototype.ValueTypeName="vector";class qs{constructor(e,t=-1,n,i=to){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Rg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ut.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=ke.getKeyframeOrder(l);l=ke.sortedArray(l,1,h),c=ke.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Xi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const v=[],m=[];ke.flattenJSON(f,v,m,g),v.length!==0&&x.push(new u(d,v,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const v=[],m=[];for(let p=0;p!==d[g].morphTargets.length;++p){const M=d[g];v.push(M.time),m.push(M.morphTarget===x?1:0)}i.push(new Xi(".morphTargetInfluence["+x+"]",v,m))}l=f.length*(o||1)}else{const f=".bones["+t[u].name+"]";n(ji,f+".position",d,"pos",i),n(gi,f+".quaternion",d,"rot",i),n(ji,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Lg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return $l;case"quaternion":return gi;case"bool":case"boolean":return mi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Rg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lg(s.type);if(s.times===void 0){const t=[],n=[];ke.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Pg=new Cg;class Ht{constructor(e){this.manager=e!==void 0?e:Pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const At={};class jr extends Ht{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;if(At[e]!==void 0){At[e].push({onLoad:t,onProgress:n,onError:i});return}const a=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(a);let c;if(l){const h=l[1],u=!!l[2];let d=l[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f;const g=(this.responseType||"").toLowerCase();switch(g){case"arraybuffer":case"blob":const x=new Uint8Array(d.length);for(let m=0;m<d.length;m++)x[m]=d.charCodeAt(m);g==="blob"?f=new Blob([x.buffer],{type:h}):f=x.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{At[e]=[],At[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(h){const u=this.response,d=At[e];if(delete At[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),li.add(e,u);for(let f=0,g=d.length;f<g;f++){const x=d[f];x.onLoad&&x.onLoad(u)}r.manager.itemEnd(e)}else{for(let f=0,g=d.length;f<g;f++){const x=d[f];x.onError&&x.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(h){const u=At[e];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onProgress&&g.onProgress(h)}},!1),c.addEventListener("error",function(h){const u=At[e];delete At[e];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onError&&g.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(h){const u=At[e];delete At[e];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onError&&g.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ec extends Ht{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ig extends Ht{constructor(e){super(e)}load(e,t,n,i){const r=new Gr,o=new ec(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Dg extends Ht{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new oo,a=new jr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:mt,o.wrapT=c.wrapT!==void 0?c.wrapT:mt,o.magFilter=c.magFilter!==void 0?c.magFilter:Xe,o.minFilter=c.minFilter!==void 0?c.minFilter:Xe,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=hi),c.mipmapCount===1&&(o.minFilter=Xe),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,i),o}}class tc extends Ht{constructor(e){super(e)}load(e,t,n,i){const r=new ot,o=new ec(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=l?Ot:yt,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class bt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Y:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,l=new he;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new w),i[f].normalize()}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yr extends bt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Y,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Yr.prototype.isEllipseCurve=!0;class nc extends Yr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.type="ArcCurve"}}nc.prototype.isArcCurve=!0;function po(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Er=new w,Ls=new po,Rs=new po,Cs=new po;class ic extends bt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Er.subVectors(i[0],i[1]).add(i[0]),c=Er);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Er.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),Ls.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,v),Rs.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,v),Cs.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,v)}else this.curveType==="catmullrom"&&(Ls.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Rs.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Cs.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ls.calc(l),Rs.calc(l),Cs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}ic.prototype.isCatmullRomCurve3=!0;function ka(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Ng(s,e){const t=1-s;return t*t*e}function Fg(s,e){return 2*(1-s)*s*e}function Bg(s,e){return s*s*e}function Oi(s,e,t,n){return Ng(s,e)+Fg(s,t)+Bg(s,n)}function Og(s,e){const t=1-s;return t*t*t*e}function zg(s,e){const t=1-s;return 3*t*t*s*e}function Ug(s,e){return 3*(1-s)*s*s*e}function Hg(s,e){return s*s*s*e}function zi(s,e,t,n,i){return Og(s,e)+zg(s,t)+Ug(s,n)+Hg(s,i)}class mo extends bt{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zi(e,i.x,r.x,o.x,a.x),zi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}mo.prototype.isCubicBezierCurve=!0;class rc extends bt{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zi(e,i.x,r.x,o.x,a.x),zi(e,i.y,r.y,o.y,a.y),zi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}rc.prototype.isCubicBezierCurve3=!0;class Zr extends bt{constructor(e=new Y,t=new Y){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Y;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Zr.prototype.isLineCurve=!0;class Gg extends bt{constructor(e=new w,t=new w){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class go extends bt{constructor(e=new Y,t=new Y,n=new Y){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Oi(e,i.x,r.x,o.x),Oi(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}go.prototype.isQuadraticBezierCurve=!0;class sc extends bt{constructor(e=new w,t=new w,n=new w){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Oi(e,i.x,r.x,o.x),Oi(e,i.y,r.y,o.y),Oi(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}sc.prototype.isQuadraticBezierCurve3=!0;class xo extends bt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ka(a,l.x,c.x,h.x,u.x),ka(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this}}xo.prototype.isSplineCurve=!0;var kg=Object.freeze({__proto__:null,ArcCurve:nc,CatmullRomCurve3:ic,CubicBezierCurve:mo,CubicBezierCurve3:rc,EllipseCurve:Yr,LineCurve:Zr,LineCurve3:Gg,QuadraticBezierCurve:go,QuadraticBezierCurve3:sc,SplineCurve:xo});class Vg extends bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Zr(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,o=this.curves[i],a=o.getLength(),l=a===0?0:1-r/a;return o.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new kg[i.type]().fromJSON(i))}return this}}class Xs extends Vg{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zr(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new go(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new mo(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new xo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Yr(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vo extends Xs{constructor(e){super(e),this.uuid=Mt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xs().fromJSON(i))}return this}}class zt extends Ce{constructor(e,t=1){super(),this.type="Light",this.color=new ae(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}zt.prototype.isLight=!0;class oc extends zt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.groundColor=new ae(t)}copy(e){return zt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}oc.prototype.isHemisphereLight=!0;const Va=new he,Wa=new w,qa=new w;class _o{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wa),qa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qa),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ac extends _o{constructor(){super(new lt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=ki*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}ac.prototype.isSpotLightShadow=!0;class lc extends zt{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new ac}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}lc.prototype.isSpotLight=!0;const Xa=new he,Ai=new w,Ps=new w;class cc extends _o{constructor(){super(new lt(90,1,.5,500)),this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ai.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ai),Ps.copy(n.position),Ps.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ps),n.updateMatrixWorld(),i.makeTranslation(-Ai.x,-Ai.y,-Ai.z),Xa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa)}}cc.prototype.isPointLightShadow=!0;class hc extends zt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}hc.prototype.isPointLight=!0;class Jr extends ro{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Jr.prototype.isOrthographicCamera=!0;class uc extends _o{constructor(){super(new Jr(-5,5,5,-5,.5,500))}}uc.prototype.isDirectionalLightShadow=!0;class yo extends zt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.target=new Ce,this.shadow=new uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}yo.prototype.isDirectionalLight=!0;class Wg extends zt{constructor(e,t){super(e,t),this.type="AmbientLight"}}Wg.prototype.isAmbientLight=!0;class qg extends zt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}qg.prototype.isRectAreaLight=!0;class dc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}dc.prototype.isSphericalHarmonics3=!0;class Mo extends zt{constructor(e=new dc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Mo.prototype.isLightProbe=!0;class ni{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Xg extends Fe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Xg.prototype.isInstancedBufferGeometry=!0;class jg extends We{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}jg.prototype.isInstancedBufferAttribute=!0;class fc extends Ht{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){li.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}fc.prototype.isImageBitmapLoader=!0;let Ar;const Yg={getContext:function(){return Ar===void 0&&(Ar=new(window.AudioContext||window.webkitAudioContext)),Ar},setContext:function(s){Ar=s}};class Zg extends Ht{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new jr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Yg.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class Jg extends Mo{constructor(e,t,n=1){super(void 0,n);const i=new ae().set(e),r=new ae().set(t),o=new w(i.r,i.g,i.b),a=new w(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}Jg.prototype.isHemisphereLightProbe=!0;class Kg extends Mo{constructor(e,t=1){super(void 0,t);const n=new ae().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Kg.prototype.isAmbientLightProbe=!0;class Qg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ja(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ja();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ja(){return(typeof performance>"u"?Date:performance).now()}class $g extends Ce{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class ex{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){rt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;rt.multiplyQuaternionsFlat(e,o,e,t,e,n),rt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const bo="\\[\\]\\.:\\/",tx=new RegExp("["+bo+"]","g"),wo="[^"+bo+"]",nx="[^"+bo.replace("\\.","")+"]",ix=/((?:WC+[\/:])*)/.source.replace("WC",wo),rx=/(WCOD+)?/.source.replace("WCOD",nx),sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo),ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo),ax=new RegExp("^"+ix+rx+sx+ox+"$"),lx=["material","materials","bones"];class cx{constructor(e,t,n){const i=n||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ne{constructor(e,t,n){this.path=t,this.parsedPath=n||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,n):new Ne(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(e){const t=ax.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);lx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=cx;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Kn,endingEnd:Kn};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vl:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case to:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Xh;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Wh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Qn,i.endingEnd=Qn):(e?i.endingStart=this.zeroSlopeAtStart?Qn:Kn:i.endingStart=Nr,t?i.endingEnd=this.zeroSlopeAtEnd?Qn:Kn:i.endingEnd=Nr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}class js extends Jt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;g=new ex(Ne.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ql(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?qs.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=to),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new hx(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?qs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}js.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class ux extends gn{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}ux.prototype.isInstancedInterleavedBuffer=!0;class Ya{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dx extends Ce{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}dx.prototype.isImmediateRenderObject=!0;const sn=new w,Lr=new he,Is=new he;class fx extends Vr{constructor(e){const t=pc(e),n=new Fe,i=[],r=[],o=new ae(0,0,1),a=new ae(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new je(i,3)),n.setAttribute("color",new je(r,3));const l=new Cn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Is.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Lr.multiplyMatrices(Is,a.matrixWorld),sn.setFromMatrixPosition(Lr),i.setXYZ(o,sn.x,sn.y,sn.z),Lr.multiplyMatrices(Is,a.parent.matrixWorld),sn.setFromMatrixPosition(Lr),i.setXYZ(o+1,sn.x,sn.y,sn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function pc(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,pc(s.children[t]));return e}class px extends Vr{constructor(e=10,t=10,n=4473924,i=8947848){n=new ae(n),i=new ae(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=d===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Fe;h.setAttribute("position",new je(l,3)),h.setAttribute("color",new je(c,3));const u=new Cn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const mc=new Float32Array(1),mx=new Int32Array(mc.buffer);class Ds{static toHalfFloat(e){mc[0]=e;const t=mx[0];let n=t>>16&32768,i=t>>12&2047;const r=t>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&t&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}}const ii=4,pn=8,It=Math.pow(2,pn),gc=[.125,.215,.35,.446,.526,.582],xc=pn-ii+1+gc.length,Yn=20,Bt={[ct]:0,[En]:1,[Ur]:2,[yl]:3,[Ml]:4,[bl]:5,[no]:6},bn=new Ft({side:tt,depthWrite:!1,depthTest:!1}),gx=new st(new Hr,bn),Ns=new Jr,{_lodPlanes:Li,_sizeLods:Za,_sigmas:Rr}=_x(),Ja=new ae;let Fs=null;const wn=(1+Math.sqrt(5))/2,Zn=1/wn,Ka=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,wn,Zn),new w(0,wn,-Zn),new w(Zn,0,wn),new w(-Zn,0,wn),new w(wn,Zn,0),new w(-wn,Zn,0)];function Qa(s){const e=Math.max(s.r,s.g,s.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return s.multiplyScalar(Math.pow(2,-t)),(t+128)/255}class xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=yx(Yn),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fs=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=tl(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=el(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Li.length;e++)Li[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Fs),e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e){Fs=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Yt,format:xl,encoding:vx(e)?e.encoding:Ur,depthBuffer:!1},n=$a(t);return n.depthBuffer=!e,this._pingPongRenderTarget=$a(t),n}_compileMaterial(e){const t=new st(Li[0],e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,i){const a=new lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.outputEncoding,f=h.toneMapping;h.getClearColor(Ja),h.toneMapping=ei,h.outputEncoding=ct,h.autoClear=!1;let g=!1;const x=e.background;if(x){if(x.isColor){bn.color.copy(x).convertSRGBToLinear(),e.background=null;const v=Qa(bn.color);bn.opacity=v,g=!0}}else{bn.color.copy(Ja).convertSRGBToLinear();const v=Qa(bn.color);bn.opacity=v,g=!0}for(let v=0;v<6;v++){const m=v%3;m==0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):m==1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v])),Cr(i,m*It,v>2?It:0,It,It),h.setRenderTarget(i),g&&h.render(gx,a),h.render(e,a)}h.toneMapping=f,h.outputEncoding=d,h.autoClear=u}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=tl()):this._equirectShader==null&&(this._equirectShader=el());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new st(Li[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=Bt[e.encoding],o.outputEncoding.value=Bt[t.texture.encoding],Cr(t,0,0,3*It,2*It),n.setRenderTarget(t),n.render(r,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<xc;i++){const r=Math.sqrt(Rr[i]*Rr[i]-Rr[i-1]*Rr[i-1]),o=Ka[(i-1)%Ka.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(Li[i],c),d=c.uniforms,f=Za[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),x=r/g,v=isFinite(r)?1+Math.floor(h*x):Yn;v>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Yn}`);const m=[];let p=0;for(let _=0;_<Yn;++_){const R=_/x,F=Math.exp(-R*R/2);m.push(F),_==0?p+=F:_<v&&(p+=2*F)}for(let _=0;_<m.length;_++)m[_]=m[_]/p;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=g,d.mipInt.value=pn-n,d.inputEncoding.value=Bt[e.texture.encoding],d.outputEncoding.value=Bt[e.texture.encoding];const M=Za[i],T=3*Math.max(0,It-2*M),A=(i===0?0:2*It)+2*M*(i>pn-ii?i-pn+ii:0);Cr(t,T,A,3*M,2*M),l.setRenderTarget(t),l.render(u,Ns)}}function vx(s){return s===void 0||s.type!==Yt?!1:s.encoding===ct||s.encoding===En||s.encoding===no}function _x(){const s=[],e=[],t=[];let n=pn;for(let i=0;i<xc;i++){const r=Math.pow(2,n);e.push(r);let o=1/r;i>pn-ii?o=gc[i-pn+ii-1]:i==0&&(o=0),t.push(o);const a=1/(r-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=2,x=1,v=new Float32Array(f*d*u),m=new Float32Array(g*d*u),p=new Float32Array(x*d*u);for(let T=0;T<u;T++){const A=T%3*2/3-1,_=T>2?0:-1,R=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];v.set(R,f*d*T),m.set(h,g*d*T);const F=[T,T,T,T,T,T];p.set(F,x*d*T)}const M=new Fe;M.setAttribute("position",new We(v,f)),M.setAttribute("uv",new We(m,g)),M.setAttribute("faceIndex",new We(p,x)),s.push(M),n>ii&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function $a(s){const e=new un(3*It,3*It,s);return e.texture.mapping=zr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Cr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function yx(s){const e=new Float32Array(s),t=new w(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Bt[ct]},outputEncoding:{value:Bt[ct]}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${To()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function el(){const s=new Y(1,1);return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:Bt[ct]},outputEncoding:{value:Bt[ct]}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${To()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function tl(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Bt[ct]},outputEncoding:{value:Bt[ct]}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${To()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function To(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}bt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(bt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};Xs.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};px.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};fx.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Ht.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ni.extractUrlBase(s)};Ht.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};vt.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};vt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};vt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};vt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};vt.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Rn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};kr.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};it.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};it.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};it.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};it.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};it.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};it.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};he.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};he.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};he.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};he.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};he.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};he.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};he.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};he.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};he.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};he.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};he.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};he.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};he.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};he.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};he.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};he.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};he.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};he.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};he.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Dt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};rt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};rt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};di.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};di.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};di.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};$e.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};$e.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};$e.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};$e.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};$e.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};$e.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),$e.getBarycoord(s,e,t,n,i)};$e.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),$e.getNormal(s,e,t,n)};vo.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};vo.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new qr(this,s)};vo.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new mg(this,s)};Y.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Y.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};Y.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};w.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};w.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};w.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};w.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};w.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Oe.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Oe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ce.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Ce.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ce.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Ce.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ce.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ce.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});st.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(st.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),jh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});lo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};lt.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(zt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(We.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Fr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Fr)}}});We.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Fr:Gi),this};We.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},We.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Fe.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Fe.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new We(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Fe.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Fe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Fe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Fe.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Fe.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});gn.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Fr:Gi),this};gn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};qr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};qr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};qr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ao.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Je.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ae}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===dl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}});Object.defineProperties(An.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});ze.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};ze.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};ze.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};ze.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};ze.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};ze.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};ze.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};ze.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};ze.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};ze.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};ze.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};ze.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};ze.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};ze.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};ze.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};ze.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};ze.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};ze.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};ze.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};ze.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};ze.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};ze.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};ze.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};ze.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};ze.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(ze.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?En:ct}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(kl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(un.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});$g.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Zg().load(s,function(n){e.setBuffer(n)}),this};so.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};so.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};ui.crossOrigin=void 0;ui.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new tc;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};ui.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Ig;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};ui.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ui.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);class Mx extends Ht{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Rx(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ni.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new jr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={};if(typeof e=="string")r=e;else if(ni.decodeText(new Uint8Array(e,0,4))===vc){try{o[Ie.KHR_BINARY_GLTF]=new Cx(e)}catch(u){i&&i(u);return}r=o[Ie.KHR_BINARY_GLTF].content}else r=ni.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Hx(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Ie.KHR_MATERIALS_UNLIT:o[u]=new Sx;break;case Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[u]=new Dx;break;case Ie.KHR_DRACO_MESH_COMPRESSION:o[u]=new Px(l,this.dracoLoader);break;case Ie.KHR_TEXTURE_TRANSFORM:o[u]=new Ix;break;case Ie.KHR_MESH_QUANTIZATION:o[u]=new Nx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}}function bx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class wx{constructor(e){this.parser=e,this.name=Ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ae(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hc(h),c.distance=u;break;case"spot":c=new lc(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Sx{constructor(){this.name=Ie.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){const i=[];e.color=new ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture))}return Promise.all(i)}}class Tx{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fo}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Y(a,-a)}return Promise.all(r)}}class Ex{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fo}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ax{constructor(e){this.parser=e,this.name=Ie.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=n.images[r.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}}class Lx{constructor(e){this.parser=e,this.name=Ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Rx{constructor(e){this.name=Ie.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,o.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new ArrayBuffer(h*u),f=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})}else return null}}const vc="glTF",Ri=12,nl={JSON:1313821514,BIN:5130562};class Cx{constructor(e){this.name=Ie.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ri);if(this.header={magic:ni.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ri,i=new DataView(e,Ri);let r=0;for(;r<n;){const o=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===nl.JSON){const l=new Uint8Array(e,Ri+r,o);this.content=ni.decodeText(l)}else if(a===nl.BIN){const l=Ri+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Px{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ie.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Zs[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Zs[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Yi[d.componentType];c[u]=f,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],x=l[f];x!==void 0&&(g.normalized=x)}u(d)},a,c)})})}}class Ix{constructor(){this.name=Ie.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e}}class Ys extends Qi{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new ae().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Dx{constructor(){this.name=Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Ys}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new ae(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new ae(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new ae(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const o=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o))}return Promise.all(r)}createMaterial(e){const t=new Ys(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Ln,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class Nx{constructor(){this.name=Ie.KHR_MESH_QUANTIZATION}}class ci extends Zt{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}}ci.prototype.beforeStart_=ci.prototype.copySampleValue_;ci.prototype.afterEnd_=ci.prototype.copySampleValue_;ci.prototype.interpolate_=function(s,e,t,n){const i=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-e,h=(t-e)/c,u=h*h,d=u*h,f=s*l,g=f-l,x=-2*d+3*u,v=d-u,m=1-x,p=v-u+h;for(let M=0;M!==o;M++){const T=r[g+M+o],A=r[g+M+a]*c,_=r[f+M+o],R=r[f+M]*c;i[M]=m*T+p*A+x*_+v*R}return i};const jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},il={9728:Ze,9729:Xe,9984:zs,9985:gl,9986:Us,9987:hi},rl={33071:mt,33648:Ir,10497:ri},sl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zs={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},on={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fx={CUBICSPLINE:void 0,LINEAR:si,STEP:Hi},Bs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ol(s,e){return typeof s!="string"||s===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(s)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(s)||/^data:.*,.*$/i.test(s)||/^blob:.*$/i.test(s)?s:e+s)}function Bx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),s.DefaultMaterial}function Ci(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ox(s,e,t){let n=!1,i=!1;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(s);const r=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];if(n){const h=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):s.attributes.position;r.push(h)}if(i){const h=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):s.attributes.normal;o.push(h)}}return Promise.all([Promise.all(r),Promise.all(o)]).then(function(a){const l=a[0],c=a[1];return n&&(s.morphAttributes.position=l),i&&(s.morphAttributes.normal=c),s.morphTargetsRelative=!0,s})}function zx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ux(s){const e=s.extensions&&s.extensions[Ie.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+al(e.attributes):t=s.indices+":"+al(s.attributes)+":"+s.mode,t}function al(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Js(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class Hx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bx,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new fc(this.options.manager):this.textureLoader=new tc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ci(r,a,i),Sn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone();return i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ie.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ol(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=sl[i.type],c=Yi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,v;if(f&&f!==u){const m=Math.floor(d/f),p="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let M=t.cache.get(p);M||(x=new c(a,m*f,i.count*f/h),M=new gn(x,f/h),t.cache.add(p,M)),v=new ai(M,l,d%f/h,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),v=new We(x,l,g);if(i.sparse!==void 0){const m=sl.SCALAR,p=Yi[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,A=new p(o[1],M,i.sparse.count*m),_=new c(o[2],T,i.sparse.count*l);a!==null&&(v=new We(v.array.slice(),v.itemSize,v.normalized));for(let R=0,F=A.length;R<F;R++){const D=A[R];if(v.setX(D,_[R*l]),l>=2&&v.setY(D,_[R*l+1]),l>=3&&v.setZ(D,_[R*l+2]),l>=4&&v.setW(D,_[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],r=t.images[i.source];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,o=this.options,a=r.textures[e],l=self.URL||self.webkitURL;let c=t.uri,h=!1,u=!0;if(t.mimeType==="image/jpeg"&&(u=!1),t.bufferView!==void 0)c=i.getDependency("bufferView",t.bufferView).then(function(d){if(t.mimeType==="image/png"){const g=new DataView(d,25,1).getUint8(0,!1);u=g===6||g===4||g===3}h=!0;const f=new Blob([d],{type:t.mimeType});return c=l.createObjectURL(f),c});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");return Promise.resolve(c).then(function(d){return new Promise(function(f,g){let x=f;n.isImageBitmapLoader===!0&&(x=function(v){f(new Yl(v))}),n.load(ol(d,o.path),x,void 0,g)})}).then(function(d){h===!0&&l.revokeObjectURL(c),d.flipY=!1,a.name&&(d.name=a.name),u||(d.format=Ot);const g=(r.samplers||{})[a.sampler]||{};return d.magFilter=il[g.magFilter]||Xe,d.minFilter=il[g.minFilter]||hi,d.wrapS=rl[g.wrapS]||ri,d.wrapT=rl[g.wrapT]||ri,i.associations.set(d,{type:"textures",index:e}),d})}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Ie.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ie.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=i.associations.get(r);r=i.extensions[Ie.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),i.associations.set(r,a)}}e[t]=r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent!==void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0,a=e.isSkinnedMesh===!0,l=Object.keys(t.morphAttributes).length>0,c=l&&t.morphAttributes.normal!==void 0;if(e.isPoints){const h="PointsMaterial:"+n.uuid;let u=this.cache.get(h);u||(u=new uo,Je.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(h,u)),n=u}else if(e.isLine){const h="LineBasicMaterial:"+n.uuid;let u=this.cache.get(h);u||(u=new Cn,Je.prototype.copy.call(u,n),u.color.copy(n.color),this.cache.add(h,u)),n=u}if(i||r||o||a||l){let h="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(h+="specular-glossiness:"),a&&(h+="skinning:"),i&&(h+="vertex-tangents:"),r&&(h+="vertex-colors:"),o&&(h+="flat-shading:"),l&&(h+="morph-targets:"),c&&(h+="morph-normals:");let u=this.cache.get(h);u||(u=n.clone(),a&&(u.skinning=!0),r&&(u.vertexColors=!0),o&&(u.flatShading=!0),l&&(u.morphTargets=!0),c&&(u.morphNormals=!0),i&&(u.vertexTangents=!0,u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(h,u),this.associations.set(u,this.associations.get(n))),n=u}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Qi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else if(l[Ie.KHR_MATERIALS_UNLIT]){const u=i[Ie.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ae(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ji);const h=r.alphaMode||Bs.OPAQUE;return h===Bs.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Bs.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Y(1,-1),r.normalTexture.scale!==void 0&&a.normalScale.set(r.normalTexture.scale,-r.normalTexture.scale)),r.occlusionTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ft&&(a.emissive=new ae().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Ft&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture)),Promise.all(c).then(function(){let u;return o===Ys?u=i[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new o(a),r.name&&(u.name=r.name),u.map&&(u.map.encoding=En),u.emissiveMap&&(u.emissiveMap.encoding=En),Sn(u,r),t.associations.set(u,{type:"materials",index:e}),r.extensions&&Ci(i,u,r),u})}createUniqueName(e){const t=Ne.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ll(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Ux(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ie.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ll(new Fe,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Bx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],v=o[f];let m;const p=c[f];if(v.mode===jt.TRIANGLES||v.mode===jt.TRIANGLE_STRIP||v.mode===jt.TRIANGLE_FAN||v.mode===void 0)m=r.isSkinnedMesh===!0?new lo(x,p):new st(x,p),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),v.mode===jt.TRIANGLE_STRIP?m.geometry=cl(m.geometry,Yh):v.mode===jt.TRIANGLE_FAN&&(m.geometry=cl(m.geometry,_l));else if(v.mode===jt.LINES)m=new Vr(x,p);else if(v.mode===jt.LINE_STRIP)m=new Ki(x,p);else if(v.mode===jt.LINE_LOOP)m=new Xl(x,p);else if(v.mode===jt.POINTS)m=new jl(x,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(m.geometry.morphAttributes).length>0&&zx(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Sn(m,r),v.extensions&&Ci(i,m,v),t.assignFinalMaterial(m),u.push(m)}if(u.length===1)return u[0];const d=new cn;for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new lt(fu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Jr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],o=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],f=u.target,g=f.node!==void 0?f.node:f.id,x=n.parameters!==void 0?n.parameters[d.input]:d.input,v=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",x)),o.push(this.getDependency("accessor",v)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],f=c[3],g=c[4],x=[];for(let m=0,p=h.length;m<p;m++){const M=h[m],T=u[m],A=d[m],_=f[m],R=g[m];if(M===void 0)continue;M.updateMatrix(),M.matrixAutoUpdate=!0;let F;switch(on[R.path]){case on.weights:F=Xi;break;case on.rotation:F=gi;break;case on.position:case on.scale:default:F=ji;break}const D=M.name?M.name:M.uuid,z=_.interpolation!==void 0?Fx[_.interpolation]:si,U=[];on[R.path]===on.weights?M.traverse(function(L){L.isMesh===!0&&L.morphTargetInfluences&&U.push(L.name?L.name:L.uuid)}):U.push(D);let O=A.array;if(A.normalized){const L=Js(O.constructor),N=new Float32Array(O.length);for(let I=0,P=O.length;I<P;I++)N[I]=O[I]*L;O=N}for(let L=0,N=U.length;L<N;L++){const I=new F(U[L]+"."+on[R.path],T.array,O,z);_.interpolation==="CUBICSPLINE"&&(I.createInterpolant=function(q){return new ci(this.times,this.values,this.getValueSize()/3,q)},I.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),x.push(I)}}const v=n.name?n.name:"animation_"+e;return new qs(v,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new co:a.length>1?l=new cn:a.length===1?l=a[0]:l=new Ce,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),Sn(l,r),r.extensions&&Ci(n,l,r),r.matrix!==void 0){const c=new he;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.set(l,{type:"nodes",index:e}),l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,o=new cn;i.name&&(o.name=r.createUniqueName(i.name)),Sn(o,i),i.extensions&&Ci(n,o,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(_c(a[c],o,t,r));return Promise.all(l).then(function(){return o})}}function _c(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){if(i.skin===void 0)return r;let o;return n.getDependency("skin",i.skin).then(function(a){o=a;const l=[];for(let c=0,h=o.joints.length;c<h;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=a.length;u<d;u++){const f=a[u];if(f){c.push(f);const g=new he;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[u])}l.bind(new ho(c,h),l.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];o.push(_c(h,r,t,n))}}return Promise.all(o)})}function Gx(s,e,t){const n=e.attributes,i=new vt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){const h=Js(Yi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new w,l=new w;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Js(Yi[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Rn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ll(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Zs[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Sn(s,e),Gx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ox(s,e.targets,t):s})}function cl(s,e){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===_l)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}class kx extends Dg{constructor(e){super(e),this.type=Yt}parse(e){const a=function(M,T){switch(M){case 1:console.error("THREE.RGBELoader Read Error: "+(T||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(T||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(T||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(T||""))}return-1},u=`
`,d=function(M,T,A){T=T||1024;let R=M.pos,F=-1,D=0,z="",U=String.fromCharCode.apply(null,new Uint16Array(M.subarray(R,R+128)));for(;0>(F=U.indexOf(u))&&D<T&&R<M.byteLength;)z+=U,D+=U.length,R+=128,U+=String.fromCharCode.apply(null,new Uint16Array(M.subarray(R,R+128)));return-1<F?(A!==!1&&(M.pos+=D+F+1),z+U.slice(0,F)):!1},f=function(M){const T=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,_=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,U;if(M.pos>=M.byteLength||!(z=d(M)))return a(1,"no header found");if(!(U=z.match(T)))return a(3,"bad initial token");for(D.valid|=1,D.programtype=U[1],D.string+=z+`
`;z=d(M),z!==!1;){if(D.string+=z+`
`,z.charAt(0)==="#"){D.comments+=z+`
`;continue}if((U=z.match(A))&&(D.gamma=parseFloat(U[1],10)),(U=z.match(_))&&(D.exposure=parseFloat(U[1],10)),(U=z.match(R))&&(D.valid|=2,D.format=U[1]),(U=z.match(F))&&(D.valid|=4,D.height=parseInt(U[1],10),D.width=parseInt(U[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2?D.valid&4?D:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(M,T,A){const _=T;if(_<8||_>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);if(_!==(M[2]<<8|M[3]))return a(3,"wrong scanline width");const R=new Uint8Array(4*T*A);if(!R.length)return a(4,"unable to allocate buffer space");let F=0,D=0;const z=4*_,U=new Uint8Array(4),O=new Uint8Array(z);let L=A;for(;L>0&&D<M.byteLength;){if(D+4>M.byteLength)return a(1);if(U[0]=M[D++],U[1]=M[D++],U[2]=M[D++],U[3]=M[D++],U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=_)return a(3,"bad rgbe scanline format");let N=0,I;for(;N<z&&D<M.byteLength;){I=M[D++];const q=I>128;if(q&&(I-=128),I===0||N+I>z)return a(3,"bad scanline data");if(q){const Z=M[D++];for(let J=0;J<I;J++)O[N++]=Z}else O.set(M.subarray(D,D+I),N),N+=I,D+=I}const P=_;for(let q=0;q<P;q++){let Z=0;R[F]=O[q+Z],Z+=_,R[F+1]=O[q+Z],Z+=_,R[F+2]=O[q+Z],Z+=_,R[F+3]=O[q+Z],F+=4}L--}return R},x=function(M,T,A,_){const R=M[T+3],F=Math.pow(2,R-128)/255;A[_+0]=M[T+0]*F,A[_+1]=M[T+1]*F,A[_+2]=M[T+2]*F},v=function(M,T,A,_){const R=M[T+3],F=Math.pow(2,R-128)/255;A[_+0]=Ds.toHalfFloat(M[T+0]*F),A[_+1]=Ds.toHalfFloat(M[T+1]*F),A[_+2]=Ds.toHalfFloat(M[T+2]*F)},m=new Uint8Array(e);m.pos=0;const p=f(m);if(p!==-1){const M=p.width,T=p.height,A=g(m.subarray(m.pos),M,T);if(A!==-1){let _,R,F,D;switch(this.type){case Yt:_=A,R=xl,F=Yt;break;case _t:D=A.length/4*3;const z=new Float32Array(D);for(let O=0;O<D;O++)x(A,O*4,z,O*3);_=z,R=Ot,F=_t;break;case Tn:D=A.length/4*3;const U=new Uint16Array(D);for(let O=0;O<D;O++)v(A,O*4,U,O*3);_=U,R=Ot,F=Tn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:M,height:T,data:_,header:p.string,gamma:p.gamma,exposure:p.exposure,format:R,type:F}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Yt:o.encoding=Ur,o.minFilter=Ze,o.magFilter=Ze,o.generateMipmaps=!1,o.flipY=!0;break;case _t:o.encoding=ct,o.minFilter=Xe,o.magFilter=Xe,o.generateMipmaps=!1,o.flipY=!0;break;case Tn:o.encoding=ct,o.minFilter=Xe,o.magFilter=Xe,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}class Vx{constructor(e,t){if(this.renderer=e,t!==void 0&&(this.onSessionStart=t.onSessionStart,this.onSessionEnd=t.onSessionEnd,this.sessionInit=t.sessionInit),"xr"in navigator){const n=document.createElement("button");n.style.display="none",n.style.height="40px",navigator.xr.isSessionSupported("immersive-ar").then(i=>{i?this.showStartAR(n):this.showARNotSupported(n)}),document.body.appendChild(n)}else{const n=document.createElement("a");window.isSecureContext===!1?(n.href=document.location.href.replace(/^http:/,"https:"),n.innerHTML="WEBXR NEEDS HTTPS"):(n.href="https://immersiveweb.dev/",n.innerHTML="WEBXR NOT AVAILABLE"),n.style.left="0px",n.style.width="100%",n.style.textDecoration="none",this.stylizeElement(n,!1),n.style.bottom="0px",n.style.opacity="1",document.body.appendChild(n)}}showStartAR(e){let t=null;const n=this;this.stylizeElement(e,!0,30,!0);function i(o){o.addEventListener("end",r),n.renderer.xr.setReferenceSpaceType("local"),n.renderer.xr.setSession(o),n.stylizeElement(e,!1,12,!0),e.textContent="STOP AR",t=o,n.onSessionStart!==void 0&&n.onSessionStart!==null&&n.onSessionStart()}function r(){t.removeEventListener("end",r),n.stylizeElement(e,!0,12,!0),e.textContent="START AR",t=null,n.onSessionEnd!==void 0&&n.onSessionEnd!==null&&n.onSessionEnd()}e.style.display="",e.style.right="20px",e.style.width="80px",e.style.cursor="pointer",e.innerHTML='<i class="fas fa-camera"></i>',e.onmouseenter=function(){e.style.fontSize="12px",e.textContent=t===null?"START AR":"STOP AR",e.style.opacity="1.0"},e.onmouseleave=function(){e.style.fontSize="30px",e.innerHTML='<i class="fas fa-camera"></i>',e.style.opacity="0.5"},e.onclick=function(){t===null?navigator.xr.requestSession("immersive-ar",n.sessionInit).then(i):t.end()}}disableButton(e){e.style.cursor="auto",e.style.opacity="0.5",e.onmouseenter=null,e.onmouseleave=null,e.onclick=null}showARNotSupported(e){this.stylizeElement(e,!1),this.disableButton(e),e.style.display="",e.style.width="100%",e.style.right="0px",e.style.bottom="0px",e.style.border="",e.style.opacity="1",e.style.fontSize="13px",e.textContent="AR NOT SUPPORTED"}stylizeElement(e,t=!0,n=13,i=!1){e.style.position="absolute",e.style.bottom="20px",i||(e.style.padding="12px 6px"),e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background=t?"rgba(20,150,80,1)":"rgba(180,20,20,1)",e.style.color="#fff",e.style.font=`normal ${n}px sans-serif`,e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="999"}}class Wx{constructor(e){this.domElement=document.createElement("div"),this.domElement.style.position="fixed",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.domElement.style.background="#000",this.domElement.style.opacity="0.7",this.domElement.style.display="flex",this.domElement.style.alignItems="center",this.domElement.style.justifyContent="center",this.domElement.style.zIndex="1111";const t=document.createElement("div");t.style.background="#aaa",t.style.width="50%",t.style.minWidth="250px",t.style.borderRadius="10px",t.style.height="15px",this.domElement.appendChild(t);const n=document.createElement("div");n.style.background="#22a",n.style.width="50%",n.style.borderRadius="10px",n.style.height="100%",n.style.width="0",t.appendChild(n),this.progressBar=n,document.body.appendChild(this.domElement)}set progress(e){const t=e*100;this.progressBar.style.width=`${t}%`}set visible(e){e?this.domElement.style.display="flex":this.domElement.style.display="none"}}class qx{constructor(e){e.fps,this.assetsPath=e.assetsPath,this.name=e.name|"Player",this.animations={},e.app.scene.add(e.object),this.object=e.object,this.pathLines=new Ce,this.pathColor=new ae(16777215),e.app.scene.add(this.pathLines),this.npc=e.npc,this.npc&&(this.dead=!1),this.speed=e.speed,this.app=e.app,e.app.pathfinder&&(this.pathfinder=e.app.pathfinder,this.ZONE=e.app.ZONE,this.navMeshGroup=this.pathfinder.getGroup(this.ZONE,this.object.position));const t=e.clip,n=this,i=this.object.position.clone();i.z+=10,this.object.lookAt(i),e.anims&&(this.mixer=new js(e.object),e.anims.forEach(function(r){n.animations[r.name]=ke.subclip(t,r.name,r.start,r.end)})),e.animations&&(this.mixer=new js(e.object),e.animations.forEach(r=>{n.animations[r.name.toLowerCase()]=r}))}setTargetDirection(){const e=this.object,t=this.calculatedPath[0].clone();t.y=e.position.y;const n=e.quaternion.clone();e.lookAt(t),this.quaternion=e.quaternion.clone(),e.quaternion.copy(n)}showPathLines(){this.pathLines&&this.app.scene.remove(this.pathLines);const e=new Cn({color:this.pathColor,linewidth:2}),t=this.object,n=this,i=[t.position];this.calculatedPath.forEach(function(h){i.push(h.clone())});const r=new Fe().setFromPoints(i);this.pathLines=new Ki(r,e),this.app.scene.add(this.pathLines);const o=[t.position].concat(this.calculatedPath),a=new xg(this.nodeRadius),l=new Ft({color:this.pathColor}),c=this.app.debug.offset|0;o.forEach(function(h){const u=new st(a,l);u.position.copy(h),u.position.y+=c,n.pathLines.add(u)})}newPath(e){const t=this.object;if(this.pathfinder===void 0){this.calculatedPath=[e.clone()],this.setTargetDirection(),this.action="walk";return}const n=this.pathfinder.getGroup(this.ZONE,e);this.pathfinder.getClosestNode(e,this.ZONE,n),this.calculatedPath=this.pathfinder.findPath(t.position,e,this.ZONE,this.navMeshGroup);const i=this;if(this.calculatedPath&&this.calculatedPath.length)this.action="walk",this.calculatedPath[0].clone(),this.setTargetDirection(),this.app.debug.showPath&&!this.npc&&this.showPathLines();else{if(this.action="idle",i.pathfinder){const r=i.pathfinder.getClosestNode(t.position,this.ZONE,this.navMeshGroup),o=new w;this.pathfinder.clampStep(t.position,e.clone(),r,this.ZONE,this.navMeshGroup,o)}this.pathLines&&this.app.scene.remove(this.pathLines)}}set action(e){if(this.actionName==e.toLowerCase())return;const t=this.animations[e.toLowerCase()];if(delete this.curAction,t!==void 0){const n=this.mixer.clipAction(t);n.loop=t.loop,n.time=0,this.mixer.stopAllAction(),this.actionName=e.toLowerCase(),this.actionTime=Date.now(),n.fadeIn(.5),n.play(),this.curAction=n}}update(e){const t=this.speed,n=this.object;if(this.mixer&&this.mixer.update(e),this.calculatedPath&&this.calculatedPath.length){const i=this.calculatedPath[0],r=i.clone().sub(n.position);let o=r.lengthSq()<.01;if(!o){const a=n.position.distanceToSquared(i);r.normalize(),this.quaternion&&n.quaternion.slerp(this.quaternion,.1),n.position.add(r.multiplyScalar(e*t)),o=n.position.distanceToSquared(i)>a}if(o)if(this.calculatedPath.shift(),this.calculatedPath.length==0)this.npc?this.newPath(this.app.randomWaypoint):(n.position.copy(i),this.action="idle");else{const a=this.calculatedPath[0].clone();a.y=n.position.y;const l=n.quaternion.clone();n.lookAt(a),this.quaternion=n.quaternion.clone(),n.quaternion.copy(l)}}else this.npc&&!this.dead&&this.newPath(this.app.randomWaypoint)}}var Br=function(s,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=s,this.domElement=e,this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.touches={ONE:ln.ROTATE,TWO:ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.listenToKeyEvents=function(S){S.addEventListener("keydown",ie),this._domElementKeyEvents=S},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(n),t.update(),a=o.NONE},this.update=function(){var S=new w,W=new rt().setFromUnitVectors(s.up,new w(0,1,0)),ne=W.clone().invert(),G=new w,ue=new rt,Te=2*Math.PI;return function(){var Lt=t.object.position;S.copy(Lt).sub(t.target),S.applyQuaternion(W),c.setFromVector3(S),t.autoRotate&&a===o.NONE&&D(R()),t.enableDamping?(c.theta+=h.theta*t.dampingFactor,c.phi+=h.phi*t.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);var Pe=t.minAzimuthAngle,Ke=t.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ke)&&(Pe<-Math.PI?Pe+=Te:Pe>Math.PI&&(Pe-=Te),Ke<-Math.PI?Ke+=Te:Ke>Math.PI&&(Ke-=Te),Pe<=Ke?c.theta=Math.max(Pe,Math.min(Ke,c.theta)):c.theta=c.theta>(Pe+Ke)/2?Math.max(Pe,c.theta):Math.min(Ke,c.theta)),c.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=u,c.radius=Math.max(t.minDistance,Math.min(t.maxDistance,c.radius)),t.enableDamping===!0?t.target.addScaledVector(d,t.dampingFactor):t.target.add(d),S.setFromSpherical(c),S.applyQuaternion(ne),Lt.copy(t.target).add(S),t.object.lookAt(t.target),t.enableDamping===!0?(h.theta*=1-t.dampingFactor,h.phi*=1-t.dampingFactor,d.multiplyScalar(1-t.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),u=1,f||G.distanceToSquared(t.object.position)>l||8*(1-ue.dot(t.object.quaternion))>l?(t.dispatchEvent(n),G.copy(t.object.position),ue.copy(t.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",C),t.domElement.removeEventListener("pointerdown",$),t.domElement.removeEventListener("wheel",j),t.domElement.removeEventListener("touchstart",ce),t.domElement.removeEventListener("touchend",pe),t.domElement.removeEventListener("touchmove",Ae),t.domElement.ownerDocument.removeEventListener("pointermove",le),t.domElement.ownerDocument.removeEventListener("pointerup",te),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",ie)};var t=this,n={type:"change"},i={type:"start"},r={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,l=1e-6,c=new Ya,h=new Ya,u=1,d=new w,f=!1,g=new Y,x=new Y,v=new Y,m=new Y,p=new Y,M=new Y,T=new Y,A=new Y,_=new Y;function R(){return 2*Math.PI/60/60*t.autoRotateSpeed}function F(){return Math.pow(.95,t.zoomSpeed)}function D(S){h.theta-=S}function z(S){h.phi-=S}var U=function(){var S=new w;return function(ne,G){S.setFromMatrixColumn(G,0),S.multiplyScalar(-ne),d.add(S)}}(),O=function(){var S=new w;return function(ne,G){t.screenSpacePanning===!0?S.setFromMatrixColumn(G,1):(S.setFromMatrixColumn(G,0),S.crossVectors(t.object.up,S)),S.multiplyScalar(ne),d.add(S)}}(),L=function(){var S=new w;return function(ne,G){var ue=t.domElement;if(t.object.isPerspectiveCamera){var Te=t.object.position;S.copy(Te).sub(t.target);var Ge=S.length();Ge*=Math.tan(t.object.fov/2*Math.PI/180),U(2*ne*Ge/ue.clientHeight,t.object.matrix),O(2*G*Ge/ue.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(U(ne*(t.object.right-t.object.left)/t.object.zoom/ue.clientWidth,t.object.matrix),O(G*(t.object.top-t.object.bottom)/t.object.zoom/ue.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function N(S){t.object.isPerspectiveCamera?u/=S:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*S)),t.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function I(S){t.object.isPerspectiveCamera?u*=S:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/S)),t.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function P(S){g.set(S.clientX,S.clientY)}function q(S){T.set(S.clientX,S.clientY)}function Z(S){m.set(S.clientX,S.clientY)}function J(S){x.set(S.clientX,S.clientY),v.subVectors(x,g).multiplyScalar(t.rotateSpeed);var W=t.domElement;D(2*Math.PI*v.x/W.clientHeight),z(2*Math.PI*v.y/W.clientHeight),g.copy(x),t.update()}function oe(S){A.set(S.clientX,S.clientY),_.subVectors(A,T),_.y>0?N(F()):_.y<0&&I(F()),T.copy(A),t.update()}function se(S){p.set(S.clientX,S.clientY),M.subVectors(p,m).multiplyScalar(t.panSpeed),L(M.x,M.y),m.copy(p),t.update()}function de(S){S.deltaY<0?I(F()):S.deltaY>0&&N(F()),t.update()}function me(S){var W=!1;switch(S.code){case t.keys.UP:L(0,t.keyPanSpeed),W=!0;break;case t.keys.BOTTOM:L(0,-t.keyPanSpeed),W=!0;break;case t.keys.LEFT:L(t.keyPanSpeed,0),W=!0;break;case t.keys.RIGHT:L(-t.keyPanSpeed,0),W=!0;break}W&&(S.preventDefault(),t.update())}function V(S){if(S.touches.length==1)g.set(S.touches[0].pageX,S.touches[0].pageY);else{var W=.5*(S.touches[0].pageX+S.touches[1].pageX),ne=.5*(S.touches[0].pageY+S.touches[1].pageY);g.set(W,ne)}}function De(S){if(S.touches.length==1)m.set(S.touches[0].pageX,S.touches[0].pageY);else{var W=.5*(S.touches[0].pageX+S.touches[1].pageX),ne=.5*(S.touches[0].pageY+S.touches[1].pageY);m.set(W,ne)}}function Se(S){var W=S.touches[0].pageX-S.touches[1].pageX,ne=S.touches[0].pageY-S.touches[1].pageY,G=Math.sqrt(W*W+ne*ne);T.set(0,G)}function ge(S){t.enableZoom&&Se(S),t.enablePan&&De(S)}function fe(S){t.enableZoom&&Se(S),t.enableRotate&&V(S)}function Ee(S){if(S.touches.length==1)x.set(S.touches[0].pageX,S.touches[0].pageY);else{var W=.5*(S.touches[0].pageX+S.touches[1].pageX),ne=.5*(S.touches[0].pageY+S.touches[1].pageY);x.set(W,ne)}v.subVectors(x,g).multiplyScalar(t.rotateSpeed);var G=t.domElement;D(2*Math.PI*v.x/G.clientHeight),z(2*Math.PI*v.y/G.clientHeight),g.copy(x)}function Me(S){if(S.touches.length==1)p.set(S.touches[0].pageX,S.touches[0].pageY);else{var W=.5*(S.touches[0].pageX+S.touches[1].pageX),ne=.5*(S.touches[0].pageY+S.touches[1].pageY);p.set(W,ne)}M.subVectors(p,m).multiplyScalar(t.panSpeed),L(M.x,M.y),m.copy(p)}function be(S){var W=S.touches[0].pageX-S.touches[1].pageX,ne=S.touches[0].pageY-S.touches[1].pageY,G=Math.sqrt(W*W+ne*ne);A.set(0,G),_.set(0,Math.pow(A.y/T.y,t.zoomSpeed)),N(_.y),T.copy(A)}function K(S){t.enableZoom&&be(S),t.enablePan&&Me(S)}function Q(S){t.enableZoom&&be(S),t.enableRotate&&Ee(S)}function $(S){if(t.enabled!==!1)switch(S.pointerType){case"mouse":case"pen":E(S);break}}function le(S){if(t.enabled!==!1)switch(S.pointerType){case"mouse":case"pen":b(S);break}}function te(S){switch(S.pointerType){case"mouse":case"pen":X();break}}function E(S){S.preventDefault(),t.domElement.focus?t.domElement.focus():window.focus();var W;switch(S.button){case 0:W=t.mouseButtons.LEFT;break;case 1:W=t.mouseButtons.MIDDLE;break;case 2:W=t.mouseButtons.RIGHT;break;default:W=-1}switch(W){case an.DOLLY:if(t.enableZoom===!1)return;q(S),a=o.DOLLY;break;case an.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(t.enablePan===!1)return;Z(S),a=o.PAN}else{if(t.enableRotate===!1)return;P(S),a=o.ROTATE}break;case an.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(t.enableRotate===!1)return;P(S),a=o.ROTATE}else{if(t.enablePan===!1)return;Z(S),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(t.domElement.ownerDocument.addEventListener("pointermove",le),t.domElement.ownerDocument.addEventListener("pointerup",te),t.dispatchEvent(i))}function b(S){if(t.enabled!==!1)switch(S.preventDefault(),a){case o.ROTATE:if(t.enableRotate===!1)return;J(S);break;case o.DOLLY:if(t.enableZoom===!1)return;oe(S);break;case o.PAN:if(t.enablePan===!1)return;se(S);break}}function X(S){t.domElement.ownerDocument.removeEventListener("pointermove",le),t.domElement.ownerDocument.removeEventListener("pointerup",te),t.enabled!==!1&&(t.dispatchEvent(r),a=o.NONE)}function j(S){t.enabled===!1||t.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE||(S.preventDefault(),t.dispatchEvent(i),de(S),t.dispatchEvent(r))}function ie(S){t.enabled===!1||t.enablePan===!1||me(S)}function ce(S){if(t.enabled!==!1){switch(S.preventDefault(),S.touches.length){case 1:switch(t.touches.ONE){case ln.ROTATE:if(t.enableRotate===!1)return;V(S),a=o.TOUCH_ROTATE;break;case ln.PAN:if(t.enablePan===!1)return;De(S),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(t.touches.TWO){case ln.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;ge(S),a=o.TOUCH_DOLLY_PAN;break;case ln.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;fe(S),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&t.dispatchEvent(i)}}function Ae(S){if(t.enabled!==!1)switch(S.preventDefault(),a){case o.TOUCH_ROTATE:if(t.enableRotate===!1)return;Ee(S),t.update();break;case o.TOUCH_PAN:if(t.enablePan===!1)return;Me(S),t.update();break;case o.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;K(S),t.update();break;case o.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;Q(S),t.update();break;default:a=o.NONE}}function pe(S){t.enabled!==!1&&(t.dispatchEvent(r),a=o.NONE)}function C(S){t.enabled!==!1&&S.preventDefault()}t.domElement.addEventListener("contextmenu",C),t.domElement.addEventListener("pointerdown",$),t.domElement.addEventListener("wheel",j),t.domElement.addEventListener("touchstart",ce),t.domElement.addEventListener("touchend",pe),t.domElement.addEventListener("touchmove",Ae),this.update()};Br.prototype=Object.create(Jt.prototype);Br.prototype.constructor=Br;var Ks=function(s,e){Br.call(this,s,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=an.PAN,this.mouseButtons.RIGHT=an.ROTATE,this.touches.ONE=ln.PAN,this.touches.TWO=ln.DOLLY_ROTATE};Ks.prototype=Object.create(Jt.prototype);Ks.prototype.constructor=Ks;var Pt;class Xx{constructor(){const e=document.createElement("div");document.body.appendChild(e),this.clock=new Qg,this.loadingBar=new Wx,this.assetsPath="assetsX/",this.camera=new lt(70,window.innerWidth/window.innerHeight,.01,20),this.camera.position.set(0,1.6,3),this.scene=new ao;const t=new oc(16777215,12303359,2);t.position.set(.5,1,.25),this.scene.add(t);const n=new yo;n.position.set(.2,1,1),this.scene.add(n),this.renderer=new ze({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputEncoding=En,e.appendChild(this.renderer.domElement),this.setEnvironment(),this.workingVec3=new w,this.initScene(),this.setupXR(),this.showReticale=!0,window.addEventListener("resize",this.resize.bind(this))}setEnvironment(){const e=new kx().setDataType(_t),t=new xx(this.renderer);t.compileEquirectangularShader();const n=this;e.load("assetsX/hdr/venice_sunset_1k.hdr",i=>{const r=t.fromEquirectangular(i).texture;t.dispose(),n.scene.environment=r},void 0,i=>{console.error("An error occurred setting the environment")})}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}loadKnight(){const e=new Mx().setPath(this.assetsPath);console.log("asset path : "+this.assetsPath+"knight.glb");const t=this;e.load("knight.glb",function(n){const r={object:n.scene.children[5],speed:.5,assetsPath:t.assetsPath,loader:e,animations:n.animations,clip:n.animations[0],app:t,name:"knight",npc:!1};t.knight=new qx(r),t.knight.object.visible=!1,t.knight.action="Dance";const o=.005;t.knight.object.scale.set(o,o,o),t.knight.object.position.set(0,0,0),t.loadingBar.visible=!1,t.renderer.setAnimationLoop(t.render.bind(t)),console.log("============================================================ Knight GLTF"),console.log(n)},function(n){t.loadingBar.progress=n.loaded/n.total},function(n){console.log("An error happened")}),e.load("newac.glb",function(n){const i=n.scene;i.scale.set(1.5,1.5,1.5),Pt=i,Pt.visible=!1,t.scene.add(Pt),t.loadingBar.visible=!1,console.log("============================================================ AC GLTF"),console.log(t.AC)},function(n){console.log(n.loaded/n.total*100+" % loaded")},function(n){console.log(n)})}initScene(){this.reticle=new st(new Hr(.4,.15,.001,5,2).rotateX(-Math.PI/2),new Ft({color:16711680,wireframe:!0})),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle),this.loadKnight()}setupXR(){this.renderer.xr.enabled=!0,new Vx(this.renderer,{sessionInit:{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay"],domOverlay:{root:document.body}}});const e=this;this.hitTestSourceRequested=!1,this.hitTestSource=null;function t(){if(Pt===void 0){console.log("AC is undefined");return}console.log(Pt),e.reticle.visible&&(e.reticle.visible=!1,Pt.visible?Pt.position.setFromMatrixPosition(e.reticle.matrix):(Pt.position.setFromMatrixPosition(e.reticle.matrix),Pt.visible=!0))}this.controller=this.renderer.xr.getController(0),this.controller.addEventListener("select",t),this.scene.add(this.controller)}requestHitTestSource(){const e=this,t=this.renderer.xr.getSession();t.requestReferenceSpace("viewer").then(function(n){t.requestHitTestSource({space:n}).then(function(i){e.hitTestSource=i})}),t.addEventListener("end",function(){e.hitTestSourceRequested=!1,e.hitTestSource=null,e.referenceSpace=null,Pt.visible=!1,e.showReticale=!1}),this.hitTestSourceRequested=!0}getHitTestResults(e){if(!this.showReticale)return;const t=e.getHitTestResults(this.hitTestSource);if(t.length){const n=this.renderer.xr.getReferenceSpace(),r=t[0].getPose(n);this.reticle.visible=!0,this.reticle.matrix.fromArray(r.transform.matrix)}else this.reticle.visible=!1}render(e,t){const n=this.clock.getDelta();this.knight&&this.knight.update(n),t&&(this.hitTestSourceRequested===!1&&this.requestHitTestSource(),this.hitTestSource&&this.getHitTestResults(t)),this.renderer.render(this.scene,this.camera)}}document.addEventListener("DOMContentLoaded",function(){const s=new Xx;window.app=s});
