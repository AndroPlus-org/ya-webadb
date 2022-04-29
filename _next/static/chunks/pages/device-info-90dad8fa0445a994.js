(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{8075:function(e,n,i){"use strict";i.d(n,{c:function(){return T}});var s,r=i(1552),a=i(5610),o=i(6393),t=i(9890),c=i(1468),l=i(9487),d=i(8522),u=i(8354),m=i(2306),p=i(6394),g=i(1177),f=i(2798),h=((s={})[p.f.info]="Info",s[p.f.warning]="Info",s[p.f.error]="ErrorBadge",s[p.f.blocked]="Blocked2",s[p.f.severeWarning]="Warning",s[p.f.success]="Completed",s),x=(0,t.y)(),v=function(e){switch(e){case p.f.blocked:case p.f.error:case p.f.severeWarning:return"assertive"}return"polite"},b=function(e){switch(e){case p.f.blocked:case p.f.error:case p.f.severeWarning:return"alert"}return"status"},w=o.forwardRef((function(e,n){var i=(0,g.k)(!1),s=i[0],r=i[1].toggle,t=(0,f.M)("MessageBar"),w=e.actions,j=e.className,S=e.children,B=e.overflowButtonAriaLabel,k=e.dismissIconProps,y=e.styles,L=e.theme,M=e.messageBarType,N=void 0===M?p.f.info:M,T=e.onDismiss,E=void 0===T?void 0:T,W=e.isMultiline,C=void 0===W||W,P=e.truncated,I=e.dismissButtonAriaLabel,_=e.messageBarIconProps,A=e.role,O=e.delayedRender,D=void 0===O||O,J=e.expandButtonProps,H=(0,c.pq)(e,c.iY,["className","role"]),R=x(y,{theme:L,messageBarType:N||p.f.info,onDismiss:void 0!==E,actions:void 0!==w,truncated:P,isMultiline:C,expandSingleLine:s,className:j}),q={iconName:s?"DoubleChevronUp":"DoubleChevronDown"},F=w||E?{"aria-describedby":t,role:"region"}:{},V=w?o.createElement("div",{className:R.actions},w):null,Z=E?o.createElement(u.h,{disabled:!1,className:R.dismissal,onClick:E,iconProps:k||{iconName:"Clear"},title:I,ariaLabel:I}):null;return o.createElement("div",(0,a.pi)({ref:n,className:R.root},F),o.createElement("div",{className:R.content},o.createElement("div",{className:R.iconContainer,"aria-hidden":!0},_?o.createElement(m.J,(0,a.pi)({},_,{className:(0,l.i)(R.icon,_.className)})):o.createElement(m.J,{iconName:h[N],className:R.icon})),o.createElement("div",{className:R.text,id:t,role:A||b(N),"aria-live":v(N)},o.createElement("span",(0,a.pi)({className:R.innerText},H),D?o.createElement(d.U,null,o.createElement("span",null,S)):o.createElement("span",null,S))),!C&&!V&&P&&o.createElement("div",{className:R.expandSingleLine},o.createElement(u.h,(0,a.pi)({disabled:!1,className:R.expand,onClick:r,iconProps:q,ariaLabel:B,"aria-expanded":s},J))),!C&&V,!C&&Z&&o.createElement("div",{className:R.dismissSingleLine},Z),C&&Z),C&&V)}));w.displayName="MessageBar";var j,S,B,k=i(6598),y={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},L=((j={})[p.f.error]="errorBackground",j[p.f.blocked]="errorBackground",j[p.f.success]="successBackground",j[p.f.warning]="warningBackground",j[p.f.severeWarning]="severeWarningBackground",j[p.f.info]="infoBackground",j),M=((S={})[p.f.error]="rgba(255, 0, 0, 0.3)",S[p.f.blocked]="rgba(255, 0, 0, 0.3)",S[p.f.success]="rgba(48, 241, 73, 0.3)",S[p.f.warning]="rgba(255, 254, 57, 0.3)",S[p.f.severeWarning]="rgba(255, 0, 0, 0.3)",S[p.f.info]="Window",S),N=((B={})[p.f.error]="errorIcon",B[p.f.blocked]="errorIcon",B[p.f.success]="successIcon",B[p.f.warning]="warningIcon",B[p.f.severeWarning]="severeWarningIcon",B[p.f.info]="infoIcon",B),T=(0,r.z)(w,(function(e){var n,i,s,r,o,t=e.theme,c=e.className,l=e.onDismiss,d=e.truncated,u=e.isMultiline,m=e.expandSingleLine,g=e.messageBarType,f=void 0===g?p.f.info:g,h=t.semanticColors,x=t.fonts,v=(0,k.sK)(0,k.mV),b=(0,k.Cn)(y,t),w={fontSize:k.ld.xSmall,height:10,lineHeight:"10px",color:h.messageText,selectors:(n={},n[k.qJ]=(0,a.pi)((0,a.pi)({},(0,k.xM)()),{color:"WindowText"}),n)},j=[(0,k.GL)(t,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":w,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[b.root,x.medium,f===p.f.error&&b.error,f===p.f.blocked&&b.blocked,f===p.f.severeWarning&&b.severeWarning,f===p.f.success&&b.success,f===p.f.warning&&b.warning,u?b.multiline:b.singleline,!u&&l&&b.dismissalSingleLine,!u&&d&&b.expandingSingleLine,{background:h[L[f]],color:h.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(i={".ms-Link":{color:h.messageLink,selectors:{":hover":{color:h.messageLinkHovered}}}},i[k.qJ]=(0,a.pi)((0,a.pi)({},(0,k.xM)()),{background:M[f],border:"1px solid WindowText",color:"WindowText"}),i)},u&&{flexDirection:"column"},c],content:[b.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[b.iconContainer,{fontSize:k.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:h[N[f]],selectors:(s={},s[k.qJ]=(0,a.pi)((0,a.pi)({},(0,k.xM)()),{color:"WindowText"}),s)},text:[b.text,(0,a.pi)((0,a.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},x.small),{selectors:(r={},r[k.qJ]=(0,a.pi)({},(0,k.xM)()),r)}),!l&&{marginRight:12}],innerText:[b.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!u&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!u&&!d&&{selectors:(o={},o[v]={overflow:"visible",whiteSpace:"pre-wrap"},o)},m&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:b.dismissSingleLine,expandSingleLine:b.expandSingleLine,dismissal:[b.dismissal,j],expand:[b.expand,j],actions:[u?b.actions:b.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},u&&{marginBottom:8},l&&!u&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},6394:function(e,n,i){"use strict";var s;i.d(n,{f:function(){return s}}),function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(s||(s={}))},8522:function(e,n,i){"use strict";i.d(n,{U:function(){return o}});var s=i(5610),r=i(6393),a=i(6238),o=function(e){function n(n){var i=e.call(this,n)||this;return i.state={isRendered:void 0===(0,a.J)()},i}return(0,s.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this,n=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),n)},n.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},n.prototype.render=function(){return this.state.isRendered?r.Children.only(this.props.children):null},n.defaultProps={delay:0},n}(r.Component)},7550:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/device-info",function(){return i(7756)}])},7756:function(e,n,i){"use strict";i.a(e,(async function(e,s){try{i.r(n);var r,a=i(5202),o=i(4784),t=i(8075),c=i(9582),l=i(4344),d=i(2306),u=i(5780),m=i(7441),p=i(3758),g=(i(6393),i(9889)),f=i(2555),h=i(1984),x=e([g,h]);function b(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function w(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),s.forEach((function(n){b(e,n,i[n])}))}return e}[g,h]=x.then?(await x)():x;var v=(b(r={},u.AdbFeatures.ShellV2,'"shell" command now supports separating child process\'s stdout and stderr, and returning exit code'),b(r,u.AdbFeatures.StatV2,'"sync" command now supports "STA2" (returns more information of a file than old "STAT") and "LST2" (returns information of a directory) sub command'),b(r,u.AdbFeatures.ListV2,'"sync" command now supports "LST2" sub command which returns more information when listing a directory than old "LIST"'),b(r,u.AdbFeatures.FixedPushMkdir,"Android 9 (P) introduced a bug that pushing files to a non-existing directory would fail. This feature indicates it's fixed (Android 10)"),b(r,"abb_exec",'Support "exec" command which can stream stdin into child process'),r);n.default=(0,m.Pi)((function(){var e,n,i,s,r,u,m;return(0,a.jsxs)(o.K,w({},h.LE,{children:[(0,a.jsx)(p.default,{children:(0,a.jsx)("title",{children:"\u30c7\u30d0\u30a4\u30b9\u60c5\u5831 - Android \u30a6\u30a7\u30d6\u30c4\u30fc\u30eb"})}),(0,a.jsxs)(t.c,{children:[(0,a.jsx)("span",{children:"ADB \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u9593\u306e\u30d1\u30b1\u30c3\u30c8\u5f62\u5f0f\u306b\u3088\u308a\u6c7a\u307e\u308a\u307e\u3059\u3002\u73fe\u57282\u3064\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059:"}),(0,a.jsx)("br",{}),(0,a.jsx)("code",{children:"01000000"}),(0,a.jsx)("span",{children:" Android 8 (Oreo) \u4ee5\u524d\u3067\u5229\u7528"}),(0,a.jsx)("br",{}),(0,a.jsx)("code",{children:"01000001"}),(0,a.jsx)("span",{children:" Android 9 (Pie) \u4ee5\u964d\u3067\u5229\u7528"}),(0,a.jsx)("br",{}),(0,a.jsx)(g.dL,{href:"https://chensi.moe/blog/2020/09/30/webadb-part2-connection/#version",children:"\u3053\u3061\u3089\u306e\u30da\u30fc\u30b8"}),(0,a.jsx)("span",{children:"\u3067\u8a73\u3057\u3044\u60c5\u5831\u304c\u63b2\u8f09\u3055\u308c\u3066\u3044\u307e\u3059 (\u82f1\u8a9e)\u3002"})]}),(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{children:"\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3: "}),(0,a.jsx)("code",{children:null===(e=f.n.device)||void 0===e||null===(n=e.protocolVersion)||void 0===n?void 0:n.toString(16).padStart(8,"0")})]}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(t.c,{children:[(0,a.jsx)("code",{children:"ro.product.name"}),(0,a.jsx)("span",{children:" \u306e\u5024"})]}),(0,a.jsxs)("span",{children:["\u30d7\u30ed\u30c0\u30af\u30c8\u540d: ",null===(i=f.n.device)||void 0===i?void 0:i.product]}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(t.c,{children:[(0,a.jsx)("code",{children:"ro.product.model"}),(0,a.jsx)("span",{children:" \u306e\u5024"})]}),(0,a.jsxs)("span",{children:["\u30e2\u30c7\u30eb\u540d: ",null===(s=f.n.device)||void 0===s?void 0:s.model]}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(t.c,{children:[(0,a.jsx)("code",{children:"ro.product.device"}),(0,a.jsx)("span",{children:" \u306e\u5024"})]}),(0,a.jsxs)("span",{children:["\u30c7\u30d0\u30a4\u30b9\u540d: ",null===(r=f.n.device)||void 0===r?void 0:r.device]}),(0,a.jsx)(c.Z,{}),(0,a.jsxs)(t.c,{children:[(0,a.jsx)("span",{children:"\u5404\u30b3\u30de\u30f3\u30c9\u304c\u3069\u3046\u3044\u3063\u305f\u6319\u52d5\u3092\u3059\u308b\u3079\u304d\u304b\u6c7a\u3081\u308b\u6a5f\u80fd\u4e00\u89a7\u3067\u3059\u3002"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:"\u4f8b\u3048\u3070\u65b0\u3057\u3044\u30b3\u30de\u30f3\u30c9\u304c\u4f7f\u3048\u308b\u3053\u3068\u3092\u793a\u3057\u305f\u308a\u3001\u53e4\u3044\u30d0\u30b0\u3078\u306e\u5bfe\u7b56\u304c\u4e0d\u8981\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u305f\u308a\u3057\u307e\u3059\u3002"}),(0,a.jsx)("br",{})]}),(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{children:"\u6a5f\u80fd: "}),null===(u=f.n.device)||void 0===u||null===(m=u.features)||void 0===m?void 0:m.map((function(e,n){return(0,a.jsxs)("span",{children:[0!==n&&(0,a.jsx)("span",{children:", "}),(0,a.jsx)("span",{children:e}),v[e]&&(0,a.jsx)(l.G,{content:(0,a.jsx)("span",{children:v[e]}),children:(0,a.jsx)(d.J,{style:{marginLeft:4},iconName:h.PJ.Info})})]},e)}))]})]}))})),s()}catch(b){s(b)}}))}},function(e){e.O(0,[774,888,179],(function(){return n=7550,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=device-info-90dad8fa0445a994.js.map