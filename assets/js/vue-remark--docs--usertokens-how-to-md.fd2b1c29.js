(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{214:function(t,e,r){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},237:function(t,e,r){"use strict";r.r(e);var n=r(5),s=r(214),a=r(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},p=function(t){var e=t.options.components=t.options.components||{},r=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===o(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:r[t]=function(){return i[t]}}))},u=a.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"Manage user tokens",topic:"usertokens",type:"how-to"};var v=function(t){t.options[c]&&(t.options[c]=l),a.a.util.defineReactive(t.options,c,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},_=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VueRemarkRoot",[r("h1",{attrs:{id:"manage-user-tokens"}},[r("a",{attrs:{href:"#manage-user-tokens","aria-hidden":"true"}},[t._v("#")]),t._v("Manage user tokens")]),r("h2",{attrs:{id:"overview"}},[r("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),r("p",[t._v("This API allows to create user tokens, which can enable accessing our APIs in the context of a user. This can either be\na token that is given directly to the end-user or used by the operator on behalf of their user.\nIn order to access this API, your credentials need to have the "),r("code",{pre:!0},[t._v("id.user.token.create")]),t._v(" right.\nYou can configure your credentials in "),r("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Console")]),t._v(".")]),r("DemoConfigurer"),r("h2",{attrs:{id:"grpcurl"}},[r("a",{attrs:{href:"#grpcurl","aria-hidden":"true"}},[t._v("#")]),t._v("grpcurl")]),r("h3",{attrs:{id:"create-new-user-token"}},[r("a",{attrs:{href:"#create-new-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Create new user token")]),r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n  {\n    "humanName": "My hobby project",\n    "correlationId": "my-unique-id",\n    "phoneNumbers": [\n      { "e164": "+47xxxxxxxx" }\n    ],\n    "rights": "voicemail.*",\n    "tags": {\n      "createdBy": "Alice",\n      "location": "My Raspberry PI"\n    }\n  }\n  \'')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.Create")])]),r("h3",{attrs:{id:"list-user-tokens-for-phone-number"}},[r("a",{attrs:{href:"#list-user-tokens-for-phone-number","aria-hidden":"true"}},[t._v("#")]),t._v("List user tokens for phone number")]),r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "phoneNumber": { "e164": "+47xxxxxxxx" } }\'')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.List")])]),r("h3",{attrs:{id:"get-user-token"}},[r("a",{attrs:{href:"#get-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Get user token")]),r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "correlationId": "my-unique-id" }\'')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.Get")])]),r("h3",{attrs:{id:"revoke-user-token"}},[r("a",{attrs:{href:"#revoke-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Revoke user token")]),r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "correlationId": "my-unique-id" }\'')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.Revoke")])]),r("h2",{attrs:{id:"java--kotlin"}},[r("a",{attrs:{href:"#java--kotlin","aria-hidden":"true"}},[t._v("#")]),t._v("Java / Kotlin")]),r("h3",{attrs:{id:"install-dependencies"}},[r("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),r("JitpackDependency"),r("p",[t._v("Then you can add "),r("code",{pre:!0},[t._v("auth-grpc")]),t._v(" and "),r("code",{pre:!0},[t._v("utils-grpc")]),t._v(":")]),r("ClientDependencies",{attrs:{clients:["auth-grpc","utils-grpc"]}}),r("h3",{attrs:{id:"create-new-user-token-1"}},[r("a",{attrs:{href:"#create-new-user-token-1","aria-hidden":"true"}},[t._v("#")]),t._v("Create new user token")]),r("p",[t._v("A user token may consist of multiple phone numbers, rights and tags.")]),r("p",[t._v("Rights does accept using "),r("code",{pre:!0},[t._v("*")]),t._v(" as wildcard, which will match any suffix.")]),r("p",[t._v("For a list of applicable rights, see "),r("a",{attrs:{href:"../list-applicable-rights/"}},[t._v("List applicable rights")]),t._v(".")]),r("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/CreateUserToken.kt"}}),r("h3",{attrs:{id:"list-user-tokens-for-phone-number-1"}},[r("a",{attrs:{href:"#list-user-tokens-for-phone-number-1","aria-hidden":"true"}},[t._v("#")]),t._v("List user tokens for phone number")]),r("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/ListUserToken.kt"}}),r("h3",{attrs:{id:"get-user-token-1"}},[r("a",{attrs:{href:"#get-user-token-1","aria-hidden":"true"}},[t._v("#")]),t._v("Get user token")]),r("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/GetUserToken.kt"}}),r("h3",{attrs:{id:"revoke-user-token-1"}},[r("a",{attrs:{href:"#revoke-user-token-1","aria-hidden":"true"}},[t._v("#")]),t._v("Revoke user token")]),r("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/usertokens/src/main/kotlin/RevokeUserToken.kt"}}),r("h2",{attrs:{id:"concepts"}},[r("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),r("ul",[r("li",[r("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),r("li",[r("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(_),"function"==typeof v&&v(_);e.default=_.exports}}]);