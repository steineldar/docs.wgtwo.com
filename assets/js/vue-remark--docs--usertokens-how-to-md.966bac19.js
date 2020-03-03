(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{210:function(t,s,n){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},233:function(t,s,n){"use strict";n.r(s);var a=n(5),e=n(210),r=n(0);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var s=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render?s[t]=o[t]:n[t]=function(){return o[t]}}))},u=r.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",_={excerpt:null,title:"Manage user tokens",topic:"usertokens",type:"how-to"};var i=function(t){t.options[v]&&(t.options[v]=_),r.a.util.defineReactive(t.options,v,_),t.options.computed=u.computed({$frontmatter:function(){return t.options[v]}},t.options.computed)},l=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("VueRemarkRoot",[n("h1",{attrs:{id:"manage-user-tokens"}},[n("a",{attrs:{href:"#manage-user-tokens","aria-hidden":"true"}},[t._v("#")]),t._v("Manage user tokens")]),n("h2",{attrs:{id:"overview"}},[n("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),n("p",[t._v("To manage user tokens, you will need to:")]),n("ul",[n("li",[n("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Get credentials from Console")])]),n("li",[t._v("Write client code for creating and managing user tokens")])]),n("h2",{attrs:{id:"prerequisites"}},[n("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v("Prerequisites")]),n("h3",{attrs:{id:"tokencredentials"}},[n("a",{attrs:{href:"#tokencredentials","aria-hidden":"true"}},[t._v("#")]),t._v("Token/credentials")]),n("ul",[n("li",[t._v("You will need "),n("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("credentials from Console")]),t._v(".")])]),n("h3",{attrs:{id:"install-dependencies"}},[n("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),n("JitpackDependency"),n("p",[t._v("Then you can add "),n("code",{pre:!0},[t._v("event-grpc")]),t._v(" and "),n("code",{pre:!0},[t._v("common")]),t._v(":")]),n("ClientDependencies",{attrs:{clients:["auth-grpc","common"]}}),n("h3",{attrs:{id:"initialize-your-dependencies"}},[n("a",{attrs:{href:"#initialize-your-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Initialize your dependencies")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RightServiceGrpc\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RightServiceGrpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RightServiceBlockingStub\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Clients\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OperatorToken\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" channel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Clients"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" credentials "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("OperatorToken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_ID"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_SECRET"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" userTokenStub"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserTokenServiceBlockingStub "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserTokenServiceGrpc\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBlockingStub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCallCredentials")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("credentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),n("h2",{attrs:{id:"create-new-user-token"}},[n("a",{attrs:{href:"#create-new-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Create new user token")]),n("p",[t._v("A user token may consist of multiple phone numbers, rights and tags.")]),n("p",[t._v("Rights does accept using "),n("code",{pre:!0},[t._v("*")]),t._v(" as wildcard, which will match any suffix.")]),n("p",[t._v("For a list of applicable rights, see "),n("a",{attrs:{href:"../list-applicable-rights/"}},[t._v("List applicable rights")]),t._v(".")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CreateUserTokenRequest\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CreateUserTokenResponse\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumberProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" phoneNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e164 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+4799990000"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CreateUserTokenRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        humanName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Raspberry PI project"')]),t._v("\n        correlationId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-id"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPhoneNumbers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phoneNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRights")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"voicemail.*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("putTags")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createdBy"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CreateUserTokenResponse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userTokenStub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The generated token is: '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userToken"),n("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),n("h2",{attrs:{id:"list-user-tokens-for-phone-number"}},[n("a",{attrs:{href:"#list-user-tokens-for-phone-number","aria-hidden":"true"}},[t._v("#")]),t._v("List user tokens for phone number")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListUserTokenRequest\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokenMetadata\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumberProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" phoneNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e164 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+4799990000"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListUserTokenRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPhoneNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phoneNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userTokenStub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" userTokens"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserTokenMetadata"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userTokenMetadataList\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),n("h2",{attrs:{id:"get-user-token"}},[n("a",{attrs:{href:"#get-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Get user token")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetUserTokenRequest\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokenMetadata\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GetUserTokenRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCorrelationId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userTokenStub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" userToken"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserTokenMetadata "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userTokenMetadata\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),n("h2",{attrs:{id:"revoke-user-token"}},[n("a",{attrs:{href:"#revoke-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Revoke user token")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RevokeUserTokenRequest\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("revoke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RevokeUserTokenRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCorrelationId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    userTokenStub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("revoke")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),n("h2",{attrs:{id:"concepts"}},[n("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),n("ul",[n("li",[n("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof i&&i(l);s.default=l.exports}}]);