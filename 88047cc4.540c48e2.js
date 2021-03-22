(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),o=(n(0),n(161)),r=n(163),c={id:"custom-layout",title:"Custom Layout"},l={unversionedId:"custom-layout",id:"custom-layout",isDocsHomePage:!1,title:"Custom Layout",description:"Litho relies on Yoga, a powerful layout engine that is able to create very complex UIs, for layout calculations.  However, there are few exceptions where Yoga is not enough and you may need to implement your own measuring and layout.",source:"@site/docs/custom-layout.md",slug:"/custom-layout",permalink:"/docs/custom-layout",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/custom-layout.md",version:"current",sidebar:"mainSidebar",previous:{title:"Recycler",permalink:"/docs/recycler-component"},next:{title:"Error Boundaries",permalink:"/docs/error-boundaries"}},p=[{value:"Use cases",id:"use-cases",children:[]},{value:"Size constraints",id:"size-constraints",children:[]},{value:"Measuring a component",id:"measuring-a-component",children:[]},{value:"SizeSpec information during layout",id:"sizespec-information-during-layout",children:[]},{value:"Optimizing OnCreateLayoutWithSizeSpec",id:"optimizing-oncreatelayoutwithsizespec",children:[]}],s={rightToc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Litho relies on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://yogalayout.com/docs/"}),"Yoga"),", a powerful layout engine that is able to create very complex UIs, for layout calculations.  However, there are few exceptions where Yoga is not enough and you may need to implement your own measuring and layout. "),Object(o.b)("p",null,"Litho provides a custom layout API for accessing size information while the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/ComponentTree.html"}),Object(o.b)("inlineCode",{parentName:"a"},"ComponentTree"))," is being created and measured, as well as the possibility to measure a component in isolation."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"IMPORTANT")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"}," This API comes with a ",Object(o.b)("strong",{parentName:"p"},"non-negligible")," performance overhead. Therefore, it is advisable to only use it when it is absolutely necessary."))),Object(o.b)("h2",{id:"use-cases"},"Use cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"A component layout tree depends on its own and/or children's size.")," For example, perhaps a component layout should use a child only if it fits within its size constraints. If the child doesn't fit, the layout should instead use another child as a fallback.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Children of a container have to be absolutely positioned manually based on their/parent size.")," Yoga can absolutely position children in a parent. However, the position itself might depend on the child sizes after being measured using the parent size constraints. Margins or paddings need to be manually taken into account if required."))),Object(o.b)("h2",{id:"size-constraints"},"Size constraints"),Object(o.b)("p",null,"Before diving into the API, you should be familiar with how the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/view/View.html#onMeasure(int,%20int)"}),Object(o.b)("inlineCode",{parentName:"a"},"onMeasure"))," function works in a regular Android ",Object(o.b)("inlineCode",{parentName:"p"},"View")," and what a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/view/View.MeasureSpec.html"}),Object(o.b)("inlineCode",{parentName:"a"},"MeasureSpec"))," is, since Litho uses an equivalent concept called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/SizeSpec.html"}),Object(o.b)("inlineCode",{parentName:"a"},"SizeSpec")),"."),Object(o.b)("p",null,"Similar to the Android ",Object(o.b)("inlineCode",{parentName:"p"},"MeasureSpec")," equivalent, Litho's ",Object(o.b)("inlineCode",{parentName:"p"},"SizeSpec")," is composed of a size and a mode. The possible modes, same as for ",Object(o.b)("inlineCode",{parentName:"p"},"MeasureSpec"),", are: ",Object(o.b)("inlineCode",{parentName:"p"},"UNSPECIFIED"),", ",Object(o.b)("inlineCode",{parentName:"p"},"EXACTLY")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AT_MOST"),"."),Object(o.b)("h2",{id:"measuring-a-component"},"Measuring a component"),Object(o.b)("p",null,"A component can be measured in isolation for a given ",Object(o.b)("inlineCode",{parentName:"p"},"SizeSpec"),". A ",Object(o.b)("inlineCode",{parentName:"p"},"Size")," object, passed as argument, will be populated with the resulting size."),Object(o.b)("p",null,"In the following example, a ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," component is measured with unspecified ",Object(o.b)("inlineCode",{parentName:"p"},"SizeSpec")," implying a single line of text indefinitely long."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"final Component<Text> textComponent = Text.create(c)\n    .textSizeSp(16)\n    .text(\u201cSome text to measure.\u201d)\n    .build();\n\nfinal Size outputSize = new Size();\ntextComponent.measure(\n    c, \n    SizeSpec.makeSizeSpec(0, UNSPECIFIED),\n    SizeSpec.makeSizeSpec(0, UNSPECIFIED),\n    outputSize);\n\nfinal int textComponentWidth = outputSize.width;\nfinal int textComponentHeight = outputSize.height;\n")),Object(o.b)("h2",{id:"sizespec-information-during-layout"},"SizeSpec information during layout"),Object(o.b)("p",null,"During layout creation, the API can provide information about the ",Object(o.b)("inlineCode",{parentName:"p"},"SizeSpecs")," a component is going to be measured with. To access this information, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/annotations/OnCreateLayoutWithSizeSpec.html"}),Object(o.b)("inlineCode",{parentName:"a"},"@OnCreateLayoutWithSizeSpec"))," annotation needs to be used instead of ",Object(o.b)("inlineCode",{parentName:"p"},"@OnCreateLayout"),". The arguments of the annotated method, besides the standard ComponentContext, are two more integers representing the width spec and the height spec."),Object(o.b)("p",null,"In the following example, a ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," component is measured to check if the given text fits in the available space. An ",Object(o.b)("inlineCode",{parentName:"p"},"Image")," component is otherwise used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\nclass MyComponentSpec {\n\n  @OnCreateLayoutWithSizeSpec\n  static Component onCreateLayoutWithSizeSpec(ComponentContext c, int widthSpec, int heightSpec) {\n\n    final Component textComponent =\n        Text.create(c).textSizeSp(16).text("Some text to measure.").build();\n\n    // UNSPECIFIED sizeSpecs will measure the text as being one line only,\n    // having unlimited width.\n    final Size textOutputSize = new Size();\n    textComponent.measure(\n        c,\n        SizeSpec.makeSizeSpec(0, UNSPECIFIED),\n        SizeSpec.makeSizeSpec(0, UNSPECIFIED),\n        textOutputSize);\n\n    // Small component to use in case textComponent doesn\u2019t fit within\n    // the current layout.\n    final Component imageComponent = Image.create(c).drawableRes(R.drawable.ic_launcher).build();\n\n    // Assuming SizeSpec.getMode(widthSpec) == EXACTLY or AT_MOST.\n    final int layoutWidth = SizeSpec.getSize(widthSpec);\n    final boolean textFits = (textOutputSize.width <= layoutWidth);\n\n    return textFits ? textComponent : imageComponent;\n  }\n}\n')),Object(o.b)("h2",{id:"optimizing-oncreatelayoutwithsizespec"},"Optimizing OnCreateLayoutWithSizeSpec"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@CreateLayoutWithSizeSpec")," can be called more than once in cases where Yoga calls measure.  If the previous layout can be used for the new size spec this call can be avoided. Implementing the ",Object(o.b)("inlineCode",{parentName:"p"},"OnShouldCreateLayoutWithNewSizeSpec")," allows the spec to specify when the previous layout can be reused."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/annotations/OnShouldCreateLayoutWithNewSizeSpec.html"}),Object(o.b)("inlineCode",{parentName:"a"},"@OnShouldCreateLayoutWithNewSizeSpec"))," indicates that the annotated method will be called when the component checks if it can use the previous layout with a new size spec. This is used in conjunction with ",Object(o.b)("inlineCode",{parentName:"p"},"@OnCreateLayoutWithSizeSpec"),". The annotated method must have the following signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"@OnShouldCreateLayoutWithNewSizeSpec\nstatic boolean onShouldCreateLayoutWithNewSizeSpec(\n    ComponentContext c,\n    int newWidthSpec,\n    int newHeightSpec, ...)\n")),Object(o.b)("p",null,"The annotated method should return ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if and only if the Layout Spec should create a new layout for the new size spec. If the method returns ",Object(o.b)("inlineCode",{parentName:"p"},"false")," then the Component will use the previous layout. In addition,  outputs can be set in ",Object(o.b)("inlineCode",{parentName:"p"},"onCreateLayoutWithSizeSpec")," which can be referenced in ",Object(o.b)("inlineCode",{parentName:"p"},"onShouldCreateLayoutWithNewSizeSpec")," method as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\nclass MyComponentSpec {\n\n  @OnCreateLayoutWithSizeSpec\n  static Component onCreateLayoutWithSizeSpec(\n      ComponentContext c,\n      int widthSpec,\n      int heightSpec,\n      Output<Integer> textWidth,\n      Output<Boolean> didItFit) {\n\n    final Component textComponent =\n        Text.create(c).textSizeSp(16).text("Some text to measure.").build();\n\n    // UNSPECIFIED sizeSpecs will measure the text as being one line only,\n    // having unlimited width.\n    final Size textOutputSize = new Size();\n    textComponent.measure(\n        c,\n        SizeSpec.makeSizeSpec(0, UNSPECIFIED),\n        SizeSpec.makeSizeSpec(0, UNSPECIFIED),\n        textOutputSize);\n\n    // Small component to use in case textComponent doesn\u2019t fit within\n    // the current layout.\n    final Component imageComponent = Image.create(c).drawableRes(R.drawable.ic_launcher).build();\n\n    // Assuming SizeSpec.getMode(widthSpec) == EXACTLY or AT_MOST.\n    final int layoutWidth = SizeSpec.getSize(widthSpec);\n    final boolean textFits = (textOutputSize.width <= layoutWidth);\n\n    // set the outputs\n    textWidth.set(textOutputSize.width);\n    didItFit.set(textFits);\n\n    return textFits ? textComponent : imageComponent;\n  }\n\n  @OnShouldCreateLayoutWithNewSizeSpec\n  static boolean onShouldCreateLayoutWithNewSizeSpec(\n      ComponentContext c,\n      int newWidthSpec,\n      int newHeightSpec,\n      @FromPreviousCreateLayout int textWidth,\n      @FromPreviousCreateLayout boolean didItFit) {\n\n    final int newLayoutWidth = SizeSpec.getSize(newWidthSpec);\n    final boolean doesItStillFit = (textWidth <= newLayoutWidth);\n\n    // false if it still fits or if still doesn\'t fit\n    return doesItStillFit ^ didItFit;\n  }\n}\n')),Object(o.b)("img",{src:Object(r.a)("/images/flow-chart-v0.22.1-layout-with-size-spec.svg"),alt:"Layout Spec lifecycle flowchart",className:"white-background"}))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(r,".").concat(m)]||u[m]||d[m]||o;return n?i.a.createElement(b,c(c({ref:t},p),{},{components:n})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";var a=n(0),i=n(20);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(162),i=n(164);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,c=void 0!==r&&r,l=o.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var s=!n.startsWith(t)?t+n.replace(/^\//,""):n;return p?e+s:s}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},164:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);