(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(144)),o={id:"federation",title:"Apollo Federation Transform",sidebar_label:"Apollo Federation"},l={unversionedId:"transforms/federation",id:"transforms/federation",isDocsHomePage:!1,title:"Apollo Federation Transform",description:"federation transform allows to add the resolvers and directives to conform to the federation specification. Much of the federation sourcecode could be reused ensuring it is compliant to the specification. This transform uses graphql-transform-federation package.",source:"@site/docs/transforms/federation.md",slug:"/transforms/federation",permalink:"/docs/transforms/federation",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/federation.md",version:"current",sidebar_label:"Apollo Federation",sidebar:"sidebar",previous:{title:"Resolvers Composition Transform",permalink:"/docs/transforms/resolvers-composition"},next:{title:"Filter Schema Transform",permalink:"/docs/transforms/filter-schema"}},c=[{value:"How to use?",id:"how-to-use",children:[{value:"Add Reference Resolver as a Code File",id:"add-reference-resolver-as-a-code-file",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"federation")," transform allows to add the resolvers and directives to conform to the federation specification. Much of the federation sourcecode could be reused ensuring it is compliant to the specification. This transform uses ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/0xR/graphql-transform-federation"}),Object(i.b)("inlineCode",{parentName:"a"},"graphql-transform-federation"))," package."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-federation\n")),Object(i.b)("h2",{id:"how-to-use"},"How to use?"),Object(i.b)("p",null,"Add the following configuration to your Mesh config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'transforms:\n  - federation: \n        types:\n            # Ensure the root queries of this schema show up the combined schema\n            - name: Query\n              config:\n                extend: true\n            - name: Product\n              config:\n                # extend Product {\n                extend: true\n                # Product @key(fields: "id") {\n                keyFields:\n                    - id\n                fields:\n                    # id: Int! @external\n                    - name: id\n                      external: true\n                resolveReference:\n                  targetSource: accounts\n                  targetMethod: user\n                  args:\n                    id: root.id\n\n')),Object(i.b)("h3",{id:"add-reference-resolver-as-a-code-file"},"Add Reference Resolver as a Code File"),Object(i.b)("p",null,"If you want to add more complex business logic, you can point to a code file that exports a resolver function."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"resolveReference: ./userResolveReference.js\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"./userResolveReference.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// So we can point to an existing query field to resolve that entity\nmodule.exports = (root, context) => context.accounts.api.user({ id: root.id })\n")),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"types")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of Object"),", required): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),"): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyFields")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extend")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fields")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of Object"),", required): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),", required): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"external")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"provides")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"required")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resolveReference")," -  One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"targetSource")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"targetMethod")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"returnData")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resultSelectedFields")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resultSelectionSet")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resultDepth")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),")"))))))))))))}p.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);