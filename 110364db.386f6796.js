(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return t?r.a.createElement(m,o(o({ref:a},s),{},{components:t})):r.a.createElement(m,o({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),c=(t(0),t(144)),i={id:"cache",title:"Cache Transform",sidebar_label:"Cache"},o={unversionedId:"transforms/cache",id:"transforms/cache",isDocsHomePage:!1,title:"Cache Transform",description:"The cache transform allow you to apply caching over your data-sources easily.",source:"@site/docs/transforms/cache.md",slug:"/transforms/cache",permalink:"/docs/transforms/cache",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/cache.md",version:"current",sidebar_label:"Cache",sidebar:"sidebar",previous:{title:"Encapsulate Transform",permalink:"/docs/transforms/encapsulate"},next:{title:"Snapshot Transform",permalink:"/docs/transforms/snapshot"}},l=[{value:"How to use?",id:"how-to-use",children:[{value:"Simple caching",id:"simple-caching",children:[]},{value:"The Cache Key",id:"the-cache-key",children:[]}]},{value:"Cache Invalidation",id:"cache-invalidation",children:[{value:"TTL",id:"ttl",children:[]},{value:"Operation-based",id:"operation-based",children:[]},{value:"Programmatic",id:"programmatic",children:[]}]},{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],s={rightToc:l};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"cache")," transform allow you to apply caching over your data-sources easily. "),Object(c.b)("p",null,"It allow you to configure custom invalidation rules (by ttl / mutation), and selective caching, according to your needs."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This transform is being applied globally, because of the need to communicate with other GraphQL operations from your mesh.")),Object(c.b)("p",null,"To get started with this transform, install it from npm:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-cache\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"GraphQL Mesh uses a default in-memory LRU cache, but you can replace it with any other key=>value cache mechanism. See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recipes/custom-cache"}),"custom cache section")," for more info.")),Object(c.b)("h2",{id:"how-to-use"},"How to use?"),Object(c.b)("h3",{id:"simple-caching"},"Simple caching"),Object(c.b)("p",null,"To cache some of your queries, apply the following transform rule. This following example will cache all ",Object(c.b)("inlineCode",{parentName:"p"},"Query.*")," in your schema, forever:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - cache:\n      - field: Query.*\n")),Object(c.b)("p",null,"You can also apply it to a specific field, or multiple fields:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - cache:\n      - field: Query.users\n  - cache:\n      - field: Query.posts\n")),Object(c.b)("h3",{id:"the-cache-key"},"The Cache Key"),Object(c.b)("p",null,"Each cache record is being stored with a key. The default way of creating this key is to use the GraphQL type name, the GraphQL field name, and a hash of the ",Object(c.b)("inlineCode",{parentName:"p"},"args")," object. This is in order to make that we can distinct the cache key according to the data it's storing."),Object(c.b)("p",null,"You can customize the ",Object(c.b)("inlineCode",{parentName:"p"},"cacheKey")," according to your needs, and you can use custom helpers to help you create those cache keys dynamically. "),Object(c.b)("p",null,"The following example creates a ",Object(c.b)("inlineCode",{parentName:"p"},"cacheKey")," by an GraphQL query argument called ",Object(c.b)("inlineCode",{parentName:"p"},"userId"),", per day:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - cache:\n      - field: Query.user\n        cacheKey: user-{args.id}-{yyyy-mm-dd | date}\n")),Object(c.b)("h2",{id:"cache-invalidation"},"Cache Invalidation"),Object(c.b)("h3",{id:"ttl"},"TTL"),Object(c.b)("p",null,"Invalidation by TTL is the simplest way to deal with your cache. You can specify any time (in seconds) to keep your cache. "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - cache:\n      - field: Query.*\n        invalidate:\n          ttl: 3600 # 1 hour\n")),Object(c.b)("h3",{id:"operation-based"},"Operation-based"),Object(c.b)("p",null,"GraphQL Mesh has a built-in operation-based caching solution."),Object(c.b)("p",null,"You can cache data easily, and invalidate it only when it changes by a mutation."),Object(c.b)("p",null,"For example, given the following schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  user(id: ID!): User!\n}\n\ntype Mutation {\n  updateUser(userIdToUpdate: ID!, setFields: UpdateUserInput!): User!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  name: String\n}\n\ninput UpdateUserInput {\n  email: String\n  name: String\n}\n")),Object(c.b)("p",null,"You can set a simple caching, based on a user id: "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - cache:\n      - field: Query.user\n        cacheKey: user-{args.id}\n")),Object(c.b)("p",null,"And you can add operation-based invalidation, so when ",Object(c.b)("inlineCode",{parentName:"p"},"updateUser")," is done successfully, it will invalidate the matching cache record to make sure the data will be fetched next time from the remote source:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - cache:\n      - field: Query.user\n        cacheKey: user-{args.id}\n        invalidate:\n          effectingOperations:\n            - operation: Mutation.updateUser\n              matchKey: user-{args.userIdToUpdate}\n")),Object(c.b)("p",null,"This way, when someone uses ",Object(c.b)("inlineCode",{parentName:"p"},"updateUser")," with a specific user id, it will update the data record, and then invalidate the cache automatically."),Object(c.b)("h3",{id:"programmatic"},"Programmatic"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"getMesh")," method of GraphQL Mesh returns the general key=>value cache it uses at the moment, so you can easily access it and invalidate records according to your needs:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const { schema, execute, cache } = getMesh(config);\n\ncache.delete(SOME_KEY);\n")),Object(c.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(c.b)("p",null,"You can check Location Weather example that uses OpenAPI handler with cache transform;"),Object(c.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/openapi-location-weather?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"typescript-location-weather-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(c.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(c.b)("p",null,Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"field")," (type: ",Object(c.b)("inlineCode",{parentName:"li"},"String"),", required) - The type and field to apply cache to, you can use wild cards as well, for example: ",Object(c.b)("inlineCode",{parentName:"li"},"Query.*")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"cacheKey")," (type: ",Object(c.b)("inlineCode",{parentName:"li"},"String"),") - Cache key to use to store your resolvers responses.\nThe defualt is: {typeName}-{fieldName}-{argsHash}-{fieldNamesHash}")),Object(c.b)("p",{parentName:"p"},"Available variables:"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},"{args.argName} - use resolver argument"),Object(c.b)("li",{parentName:"ul"},"{typeName} - use name of the type"),Object(c.b)("li",{parentName:"ul"},"{fieldName} - use name of the field"),Object(c.b)("li",{parentName:"ul"},"{argsHash} - a hash based on the 'args' object"),Object(c.b)("li",{parentName:"ul"},"{fieldNamesHash} - a hash based on the field names selected by the client"),Object(c.b)("li",{parentName:"ul"},"{info} - the GraphQLResolveInfo of the resolver")),Object(c.b)("p",{parentName:"p"},"Available interpolations:"),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},"{format|date} - returns the current date with a specific format")),Object(c.b)("ul",{parentName:"p"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"invalidate")," (type: ",Object(c.b)("inlineCode",{parentName:"li"},"Object"),") - Invalidation rules: ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"effectingOperations")," (type: ",Object(c.b)("inlineCode",{parentName:"li"},"Array of Object"),", required) - Invalidate the cache when a specific operation is done without an error: ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"operation")," (type: ",Object(c.b)("inlineCode",{parentName:"li"},"String"),", required) - Path to the operation that could effect it. In a form: Mutation.something. Note that wildcard is not supported in this field."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"matchKey")," (type: ",Object(c.b)("inlineCode",{parentName:"li"},"String"),") - Cache key to invalidate on sucessful resolver (no error), see ",Object(c.b)("inlineCode",{parentName:"li"},"cacheKey")," for list of available options in this field."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ttl")," (type: ",Object(c.b)("inlineCode",{parentName:"li"},"Int"),") - Specified in seconds, the time-to-live (TTL) value limits the lifespan"))))))}p.isMDXComponent=!0}}]);