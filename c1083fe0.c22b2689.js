(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(161)),c={id:"cached-values",title:"Cached Values"},i={unversionedId:"cached-values",id:"cached-values",isDocsHomePage:!1,title:"Cached Values",description:"The purpose of the Cached Values API is to provide caching within Spec classes, rather than have to repeatedly make an expensive calculation or to use lazy state updates for this purpose.",source:"@site/docs/cached-values.md",slug:"/cached-values",permalink:"/docs/cached-values",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/cached-values.md",version:"current",sidebar:"mainSidebar",previous:{title:"Common Props",permalink:"/docs/common-props"},next:{title:"Touch Handling",permalink:"/docs/events-touch-handling"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The purpose of the Cached Values API is to provide caching within ",Object(o.b)("inlineCode",{parentName:"p"},"Spec")," classes, rather than have to repeatedly make an expensive calculation or to use lazy state updates for this purpose."),Object(o.b)("p",null,"The API is made up of two annotations: ",Object(o.b)("inlineCode",{parentName:"p"},"@CachedValue")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@OnCalculateCachedValue"),". ",Object(o.b)("inlineCode",{parentName:"p"},"@CachedValue")," is used in the same way as ",Object(o.b)("inlineCode",{parentName:"p"},"@Prop"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@State")," etc - it is used to annotate a parameter to a ",Object(o.b)("inlineCode",{parentName:"p"},"Spec")," method, which the generated code will use to pass the ",Object(o.b)("inlineCode",{parentName:"p"},"Spec")," method the correct cached value. In particular, the generated code will check to see if the value is already cached, and if not it will calculate the value and cache it."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@OnCalculateCachedValue")," is used to calculate the cached value. It has a method ",Object(o.b)("inlineCode",{parentName:"p"},"name()")," which is used to identify which cached value the method is calculating. Cached values can only depend upon props and state - any other parameters are not allowed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'@OnCreateLayout\nstatic Component onCreateLayout(\n    ComponentContext c,\n    @Prop Object prop,\n    @CachedValue int expensiveValue) {\n  return getComponent(prop, expensiveValue);\n}\n\n@OnCalculateCachedValue(name = "expensiveValue")\nstatic int onCalculateExpensiveValue(\n    @Prop Object prop,\n    @State Object state) {\n  return doExpensiveCalculation(prop, state);\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@OnCalculateCachedValue")," is called whenever the dependent props or state change - i.e. an equality check on them fails. "),Object(o.b)("p",null,"Cached values are stored on the ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree"),", so they will live for the lifetime of the ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentTree"),"."))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),h=a,b=s["".concat(c,".").concat(h)]||s[h]||d[h]||o;return n?r.a.createElement(b,i(i({ref:t},p),{},{components:n})):r.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);