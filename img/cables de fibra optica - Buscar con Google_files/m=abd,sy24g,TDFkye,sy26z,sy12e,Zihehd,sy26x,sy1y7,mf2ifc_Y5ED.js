//# allFunctionsCalledOnLoad
loaded_h_0(function(_){var window=this;
_.v("abd");
var mEe=function(a){var b="",c=21;for(let d=0;d<a.length;d++)d%4!=3&&(b+=String.fromCharCode(a[d]^c),c++);return b};_.nEe=mEe([97,119,115,111,107]);_.oEe=mEe([97,119,115,111,107,123]);_.pEe=mEe([118,115,121,107,108,124,104,119,68,127,114,105,114]);_.qEe=mEe([101,126,118,102,118,125,118,109,126]);_.rEe=mEe([116,116,115,108]);_.sEe=mEe([113,115,99,107]);_.tEe=mEe([113,115,117,107]);_.uEe=mEe([58,127,122,103,121,126,127,98,104,51,109,124,118,123,15,76,81,90,13,95,67,76,64,118]);
_.w();
_.lEe=_.x("TDFkye",[]);
_.v("TDFkye");
var vEe=function(a){typeof a==="string"&&(a=_.Qm(a));if(a)return _.xn(a,"display")!=="none"&&_.xn(a,"visibility")!=="hidden"&&a.offsetHeight>0},wEe=function(a){var b=0;for(let c in a)if(a[c].e)if(a[c].b)b++;else return!1;return b>0},xEe=function(a={}){var b={};b[_.sEe]={e:!!a[_.sEe],b:!vEe(_.nEe)};b[_.tEe]={e:!!a[_.tEe],b:!vEe(_.oEe)};return b},yEe=function(a){var b=[];for(let c in a)a[c].e&&b.push(`${c}:`+(a[c].b?"1":"0"));return b.join(",")},zEe=function(a,b){a=String(a);b&&(a+=`,${b}`);google.log(_.qEe,
a)},AEe=function(a,b,c=2){if(c<1)zEe(7,b);else{var d=new Image;d.onerror=()=>{AEe(a,b,c-1)};d.src=a}},BEe=function(a={}){if(a[_.rEe]&&vEe(_.pEe)){a=xEe(a);var b=yEe(a);wEe(a)?zEe(1,"0,"+b):zEe(0,b);(0,_.Mf)(()=>{AEe(_.uEe,"aa")})}};_.ss(_.lEe,class extends _.ps{constructor(a){super(a.Ma);BEe(google.pmc.abd)}});
_.w();
_.D0e=_.x("Zihehd",[]);
var y6b,D6b,w6b,z6b;y6b=function(){_.Wn(_.v6b);w6b("kne","enabled");_.v6b=_.ze(_.x6b,"keydown",a=>{a.keyCode!==13&&a.keyCode!==32||w6b("kne","selected")})};D6b=function(){_.Wn(z6b);z6b=_.Un(_.x6b,"mousedown",()=>{_.Im(_.x6b,_.A6b);_.B6b&&_.Wn(_.v6b);_.C6b()},{capture:!0})};_.C6b=function(){_.Wn(z6b);z6b=_.ze(_.x6b,"keydown",a=>{_.E6b.indexOf(a.keyCode)!==-1&&_.F6b()})};_.F6b=function(){_.Gm(_.x6b,_.A6b);_.B6b&&y6b();D6b()};_.G6b=function(a){_.A6b="zAoYTe";w6b=a;_.C6b()};_.B6b=!1;_.E6b=[9];_.x6b=document.documentElement;
_.v("Zihehd");
_.ss(_.D0e,class extends _.ps{constructor(a){super(a.Ma);_.G6b(this.ka)}ka(a,b){_.kh().Fc(a,b).log()}});
_.w();
_.C0e=_.x("mf2ifc",[]);
var zee,Bee,Dee;zee=function(a){var b;(b=!a.parentElement)||(a.ownerDocument&&a.ownerDocument.defaultView?(b=a.ownerDocument.defaultView.getComputedStyle(a))&&b.visibility==="hidden"?b=!1:(b=a.getBoundingClientRect(),b=b.width>0&&b.height>0):b=!0);return b?a:zee(a.parentElement)};Bee=function(a){if(a){var b=new Aee;for(let f of Object.keys(a)){var c=document.getElementById(f)||document.documentElement.querySelector(`img[data-iid="${f}"]`);if(c){var d=b,e=a[f];d.ka.ka(c,e)||d.oa.ka(c,e)}}}};
_.Cee=function(){Bee(google.ldi);Bee(google.pim);google.lfj?google.sx(null,()=>{Bee(google.ldilf)}):google.dclc(()=>{Bee(google.ldilf)})};Dee=class{constructor(a){this.rootMargin=a;this.Bh=null}aNa(){if(this.Bh)return!0;try{return this.Bh=new IntersectionObserver((a,b)=>{a=a.filter(c=>c.isIntersecting);for(let c of a)a=c.target,this.Aa(a),b.unobserve(a)},{rootMargin:this.rootMargin,threshold:[0]}),!0}catch(a){return!1}}};var Eee=class extends Dee{constructor(){super("0px");this.oa=new Map;this.wa=new Map}ka(a,b){if(a.hasAttribute("data-atf"))return!1;if(this.aNa()){this.wa.set(a,b);b=zee(a);if(b===a){var c;a:{for(c=a;c;c=c.parentElement)if(c.tagName==="G-SCROLLING-CAROUSEL"||c.classList.contains("XNfAUb"))break a;c=null}c&&(b=c)}(c=this.oa.get(b))?c.push(a):this.oa.set(b,[a]);this.Bh.observe(b);return!0}return!1}Aa(a){if(a=this.oa.get(a))for(let b of a)a=this.wa.get(b),_.doc(_.boc(),b,a,_.Nfc)}};var Fee=class extends Dee{constructor(){super("400px");this.oa=new Map}ka(a,b){(google.c.timl||Number(a.getAttribute("data-atf"))&1?0:this.aNa())?(this.oa.set(a,b),this.Bh.observe(a)):_.doc(_.boc(),a,b,_.Nfc);return!0}Aa(a){var b=this.oa.get(a);_.doc(_.boc(),a,b,_.Nfc)}};var Aee=class{constructor(){this.ka=new Eee;this.oa=new Fee}};
_.v("mf2ifc");
_.ss(_.C0e,class extends _.ps{constructor(a){super(a.Ma);_.Cee()}});
_.w();
});
// Google Inc.
