(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{241:function(t,s,n){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},308:function(t,s,n){"use strict";n.r(s);var a=n(9),e=n(241),r=n(0);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var s=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render?s[t]=o[t]:n[t]=function(){return o[t]}}))},v=r.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",u={excerpt:null,title:"Listen for events",topic:"events",type:"how-to"};var l=function(t){t.options[_]&&(t.options[_]=u),r.a.util.defineReactive(t.options,_,u),t.options.computed=v.computed({$frontmatter:function(){return t.options[_]}},t.options.computed)},i=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("VueRemarkRoot",[n("h1",{attrs:{id:"how-to-listen-for-events"}},[n("a",{attrs:{href:"#how-to-listen-for-events","aria-hidden":"true"}},[t._v("#")]),t._v("How to listen for Events")]),n("h2",{attrs:{id:"overview"}},[n("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),n("p",[t._v("To listen for events, you will need to:")]),n("ul",[n("li",[n("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Get credentials from Console")])]),n("li",[t._v("Write client code that connects to our message broker")])]),n("h2",{attrs:{id:"prerequisites"}},[n("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v("Prerequisites")]),n("h3",{attrs:{id:"tokencredentials"}},[n("a",{attrs:{href:"#tokencredentials","aria-hidden":"true"}},[t._v("#")]),t._v("Token/credentials")]),n("ul",[n("li",[t._v("You will need "),n("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("credentials from Console")]),t._v(" for the type of event you're interested in.\nYou will only receive an event if your token has the appropriate right.")])]),n("h3",{attrs:{id:"install-dependencies"}},[n("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),n("p",[t._v("To add the dependencies, first you need to add the "),n("a",{attrs:{href:"https://jitpack.io",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Jitpack")]),t._v(" repository:")]),n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",{pre:!0,attrs:{class:"language-xml"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repositories")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jitpack.io"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://jitpack.io"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repository")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repositories")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),n("p",[t._v("Then you can add "),n("code",{pre:!0},[t._v("event-grpc")]),t._v(" and "),n("code",{pre:!0},[t._v("common")]),t._v(":")]),n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",{pre:!0,attrs:{class:"language-xml"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.working-group-two.wgtwoapis"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("event-grpc"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("91f3d656e6d890829e28f0ee7788359450325828"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.working-group-two.wgtwoapis"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("common"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("91f3d656e6d890829e28f0ee7788359450325828"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),n("h3",{attrs:{id:"initialize-your-dependencies"}},[n("a",{attrs:{href:"#initialize-your-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Initialize your dependencies")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsServiceGrpc\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsServiceGrpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsServiceStub\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Clients\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OperatorToken\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" channel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" credentials "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OperatorToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_ID"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_SECRET"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" eventsClient"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventsServiceGrpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsServiceStub "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventsServiceGrpc\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newStub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCallCredentials")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("credentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),n("h2",{attrs:{id:"listen-for-events"}},[n("a",{attrs:{href:"#listen-for-events","aria-hidden":"true"}},[t._v("#")]),t._v("Listen for events")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventCase\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsServiceGrpc\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsServiceGrpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventsServiceStub\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Clients\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OperatorToken\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StreamObserver\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" EventsService "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" channel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" credentials "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OperatorToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_ID"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_SECRET"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" eventsClient"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventsServiceStub "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventsServiceGrpc\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newStub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCallCredentials")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("credentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SubscribeEventsRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EventType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VOICE_EVENT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EventType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VOICEMAIL_EVENT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSequenceId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You probably want to put this in a function")]),t._v("\n        eventsClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" StreamObserver"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SubscribeEventsResponse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subscribeEventsResponse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SubscribeEventsResponse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                subscribeEventsResponse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" event "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventCase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        EventCase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VOICE_EVENT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                        EventCase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VOICEMAIL_EVENT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("throwable"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Throwable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You probably want to reconnect here")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCompleted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You probably want to reconnect here")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),n("h2",{attrs:{id:"concepts"}},[n("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),n("ul",[n("li",[n("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(i),"function"==typeof l&&l(i);s.default=i.exports}}]);