"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{8075:function(e,t,r){r.d(t,{c:function(){return M}});var i,n=r(1552),o=r(5610),s=r(6393),a=r(9890),l=r(1468),d=r(9487),c=r(8522),u=r(8354),p=r(2306),f=r(6394),h=r(1177),g=r(2798),m=((i={})[f.f.info]="Info",i[f.f.warning]="Info",i[f.f.error]="ErrorBadge",i[f.f.blocked]="Blocked2",i[f.f.severeWarning]="Warning",i[f.f.success]="Completed",i),v=(0,a.y)(),x=function(e){switch(e){case f.f.blocked:case f.f.error:case f.f.severeWarning:return"assertive"}return"polite"},b=function(e){switch(e){case f.f.blocked:case f.f.error:case f.f.severeWarning:return"alert"}return"status"},_=s.forwardRef((function(e,t){var r=(0,h.k)(!1),i=r[0],n=r[1].toggle,a=(0,g.M)("MessageBar"),_=e.actions,y=e.className,w=e.children,B=e.overflowButtonAriaLabel,S=e.dismissIconProps,E=e.styles,T=e.theme,C=e.messageBarType,k=void 0===C?f.f.info:C,M=e.onDismiss,N=void 0===M?void 0:M,I=e.isMultiline,R=void 0===I||I,F=e.truncated,L=e.dismissButtonAriaLabel,W=e.messageBarIconProps,H=e.role,P=e.delayedRender,V=void 0===P||P,q=e.expandButtonProps,z=(0,l.pq)(e,l.iY,["className","role"]),J=v(E,{theme:T,messageBarType:k||f.f.info,onDismiss:void 0!==N,actions:void 0!==_,truncated:F,isMultiline:R,expandSingleLine:i,className:y}),A={iconName:i?"DoubleChevronUp":"DoubleChevronDown"},O=_||N?{"aria-describedby":a,role:"region"}:{},D=_?s.createElement("div",{className:J.actions},_):null,G=N?s.createElement(u.h,{disabled:!1,className:J.dismissal,onClick:N,iconProps:S||{iconName:"Clear"},title:L,ariaLabel:L}):null;return s.createElement("div",(0,o.pi)({ref:t,className:J.root},O),s.createElement("div",{className:J.content},s.createElement("div",{className:J.iconContainer,"aria-hidden":!0},W?s.createElement(p.J,(0,o.pi)({},W,{className:(0,d.i)(J.icon,W.className)})):s.createElement(p.J,{iconName:m[k],className:J.icon})),s.createElement("div",{className:J.text,id:a,role:H||b(k),"aria-live":x(k)},s.createElement("span",(0,o.pi)({className:J.innerText},z),V?s.createElement(c.U,null,s.createElement("span",null,w)):s.createElement("span",null,w))),!R&&!D&&F&&s.createElement("div",{className:J.expandSingleLine},s.createElement(u.h,(0,o.pi)({disabled:!1,className:J.expand,onClick:n,iconProps:A,ariaLabel:B,"aria-expanded":i},q))),!R&&D,!R&&G&&s.createElement("div",{className:J.dismissSingleLine},G),R&&G),R&&D)}));_.displayName="MessageBar";var y,w,B,S=r(6598),E={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},T=((y={})[f.f.error]="errorBackground",y[f.f.blocked]="errorBackground",y[f.f.success]="successBackground",y[f.f.warning]="warningBackground",y[f.f.severeWarning]="severeWarningBackground",y[f.f.info]="infoBackground",y),C=((w={})[f.f.error]="rgba(255, 0, 0, 0.3)",w[f.f.blocked]="rgba(255, 0, 0, 0.3)",w[f.f.success]="rgba(48, 241, 73, 0.3)",w[f.f.warning]="rgba(255, 254, 57, 0.3)",w[f.f.severeWarning]="rgba(255, 0, 0, 0.3)",w[f.f.info]="Window",w),k=((B={})[f.f.error]="errorIcon",B[f.f.blocked]="errorIcon",B[f.f.success]="successIcon",B[f.f.warning]="warningIcon",B[f.f.severeWarning]="severeWarningIcon",B[f.f.info]="infoIcon",B),M=(0,n.z)(_,(function(e){var t,r,i,n,s,a=e.theme,l=e.className,d=e.onDismiss,c=e.truncated,u=e.isMultiline,p=e.expandSingleLine,h=e.messageBarType,g=void 0===h?f.f.info:h,m=a.semanticColors,v=a.fonts,x=(0,S.sK)(0,S.mV),b=(0,S.Cn)(E,a),_={fontSize:S.ld.xSmall,height:10,lineHeight:"10px",color:m.messageText,selectors:(t={},t[S.qJ]=(0,o.pi)((0,o.pi)({},(0,S.xM)()),{color:"WindowText"}),t)},y=[(0,S.GL)(a,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":_,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[b.root,v.medium,g===f.f.error&&b.error,g===f.f.blocked&&b.blocked,g===f.f.severeWarning&&b.severeWarning,g===f.f.success&&b.success,g===f.f.warning&&b.warning,u?b.multiline:b.singleline,!u&&d&&b.dismissalSingleLine,!u&&c&&b.expandingSingleLine,{background:m[T[g]],color:m.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(r={".ms-Link":{color:m.messageLink,selectors:{":hover":{color:m.messageLinkHovered}}}},r[S.qJ]=(0,o.pi)((0,o.pi)({},(0,S.xM)()),{background:C[g],border:"1px solid WindowText",color:"WindowText"}),r)},u&&{flexDirection:"column"},l],content:[b.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[b.iconContainer,{fontSize:S.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:m[k[g]],selectors:(i={},i[S.qJ]=(0,o.pi)((0,o.pi)({},(0,S.xM)()),{color:"WindowText"}),i)},text:[b.text,(0,o.pi)((0,o.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},v.small),{selectors:(n={},n[S.qJ]=(0,o.pi)({},(0,S.xM)()),n)}),!d&&{marginRight:12}],innerText:[b.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},c&&{overflow:"visible",whiteSpace:"pre-wrap"},!u&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!u&&!c&&{selectors:(s={},s[x]={overflow:"visible",whiteSpace:"pre-wrap"},s)},p&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:b.dismissSingleLine,expandSingleLine:b.expandSingleLine,dismissal:[b.dismissal,y],expand:[b.expand,y],actions:[u?b.actions:b.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},u&&{marginBottom:8},d&&!u&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},6394:function(e,t,r){var i;r.d(t,{f:function(){return i}}),function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(i||(i={}))},6788:function(e,t,r){r.d(t,{x:function(){return a}});var i=r(8191),n=r(5610),o=r(2627),s=r(1468),a=(0,i.L)((function(e){if(null==e.children)return null;e.block,e.className;var t=e.as,r=void 0===t?"span":t,i=(e.variant,e.nowrap,(0,n._T)(e,["block","className","as","variant","nowrap"])),a=(0,o.FJ)(e,{root:r});return(0,o.Yb)(a.root,(0,n.pi)({},(0,s.pq)(i,s.iY)))}),{displayName:"Text",styles:function(e,t){var r=e.as,i=e.className,n=e.block,o=e.nowrap,s=e.variant,a=t.fonts,l=t.semanticColors,d=a[s||"medium"];return{root:[d,{color:d.color||l.bodyText,display:n?"td"===r?"table-cell":"block":"inline",mozOsxFontSmoothing:d.MozOsxFontSmoothing,webkitFontSmoothing:d.WebkitFontSmoothing},o&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},i]}}})},8740:function(e,t,r){r.d(t,{n:function(){return E}});var i=r(1552),n=r(5610),o=r(6393),s=r(4004),a=r(2306),l=r(9890),d=r(939),c=r(2437),u=r(7539),p=r(8522);var f=r(4162);var h,g=r(1468),m=r(6238),v=(0,l.y)(),x="TextField",b=function(e){function t(t){var r=e.call(this,t)||this;r._textElement=o.createRef(),r._onFocus=function(e){r.props.onFocus&&r.props.onFocus(e),r.setState({isFocused:!0},(function(){r.props.validateOnFocusIn&&r._validate(r.value)}))},r._onBlur=function(e){r.props.onBlur&&r.props.onBlur(e),r.setState({isFocused:!1},(function(){r.props.validateOnFocusOut&&r._validate(r.value)}))},r._onRenderLabel=function(e){var t=e.label,i=e.required,n=r._classNames.subComponentStyles?r._classNames.subComponentStyles.label:void 0;return t?o.createElement(s._,{required:i,htmlFor:r._id,styles:n,disabled:e.disabled,id:r._labelId},e.label):null},r._onRenderDescription=function(e){return e.description?o.createElement("span",{className:r._classNames.description},e.description):null},r._onRevealButtonClick=function(e){r.setState((function(e){return{isRevealingPassword:!e.isRevealingPassword}}))},r._onInputChange=function(e){var t,i,n=e.target.value,o=_(r.props,r.state)||"";void 0!==n&&n!==r._lastChangeValue&&n!==o?(r._lastChangeValue=n,null===(i=(t=r.props).onChange)||void 0===i||i.call(t,e,n),r._isControlled||r.setState({uncontrolledValue:n})):r._lastChangeValue=void 0},(0,d.l)(r),r._async=new c.e(r),r._fallbackId=(0,u.z)(x),r._descriptionId=(0,u.z)("TextFieldDescription"),r._labelId=(0,u.z)("TextFieldLabel"),r._prefixId=(0,u.z)("TextFieldPrefix"),r._suffixId=(0,u.z)("TextFieldSuffix"),r._warnControlledUsage();var i=t.defaultValue,n=void 0===i?"":i;return"number"===typeof n&&(n=String(n)),r.state={uncontrolledValue:r._isControlled?void 0:n,isFocused:!1,errorMessage:""},r._delayedValidate=r._async.debounce(r._validate,r.props.deferredValidationTime),r._lastValidation=0,r}return(0,n.ZT)(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return _(this.props,this.state)},enumerable:!1,configurable:!0}),t.prototype.componentDidMount=function(){this._adjustInputHeight(),this.props.validateOnLoad&&this._validate(this.value)},t.prototype.componentWillUnmount=function(){this._async.dispose()},t.prototype.getSnapshotBeforeUpdate=function(e,t){return{selection:[this.selectionStart,this.selectionEnd]}},t.prototype.componentDidUpdate=function(e,t,r){var i=this.props,n=(r||{}).selection,o=void 0===n?[null,null]:n,s=o[0],a=o[1];!!e.multiline!==!!i.multiline&&t.isFocused&&(this.focus(),null!==s&&null!==a&&s>=0&&a>=0&&this.setSelectionRange(s,a)),e.value!==i.value&&(this._lastChangeValue=void 0);var l=_(e,t),d=this.value;l!==d&&(this._warnControlledUsage(e),this.state.errorMessage&&!i.errorMessage&&this.setState({errorMessage:""}),this._adjustInputHeight(),y(i)&&this._delayedValidate(d))},t.prototype.render=function(){var e=this.props,t=e.borderless,r=e.className,i=e.disabled,s=e.invalid,l=e.iconProps,d=e.inputClassName,c=e.label,u=e.multiline,f=e.required,g=e.underlined,x=e.prefix,b=e.resizable,_=e.suffix,y=e.theme,w=e.styles,B=e.autoAdjustHeight,S=e.canRevealPassword,E=e.revealPasswordAriaLabel,T=e.type,C=e.onRenderPrefix,k=void 0===C?this._onRenderPrefix:C,M=e.onRenderSuffix,N=void 0===M?this._onRenderSuffix:M,I=e.onRenderLabel,R=void 0===I?this._onRenderLabel:I,F=e.onRenderDescription,L=void 0===F?this._onRenderDescription:F,W=this.state,H=W.isFocused,P=W.isRevealingPassword,V=this._errorMessage,q="boolean"===typeof s?s:!!V,z=!!S&&"password"===T&&function(){if("boolean"!==typeof h){var e=(0,m.J)();if(null===e||void 0===e?void 0:e.navigator){var t=/^Edg/.test(e.navigator.userAgent||"");h=!(function(){var e,t=(0,m.J)();return!!(null===(e=null===t||void 0===t?void 0:t.navigator)||void 0===e?void 0:e.userAgent)&&t.navigator.userAgent.indexOf("rv:11.0")>-1}()||t)}else h=!0}return h}(),J=this._classNames=v(w,{theme:y,className:r,disabled:i,focused:H,required:f,multiline:u,hasLabel:!!c,hasErrorMessage:q,borderless:t,resizable:b,hasIcon:!!l,underlined:g,inputClassName:d,autoAdjustHeight:B,hasRevealButton:z});return o.createElement("div",{ref:this.props.elementRef,className:J.root},o.createElement("div",{className:J.wrapper},R(this.props,this._onRenderLabel),o.createElement("div",{className:J.fieldGroup},(void 0!==x||this.props.onRenderPrefix)&&o.createElement("div",{className:J.prefix,id:this._prefixId},k(this.props,this._onRenderPrefix)),u?this._renderTextArea():this._renderInput(),l&&o.createElement(a.J,(0,n.pi)({className:J.icon},l)),z&&o.createElement("button",{"aria-label":E,className:J.revealButton,onClick:this._onRevealButtonClick,"aria-pressed":!!P,type:"button"},o.createElement("span",{className:J.revealSpan},o.createElement(a.J,{className:J.revealIcon,iconName:P?"Hide":"RedEye"}))),(void 0!==_||this.props.onRenderSuffix)&&o.createElement("div",{className:J.suffix,id:this._suffixId},N(this.props,this._onRenderSuffix)))),this._isDescriptionAvailable&&o.createElement("span",{id:this._descriptionId},L(this.props,this._onRenderDescription),V&&o.createElement("div",{role:"alert"},o.createElement(p.U,null,this._renderErrorMessage()))))},t.prototype.focus=function(){this._textElement.current&&this._textElement.current.focus()},t.prototype.blur=function(){this._textElement.current&&this._textElement.current.blur()},t.prototype.select=function(){this._textElement.current&&this._textElement.current.select()},t.prototype.setSelectionStart=function(e){this._textElement.current&&(this._textElement.current.selectionStart=e)},t.prototype.setSelectionEnd=function(e){this._textElement.current&&(this._textElement.current.selectionEnd=e)},Object.defineProperty(t.prototype,"selectionStart",{get:function(){return this._textElement.current?this._textElement.current.selectionStart:-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectionEnd",{get:function(){return this._textElement.current?this._textElement.current.selectionEnd:-1},enumerable:!1,configurable:!0}),t.prototype.setSelectionRange=function(e,t){this._textElement.current&&this._textElement.current.setSelectionRange(e,t)},t.prototype._warnControlledUsage=function(e){this._id,this.props,null!==this.props.value||this._hasWarnedNullValue||(this._hasWarnedNullValue=!0,(0,f.Z)("Warning: 'value' prop on 'TextField' should not be null. Consider using an empty string to clear the component or undefined to indicate an uncontrolled component."))},Object.defineProperty(t.prototype,"_id",{get:function(){return this.props.id||this._fallbackId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_isControlled",{get:function(){return void 0!==(e=this.props)[t="value"]&&null!==e[t];var e,t},enumerable:!1,configurable:!0}),t.prototype._onRenderPrefix=function(e){var t=e.prefix;return o.createElement("span",{style:{paddingBottom:"1px"}},t)},t.prototype._onRenderSuffix=function(e){var t=e.suffix;return o.createElement("span",{style:{paddingBottom:"1px"}},t)},Object.defineProperty(t.prototype,"_errorMessage",{get:function(){var e=this.props.errorMessage;return(void 0===e?this.state.errorMessage:e)||""},enumerable:!1,configurable:!0}),t.prototype._renderErrorMessage=function(){var e=this._errorMessage;return e?"string"===typeof e?o.createElement("p",{className:this._classNames.errorMessage},o.createElement("span",{"data-automation-id":"error-message"},e)):o.createElement("div",{className:this._classNames.errorMessage,"data-automation-id":"error-message"},e):null},Object.defineProperty(t.prototype,"_isDescriptionAvailable",{get:function(){var e=this.props;return!!(e.onRenderDescription||e.description||this._errorMessage)},enumerable:!1,configurable:!0}),t.prototype._renderTextArea=function(){var e=this.props.invalid,t=void 0===e?!!this._errorMessage:e,r=(0,g.pq)(this.props,g.FI,["defaultValue"]),i=this.props["aria-labelledby"]||(this.props.label?this._labelId:void 0);return o.createElement("textarea",(0,n.pi)({id:this._id},r,{ref:this._textElement,value:this.value||"",onInput:this._onInputChange,onChange:this._onInputChange,className:this._classNames.field,"aria-labelledby":i,"aria-describedby":this._isDescriptionAvailable?this._descriptionId:this.props["aria-describedby"],"aria-invalid":t,"aria-label":this.props.ariaLabel,readOnly:this.props.readOnly,onFocus:this._onFocus,onBlur:this._onBlur}))},t.prototype._renderInput=function(){var e=this.props,t=e.ariaLabel,r=e.invalid,i=void 0===r?!!this._errorMessage:r,s=e.onRenderPrefix,a=e.onRenderSuffix,l=e.prefix,d=e.suffix,c=e.type,u=void 0===c?"text":c,p=[];e.label&&p.push(this._labelId),(void 0!==l||s)&&p.push(this._prefixId),(void 0!==d||a)&&p.push(this._suffixId);var f=(0,n.pi)((0,n.pi)({type:this.state.isRevealingPassword?"text":u,id:this._id},(0,g.pq)(this.props,g.Gg,["defaultValue","type"])),{"aria-labelledby":this.props["aria-labelledby"]||(p.length>0?p.join(" "):void 0),ref:this._textElement,value:this.value||"",onInput:this._onInputChange,onChange:this._onInputChange,className:this._classNames.field,"aria-label":t,"aria-describedby":this._isDescriptionAvailable?this._descriptionId:this.props["aria-describedby"],"aria-invalid":i,onFocus:this._onFocus,onBlur:this._onBlur}),h=function(e){return o.createElement("input",(0,n.pi)({},e))};return(this.props.onRenderInput||h)(f,h)},t.prototype._validate=function(e){var t=this;if(this._latestValidateValue!==e||!y(this.props)){this._latestValidateValue=e;var r=this.props.onGetErrorMessage,i=r&&r(e||"");if(void 0!==i)if("string"!==typeof i&&"then"in i){var n=++this._lastValidation;i.then((function(r){n===t._lastValidation&&t.setState({errorMessage:r}),t._notifyAfterValidate(e,r)}))}else this.setState({errorMessage:i}),this._notifyAfterValidate(e,i);else this._notifyAfterValidate(e,"")}},t.prototype._notifyAfterValidate=function(e,t){e===this.value&&this.props.onNotifyValidationResult&&this.props.onNotifyValidationResult(t,e)},t.prototype._adjustInputHeight=function(){if(this._textElement.current&&this.props.autoAdjustHeight&&this.props.multiline){var e=this._textElement.current;e.style.height="",e.style.height=e.scrollHeight+"px"}},t.defaultProps={resizable:!0,deferredValidationTime:200,validateOnLoad:!0},t}(o.Component);function _(e,t){var r=e.value,i=void 0===r?t.uncontrolledValue:r;return"number"===typeof i?String(i):i}function y(e){return!(e.validateOnFocusIn||e.validateOnFocusOut)}var w=r(6598),B={root:"ms-TextField",description:"ms-TextField-description",errorMessage:"ms-TextField-errorMessage",field:"ms-TextField-field",fieldGroup:"ms-TextField-fieldGroup",prefix:"ms-TextField-prefix",suffix:"ms-TextField-suffix",wrapper:"ms-TextField-wrapper",revealButton:"ms-TextField-reveal",multiline:"ms-TextField--multiline",borderless:"ms-TextField--borderless",underlined:"ms-TextField--underlined",unresizable:"ms-TextField--unresizable",required:"is-required",disabled:"is-disabled",active:"is-active"};function S(e){var t=e.underlined,r=e.disabled,i=e.focused,n=e.theme,o=n.palette,s=n.fonts;return function(){var e;return{root:[t&&r&&{color:o.neutralTertiary},t&&{fontSize:s.medium.fontSize,marginRight:8,paddingLeft:12,paddingRight:0,lineHeight:"22px",height:32},t&&i&&{selectors:(e={},e[w.qJ]={height:31},e)}]}}}var E=(0,i.z)(b,(function(e){var t,r,i,o,s,a,l,d,c,u,p,f,h=e.theme,g=e.className,m=e.disabled,v=e.focused,x=e.required,b=e.multiline,_=e.hasLabel,y=e.borderless,E=e.underlined,T=e.hasIcon,C=e.resizable,k=e.hasErrorMessage,M=e.inputClassName,N=e.autoAdjustHeight,I=e.hasRevealButton,R=h.semanticColors,F=h.effects,L=h.fonts,W=(0,w.Cn)(B,h),H={background:R.disabledBackground,color:m?R.disabledText:R.inputPlaceholderText,display:"flex",alignItems:"center",padding:"0 10px",lineHeight:1,whiteSpace:"nowrap",flexShrink:0,selectors:(t={},t[w.qJ]={background:"Window",color:m?"GrayText":"WindowText"},t)},P=[{color:R.inputPlaceholderText,opacity:1,selectors:(r={},r[w.qJ]={color:"GrayText"},r)}],V={color:R.disabledText,selectors:(i={},i[w.qJ]={color:"GrayText"},i)};return{root:[W.root,L.medium,x&&W.required,m&&W.disabled,v&&W.active,b&&W.multiline,y&&W.borderless,E&&W.underlined,w.Fv,{position:"relative"},g],wrapper:[W.wrapper,E&&[{display:"flex",borderBottom:"1px solid "+(k?R.errorText:R.inputBorder),width:"100%"},m&&{borderBottomColor:R.disabledBackground,selectors:(o={},o[w.qJ]=(0,n.pi)({borderColor:"GrayText"},(0,w.xM)()),o)},!m&&{selectors:{":hover":{borderBottomColor:k?R.errorText:R.inputBorderHovered,selectors:(s={},s[w.qJ]=(0,n.pi)({borderBottomColor:"Highlight"},(0,w.xM)()),s)}}},v&&[{position:"relative"},(0,w.$Y)(k?R.errorText:R.inputFocusBorderAlt,0,"borderBottom")]]],fieldGroup:[W.fieldGroup,w.Fv,{border:"1px solid "+R.inputBorder,borderRadius:F.roundedCorner2,background:R.inputBackground,cursor:"text",height:32,display:"flex",flexDirection:"row",alignItems:"stretch",position:"relative"},b&&{minHeight:"60px",height:"auto",display:"flex"},!v&&!m&&{selectors:{":hover":{borderColor:R.inputBorderHovered,selectors:(a={},a[w.qJ]=(0,n.pi)({borderColor:"Highlight"},(0,w.xM)()),a)}}},v&&!E&&(0,w.$Y)(k?R.errorText:R.inputFocusBorderAlt,F.roundedCorner2),m&&{borderColor:R.disabledBackground,selectors:(l={},l[w.qJ]=(0,n.pi)({borderColor:"GrayText"},(0,w.xM)()),l),cursor:"default"},y&&{border:"none"},y&&v&&{border:"none",selectors:{":after":{border:"none"}}},E&&{flex:"1 1 0px",border:"none",textAlign:"left"},E&&m&&{backgroundColor:"transparent"},k&&!E&&{borderColor:R.errorText,selectors:{"&:hover":{borderColor:R.errorText}}},!_&&x&&{selectors:(d={":before":{content:"'*'",color:R.errorText,position:"absolute",top:-5,right:-10}},d[w.qJ]={selectors:{":before":{color:"WindowText",right:-14}}},d)}],field:[L.medium,W.field,w.Fv,{borderRadius:0,border:"none",background:"none",backgroundColor:"transparent",color:R.inputText,padding:"0 8px",width:"100%",minWidth:0,textOverflow:"ellipsis",outline:0,selectors:(c={"&:active, &:focus, &:hover":{outline:0},"::-ms-clear":{display:"none"}},c[w.qJ]={background:"Window",color:m?"GrayText":"WindowText"},c)},(0,w.Sv)(P),b&&!C&&[W.unresizable,{resize:"none"}],b&&{minHeight:"inherit",lineHeight:17,flexGrow:1,paddingTop:6,paddingBottom:6,overflow:"auto",width:"100%"},b&&N&&{overflow:"hidden"},T&&!I&&{paddingRight:24},b&&T&&{paddingRight:40},m&&[{backgroundColor:R.disabledBackground,color:R.disabledText,borderColor:R.disabledBackground},(0,w.Sv)(V)],E&&{textAlign:"left"},v&&!y&&{selectors:(u={},u[w.qJ]={paddingLeft:11,paddingRight:11},u)},v&&b&&!y&&{selectors:(p={},p[w.qJ]={paddingTop:4},p)},M],icon:[b&&{paddingRight:24,alignItems:"flex-end"},{pointerEvents:"none",position:"absolute",bottom:6,right:8,top:"auto",fontSize:w.ld.medium,lineHeight:18},m&&{color:R.disabledText}],description:[W.description,{color:R.bodySubtext,fontSize:L.xSmall.fontSize}],errorMessage:[W.errorMessage,w.k4.slideDownIn20,L.small,{color:R.errorText,margin:0,paddingTop:5,display:"flex",alignItems:"center"}],prefix:[W.prefix,H],suffix:[W.suffix,H],revealButton:[W.revealButton,"ms-Button","ms-Button--icon",(0,w.GL)(h,{inset:1}),{height:30,width:32,border:"none",padding:"0px 4px",backgroundColor:"transparent",color:R.link,selectors:{":hover":{outline:0,color:R.primaryButtonBackgroundHovered,backgroundColor:R.buttonBackgroundHovered,selectors:(f={},f[w.qJ]={borderColor:"Highlight",color:"Highlight"},f)},":focus":{outline:0}}},T&&{marginRight:28}],revealSpan:{display:"flex",height:"100%",alignItems:"center"},revealIcon:{margin:"0px 4px",pointerEvents:"none",bottom:6,right:8,top:"auto",fontSize:w.ld.medium,lineHeight:18},subComponentStyles:{label:S(e)}}}),void 0,{scope:"TextField"})},8522:function(e,t,r){r.d(t,{U:function(){return s}});var i=r(5610),n=r(6393),o=r(6238),s=function(e){function t(t){var r=e.call(this,t)||this;return r.state={isRendered:void 0===(0,o.J)()},r}return(0,i.ZT)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?n.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(n.Component)}}]);
//# sourceMappingURL=63-69c014cc39eb8336.js.map