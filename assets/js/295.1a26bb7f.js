(self.webpackChunknode_git_server=self.webpackChunknode_git_server||[]).push([[295],{1986:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var a=n(7462),o=n(7294),l=n(6010),r=n(5281),c=n(3438),s=n(8596),i=n(9960),u=n(4996),m=n(5999);function d(e){return o.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),o.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function f(e){let{children:t,href:n,isLast:a}=e;const l="breadcrumbs__link";return a?o.createElement("span",{className:l,itemProp:"name"},t):n?o.createElement(i.default,{className:l,href:n,itemProp:"item"},o.createElement("span",{itemProp:"name"},t)):o.createElement("span",{className:l},t)}function h(e){let{children:t,active:n,index:r,addMicrodata:c}=e;return o.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,o.createElement("meta",{itemProp:"position",content:String(r+1)}))}function g(){const e=(0,u.Z)("/");return o.createElement("li",{className:"breadcrumbs__item"},o.createElement(i.default,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",p.breadcrumbsItemLink),href:e},o.createElement(d,{className:p.breadcrumbHomeIcon})))}function v(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?o.createElement("nav",{className:(0,l.Z)(r.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},o.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&o.createElement(g,null),e.map(((t,n)=>{const a=n===e.length-1;return o.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},o.createElement(f,{href:t.href,isLast:a},t.label))})))):null}},4966:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(7462),o=n(7294),l=n(5999),r=n(6010),c=n(9960);function s(e){const{permalink:t,title:n,subLabel:a,isNext:l}=e;return o.createElement(c.default,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&o.createElement("div",{className:"pagination-nav__sublabel"},a),o.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return o.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&o.createElement(s,(0,a.Z)({},t,{subLabel:o.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&o.createElement(s,(0,a.Z)({},n,{subLabel:o.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(7294),o=n(6010),l=n(5999),r=n(5281),c=n(4477);function s(e){let{className:t}=e;const n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,o.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},2503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(7462),o=n(7294),l=n(6010),r=n(5999),c=n(6668);const s="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();return"h1"!==t&&n?o.createElement(t,(0,a.Z)({},u,{className:(0,l.Z)("anchor",m?i:s),id:n}),u.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,a.Z)({},u,{id:void 0}))}},6026:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>re});var a=n(7462),o=n(7294),l=n(5742);var r=n(2389),c=n(6010),s=n(6412),i=n(5281),u=n(7016);const m="codeBlockContainer_Ckt0";function d(e){let{as:t,...n}=e;const l=(0,s.p)(),r=(0,u.QC)(l);return o.createElement(t,(0,a.Z)({},n,{style:r,className:(0,c.Z)(n.className,m,i.k.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function f(e){let{children:t,className:n}=e;return o.createElement(d,{as:"pre",tabIndex:0,className:(0,c.Z)(p.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:p.codeBlockLines},t))}var h=n(6668),g=n(5448);const v={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var b={Prism:n(7410).Z,theme:v};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}var k=/\r\n|\r|\n/,N=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},C=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},L=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=E({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=E({},n,{backgroundColor:null}),o};function _(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const B=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?L(e.theme,e.language):void 0;return t.themeDict=n})),y(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,l=E({},_(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==o&&(l.style=void 0!==l.style?E({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),y(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return l[n[0]];var r=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(c))}})),y(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,l=e.token,r=E({},_(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(r.style=void 0!==r.style?E({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),y(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],l=0,r=0,c=[],s=[c];r>-1;){for(;(l=a[r]++)<o[r];){var i=void 0,u=t[r],m=n[r][l];if("string"==typeof m?(u=r>0?u:["plain"],i=m):(u=C(u,m.type),m.alias&&(u=C(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(k),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)N(c),s.push(c=[]),c.push({types:u,content:d[f]})}else r++,t.push(u),n.push(i),a.push(0),o.push(i.length)}r--,t.pop(),n.pop(),a.pop(),o.pop()}return N(c),s}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),x="codeLine_lJS_",T="codeLineNumber_Tfdd",Z="codeLineContent_feaV";function w(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:r,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=r({line:t,className:(0,c.Z)(n,l&&x)}),u=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))));return o.createElement("span",i,l?o.createElement(o.Fragment,null,o.createElement("span",{className:T}),o.createElement("span",{className:Z},u)):o.createElement(o.Fragment,null,u,o.createElement("br",null)))}var H=n(5999);const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function A(e){let{code:t,className:n}=e;const[a,l]=(0,o.useState)(!1),r=(0,o.useRef)(void 0),s=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),o&&o.focus()}(t),l(!0),r.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),o.createElement("button",{type:"button","aria-label":a?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,S.copyButton,a&&S.copyButtonCopied),onClick:s},o.createElement("span",{className:S.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:S.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:S.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const I="wordWrapButtonIcon_Bwma",j="wordWrapButtonEnabled_EoeP";function M(e){let{className:t,onClick:n,isEnabled:a}=e;const l=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,a&&j),"aria-label":l,title:l},o.createElement("svg",{className:I,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function z(e){var t;let{children:n,className:l="",metastring:r,title:i,showLineNumbers:m,language:f}=e;const{prism:{defaultLanguage:v,magicComments:y}}=(0,h.L)(),E=null!=(t=null!=f?f:(0,u.Vo)(l))?t:v,k=(0,s.p)(),N=(0,g.F)(),C=(0,u.bc)(r)||i,{lineClassNames:L,code:_}=(0,u.nZ)(n,{metastring:r,language:E,magicComments:y}),x=null!=m?m:(0,u.nt)(r);return o.createElement(d,{as:"div",className:(0,c.Z)(l,E&&!l.includes("language-"+E)&&"language-"+E)},C&&o.createElement("div",{className:p.codeBlockTitle},C),o.createElement("div",{className:p.codeBlockContent},o.createElement(B,(0,a.Z)({},b,{theme:k,code:_,language:null!=E?E:"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:l}=e;return o.createElement("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,c.Z)(t,p.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,c.Z)(p.codeBlockLines,x&&p.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(w,{key:t,line:e,getLineProps:a,getTokenProps:l,classNames:L[t],showLineNumbers:x})))))})),o.createElement("div",{className:p.buttonGroup},(N.isEnabled||N.isCodeScrollable)&&o.createElement(M,{className:p.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),o.createElement(A,{className:p.codeButton,code:_}))))}function O(e){let{children:t,...n}=e;const l=(0,r.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?z:f;return o.createElement(s,(0,a.Z)({key:String(l)},n),c)}var P=n(9960);var R=n(6043);const V="details_lb9f",D="isBrowser_bmU9",W="collapsibleContent_i85q";function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}function G(e){let{summary:t,children:n,...l}=e;const s=(0,r.Z)(),i=(0,o.useRef)(null),{collapsed:u,setCollapsed:m}=(0,R.u)({initialState:!l.open}),[d,p]=(0,o.useState)(l.open);return o.createElement("details",(0,a.Z)({},l,{ref:i,open:d,"data-collapsed":u,className:(0,c.Z)(V,s&&D,l.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&q(t,i.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))}}),null!=t?t:o.createElement("summary",null,"Details"),o.createElement(R.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},o.createElement("div",{className:W},n)))}const U="details_b_Ee";function Q(e){let{...t}=e;return o.createElement(G,(0,a.Z)({},t,{className:(0,c.Z)("alert alert--info",U,t.className)}))}var $=n(2503);function Y(e){return o.createElement($.default,e)}const J="containsTaskList_mC6p";const K="img_ev3q";const X="admonition_LlT9",ee="admonitionHeading_tbUL",te="admonitionIcon_kALy",ne="admonitionContent_S0QG";const ae={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(H.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(H.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(H.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(H.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(H.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},oe={secondary:"note",important:"info",success:"tip",warning:"danger"};function le(e){var t;const{mdxAdmonitionTitle:n,rest:a}=function(e){const t=o.Children.toArray(e),n=t.find((e=>{var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:a}}const re={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return o.createElement(e.props.originalType,a)}return e}(e):e));return o.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return o.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?o.createElement("code",e):o.createElement(O,e)},a:function(e){return o.createElement(P.default,e)},pre:function(e){var t;return o.createElement(O,(0,o.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>{var t;return o.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(Q,(0,a.Z)({},e,{summary:n}),l)},ul:function(e){return o.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&J))}));var t},img:function(e){return o.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,K))}));var t},h1:e=>o.createElement(Y,(0,a.Z)({as:"h1"},e)),h2:e=>o.createElement(Y,(0,a.Z)({as:"h2"},e)),h3:e=>o.createElement(Y,(0,a.Z)({as:"h3"},e)),h4:e=>o.createElement(Y,(0,a.Z)({as:"h4"},e)),h5:e=>o.createElement(Y,(0,a.Z)({as:"h5"},e)),h6:e=>o.createElement(Y,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:l}=le(e),r=function(e){var t;const n=null!=(t=oe[e])?t:e;return ae[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),ae.info)}(n),s=null!=a?a:r.label,{iconComponent:u}=r,m=null!=l?l:o.createElement(u,null);return o.createElement("div",{className:(0,c.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert","alert--"+r.infimaClassName,X)},o.createElement("div",{className:ee},o.createElement("span",{className:te},m),s),o.createElement("div",{className:ne},t))}}},9407:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(7462),o=n(7294),l=n(6010),r=n(8011);const c="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,l.Z)(c,"thin-scrollbar",t)},o.createElement(r.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},9286:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(7294),o=n(6010),l=n(6043),r=n(8011),c=n(7462),s=n(5999);const i="tocCollapsibleButton_TO0P",u="tocCollapsibleButtonExpanded_MG3E";function m(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,c.Z)({type:"button"},n,{className:(0,o.Z)("clean-btn",i,!t&&u,n.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const d="tocCollapsible_ETCw",p="tocCollapsibleContent_vkbj",f="tocCollapsibleExpanded_sAul";function h(e){let{toc:t,className:n,minHeadingLevel:c,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:u}=(0,l.u)({initialState:!0});return a.createElement("div",{className:(0,o.Z)(d,!i&&f,n)},a.createElement(m,{collapsed:i,onClick:u}),a.createElement(l.z,{lazy:!0,className:p,collapsed:i},a.createElement(r.Z,{toc:t,minHeadingLevel:c,maxHeadingLevel:s})))}},8011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7462),o=n(7294),l=n(6668),r=n(9665),c=n(6841);function s(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?o.createElement("ul",{className:l?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const i=o.memo(s);function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const f=(0,l.L)(),h=null!=m?m:f.tableOfContents.minHeadingLevel,g=null!=d?d:f.tableOfContents.maxHeadingLevel,v=(0,r.b)({toc:t,minHeadingLevel:h,maxHeadingLevel:g}),b=(0,o.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:g}}),[s,u,h,g]);return(0,c.S)(b),o.createElement(i,(0,a.Z)({toc:v,className:n,linkClassName:s},p))}},5130:(e,t,n)=>{"use strict";n.d(t,{b:()=>r,k:()=>c});var a=n(7294),o=n(902);const l=a.createContext(null);function r(e){let{children:t,content:n}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(l.Provider,{value:o},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}},5448:(e,t,n)=>{"use strict";n.d(t,{F:()=>c});var a=n(7294),o=n(902);const l={attributes:!0,characterData:!0,childList:!0,subtree:!0};function r(e,t){const[n,r]=(0,a.useState)(),c=(0,a.useCallback)((()=>{var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=l);const r=(0,o.zX)(t),c=(0,o.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,c),()=>t.disconnect()}),[e,r,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function c(){const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(null),c=(0,a.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[l,e]),s=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");o(n)}),[l]);return r(l,s),(0,a.useEffect)((()=>{s()}),[e,s]),(0,a.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:c}}},6412:(e,t,n)=>{"use strict";n.d(t,{p:()=>l});var a=n(2949),o=n(6668);function l(){const{prism:e}=(0,o.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,l=e.darkTheme||n;return"dark"===t?l:n}},6841:(e,t,n)=>{"use strict";n.d(t,{S:()=>s});var a=n(7294),o=n(6668);function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){var n;let{anchorTopOffset:a}=t;const o=e.find((e=>l(e).top>=a));if(o){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function s(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:c}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push("h"+o+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:c}),i=r(s,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}},7016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>p,Vo:()=>m,bc:()=>i,nZ:()=>d,nt:()=>u});var a=n(7594),o=n.n(a);const l=/title=(?<quote>["'])(?<title>.*?)\1/,r=/\{(?<range>[\d,-]+)\}/,c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function s(e,t){const n=e.map((e=>{const{start:n,end:a}=c[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function i(e){var t,n;return null!=(t=null==e||null==(n=e.match(l))?void 0:n.groups.title)?t:""}function u(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function m(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}function d(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:l,metastring:i}=t;if(i&&r.test(i)){const e=i.match(r).groups.range;if(0===l.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=l[0].className,a=o()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return s(["js","jsBlock"],t);case"jsx":case"tsx":return s(["js","jsBlock","jsx"],t);case"html":return s(["js","jsBlock","html"],t);case"python":case"py":case"bash":return s(["bash"],t);case"markdown":case"md":return s(["html","jsx","bash"],t);default:return s(Object.keys(c),t)}}(a,l),m=n.split("\n"),d=Object.fromEntries(l.map((e=>[e.className,{start:0,range:""}]))),p=Object.fromEntries(l.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let o=0;o<m.length;){const e=m[o].match(u);if(!e){o+=1;continue}const t=e.slice(1).find((e=>void 0!==e));p[t]?d[p[t]].range+=o+",":f[t]?d[f[t]].start=o:h[t]&&(d[h[t]].range+=d[h[t]].start+"-"+(o-1)+","),m.splice(o,1)}n=m.join("\n");const g={};return Object.entries(d).forEach((e=>{let[t,{range:n}]=e;o()(n).forEach((e=>{null!=g[e]||(g[e]=[]),g[e].push(t)}))})),{lineClassNames:g,code:n}}function p(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const l=t[a];l&&"string"==typeof o&&(n[l]=o)})),n}},9665:(e,t,n)=>{"use strict";n.d(t,{a:()=>l,b:()=>c});var a=n(7294);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function l(e){return(0,a.useMemo)((()=>o(e)),[e])}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);