(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(299)),i={id:"federation",title:"Apollo Federation",sidebar_label:"Apollo Federation"},c={unversionedId:"recipes/federation",id:"recipes/federation",isDocsHomePage:!1,title:"Apollo Federation",description:"You can use Apollo Federation as a merging strategy in favor of Schema Stitching approach.",source:"@site/docs/recipes/federation.md",slug:"/recipes/federation",permalink:"/docs/recipes/federation",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/federation.md",version:"current",sidebar_label:"Apollo Federation",sidebar:"sidebar",previous:{title:"Mesh as Gateway",permalink:"/docs/recipes/as-gateway"},next:{title:"Handle Webhooks with GraphQL Subscriptions",permalink:"/docs/recipes/subscriptions-webhooks"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://storage.googleapis.com/xebia-blog/1/2019/10/apollo-federation.jpg",width:"300",alt:"Apollo Federation"}),Object(o.b)("br",null)),Object(o.b)("p",null,"You can use Apollo Federation as a merging strategy in favor of Schema Stitching approach."),Object(o.b)("p",null,"To get started, install the merger library from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/merger-federation\n")),Object(o.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"merger: federation # Define federation as a merging strategy\nsources:\n  - name: accounts # Add a non-federated GraphQL Source\n    handler:\n      graphql:\n        endpoint: http://localhost:4001/graphql\n    transforms: # Transform it to a federated schema\n      - federation:\n          types:\n            - name: Query\n              config:\n                extend: true\n            - name: User\n              config:\n                keyFields:\n                  - id\n                resolveReference: ./services/accounts/user-reference-resolver\n  - name: reviews # You can also use a federated schema\n    handler:\n      graphql:\n        endpoint: http://localhost:4002/graphql\n  - name: products\n    handler:\n      graphql:\n        endpoint: http://localhost:4003/graphql\n  - name: inventory\n    handler:\n      graphql:\n        endpoint: http://localhost:4004/graphql\n\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/transforms/federation"}),"check out documentation of federation transformer")," to learn more about adding federation metadata to a non-federated GraphQL Schema.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can check out our example that uses Federation as a merging strategy.")),Object(o.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/federation-example?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"federation-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}p.isMDXComponent=!0},299:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);