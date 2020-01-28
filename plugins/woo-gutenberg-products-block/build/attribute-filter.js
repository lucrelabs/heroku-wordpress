this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["attribute-filter"]=function(e){function t(t){for(var r,u,i=t[0],a=t[1],l=t[2],b=0,d=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&d.push(c[u][0]),c[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={6:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=a;return o.push([653,2,1,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.React}()},102:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(43)),o=n(6),u=n.n(o);n(137);t.a=function(e){var t=e.className,n=e.headingLevel,o=e.onChange,i=e.heading,a="h".concat(n);return Object(r.createElement)(a,null,Object(r.createElement)(c.PlainText,{className:u()("wc-block-component-title",t),value:i,onChange:o}))}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(35),c=n(34),o=n(0),u=n(38),i=function(e){var t=e.namespace,n=e.resourceName,i=e.resourceValues,a=void 0===i?[]:i,l=e.query,s=void 0===l?{}:l,b=e.shouldSelect,d=void 0===b||b;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var f=Object(o.useRef)({results:[],isLoading:!0}),p=Object(u.a)(s),g=Object(u.a)(a),h=Object(c.useSelect)((function(e){if(!d)return null;var c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,p,g];return{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,g,p,d]);return null!==h&&(f.current=h),f.current}},137:function(e,t,n){var r=n(138);"string"==typeof r&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(30)(r,c);r.locals&&(e.exports=r.locals)},138:function(e,t,n){},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(18),c=r.a.reduce((function(e,t){var n,r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;return r.id&&e.push(r),e}),[]),o=function(e){if(e)return c.find((function(t){return t.id===e}))},u=function(e){if(e)return c.find((function(t){return t.taxonomy===e}))}},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(5),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=e.filter((function(e){return e.attribute===n.taxonomy})),u=o.length?o[0]:null;if(u&&u.slug&&Array.isArray(u.slug)&&u.slug.includes(c)){var i=u.slug.filter((function(e){return e!==c})),a=e.filter((function(e){return e.attribute!==n.taxonomy}));i.length>0&&(u.slug=i.sort(),a.push(u)),t(Object(r.sortBy)(a,"attribute"))}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in",u=e.filter((function(e){return e.attribute!==n.taxonomy}));0===c.length?t(u):(u.push({attribute:n.taxonomy,operator:o,slug:Object(r.map)(c,"slug").sort()}),t(Object(r.sortBy)(u,"attribute")))}},18:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"r",(function(){return o})),n.d(t,"k",(function(){return u})),n.d(t,"m",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"l",(function(){return l})),n.d(t,"o",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"n",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"p",(function(){return p})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return m})),n.d(t,"q",(function(){return v})),n.d(t,"a",(function(){return w})),n.d(t,"s",(function(){return y}));var r=n(4),c=Object(r.getSetting)("enableReviewRating",!0),o=Object(r.getSetting)("showAvatars",!0),u=Object(r.getSetting)("max_columns",6),i=Object(r.getSetting)("min_columns",1),a=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),s=Object(r.getSetting)("min_rows",1),b=Object(r.getSetting)("default_rows",2),d=Object(r.getSetting)("min_height",500),f=Object(r.getSetting)("default_height",500),p=Object(r.getSetting)("placeholderImgSrc",""),g=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),h=Object(r.getSetting)("limitTags"),O=Object(r.getSetting)("hasProducts",!0),j=Object(r.getSetting)("hasTags",!0),m=Object(r.getSetting)("homeUrl",""),v=Object(r.getSetting)("productCount",0),w=Object(r.getSetting)("attributes",[]),y=Object(r.getSetting)("wcBlocksAssetUrl","")},20:function(e,t){!function(){e.exports=this.moment}()},21:function(e,t){!function(){e.exports=this.wp.compose}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},339:function(e,t,n){"use strict";var r=n(0),c=n(3);t.a=function(){return Object(r.createElement)(c.Icon,{icon:Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})))})}},34:function(e,t){!function(){e.exports=this.wp.data}()},35:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},37:function(e,t){!function(){e.exports=this.wp.keycodes}()},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),c=n(44),o=n.n(c),u=function(e){var t=Object(r.useRef)();return o()(e,t.current)||(t.current=e),t.current}},4:function(e,t){!function(){e.exports=this.wc.wcSettings}()},40:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},43:function(e,t){!function(){e.exports=this.wp.blockEditor}()},44:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},48:function(e,t,n){"use strict";var r=n(11),c=n.n(r),o=n(13),u=n.n(o),i=n(17),a=n.n(i),l=n(14),s=n.n(l),b=n(15),d=n.n(b),f=n(12),p=n.n(f),g=n(16),h=n.n(g),O=n(0),j=n(5),m=n(6),v=n.n(m),w=n(3),y=n(21),_=(n(98),function(e){function t(){var e;return u()(this,t),(e=s()(this,d()(t).apply(this,arguments))).onClick=e.onClick.bind(p()(e)),e}return h()(t,e),a()(t,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.label,o=n.checked,u=n.instanceId,i=n.className,a=n.help,l=n.options,s=n.value,b="inspector-toggle-button-control-".concat(u);return a&&(e=Object(j.isFunction)(a)?a(o):a),Object(O.createElement)(w.BaseControl,{id:b,help:e,className:v()("components-toggle-button-control",i)},Object(O.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(O.createElement)(w.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,n){var o={};return s===e.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isDefault=!0,o["aria-pressed"]=!1),Object(O.createElement)(w.Button,c()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},o),e.label)}))))}}]),t}(O.Component));t.a=Object(y.withInstanceId)(_)},5:function(e,t){!function(){e.exports=this.lodash}()},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=Object(r.createContext)("page"),o=function(){return Object(r.useContext)(c)};c.Provider},53:function(e,t){!function(){e.exports=this.ReactDOM}()},56:function(e,t){!function(){e.exports=this.wp.viewport}()},61:function(e,t){!function(){e.exports=this.wp.hooks}()},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(7),c=n.n(r),o=n(62),u=n.n(o),i=n(85),a=n.n(i),l=n(25),s=n.n(l),b=n(0),d=n(91),f=n(109),p=n(50),g=n(348),h=n(5),O=n(38);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.queryAttribute,n=e.queryPrices,r=e.queryState,c=Object(p.a)();c="".concat(c,"-collection-data");var o=Object(d.a)(c),i=s()(o,1)[0],l=Object(d.b)("calculate_attribute_counts",[],c),j=s()(l,2),v=j[0],w=j[1],y=Object(d.b)("calculate_price_range",null,c),_=s()(y,2),k=_[0],E=_[1],S=Object(O.a)(t||{}),x=Object(O.a)(n);Object(b.useEffect)((function(){"object"===a()(S)&&Object.keys(S).length&&(v.find((function(e){return e.taxonomy===S.taxonomy}))||w([].concat(u()(v),[S])))}),[S,v,w]),Object(b.useEffect)((function(){k!==x&&void 0!==x&&E(x)}),[x,E,k]);var C=Object(b.useState)(!1),P=s()(C,2),T=P[0],L=P[1],N=Object(g.a)(T,200),H=s()(N,1)[0];T||L(!0);var M=Object(b.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(h.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(i)}),[i]);return Object(f.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:m({},r,{page:void 0,per_page:void 0,orderby:void 0,order:void 0},M),shouldSelect:H})}},633:function(e,t,n){var r=n(634);"string"==typeof r&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(30)(r,c);r.locals&&(e.exports=r.locals)},634:function(e,t,n){},65:function(e,t){!function(){e.exports=this.wp.date}()},653:function(e,t,n){"use strict";n.r(t);var r=n(11),c=n.n(r),o=n(0),u=n(1),i=n(23),a=n(26),l=n.n(a),s=n(6),b=n.n(s),d=n(25),f=n.n(d),p=n(43),g=n(3),h=n(32),O=n(5),j=n(18),m=n(4),v=n(84),w=n(102),y=n(7),_=n.n(y),k=n(91),E=n(109),S=n(630),x=n(62),C=n.n(x),P=(n(2),n(637),function(e){var t=e.className,n=e.onChange,r=void 0===n?function(){}:n,c=e.options,i=void 0===c?[]:c,a=e.checked,l=void 0===a?[]:a,s=e.isLoading,d=void 0!==s&&s,p=e.isDisabled,g=void 0!==p&&p,h=e.limit,O=void 0===h?10:h,j=Object(o.useState)(!1),m=f()(j,2),v=m[0],w=m[1],y=Object(o.useMemo)((function(){return C()(Array(5)).map((function(e,t){return Object(o.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})}))}),[]),_=Object(o.useMemo)((function(){var e=i.length-O;return!v&&Object(o.createElement)("li",{key:"show-more",className:"show-more"},Object(o.createElement)("button",{onClick:function(){w(!0)},"aria-expanded":!1,"aria-label":Object(u.sprintf)(Object(u._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(u.sprintf)(Object(u._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))}),[i,O,v]),k=Object(o.useMemo)((function(){return v&&Object(o.createElement)("li",{key:"show-less",className:"show-less"},Object(o.createElement)("button",{onClick:function(){w(!1)},"aria-expanded":!0,"aria-label":Object(u.__)("Show less options","woo-gutenberg-products-block")},Object(u.__)("Show less","woo-gutenberg-products-block")))}),[v]),E=Object(o.useMemo)((function(){var e=i.length>O+5;return Object(o.createElement)(o.Fragment,null,i.map((function(t,n){return Object(o.createElement)(o.Fragment,{key:t.key},Object(o.createElement)("li",e&&!v&&n>=O&&{hidden:!0},Object(o.createElement)("input",{type:"checkbox",id:t.key,value:t.key,onChange:r,checked:l.includes(t.key),disabled:g}),Object(o.createElement)("label",{htmlFor:t.key},t.label)),e&&n===O-1&&_)})),e&&k)}),[i,l,v,O,k,_,g]),S=b()("wc-block-checkbox-list",{"is-loading":d},t);return Object(o.createElement)("ul",{className:S},d?y:E)}),T=n(40),L=(n(635),n(139)),N=n(140);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){_()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(o.useCallback)((function(e,n){return Object(o.createElement)(o.Fragment,null,Object(T.decodeEntities)(e),t.showCounts&&null!==n&&Object(o.createElement)("span",{className:"wc-block-attribute-filter-list-count"},n))}),[t]),u=t.isPreview&&!t.attributeId?{id:0,name:"preview",taxonomy:"preview",label:"Preview"}:Object(L.a)(t.attributeId),i=Object(o.useState)(t.isPreview&&!t.attributeId?[{key:"preview-1",label:c("Blue",3)},{key:"preview-2",label:c("Green",3)},{key:"preview-3",label:c("Red",2)}]:[]),a=f()(i,2),l=a[0],s=a[1],b=Object(k.a)(),d=f()(b,1)[0],p=Object(k.b)("attributes",[]),g=f()(p,2),h=g[0],O=g[1],j=Object(o.useMemo)((function(){return h.filter((function(e){return e.attribute===u.taxonomy})).flatMap((function(e){return e.slug}))}),[h,u]),m=Object(E.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[u.id],shouldSelect:t.attributeId>0}),v=m.results,w=m.isLoading,y="dropdown"!==t.displayStyle&&"and"===t.queryType,_=Object(S.a)({queryAttribute:{taxonomy:u.taxonomy,queryType:t.queryType},queryState:M({},d,{attributes:y?d.attributes:null})}),x=_.results,C=_.isLoading,H=Object(o.useCallback)((function(e){return x.attribute_counts?x.attribute_counts.find((function(t){return t.term===e})):null}),[x]);Object(o.useEffect)((function(){if(!w&&!C){var e=[];v.forEach((function(t){var n=H(t.id),r=j.includes(t.slug),o=n?n.count:null;(n||r)&&e.push({key:t.slug,label:c(t.name,o)})})),s(e)}}),[v,w,C,H,c,j]);var V=Object(o.useCallback)((function(e){return v.reduce((function(t,n){return e.includes(n.slug)&&t.push(n),t}),[])}),[v]),A=Object(o.useCallback)((function(e){var n=e.target.checked,r=e.target.value,c=j.filter((function(e){return e!==r}));n&&(c.push(r),c.sort());var o=V(c);Object(N.b)(h,O,u,o,"or"===t.queryType?"in":"and")}),[v,j,h,O,u,t]);if(0===l.length&&!w)return null;var B="h".concat(t.headingLevel);return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(B,null,t.heading),Object(o.createElement)("div",{className:"wc-block-attribute-filter"},Object(o.createElement)(P,{className:"wc-block-attribute-filter-list",options:l,checked:j,onChange:A,isLoading:!t.isPreview&&w,isDisabled:!t.isPreview&&C})))},A=(n(633),n(339)),B=n(48),D=Object(g.withSpokenMessages)((function(e){var t=e.attributes,n=e.setAttributes,r=e.debouncedSpeak,c=t.attributeId,i=t.className,a=t.heading,s=t.headingLevel,b=t.isPreview,d=t.queryType,y=t.showCounts,_=Object(o.useState)(!c&&!b),k=f()(_,2),E=k[0],S=k[1],x=Object(o.useCallback)((function(){S(!1),r(Object(u.__)("Showing attribute filter block preview.","woo-gutenberg-products-block"))}),[]),C=Object(o.useCallback)((function(e){if(e&&e.length){var t=e[0].id,r=Object(O.find)(j.a,["attribute_id",t.toString()]);if(r&&c!==t){var o=r.attribute_label;n({attributeId:t,heading:Object(u.sprintf)(Object(u.__)("Filter by %s","woo-gutenberg-products-block"),o)})}}}),[c]),P=function(){var e={clear:Object(u.__)("Clear selected attribute","woo-gutenberg-products-block"),list:Object(u.__)("Product Attributes","woo-gutenberg-products-block"),noItems:Object(u.__)("Your store doesn't have any product attributes.","woo-gutenberg-products-block"),search:Object(u.__)("Search for a product attribute:","woo-gutenberg-products-block"),selected:function(e){return Object(u.sprintf)(Object(u._n)("%d attribute selected","%d attributes selected",e,"woo-gutenberg-products-block"),e)},updated:Object(u.__)("Product attribute search results updated.","woo-gutenberg-products-block")},t=Object(O.sortBy)(Object(O.toArray)(Object(O.mapValues)(j.a,(function(e){return{id:parseInt(e.attribute_id,10),name:e.attribute_label}}))),"name");return Object(o.createElement)(h.a,{className:"woocommerce-product-attributes",list:t,selected:t.filter((function(e){return e.id===c})),onChange:C,messages:e,isSingle:!0})};return 0===Object.keys(j.a).length?Object(o.createElement)(g.Placeholder,{className:"wc-block-attribute-filter",icon:Object(o.createElement)(l.a,{icon:"menus"}),label:Object(u.__)("Filter Products by Attribute","woo-gutenberg-products-block"),instructions:Object(u.__)("Display a list of filters based on a chosen attribute.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(u.__)("Attributes are needed for filtering your products. You haven't created any attributes yet.","woo-gutenberg-products-block")),Object(o.createElement)(g.Button,{className:"wc-block-attribute-filter__add_attribute_button",isDefault:!0,isLarge:!0,href:Object(m.getAdminLink)("edit.php?post_type=product&page=product_attributes")},Object(u.__)("Add new attribute","woo-gutenberg-products-block")+" ",Object(o.createElement)(A.a,null)),Object(o.createElement)(g.Button,{className:"wc-block-attribute-filter__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-product-taxonomies/"},Object(u.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p.BlockControls,null,Object(o.createElement)(g.Toolbar,{controls:[{icon:"edit",title:Object(u.__)("Edit","woo-gutenberg-products-block"),onClick:function(){return S(!E)},isActive:E}]})),Object(o.createElement)(p.InspectorControls,{key:"inspector"},Object(o.createElement)(g.PanelBody,{title:Object(u.__)("Content","woo-gutenberg-products-block")},Object(o.createElement)(g.ToggleControl,{label:Object(u.__)("Product count","woo-gutenberg-products-block"),help:y?Object(u.__)("Product counts are visible.","woo-gutenberg-products-block"):Object(u.__)("Product counts are hidden.","woo-gutenberg-products-block"),checked:y,onChange:function(){return n({showCounts:!y})}}),Object(o.createElement)("p",null,Object(u.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(v.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:s,onChange:function(e){return n({headingLevel:e})}})),Object(o.createElement)(g.PanelBody,{title:Object(u.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(B.a,{label:Object(u.__)("Query Type","woo-gutenberg-products-block"),help:"and"===d?Object(u.__)("Products that have all of the selected attributes will be shown.","woo-gutenberg-products-block"):Object(u.__)("Products that have any of the selected attributes will be shown.","woo-gutenberg-products-block"),value:d,options:[{label:Object(u.__)("And","woo-gutenberg-products-block"),value:"and"},{label:Object(u.__)("Or","woo-gutenberg-products-block"),value:"or"}],onChange:function(e){return n({queryType:e})}})),Object(o.createElement)(g.PanelBody,{title:Object(u.__)("Filter Products by Attribute","woo-gutenberg-products-block"),initialOpen:!1},P())),E?Object(o.createElement)(g.Placeholder,{className:"wc-block-attribute-filter",icon:Object(o.createElement)(l.a,{icon:"menus"}),label:Object(u.__)("Filter Products by Attribute","woo-gutenberg-products-block"),instructions:Object(u.__)("Display a list of filters based on a chosen attribute.","woo-gutenberg-products-block")},Object(o.createElement)("div",{className:"wc-block-attribute-filter__selection"},P(),Object(o.createElement)(g.Button,{isDefault:!0,onClick:x},Object(u.__)("Done","woo-gutenberg-products-block")))):Object(o.createElement)("div",{className:i},Object(o.createElement)(w.a,{headingLevel:s,heading:a,onChange:function(e){return n({heading:e})}}),Object(o.createElement)(g.Disabled,null,Object(o.createElement)(V,{attributes:t,isEditor:!0}))))}));Object(i.registerBlockType)("woocommerce/attribute-filter",{title:Object(u.__)("Filter Products by Attribute","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(l.a,{icon:"menus"}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(u.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(u.__)("Display a list of filters based on a chosen product attribute.","woo-gutenberg-products-block"),supports:{},example:{attributes:{isPreview:!0}},attributes:{attributeId:{type:"number",default:0},showCounts:{type:"boolean",default:!0},queryType:{type:"string",default:"or"},heading:{type:"string",default:Object(u.__)("Filter by attribute","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3},isPreview:{type:"boolean",default:!1}},edit:D,save:function(e){var t=e.attributes,n=t.className,r=t.showCounts,u=t.queryType,i={"data-attribute-id":t.attributeId,"data-show-counts":r,"data-query-type":u,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(o.createElement)("div",c()({className:b()("is-loading",n)},i),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-attribute-filter__placeholder"}))}})},68:function(e,t){!function(){e.exports=this.wp.dom}()},72:function(e,t){},75:function(e,t){},76:function(e,t){},77:function(e,t){},78:function(e,t){},8:function(e,t){!function(){e.exports=this.wp.apiFetch}()},84:function(e,t,n){"use strict";var r=n(13),c=n.n(r),o=n(17),u=n.n(o),i=n(14),a=n.n(i),l=n(15),s=n.n(l),b=n(16),d=n.n(b),f=n(0),p=n(5),g=n(1),h=n(3);function O(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(f.createElement)(h.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(f.createElement)(h.Path,{d:n[t]})):null}var j=function(e){function t(){return c()(this,t),a()(this,s()(t).apply(this,arguments))}return d()(t,e),u()(t,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(f.createElement)(O,{level:e}),title:Object(g.sprintf)(Object(g.__)("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,o=t.maxLevel,u=t.selectedLevel,i=t.onChange;return Object(f.createElement)(h.Toolbar,{isCollapsed:r,icon:Object(f.createElement)(O,{level:u}),controls:Object(p.range)(c,o).map((function(t){return e.createLevelControl(t,u,i)}))})}}]),t}(f.Component);t.a=j},9:function(e,t){!function(){e.exports=this.wp.url}()},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(25),c=n.n(r),o=n(35),u=n(34),i=n(0),a=n(50),l=n(5),s=n(38),b=function(e){var t=Object(a.a)();e=e||t;var n=Object(u.useSelect)((function(t){return t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(u.useDispatch)(o.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(i.useCallback)((function(t){r(e,t)}),[e])]},d=function(e,t,n){var r=Object(a.a)();n=n||r;var c=Object(u.useSelect)((function(r){return r(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),l=Object(u.useDispatch)(o.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(i.useCallback)((function(t){l(n,e,t)}),[n,e])]},f=function(e,t){var n=Object(a.a)(),r=b(t=t||n),o=c()(r,2),u=o[0],d=o[1],f=Object(s.a)(e),p=Object(i.useRef)(!1);return Object(i.useEffect)((function(){d(Object(l.assign)({},u,f)),p.current=!0}),[f]),p.current?[u,d]:[e,d]}}});