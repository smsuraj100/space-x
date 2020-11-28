(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{49:function(n,e,t){},50:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),c=t.n(r),a=t(17),o=t.n(a),s=t(21),u=(t(49),t(50),t(5)),l=t(16),d=t(14),h=t(23),f=t.n(h),j="UPDATE_VIEWPORT",p="REQUEST_HOME_PAGE_DATA",b="RECEIVE_HOME_PAGE_DATA",x="FAILURE_HOME_PAGE_DATA",O="REQUEST_FILTERED_DATA",g="RECEIVE_FILTERED_DATA",m="FAILURE_FILTERED_DATA",w=function(n){return{type:j,payload:n}},v=t(24),E=t.n(v),y="https://api.spaceXdata.com/v3/launches?limit=12",S=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];function _(){return function(n){return n({type:p}),E.a.get(y).then((function(e){var t;n((t=null===e||void 0===e?void 0:e.data,{type:b,payload:t}))})).catch((function(){n({type:x})}))}}function A(n,e,t){var i="".concat(y).concat(9999!==n?"&launch_year=".concat(n):"").concat(e?"&launch_success=".concat(e):"").concat(t?"&land_success=".concat(t):"");return function(n){return n({type:O}),E.a.get(i).then((function(e){var t;n((t=null===e||void 0===e?void 0:e.data,{type:g,payload:t}))})).catch((function(){n({type:m})}))}}var L=t(3),T=t(4);function F(){var n=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  backdrop-filter: blur(30px);\n  display: grid;\n  justify-content: flex-end;\n  z-index: 2;\n  overflow-y: scroll;\n"]);return F=function(){return n},n}function k(){var n=Object(L.a)(["\n  font-size: 16px;\n  line-height: 22px;\n  display: block;\n  margin-bottom: 10px;\n"]);return k=function(){return n},n}function z(){var n=Object(L.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-around;\n\n  @media (min-width: 700px) {\n    width: 65%;\n  }\n\n  @media (min-width: 1024px) {\n    width: 75%;\n  }\n"]);return z=function(){return n},n}function I(){var n=Object(L.a)(["\n  width: 65px;\n  height: 30px;\n  font-size: 18px;\n  line-height: 24px;\n  border-radius: 5px;\n  align-self: flex-end;\n  margin-top: 10px;\n  margin-right: 10px;\n"]);return I=function(){return n},n}function C(){var n=Object(L.a)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n\n  @media (min-width: 700px) {\n    justify-content: space-around;\n    align-items: unset;\n    margin-top: 20px;\n  }\n\n  @media (min-width: 1024px) {\n    justify-content: space-around;\n    align-items: unset;\n    margin-top: 20px;\n  }\n"]);return C=function(){return n},n}function D(){var n=Object(L.a)(["\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 700;\n  border-bottom: 2px solid;\n\n  @media (min-width: 700px) {\n    font-size: 28px;\n    line-height: 34px;\n    margin-bottom: 20px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 28px;\n    line-height: 34px;\n    margin-bottom: 20px;\n  }\n"]);return D=function(){return n},n}function P(){var n=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n"]);return P=function(){return n},n}var M=T.a.div(P()),R=T.a.label(D()),B=T.a.div(C(),(function(n){return n.isMobile?"column":"row"})),W=T.a.button(I()),N=T.a.div(z()),U=T.a.label(k()),H=T.a.div(F());function V(){return(V=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function X(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},c=Object.keys(n);for(i=0;i<c.length;i++)t=c[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(i=0;i<c.length;i++)t=c[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var G=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),J=r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"});function K(n,e){var t=n.title,i=n.titleId,c=X(n,["title","titleId"]);return r.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:e,"aria-labelledby":i},c),t?r.createElement("title",{id:i},t):null,G,J)}var Q=r.forwardRef(K);t.p;function Y(){var n=Object(L.a)(["\n  width: 40%;\n  height: 35px;\n  font-size: 16px;\n  line-height: 22px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  background-color: ",";\n\n  &:hover {\n    background-color: #54bd58;\n  }\n"]);return Y=function(){return n},n}function q(){var n=Object(L.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);return q=function(){return n},n}function Z(){var n=Object(L.a)(["\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 600;\n  margin-bottom: 10px;\n"]);return Z=function(){return n},n}function $(){var n=Object(L.a)(["\n  width: 25px;\n  height: 25px;\n  background: none;\n  padding: 0;\n  margin: 0;\n  border: none;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n"]);return $=function(){return n},n}function nn(){var n=Object(L.a)(["\n  align-self: flex-start;\n  margin-left: 20px;\n  margin-top: 10px;\n  font-size: 22px;\n  line-height: 24px;\n  font-weight: 600;\n"]);return nn=function(){return n},n}function en(){var n=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid grey;\n  border-radius: 10px;\n  margin-top: 10px;\n\n  @media (min-width: 700px) {\n    width: 30%;\n    height: fit-content;\n  }\n  \n  @media (min-width: 1024px) {\n    width: 20%;\n    height: fit-content;\n  }\n"]);return en=function(){return n},n}var tn=T.a.div(en()),rn=T.a.label(nn()),cn=T.a.button($()),an=T.a.label(Z()),on=T.a.div(q()),sn=T.a.button(Y(),(function(n){return n.isSelected?"#54bd58":"#d6ffe3"})),un=function(n){var e=n.onCloseClick,t=Object(d.b)(),c=Object(r.useState)(9999),a=Object(l.a)(c,2),o=a[0],s=a[1],u=Object(r.useState)(""),h=Object(l.a)(u,2),f=h[0],j=h[1],p=Object(r.useState)(""),b=Object(l.a)(p,2),x=b[0],O=b[1],g=function(n,e,i){t(A(n,e,i))},m=function(n){j(n),g(o,n,x)},w=function(n){O(n),g(o,f,n)},v=Object(d.c)((function(n){return n})).homepage.viewport;return Object(i.jsxs)(tn,{children:[Object(i.jsx)(rn,{children:"Filters"}),"MOBILE"===v&&Object(i.jsx)(cn,{onClick:function(){return e()},children:Object(i.jsx)(Q,{style:{width:"100%",height:"100%"}})}),Object(i.jsx)(an,{children:"Launch Year"}),Object(i.jsx)(on,{children:S.map((function(n,e){return Object(i.jsx)(sn,{onClick:function(){return function(n){s(n),g(n,f,x)}(n)},isSelected:o===n,children:n},e)}))}),Object(i.jsx)(an,{children:"Successful Launch"}),Object(i.jsxs)(on,{children:[Object(i.jsx)(sn,{onClick:function(){return m("true")},isSelected:"true"===f,children:"True"}),Object(i.jsx)(sn,{onClick:function(){return m("false")},isSelected:"false"===f,children:"False"})]}),Object(i.jsx)(an,{children:"Successful Landing"}),Object(i.jsxs)(on,{children:[Object(i.jsx)(sn,{onClick:function(){return w("true")},isSelected:"true"===x,children:"True"}),Object(i.jsx)(sn,{onClick:function(){return w("false")},isSelected:"false"===x,children:"False"})]})]})},ln=c.a.memo(un);function dn(){var n=Object(L.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n"]);return dn=function(){return n},n}function hn(){var n=Object(L.a)(["\n  margin: 0;\n  font-size: 16px;\n  line-height: 22px;\n"]);return hn=function(){return n},n}function fn(){var n=Object(L.a)(["\n  margin-top: 10px;\n"]);return fn=function(){return n},n}function jn(){var n=Object(L.a)(["\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 500;\n\n  @media (min-width: 700px) {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 12px;\n    line-height: 18px;\n  }\n"]);return jn=function(){return n},n}function pn(){var n=Object(L.a)(["\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 600;\n\n  @media (min-width: 700px) {\n    font-size: 16px;\n    line-height: 22px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 13px;\n    line-height: 19px;\n  }\n"]);return pn=function(){return n},n}function bn(){var n=Object(L.a)(["\n  width: 70%;\n  align-self: center;\n"]);return bn=function(){return n},n}function xn(){var n=Object(L.a)(["\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px 0;\n\n  @media (min-width: 700px) {\n    width: 42%;\n  }\n\n  @media (min-width: 1024px) {\n    width: 22%;\n  }\n"]);return xn=function(){return n},n}var On=T.a.div(xn()),gn=T.a.img(bn()),mn=T.a.label(pn()),wn=T.a.label(jn()),vn=Object(T.a)(mn)(fn()),En=T.a.ul(hn()),yn=T.a.div(dn()),Sn=function(n){var e=n.mission,t=e.mission_id,r=e.mission_name,c=e.launch_success,a=e.launch_year,o=e.links.mission_patch_small,s=e.rocket.first_stage.cores;return Object(i.jsxs)(On,{children:[Object(i.jsx)(gn,{src:o,alt:"alt"}),Object(i.jsx)(vn,{children:r}),Object(i.jsx)(vn,{children:"Mission Ids:"}),Object(i.jsx)(En,{children:t.length?t.map((function(n,e){return Object(i.jsx)("li",{children:n||"NA"},e)})):Object(i.jsx)("li",{children:"NA"})}),Object(i.jsxs)(yn,{children:[Object(i.jsx)(mn,{children:"Launch Year:"}),Object(i.jsx)(wn,{children:"  ".concat(a)})]}),Object(i.jsxs)(yn,{children:[Object(i.jsx)(mn,{children:"Successful Launch:"}),Object(i.jsx)(wn,{children:"  ".concat(c)})]}),Object(i.jsxs)(yn,{children:[Object(i.jsx)(mn,{children:"Successful Landing:"}),Object(i.jsx)(wn,{children:null!==s[0].land_success?" ".concat(s[0].land_success):"NA"})]})]})},_n=c.a.memo(Sn),An=function(){var n=Object(d.b)(),e=Object(r.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],o=Object(d.c)((function(n){return n})).homepage,s=o.viewport,u=o.homePageData;Object(r.useEffect)((function(){return window.addEventListener("resize",f()((function(){window.innerWidth<700?n(w("MOBILE")):window.innerWidth>=700&&window.innerWidth<1024?n(w("TAB")):window.innerWidth>=1024&&n(w("DESKTOP"))}),200)),function(){window.removeEventListener("resize",f()((function(){window.innerWidth<700?n(w("MOBILE")):window.innerWidth>=700&&window.innerWidth<1024?n(w("TAB")):window.innerWidth>=1024&&n(w("DESKTOP"))}),200))}})),Object(r.useEffect)((function(){n(_())}),[n]);var h=function(){return a(!1)};return Object(i.jsxs)(M,{children:[Object(i.jsx)(R,{children:"SpaceX Launch Programs"}),Object(i.jsxs)(B,{isMobile:"MOBILE"===s,children:["MOBILE"===s?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(W,{onClick:function(){return a(!0)},children:"Filter"}),c&&Object(i.jsx)(H,{children:Object(i.jsx)(ln,{onCloseClick:h})})]}):Object(i.jsx)(ln,{onCloseClick:h}),Object(i.jsx)(N,{children:u.length?u.map((function(n,e){return Object(i.jsx)(_n,{mission:n},e)})):Object(i.jsx)("b",{children:"No records Found!!"})})]}),Object(i.jsxs)(U,{children:[Object(i.jsx)("b",{children:"Developed by: "}),"Suraj Mishra"]})]})},Ln=function(){return Object(i.jsx)(u.c,{children:Object(i.jsx)(u.a,{exact:!0,path:"/",component:An})})};var Tn=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(Ln,{})})},Fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))},kn=t(13),zn=t(43),In=t(6),Cn={viewport:"MOBILE",homePageData:[],isFetching:!1,isSuccess:!1,isError:!1},Dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Cn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(In.a)(Object(In.a)({},n),{},{viewport:e.payload});case p:return Object(In.a)(Object(In.a)({},n),{},{isFetching:!0,isSuccess:!1,isError:!1});case b:return Object(In.a)(Object(In.a)({},n),{},{isFetching:!1,isSuccess:!0,homePageData:e.payload});case x:return Object(In.a)(Object(In.a)({},n),{},{isFetching:!1,isSuccess:!1,isError:!0});case O:return Object(In.a)(Object(In.a)({},n),{},{isFetching:!0,isSuccess:!1,isError:!1});case g:return Object(In.a)(Object(In.a)({},n),{},{isFetching:!1,isSuccess:!0,homePageData:e.payload});case m:return Object(In.a)(Object(In.a)({},n),{},{isFetching:!1,isSuccess:!1,isError:!0});default:return n}};var Pn=[zn.a],Mn="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||kn.d,Rn=Object(kn.e)(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(kn.c)(Object(In.a)({homepage:Dn},n))}(),{},Mn(kn.a.apply(void 0,Pn)));Rn.asyncReducers={};var Bn=Rn;o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s.a,{children:Object(i.jsx)(d.a,{store:Bn,children:Object(i.jsx)(Tn,{})})})}),document.getElementById("root")),Fn()}},[[77,1,2]]]);
//# sourceMappingURL=main.2e543ebb.chunk.js.map