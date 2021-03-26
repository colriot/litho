(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var o=t(2),r=t(6),a=(t(0),t(161)),i={id:"using-components",title:"Using Components"},c={unversionedId:"using-components",id:"using-components",isDocsHomePage:!1,title:"Using Components",description:"Generated component classes provide a simple builder with the props you defined in your component spec. In order to use the generated component in your UI, you'll need a LithoView, which is an Android ViewGroup that is able to render components.",source:"@site/docs/using-components.md",slug:"/using-components",permalink:"/docs/using-components",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/using-components.md",version:"current"},p=[],s={rightToc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Generated component classes provide a simple builder with the props you defined in your component ",Object(a.b)("em",{parentName:"p"},"spec"),". In order to use the generated component in your UI, you'll need a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/LithoView.html"}),"LithoView"),", which is an Android ",Object(a.b)("inlineCode",{parentName:"p"},"ViewGroup")," that is able to render components."),Object(a.b)("p",null,"You can assign a component to be rendered by a ",Object(a.b)("inlineCode",{parentName:"p"},"LithoView")," as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'final Component component = MyComponent.create(c)\n    .title("My title")\n    .imageUri(Uri.parse("http://example.com/myimage"))\n    .build();\nLithoView view = LithoView.create(c, component);\n')),Object(a.b)("p",null,"In this example, ",Object(a.b)("inlineCode",{parentName:"p"},"MyComponent")," will be laid out by the hosting ",Object(a.b)("inlineCode",{parentName:"p"},"LithoView"),", which you can use in your application as you would normally use an Android View. See the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"tutorial"}),"tutorial")," for an example on how to use it in an Activity."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"LithoView")," from this example, if directly used in your view hierarchy as is, will perform layout synchronously on the main thread."))),Object(a.b)("p",null,"For more information about performing layout off the main thread, see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"asynchronous-layout"}),"Async Layout"),"."))}l.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=o,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);