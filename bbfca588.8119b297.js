(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(161)),i={id:"services",title:"Advanced: Granular Dependency Injection"},c={unversionedId:"sections/services",id:"sections/services",isDocsHomePage:!1,title:"Advanced: Granular Dependency Injection",description:"Values such as @Prop flow through Sections before being rendered on screen. The Sections API sits between your data source and the UI Component to efficiently calculate the changesets you need to render your components. For better performance we should only do work at the layer where it is required.",source:"@site/docs/sections/services.md",slug:"/sections/services",permalink:"/docs/sections/services",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/sections/services.md",version:"current",sidebar:"mainSidebar",previous:{title:"Advanced: Prefetch and pagination",permalink:"/docs/sections/working-ranges"},next:{title:"Advanced: Mixing with Android Views",permalink:"/docs/sections/view-support"}},s=[{value:"Usage",id:"usage",children:[{value:"Creation",id:"creation",children:[]},{value:"Lifecycle of Services",id:"lifecycle-of-services",children:[]}]},{value:"Use of Services in context",id:"use-of-services-in-context",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Values such as ",Object(o.b)("inlineCode",{parentName:"p"},"@Prop")," flow through Sections before being rendered on screen. The Sections API sits between your data source and the UI Component to efficiently calculate the changesets you need to render your components. For better performance we should only do work at the layer where it is required."),Object(o.b)("p",null,"Thus, the data should ideally be fetched only in the Sections that use it. You need for those ",Object(o.b)("strong",{parentName:"p"},"data fetchers to be available throughout your Sections hierarchy")," without having to cumbersomely pass them through each of the layers, and even through ",Object(o.b)("inlineCode",{parentName:"p"},"GroupSection")," that don't use it directly."),Object(o.b)("p",null,"This is where Services come in."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Services are what sections use to control your data source imperatively. It is through the service APIs where the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/sections/SectionLifecycle.html"}),"SectionLifecycle")," can be made known outside of the hierarchy. This allows you to know when you should start fetching your data."),Object(o.b)("p",null,"Since a service is tied to a particular Section, this means it has access to all the ",Object(o.b)("inlineCode",{parentName:"p"},"@Prop")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@State")," and interacts with them. This also means that the service is able to respond to events such as ",Object(o.b)("inlineCode",{parentName:"p"},"@OnViewportChanged")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@OnRefresh"),", and call for a state update when new data arrives to allow the data to flow down the hierarchy."),Object(o.b)("h3",{id:"creation"},"Creation"),Object(o.b)("p",null,"Services are persisted across state updates and for however long the sections remain in the hierarchy. The first and only instance of a ",Object(o.b)("inlineCode",{parentName:"p"},"Service")," should be created in the lifecycle ",Object(o.b)("inlineCode",{parentName:"p"},"@OnCreateService")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@GroupSectionSpec\npublic ServiceSectionSpec {\n  ...\n  @OnCreateService\n  static DataLoader onCreateServices(\n    SectionContext c,\n    @Prop Configuration config) {\n      return DataLoaderFactory.createLoader(config);\n  }\n}\n")),Object(o.b)("h3",{id:"lifecycle-of-services"},"Lifecycle of Services"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@OnBindService")," is a callback that allows you to define how your service should interact with its section. This bridge can be used to pass the new set of data to the section whenever a fetch is completed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@OnBindService\nstatic void onBindService(\n  SectionContext c,\n  DataLoader service) {\n    service.registerEventLoader(ServiceSection.dataLoaded(c));\n}\n\n@OnEvent(YourData.class)\nstatic void dataLoaded(\n  SectionContext c,\n  @FromEvent Data data) {\n    ServiceSection.updateData(c, data);\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@OnUnbindService")," provides the callback for you to clean up and undo anything you have done in ",Object(o.b)("inlineCode",{parentName:"p"},"@OnBindService"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@OnUnbindService\nstatic void onUnbindService(\n  SectionContext c,\n  DataLoader service) {\n    service.unregisterEventLoader();\n}\n")),Object(o.b)("p",null,"Both functions are called every time the section tree is updated by events such as a state update. These function receive the service created by ",Object(o.b)("inlineCode",{parentName:"p"},"@OnCreateService")," as the second function parameter."),Object(o.b)("h2",{id:"use-of-services-in-context"},"Use of Services in context"),Object(o.b)("p",null,"As aforementioned, services are able to respond to Litho and Sections events such as ",Object(o.b)("inlineCode",{parentName:"p"},"@OnRefresh"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"})," @OnRefresh\n static void onRefresh(\n   SectionContext c,\n   DataLoader service) {\n     service.refreshData();\n }\n")),Object(o.b)("p",null,"or ",Object(o.b)("inlineCode",{parentName:"p"},"@OnViewportChanged"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"})," @OnViewportChanged\n static void onViewportChanged(\n   SectionContext c,\n   int firstVisibleIndex,\n   int lastVisibleIndex,\n   int totalCount,\n   int firstFullyVisibleIndex,\n   int lastFullyVisibleIndex,\n   DataLoader service) {\n     service.makeTailFetch();\n }\n")))}d.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);