(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/authorAvatar-min.582f6e9e.jpg"},function(e,t,a){e.exports=a.p+"static/media/github.7ea7bee9.svg"},function(e,t,a){e.exports=a.p+"static/media/facebook.4521f6ae.svg"},,function(e,t,a){e.exports=a(124)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),s=a(6),c=(a(36),a(1)),l=a(2),u=a(25),m=r.a.createContext();a(37),a(38),a(39),a(40),a(41);var d=function(e){var t=r.a.useContext(m);function a(){e.setSavedNewsPage(!1)}return r.a.createElement("nav",{className:"Navigation"},e.screenWidth>610?r.a.createElement(s.c,{exact:!0,to:"/",activeClassName:"Navigation__link_active",onClick:a,className:"Navigation__link ".concat(e.isSavedNewsPage&&"Navigation_black")},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"):r.a.createElement(s.b,{to:"/",onClick:a,className:"Navigation__link"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),e.loggedIn?r.a.createElement(r.a.Fragment,null,e.screenWidth>610?r.a.createElement(s.c,{to:"/saved-pages",activeClassName:"Navigation__link_active",className:"Navigation__link ".concat(e.isSavedNewsPage&&"Navigation_black")},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"):r.a.createElement(s.b,{to:"/saved-pages",className:"Navigation__link"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b")):"",e.loggedIn?r.a.createElement("button",{className:"Navigation__button ".concat(e.isSavedNewsPage&&e.screenWidth>610&&"Navigation_black"),onClick:e.logOut,type:"reset"},t.name,"[-\xa0>"):r.a.createElement("button",{className:"Navigation__button ".concat(e.isSavedNewsPage&&e.screenWidth>610&&"Navigation_black"),type:"button",onClick:e.handleLoginClick},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))};a(47),a(48),a(49),a(50),a(51),a(52),a(53),a(54);var g=function(e){var t=r.a.useContext(m),a=r.a.useState(window.screen.width),o=Object(c.a)(a,2),i=o[0],s=o[1],l=r.a.useState(!1),u=Object(c.a)(l,2),g=u[0],p=u[1];function f(){p(!g)}return Object(n.useEffect)((function(){function e(){s(window.innerWidth),i>610&&p(!1)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}})),r.a.createElement("header",{className:"Header ".concat(e.isSavedNewsPage&&!g&&"Header_black"," ").concat(e.isSavedNewsPage&&i<611&&"Header_mobilePosition"," ").concat(g&&"Header_mobileMenuOpen")},r.a.createElement("h1",{className:"Header__title"},"NewsExplorer"),i>610?r.a.createElement(m.Provider,{value:t},r.a.createElement(d,{screenWidth:i,logOut:e.logOut,handleLoginClick:e.handleLoginClick,setSavedNewsPage:e.setSavedNewsPage,isSavedNewsPage:e.isSavedNewsPage,loggedIn:e.loggedIn})):g?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:f,"area-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"Header__mobile-menu Header__mobile-menu_close"}),r.a.createElement(m.Provider,{value:t},r.a.createElement(d,{screenWidth:i,logOut:e.logOut,handleLoginClick:e.handleLoginClick,setSavedNewsPage:e.setSavedNewsPage,isSavedNewsPage:e.isSavedNewsPage,loggedIn:e.loggedIn}))):r.a.createElement("button",{className:"Header__mobile-menu ".concat(e.isSavedNewsPage&&"Header__mobile-menu_black"),"area-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c",onClick:f}))},p="\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0438 \u043f\u043e\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",f=new Date;f.setDate(f.getDate()-7);var h=f.getMonth()+1,E=f.toString().slice(11,15),v=f.toString().slice(8,10),N=E.concat("-").concat(h.toString()).concat("-").concat(v),_=/\s+/,w=/<\/?[^>]+(>|$)/g,S=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,P=/^[a-zA-Z0-9]{6,30}$/;a(55),a(56),a(57),a(58),a(59),a(60),a(61);var b=function(e){var t=r.a.useState(""),a=Object(c.a)(t,2),n=a[0],o=a[1],i=r.a.useState("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"),s=Object(c.a)(i,2),l=s[0],u=s[1];return r.a.useEffect((function(){e.setSavedNewsPage(!1)})),r.a.createElement("article",{className:"SearchForm"},r.a.createElement("h1",{className:"SearchForm__title"},"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"),r.a.createElement("p",{className:"SearchForm__text"},"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."),r.a.createElement("form",{className:"SearchForm__form"},r.a.createElement("input",{required:!0,className:"SearchForm__input ".concat("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"===l&&"SearchForm__input_placeholder-error"),type:"text",placeholder:l,onChange:function(e){return o(e.target.value)},value:n,id:"search",name:"search"}),r.a.createElement("button",{className:"SearchForm__button",type:"submit",onClick:function(t){t.preventDefault();var a=_;0===n.length||a.test(n)?u("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"):(!function(){e.isDataLoaded&&(e.setResponseSending(!1),e.setDataLoaded(!1));e.setKeyword(n),e.setResponseSending(!0),function(e){var t="https://newsapi.org/v2/everything?"+"q=".concat(e,"&")+"from=".concat(N,"&")+"sortBy=popularity&"+"apiKey=".concat("96fb88023047493688f02442b20eac74");return fetch("".concat(t),{method:"GET"}).then((function(e){if(e.ok)return e.json()})).catch((function(e){return e}))}(n).then((function(e){return e.articles})).then((function(t){var a;if(0!==(a=t.map((function(e){var t={};t.title=e.title,t.keyword=n;var a=e.description.replace(w,"");t.text=a;var r=new Date(e.publishedAt).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"}).split(" "),o=r.slice(0,2).join(" "),i=r.slice(2).join(" "),s=o.concat(", ").concat(i);return t.date=s,t.source=e.source.name,t.link=e.url,e.urlToImage?t.image=e.urlToImage:t.image="https://cs.pikabu.ru/post_img/big/2013/08/24/1/1377296637_1500370441.png",t}))).length){var r=JSON.stringify(a);localStorage.setItem("news",r);var o=JSON.parse(localStorage.getItem("news"));e.setArticles(o),e.setDataLoaded(!0)}else e.setSearchError("\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")})).catch((function(t){e.setSearchError("\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437")})),e.scroller()}(),u("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"))}},"\u0418\u0441\u043a\u0430\u0442\u044c")))},k=a(11),C="http://api.diplomus.students.nomoreparties.xyz";a(62),a(63),a(64),a(65),a(66),a(67),a(68),a(69);var y=function(e){function t(){(function(e,t,a){var n=a.title,r=a.text,o=a.date,i=a.source,s=a.link,c=a.image;return fetch("".concat(C,"/articles"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({keyword:t,title:n,text:r,date:o,source:i,link:s,image:c})}).then((function(e){try{if(201===e.status)return e.json();if(400===e.status)return Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)));if(401===e.status)return Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}catch(t){return t}})).then((function(e){var t=JSON.parse(localStorage.getItem("articles")),a=[].concat(Object(k.a)(t),[e]),n=a.reverse()[0];a.reverse();var r=JSON.stringify(a);return localStorage.setItem("articles",r),n})).catch((function(e){return Promise.reject(e)}))})(localStorage.getItem("token"),e.article.keyword,e.article).then((function(t){s(!0);var a=JSON.parse(localStorage.getItem("news")).map((function(a){return a.link===e.article.link&&(a._id=t._id,a.marked=!0),a}));localStorage.removeItem("news");var n=JSON.stringify(a);localStorage.setItem("news",n)})).then((function(){var t=JSON.parse(localStorage.getItem("news"));e.setArticles(t)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}function a(){var t,a=localStorage.getItem("token");(s(!1),e.article._id)?t=e.article._id:t=JSON.parse(localStorage.getItem("news")).filter((function(t){return t.link===e.article.link}))[0]._id;(function(e,t){return fetch("".concat(C,"/articles/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))})).then((function(e){var a=JSON.parse(localStorage.getItem("articles")).filter((function(e){return e._id!==t})),n=JSON.stringify(a);localStorage.removeItem("articles"),localStorage.setItem("articles",n)})).catch((function(e){return Promise.reject(e)}))})(a,t).then((function(){var t=JSON.parse(localStorage.getItem("news")).map((function(t){return t._link!==e.article.link&&(t.marked=!1),t})),a=JSON.stringify(t);localStorage.removeItem("news"),localStorage.setItem("news",a);var n=JSON.parse(localStorage.getItem("articles"));e.updateSavedNews(n)}))}var n=r.a.useState(!1),o=Object(c.a)(n,2),i=o[0],s=o[1];function u(){a()}return r.a.useEffect((function(){!0===e.article.marked&&s(!0)}),[]),e.loggedIn?r.a.createElement(r.a.Fragment,null,e.isSavedNewsPage?r.a.createElement("div",{className:"NewsCardPanel ".concat(e.isSavedNewsPage&&"NewsCardPanel_savedPages")},r.a.createElement("h2",{className:"NewsCardPanel__keyword"},e.article.keyword),r.a.createElement("button",{type:"button",onClick:u,className:"NewsCardPanel__button NewsCardPanel__button_delete"}),r.a.createElement("h2",{className:"NewsCardPanel__tooltip"},"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445")):r.a.createElement("div",{className:"NewsCardPanel"},r.a.createElement("button",{type:"button",onClick:function(){i?u():t()},className:"NewsCardPanel__button NewsCardPanel__button_save ".concat(i&&"NewsCardPanel__button_marked")}))):r.a.createElement("div",{className:"NewsCardPanel"},r.a.createElement("button",{className:"NewsCardPanel__button NewsCardPanel__button_save",onClick:function(){e.setRegisterPopupOpen(!0)}}),r.a.createElement("h2",{className:"NewsCardPanel__tooltip",onClick:function(){return r.a.createElement(l.a,{to:{path:"/",state:{setLoginPopupOpen:!0}}})}},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438"))};a(70),a(71),a(72),a(73),a(74),a(75),a(76);var O=function(e){return r.a.createElement("section",{className:"NewsCard"},r.a.createElement("a",{href:e.article.link,target:"blank",style:{display:"contents"}},r.a.createElement("img",{className:"NewsCard__image",src:e.article.image,alt:"caption"})),r.a.createElement(y,{loggedIn:e.loggedIn,isSavedNewsPage:e.isSavedNewsPage,article:e.article,setArticles:e.setArticles,keyword:e.keyword,saveArticle:e.saveArticle,updateSavedNews:e.updateSavedNews,setRegisterPopupOpen:e.setRegisterPopupOpen}),r.a.createElement("a",{style:{textDecoration:"none"},href:e.article.link,target:"blank"},r.a.createElement("p",{className:"NewsCard__text-content NewsCard__date"},e.article.date),r.a.createElement("h1",{className:"NewsCard__text-content NewsCard__title"},e.article.title),r.a.createElement("h2",{className:"NewsCard__text-content NewsCard__text"},e.article.text),r.a.createElement("h3",{className:"NewsCard__text-content NewsCard__source"},e.article.source)))};a(77),a(78),a(79),a(80);var I=function(e){var t=JSON.parse(localStorage.getItem("articles")),a=JSON.parse(localStorage.getItem("news")),o=[];null!==a&&void 0!==a&&(o=a.slice(0,3));var i=Object(n.useState)(o),s=Object(c.a)(i,2),l=s[0],u=s[1],m=[];null!==a&&void 0!==a&&(m=a.slice(3));var d=Object(n.useState)(m),g=Object(c.a)(d,2),p=g[0],f=g[1];return r.a.createElement("article",{className:"NewsCardList"},e.isSavedNewsPage?r.a.createElement("section",{className:"NewsCardList__container"},t.map((function(t){return r.a.createElement(O,{key:t._id,NewsCard:O,loggedIn:e.loggedIn,isSavedNewsPage:e.isSavedNewsPage,setArticles:e.setArticles,article:t,keyword:e.keyword,updateSavedNews:e.updateSavedNews})}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"NewsCardList__title"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"),r.a.createElement("section",{className:"NewsCardList__container"},l.map((function(t,a){return r.a.createElement(O,{key:a,NewsCard:O,loggedIn:e.loggedIn,isSavedNewsPage:e.isSavedNewsPage,setArticles:e.setArticles,article:t,keyword:e.keyword,updateSavedNews:e.updateSavedNews,setRegisterPopupOpen:e.setRegisterPopupOpen})}))),p.length>0?r.a.createElement("button",{type:"button",className:"NewsCardList__button",onClick:function(){var e=p.slice(0,3),t=p.slice(3);f(t),u([].concat(Object(k.a)(l),Object(k.a)(e)))}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"):""))};a(81),a(82),a(83),a(20),a(84),a(85),a(86),a(87),a(88),a(89),a(90);var j=function(e){return""!==e.searchError?r.a.createElement("section",{className:"Preloader"},r.a.createElement("figure",{className:"Preloader__figure"},r.a.createElement("div",{className:"Preloader__figure-bigcircle"}),r.a.createElement("div",{className:"Preloader__figure-smallcircle Preloader__figure-smallcircle_left"}),r.a.createElement("div",{className:"Preloader__figure-smallcircle Preloader__figure-smallcircle_right"}),r.a.createElement("div",{className:"Preloader__figure-smile"}),r.a.createElement("div",{className:"Preloader__figure-tail"})),r.a.createElement("h1",{className:"Preloader__errorTitle"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),r.a.createElement("p",{className:"Preloader__text"},e.searchError)):r.a.createElement("section",{className:"Preloader"},r.a.createElement("figure",{className:"Preloader__rotator"}),r.a.createElement("p",{className:"Preloader__text"},"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."))},L=a(27),F=a.n(L);a(91),a(92),a(93),a(94);var x=function(){return r.a.createElement("article",{className:"About"},r.a.createElement("img",{className:"About__avatar",alt:"avatar",src:F.a}),r.a.createElement("h1",{className:"About__title"},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"),r.a.createElement("p",{className:"About__text"},"\u0420\u0430\u0437\u0434\u043e\u043b\u0431\u0430\u0439, \u043a\u043e\u043c\u043f\u044a\u044e\u0442\u0435\u0440\u043d\u044b\u0439 \u0433\u0435\u043d\u0438\u0439, \u0438.\u0442.\u0434... \u0427\u0435\u0433\u043e \u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u0432\u043e\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043d\u0435 \u0441\u043b\u044b\u0448\u0430\u043b, \u043d\u043e \u0447\u0442\u043e\u0431\u044b \u044f \u043e \u0441\u0435\u0431\u0435 \u043d\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043b, \u0440\u0435\u0448\u0430\u0442\u044c \u0432\u0430\u043c, \u0432\u0435\u0440\u0438\u0442\u044c \u043c\u043e\u0438\u043c \u0441\u043b\u043e\u0432\u0430\u043c \u0438\u043b\u0438 \u043d\u0435\u0442. \u0422\u0430\u043a \u0447\u0442\u043e \u043d\u0435 \u0441\u0442\u0430\u043d\u0443 \u043c\u043d\u043e\u0433\u043e\u0441\u043b\u043e\u0432\u0438\u0442\u044c, \u0441\u0443\u0434\u0438\u0442\u0435 \u043c\u0435\u043d\u044f \u043f\u043e \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u044f \u0434\u0435\u043b\u0430\u044e."))};a(95);var A=function(e){return r.a.createElement("main",{className:"Main"},e.isResponseSending?e.isDataLoaded?r.a.createElement(I,{loggedIn:e.loggedIn,isSavedNewsPage:e.isSavedNewsPage,setArticles:e.setArticles,updateSavedNews:e.updateSavedNews,keyword:e.keyword,setRegisterPopupOpen:e.setRegisterPopupOpen}):r.a.createElement(j,{searchError:e.searchError}):"",r.a.createElement(x,null))};a(96),a(97),a(98),a(99);var V=function(){var e,t=r.a.useContext(m),a=JSON.parse(localStorage.getItem("articles")),n=a.map((function(e){return e.keyword})),o=a.length,i=n.reduce((function(e,t){return e[t]?e[t]+=1:e[t]=1,e}),{}),s=Object.keys(i).sort((function(e,t){return i[t]-i[e]}));function c(){return 1===s.length?"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443: ":"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c: "}function l(){return 1===s.length?"".concat(s[0]):2===s.length?"".concat(s[0]," \u0438 ").concat(s[1]):"".concat(s[0],", ").concat(s[1]," ")}return c(),e=1===o?"\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f":o>1&&o<5?"\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u044c\u0438":"\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439",r.a.createElement("article",{className:"SavedNewsHeader"},r.a.createElement("p",{className:"SavedNewsHeader__caption"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),r.a.createElement("h1",{className:"SavedNewsHeader__title"},"".concat(t.name,", \u0443 \u0432\u0430\u0441 ").concat(o," ").concat(e)),n.length>0?s.length<3?r.a.createElement("h2",{className:"SavedNewsHeader__hashtag-information"},c(),r.a.createElement("b",null,l())):r.a.createElement("h2",{className:"SavedNewsHeader__hashtag-information"},c(),r.a.createElement("b",null,l()),"\u0438 ",r.a.createElement("b",null,function(){var e=s.length-2;return 3===s.length?"".concat(s[2]):s.length>3&&s.length<7?"".concat(e,"-\u043c \u0434\u0440\u0443\u0433\u0438\u043c"):"".concat(e,"-\u0438 \u0434\u0440\u0443\u0433\u0438\u043c")}())):"")};a(100);var W=function(e){var t=r.a.useContext(m);return Object(n.useEffect)((function(){e.setSavedNewsPage(!0)})),r.a.createElement("main",{className:"SavedNews"},r.a.createElement(m.Provider,{value:t},r.a.createElement(V,{loggedIn:e.loggedIn})),r.a.createElement(I,{loggedIn:e.loggedIn,isSavedNewsPage:e.isSavedNewsPage,setArticles:e.setArticles,updateSavedNews:e.updateSavedNews}))},J=a(28),R=a.n(J),T=a(29),B=a.n(T);a(101),a(102),a(103),a(21),a(104),a(105);var M=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("p",{className:"Footer__copyright"},"\xa9 2020 \u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0410\u043a\u0443\u043b\u0438\u0447, Powered by News API"),r.a.createElement("ul",{className:"Footer__links"},r.a.createElement("li",{style:{listStyle:"none"}},r.a.createElement(s.b,{to:"/",className:"Footer__text-link"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",{style:{listStyle:"none"}},r.a.createElement("a",{href:"https://praktikum.yandex.ru/",className:"Footer__text-link",target:"blank"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c")),r.a.createElement("li",{style:{listStyle:"none"}},r.a.createElement("a",{href:"https://github.com/loki87by",className:"Footer__social-link Footer__social-link_mobile-position",target:"blank"},r.a.createElement("img",{src:R.a,alt:"github"}))),r.a.createElement("li",{style:{listStyle:"none"}},r.a.createElement("a",{href:"https://www.facebook.com/akyla666/",className:"Footer__social-link",target:"blank"},r.a.createElement("img",{alt:"facebook",src:B.a})))))};a(106),a(107),a(108),a(109),a(110),a(22),a(23),a(14),a(24),a(111),a(112),a(113);var D=function(e){return r.a.createElement("section",{className:"PopupWithForm ".concat(e.isOpen&&"PopupWithForm_opened"),id:e.name},r.a.createElement("form",{className:"PopupWithForm__container",name:e.name,onSubmit:e.onSubmit,method:"POST",action:"#",id:"PopupWithForm"},r.a.createElement("button",{className:"PopupWithForm__close",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose,id:"closeAllPopups"}),r.a.createElement("h1",{className:"PopupWithForm__text"},e.title),r.a.createElement("label",{htmlFor:"email",className:"PopupWithForm__label"},"Email",r.a.createElement("input",{required:!0,type:"text",className:"PopupWithForm__input",onChange:function(t){return e.handleEmailChange(t)},value:e.userEmail,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",id:e.emailId,name:"email",disabled:!!e.isRequestSending}),r.a.createElement("span",{className:"PopupWithForm__error"},e.isValidEmail?" ":e.invalidEmailMessage)),r.a.createElement("label",{htmlFor:"pass",className:"PopupWithForm__label"},"\u041f\u0430\u0440\u043e\u043b\u044c",r.a.createElement("input",{required:!0,type:"password",className:"PopupWithForm__input",onChange:function(t){return e.handlePasswordChange(t)},value:e.userPassword,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:e.passiD,name:"pass",disabled:!!e.isRequestSending}),r.a.createElement("span",{className:"PopupWithForm__error"},e.isValidPassword?" ":e.invalidPasswordMessage)),e.children,r.a.createElement("button",{type:"submit",className:"PopupWithForm__submit",onClick:e.handleSubmit,disabled:!("login"===e.name?e.isValidEmail&&e.isValidPassword:e.isValidEmail&&e.isValidPassword&&e.isValidName)&&"disabled",style:{backgroundColor:"".concat(("login"===e.name?e.isValidEmail&&e.isValidPassword:e.isValidEmail&&e.isValidPassword&&e.isValidName)?"":"#E6E8EB"),color:"".concat(("login"===e.name?e.isValidEmail&&e.isValidPassword:e.isValidEmail&&e.isValidPassword&&e.isValidName)?"":"#B6BCBF")}},e.link),r.a.createElement("p",{className:"PopupWithForm__subsidiary-text"},"\u0438\u043b\u0438\xa0",r.a.createElement("button",{onClick:e.changeLink,type:"button",className:"PopupWithForm__subsidiary-text PopupWithForm__link"},e.antilink))))};var q=function(e){return r.a.createElement(D,{isOpen:e.isOpen,onClose:e.closeAllPopups,onSubmit:function(t){t.preventDefault(),e.setRequestSending(!0),e.isValidEmail&&e.isValidPassword&&e.isValidName&&e.onRegister()},name:"registration",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",link:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",antilink:" \u0412\u043e\u0439\u0442\u0438",emailId:"regEmail",passiD:"regPass",userEmail:e.userEmail,userPassword:e.userPassword,changeLink:e.changeLink,isValidEmail:e.isValidEmail,invalidEmailMessage:e.invalidEmailMessage,handleEmailChange:e.handleEmailChange,isValidPassword:e.isValidPassword,invalidPasswordMessage:e.invalidPasswordMessage,handlePasswordChange:e.handlePasswordChange,isValidName:e.isValidName,invalidNameMessage:e.invalidNameMessage,handleNameChange:e.handleNameChange,isRequestSending:e.isRequestSending,children:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"name",className:"PopupWithForm__label"},"\u0418\u043c\u044f",r.a.createElement("input",{required:!0,type:"name",className:"PopupWithForm__input",onChange:function(t){return e.handleNameChange(t)},value:e.userName,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",id:"name",name:"name"}),r.a.createElement("span",{className:"PopupWithForm__error"},e.isValidName?" ":e.invalidNameMessage)),r.a.createElement("span",{className:"PopupWithForm__error PopupWithForm__error_registrationError"},e.registrationError))})};a(114);var H=function(e){return r.a.createElement(D,{isOpen:e.isOpen,onClose:e.closeAllPopups,onSubmit:function(t){t.preventDefault(),e.setRequestSending(!0),e.onLogin()},name:"login",title:"\u0412\u0445\u043e\u0434",link:"\u0412\u043e\u0439\u0442\u0438",emailId:"loginEmail",passiD:"loginPass",antilink:" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",userEmail:e.userEmail,userPassword:e.userPassword,changeLink:e.changeLink,isValidEmail:e.isValidEmail,invalidEmailMessage:e.invalidEmailMessage,handleEmailChange:e.handleEmailChange,isValidPassword:e.isValidPassword,invalidPasswordMessage:e.invalidPasswordMessage,handlePasswordChange:e.handlePasswordChange,isValidName:e.isValidName,isRequestSending:e.isRequestSending,children:r.a.createElement("span",{className:"PopupWithForm__error PopupWithForm__error_loginError"},e.loginError)})};a(115),a(116),a(117),a(118),a(119),a(120);var z=function(e){function t(t){"Escape"===t.key&&e.onClose()}function a(t){t.target.classList.contains("TooltipPopup_opened")&&e.onClose()}return r.a.useEffect((function(){window.addEventListener("keydown",t),window.addEventListener("click",a)})),r.a.createElement("section",{className:"TooltipPopup ".concat(e.isOpen&&"TooltipPopup_opened"),id:"TooltipPopup"},r.a.createElement("div",{className:"TooltipPopup__container"},r.a.createElement("button",{className:"TooltipPopup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose,id:"closeTooltip"}),r.a.createElement("h1",{className:"TooltipPopup__text"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"),r.a.createElement("button",{onClick:function(){e.onClose(),e.handleLoginClick()},type:"button",className:"TooltipPopup__link"},"\u0412\u043e\u0439\u0442\u0438")))},$=a(30),G=function(e){var t=e.component,a=Object($.a)(e,["component"]);return r.a.useEffect((function(){a.loggedIn||a.handleLoginClick()})),r.a.createElement(l.b,null,(function(){return a.loggedIn?r.a.createElement(t,a):r.a.createElement(l.a,{to:"/"})}))};a(121),a(122),a(123);var K=function(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],o=t[1],i=r.a.useState(!1),s=Object(c.a)(i,2),d=s[0],f=s[1],h=r.a.useState(!1),E=Object(c.a)(h,2),v=E[0],N=E[1],_=r.a.useState(!1),w=Object(c.a)(_,2),k=w[0],y=w[1],O=r.a.useState(!1),I=Object(c.a)(O,2),j=I[0],L=I[1],F=r.a.useState(""),x=Object(c.a)(F,2),V=x[0],J=x[1],R=r.a.useState(""),T=Object(c.a)(R,2),B=T[0],D=T[1],$=r.a.useState(!1),K=Object(c.a)($,2),Z=K[0],Q=K[1],U=r.a.useState(""),X=Object(c.a)(U,2),Y=X[0],ee=X[1],te=r.a.useState(!1),ae=Object(c.a)(te,2),ne=ae[0],re=ae[1],oe=r.a.useState(!1),ie=Object(c.a)(oe,2),se=ie[0],ce=ie[1],le=r.a.useState(""),ue=Object(c.a)(le,2),me=ue[0],de=ue[1],ge=r.a.useState(""),pe=Object(c.a)(ge,2),fe=pe[0],he=pe[1],Ee=r.a.useState(!1),ve=Object(c.a)(Ee,2),Ne=ve[0],_e=ve[1],we=r.a.useState([]),Se=Object(c.a)(we,2),Pe=Se[0],be=Se[1],ke=r.a.useState([]),Ce=Object(c.a)(ke,2),ye=Ce[0],Oe=Ce[1],Ie=r.a.useState({}),je=Object(c.a)(Ie,2),Le=je[0],Fe=je[1],xe=r.a.useState(""),Ae=Object(c.a)(xe,2),Ve=Ae[0],We=Ae[1],Je=r.a.useState(""),Re=Object(c.a)(Je,2),Te=Re[0],Be=Re[1],Me=r.a.useState(""),De=Object(c.a)(Me,2),qe=De[0],He=De[1],ze=r.a.useState(!1),$e=Object(c.a)(ze,2),Ge=$e[0],Ke=$e[1],Ze=r.a.useState(!1),Qe=Object(c.a)(Ze,2),Ue=Qe[0],Xe=Qe[1],Ye=r.a.useState(""),et=Object(c.a)(Ye,2),tt=et[0],at=et[1],nt=r.a.useState({}),rt=Object(c.a)(nt,2),ot=rt[0],it=rt[1],st=Object(l.g)();function ct(){y(!0)}function lt(){var e=localStorage.getItem("token");(function(e){return fetch("".concat(C,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))})(e).then((function(e){Fe(e),o(!0),st.push("/")})).catch((function(){return Et()})).finally((function(){(function(e){return fetch("".concat(C,"/articles"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))})).catch((function(e){return Promise.reject(e)}))})(e).then((function(e){var t=JSON.stringify(e);localStorage.setItem("articles",t),Oe(e);var a=localStorage.getItem("news");a&&(Ke(!0),Xe(!0),be(JSON.parse(a)))})).catch((function(e){console.log(e)}))}))}function ut(){var e,t,a=Ve,n=Te;e=k?document.getElementById("loginEmail").value:document.getElementById("regEmail").value,t=k?document.getElementById("loginPass").value:document.getElementById("regPass").value,a===e&&n===t||(D(""),J(""),document.getElementById("regEmail").removeEventListener("input",ut),document.getElementById("regPass").removeEventListener("input",ut),document.getElementById("loginEmail").removeEventListener("input",ut),document.getElementById("loginPass").removeEventListener("input",ut))}function mt(){y(!1),L(!1),N(!1),We(""),Be(""),He(""),ee(""),de(""),he("")}function dt(e){"Escape"===e.key&&mt()}function gt(e){e.target.classList.contains("PopupWithForm_opened")&&mt()}function pt(e){We(e.target.value);var t=e.target.value;S.test(t)?Q(!0):t.length<1?(Q(!1),ee("")):(ee("email \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e"),Q(!1))}function ft(e){Be(e.target.value);var t=e.target.value,a=P.test(t);0===t.length?(de(""),re(!1)):t.length<8&&t.length>0?(re(!1),de("\u041f\u0430\u0440\u043e\u043b\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439")):a?(de(""),re(!0)):(de("\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b \u0438 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0443"),re(!1))}function ht(){v?(N(!1),y(!0)):(N(!0),y(!1))}function Et(){localStorage.removeItem("news"),localStorage.removeItem("articles"),localStorage.removeItem("token"),be([]),Ke(!1),Xe(!1),f(!1),o(!1),st.push("/")}Object(n.useEffect)((function(){var e=localStorage.getItem("token");e&&lt()}),[]),r.a.useEffect((function(){window.addEventListener("keydown",dt),window.addEventListener("click",gt)}));var vt=JSON.parse(localStorage.getItem("news")),Nt=JSON.parse(localStorage.getItem("articles"));null!==Nt&&void 0!==Nt&&null!==vt&&void 0!==vt&&vt.forEach((function(e){if(Nt.some((function(t){return e.link===t.link})))return e.marked=!0})),localStorage.removeItem("news");var _t=JSON.stringify(vt);return localStorage.setItem("news",_t),Object(n.useEffect)((function(){var e=localStorage.getItem("news");return function(){be(JSON.parse(e))}}),[]),Object(n.useEffect)((function(){var e=localStorage.getItem("articles");return function(){Oe(JSON.parse(e))}}),[]),Object(n.useEffect)((function(){function e(){if("/saved-pages"===window.location&&!1===a)return r.a.createElement(l.a,{to:{path:"/",state:{setLoginPopupOpen:!0}}})}return window.addEventListener("hashchange",e),e(),function(){return window.removeEventListener("hashchange",e)}})),r.a.createElement(m.Provider,{value:Le},r.a.createElement("div",{className:"App"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement("div",{className:"App__background App__background-image"},r.a.createElement(g,{loggedIn:a,handleLoginClick:ct,isSavedNewsPage:d,setSavedNewsPage:f,logOut:Et}),r.a.createElement(u.ScrollTo,null,(function(e){var t=e.scroll;return r.a.createElement(b,{scroller:function(){return t({y:550,smooth:!0})},setSavedNewsPage:f,setResponseSending:Ke,isDataLoaded:Ue,setDataLoaded:Xe,setKeyword:it,setArticles:be,setSearchError:at})}))),r.a.createElement(A,{loggedIn:a,isSavedNewsPage:d,isResponseSending:Ge,isDataLoaded:Ue,articles:Pe,setArticles:be,searchError:tt,savedNews:ye,keyword:ot,updateSavedNews:Oe,setRegisterPopupOpen:N})),r.a.createElement(l.b,null,r.a.createElement("div",{className:"App__background"},r.a.createElement(g,{loggedIn:a,handleLoginClick:ct,isSavedNewsPage:d,setSavedNewsPage:f,logOut:Et})),r.a.createElement(G,{exact:!0,path:"/saved-pages",loggedIn:a,component:W,isSavedNewsPage:d,setSavedNewsPage:f,setArticles:be,updateSavedNews:Oe,handleLoginClick:ct})),r.a.createElement(l.b,null,a?r.a.createElement(l.a,{to:"/saved-pages"}):r.a.createElement(l.a,{to:{path:"/",state:{setRegisterPopupOpen:!0}}}))),r.a.createElement(H,{isOpen:k,onLogin:function(){var e,t;Ke(!0),(e=Ve,t=Te,fetch("".concat(C,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){try{if(200===e.status)return e.json();if(400===e.status)return Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)));if(401===e.status)return Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}catch(t){return t}})).catch((function(e){return Promise.reject(e)})).then((function(e){return e.token})).catch((function(e){return Promise.reject(e)}))).then((function(e){e&&(localStorage.setItem("token",e),mt(),lt())})).catch((function(e){e.message.includes(401)?(D("\u041e\u0448\u0438\u0431\u043a\u0430: \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),document.getElementById("loginEmail").addEventListener("input",ut),document.getElementById("loginPass").addEventListener("input",ut)):D(p)})),Ke(!1)},closeAllPopups:mt,userEmail:Ve,userPassword:Te,changeLink:ht,isValidEmail:Z,invalidEmailMessage:Y,handleEmailChange:pt,isValidPassword:ne,invalidPasswordMessage:me,handlePasswordChange:ft,loginError:B,isRequestSending:Ne,setRequestSending:_e}),r.a.createElement(q,{isOpen:v,closeAllPopups:mt,onRegister:function(){var e,t,a;_e(!0),console.log(Ne),(e=Ve,t=Te,a=qe,fetch("".concat(C,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t,name:a})}).then((function(e){try{if(201===e.status)return e.json();if(409===e.status)return Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}catch(t){return t}})).catch((function(e){return Promise.reject(e)}))).then((function(e){e&&(mt(),L(!0))})).catch((function(e){L(!1),e.message.includes(409)?(J("\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"),document.getElementById("regEmail").addEventListener("input",ut),document.getElementById("regPass").addEventListener("input",ut)):J(p)})),_e(!1)},userEmail:Ve,userPassword:Te,userName:qe,changeLink:ht,isValidEmail:Z,invalidEmailMessage:Y,handleEmailChange:pt,isValidPassword:ne,invalidPasswordMessage:me,handlePasswordChange:ft,isValidName:se,invalidNameMessage:fe,handleNameChange:function(e){He(e.target.value);var t=e.target.value;t.length<2?(he("\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),ce(!1)):t.length>30?(he("\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),ce(!1)):(ce(!0),he(""))},registrationError:V,isRequestSending:Ne,setRequestSending:_e}),r.a.createElement(z,{isOpen:j,handleLoginClick:ct,onClose:mt}),r.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.dae18807.chunk.js.map