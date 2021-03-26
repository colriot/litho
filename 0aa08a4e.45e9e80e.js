(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,b=h["".concat(r,".").concat(m)]||h[m]||d[m]||a;return n?i.a.createElement(b,s(s({ref:t},u),{},{components:n})):i.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(2),i=n(6),a=(n(0),n(161)),r={id:"mount-extensions",title:"Mount Extensions"},s={unversionedId:"mount-extensions",id:"mount-extensions",isDocsHomePage:!1,title:"Mount Extensions",description:"Mount Extensions are a way of modularising Litho\u2019s default behaviour, as it\u2019s being changed from a monolithic framework to a modular framework that\u2019s split into the rendering engine (RenderCore) and extensions for custom behaviour.",source:"@site/docs/mountextensions.md",slug:"/mount-extensions",permalink:"/docs/mount-extensions",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/mountextensions.md",version:"current"},l=[{value:"MountExtension",id:"mountextension",children:[{value:"Acquiring mount references",id:"acquiring-mount-references",children:[]}]},{value:"MountDelegate",id:"mountdelegate",children:[]},{value:"MountDelegateTarget",id:"mountdelegatetarget",children:[]},{value:"Handling new layout results",id:"handling-new-layout-results",children:[]},{value:"Handling position in viewport changes",id:"handling-position-in-viewport-changes",children:[]},{value:"Example: custom visibility event processing",id:"example-custom-visibility-event-processing",children:[]}],u={rightToc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Mount Extensions are a way of modularising Litho\u2019s default behaviour, as it\u2019s being changed from a monolithic framework to a modular framework that\u2019s split into the rendering engine (RenderCore) and extensions for custom behaviour.\nMount Extensions are plug-in classes which can be enabled on a LithoView to add custom behaviour that RenderCore doesn\u2019t implement. Mount Extensions can alter mount behaviour or can process information at mount time."),Object(a.b)("p",null,"The RenderCore and Mount Extensions implementation of Litho is currently under the test and some features may not work as expected."),Object(a.b)("p",null,"Litho provides features which are built into the the core of the framework, without the possibility of turning them off or customising behaviour. Such features include animations, incremental mount or dispatching visibility events. With Mount Extensions, the implementation of these features is extracted out of the core framework into separate extensions which work independently:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"IncrementalMountExtension"),Object(a.b)("li",{parentName:"ul"},"TransitionsExtension"),Object(a.b)("li",{parentName:"ul"},"VisibilityExtension")),Object(a.b)("p",null,"There are three main concepts related to the MountExtensions API:"),Object(a.b)("h2",{id:"mountextension"},"MountExtension"),Object(a.b)("p",null,"MountExtension: a class for customising mount behaviour. By default, all mount items are mounted if their host (the LithoView) is intersecting the viewport."),Object(a.b)("h3",{id:"acquiring-mount-references"},"Acquiring mount references"),Object(a.b)("p",null,"A Mount Extension can alter that behaviour by acquiring or releasing a mount reference for an item. Acquiring a mount reference means that the extension wants the item to be mounted. When the extension is no longer interested in keeping the item mounted, it can release the reference it previously acquired.\nFor example, the IncrementalMountExtension will only acquire a mount reference for items which are themselves visible in the viewport and will not acquire for items that are off-screen even if their host is visible.\nIndependently, the Animations Extension could acquire mount reference for items that are not visible on screen if their parent host is animating.\nAn extension can only release mount references for items it previously acquired and it has no information about whether other extensions have acquired an item."),Object(a.b)("p",null,"Let\u2019s take a look at the MountExtension API:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"public class MountExtension<Input> {\n\n   public void registerToDelegate(MountDelegate mountDelegate) {\n   }\n\n    /**\n   * Called for setting up input on the extension before mounting.\n   *\n   * @param input The new input the extension should use.\n   */\n  public void beforeMount(Input input, @Nullable Rect localVisibleRect) {}\n\n  /** Called after mounting is finished. */\n  public void afterMount() {}\n\n  /** Called when the visible bounds of the Host change. */\n  public void onVisibleBoundsChanged(@Nullable Rect localVisibleRect) {}\n\n  /** Called after all the Host's children have been unmounted. */\n  public void onUnmount() {}\n\n  /** Called after all the Host's children have been unbound. */\n  public void onUnbind() {}\n\n  /** Called to request that this item should be mounted.\n   * If isMounting is true, it will be immediately mounted if it's not mounted already.\n   * Otherwise, it will be mounted on the next mount pass.\n  */\n  public void acquireMountRef(long nodeId, int index, boolean isMounting) {}\n\n  /**\n   * Called to release a mount referece and indicate that this extension\n   * does not need the item to be mounted anymore.\n   * If isMounting is true and the item's mount reference is no longer acquired by\n   * any extension, it will be immediately unmounted.\n   */\n  public void releaseMountRef(long nodeId, int i, boolean isMounting) {\n}\n")),Object(a.b)("p",null,"The Input is a type that represents the data for the Mount Extension to process. For example, in the case of VisibilityOutputsExtension, the Input implementation provides information about all the bounds and visibility event handlers for the Components."),Object(a.b)("h2",{id:"mountdelegate"},"MountDelegate"),Object(a.b)("p",null,"A MountDelegate is a convenience class to manage all the extensions associated with a particular host. The MountDelegate has the list of all the enabled extensions which can alter mount behaviour. It aggregates the results of acquiring and releasing mount references by all the extensions and it notifies the MountDelegateTarget when an item needs to be mounted or unmounted.\nThe MountDelegate sums up the acquired mount references for all the items. It increases the total count when one of the extensions calls ",Object(a.b)("inlineCode",{parentName:"p"},"acquireMountRef")," and it decreases the total when ",Object(a.b)("inlineCode",{parentName:"p"},"releaseMountRef")," is called. When the total is positive, meaning at least one extension needs to mount an item, the MountDelegateTarget is notified and the item is mounted. If the total count reaches 0, the item no longer needs to be mounted by any extension so it will be unmounted."),Object(a.b)("h2",{id:"mountdelegatetarget"},"MountDelegateTarget"),Object(a.b)("p",null,"The MountDelegateTarget is a class that\u2019s capable of creating, mounting and unmounting mount items. In Litho, the MountDelegateTarget implementation is the MountState. The MountDelegateTarget has a MountDelegate reference which it can query to check an item\u2019s mount reference count and decide whether it should be mounted, unmounted or updated.\nThe MountDelegateTarget is also notified if an extension requires an item to be mounted or unmounted immediately. A MountExtension can influence what is mounted, but the MountDelegateTarget performs the mount operation."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"public interface MountDelegateTarget {\n\n  /**\n  * Can be called by a registered extension to request mount for a node.\n  */\n  void notifyMount(final int position);\n\n /**\n  * Can be called by a registered extension to request unmount for a node.\n  */\n  void notifyUnmount(int position);\n\n\n  /**\n  * Is called by a host to request mount when a new layout tree is available.\n  */\n  void mount(RenderTree renderTree);\n\n  void registerMountDelegateExtension(MountExtension mountExtension);\n\n  // Check javadocs for the full API\n}\n")),Object(a.b)("h2",{id:"handling-new-layout-results"},"Handling new layout results"),Object(a.b)("p",null,"The host which is responsible for calling ",Object(a.b)("inlineCode",{parentName:"p"},"MountState.mount()")," (in our case, the LithoView) will call the appropriate callbacks on the list of enabled extensions."),Object(a.b)("p",null,"For example, when a new layout for the LithoView\u2019s ComponentTree is calculated, LithoView needs to mount the content for the new layout and it will perform the following sequence:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"private void mount(LayoutState layoutState, @Nullable Rect currentVisibleArea) {\n  for (MountExtension mountExtension: enabledExtensions) {\n    extension.beforeMount(layoutState, currentVisibleArea);\n   }\n\n  mountDelegateTarget.mount(layoutState.toRenderTree());\n\n  for (MountExtension mountExtension: enabledExtensions) {\n    extension.afterMount();\n  }\n}\n\n")),Object(a.b)("h2",{id:"handling-position-in-viewport-changes"},"Handling position in viewport changes"),Object(a.b)("p",null,"Some Mount Extensions also need to process information when the host only changes visible bounds, even if no new layout result needs to be mounted. For example, the ",Object(a.b)("inlineCode",{parentName:"p"},"VisibilityOutputsExtension")," needs to listen to the host\u2019s visible bounds changing on every scrolling frame and check if any items changed visibility status to dispatch events.\nIn that case, the host performs the following sequence:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"for (MountExtension mountExtension: enabledExtensions) {\n  mountExtension.onVisibleBoundsChanged(currentVisibleArea);\n}\n")),Object(a.b)("p",null,"Since the layout result has not changed in this case, we don\u2019t need to send a new input to process - it was already provided by calling ",Object(a.b)("inlineCode",{parentName:"p"},"beforeMount"),"."),Object(a.b)("h2",{id:"example-custom-visibility-event-processing"},"Example: custom visibility event processing"),Object(a.b)("p",null,"At the moment, the extensions implementation and the usage of a MountDelegateTarget in Litho are still being tested and is unstable - there\u2019s no API yet to provide a custom extension. Until the extension implementations and the integration between the LithoView and the MountDelegateTarget have been stabilised, we don\u2019t recommend using this and we won\u2019t provide an API to enable custom extensions on the LithoView."),Object(a.b)("p",null,"The current implementation of MountState is a hybrid which uses the VisibilityOutputsExtension for visibility events processing during mount, but no MountDelegateTarget is being used. The extension\u2019s callbacks are called manually by MountState - this is not the end state we want, but it\u2019s an incremental step towards using extensions for all mount-time capabilities.\nFor this hybrid state, we can expose a test API to swap out the default implementation of the VisibilityOutputsExtension with a custom implementation. For example, if you want to receive visibility events even if your items are not visible on screen, but their host is visible, you can implement that behaviour in a custom visibility extension and pass that to the LithoView to use and override the default visibility behaviour."),Object(a.b)("p",null,"Demo: ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/litho/pull/714"}),"https://github.com/facebook/litho/pull/714")))}c.isMDXComponent=!0}}]);