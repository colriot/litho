(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(a,".").concat(h)]||u[h]||d[h]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";var r=n(0),i=n(20);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(162),i=n(164);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+p:p}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},164:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(161)),a=n(163),c={id:"recycling",title:"Recycling"},s={unversionedId:"recycling",id:"recycling",isDocsHomePage:!1,title:"Recycling",description:"Device screens typically refresh at a rate of 60 frames per second. To provide smooth performances, an app needs to be able to render changes to our UI continuously every 16ms. Failing to respect this time constraint leads to dropped frames and poor user experience.",source:"@site/docs/recycling.mdx",slug:"/recycling",permalink:"/docs/recycling",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/recycling.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"View Flattening",permalink:"/docs/view-flattening"},next:{title:"Mount Extensions",permalink:"/docs/mount-extensions"}},l=[{value:"Incremental recycling with Litho",id:"incremental-recycling-with-litho",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Device screens typically refresh at a rate of 60 frames per second. To provide smooth performances, an app needs to be able to render changes to our UI continuously every 16ms. Failing to respect this time constraint leads to dropped frames and poor user experience.\nAs UIs become increasingly sophisticated, it gets harder to complete all the rendering work within this time frame. This proves to be especially challenging with dynamic scrolling surfaces, as new pieces of UI are constantly being introduced on screen.",Object(o.b)("br",{parentName:"p"}),"\n","Android solves this problem this with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/layout/recyclerview.html"}),"RecyclerView"),", a dynamic UI container that is able to display elements from large data sets by creating only enough views to fill the screen and then recycling and reusing them as the UI scrolls."),Object(o.b)("video",{loop:"true",autoplay:"true",class:"video"},Object(o.b)("source",{type:"video/mp4",src:Object(a.a)("/videos/recycler_view.mp4")}),Object(o.b)("p",null,"Your browser does not support the video element.")),Object(o.b)("p",null,"RecyclerView supports the idea of displaying heterogeneous content. To do so, it keeps views in different pools depending on their type.\nWhile this concept works pretty well in simple cases, it can prove to be problematic for UIs with many different view types.\nIn a scenario with many view types, there is a bigger chance that the view coming in the viewport following a scrolling event is a view that the RecyclerView is displaying for the first time.\nIf that happens, RecyclerView has to allocate a new view. The allocation will happen in the same 16ms slot in which RecyclerView also has to bind, measure and layout the newly visible view."),Object(o.b)("video",{loop:"true",autoplay:"true",class:"video"},Object(o.b)("source",{type:"video/mp4",src:Object(a.a)("/videos/multiple_view_types.mp4")}),Object(o.b)("p",null,"Your browser does not support the video element.")),Object(o.b)("h2",{id:"incremental-recycling-with-litho"},"Incremental recycling with Litho"),Object(o.b)("p",null,"We wanted to have a more scalable and efficient recycling system for Litho and at the same time we wanted to remove the complexity of view types from our API.",Object(o.b)("br",{parentName:"p"}),"\n","In Litho the representation of a layout is completely disjointed from the Views and Drawables that will be used to render that layout on screen. This means that by the time we need to put a new View of the RecyclerView on screen, we already know what the content of that item will be and exactly its position relative to the rest of the UI.",Object(o.b)("br",{parentName:"p"}),"\n","This allows Litho to completely move away from the concept of View types. Rather than re-using the entire View that represents an item in the RecyclerView we can incrementally use building blocks such at ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Image")," while the RecyclerView scrolls.",Object(o.b)("br",{parentName:"p"}),"\n","This is not possible with traditional Android Views since the layout computation operates on the complete view tree and by the time we know the positions of all Views in a row everything has already been instatiated."),Object(o.b)("video",{loop:"true",autoplay:"true",class:"video"},Object(o.b)("source",{type:"video/mp4",src:Object(a.a)("/videos/incremental_recycling.mp4")}),Object(o.b)("p",null,"Your browser does not support the video element.")),Object(o.b)("p",null,"Being able to recycle individual primitive items as ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," increases greatly the memory efficiency of an App as now you can recycle any piece of text in your list for any other piece of text.",Object(o.b)("br",{parentName:"p"}),"\n","On top of that, since we compute the layout ahead of time, we know exactly at which point a new items needs to become visible, this means that rather than binding and drawing a big view tree in one frame, we can use each frame to introduce a much lower number of primitive items on screen."))}u.isMDXComponent=!0}}]);