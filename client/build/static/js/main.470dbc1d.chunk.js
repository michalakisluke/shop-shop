(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},76:function(e,t,a){e.exports=a(92)},81:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),o=a.n(c),l=(a(81),a(3)),i=a(10),u=a(8),s=a(70),m=a(94),d=a(105),p=a(103),f=a(69);function E(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var b=a(9);var g,h,O,v,y,j=function(e){var t=Object(b.c)((function(e){return e})),a=Object(b.b)(),n=e.image,c=e.name,o=e._id,u=e.price,s=e.quantity,m=t.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(o)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("div",null,s," ",function(e,t){return 1===t?e:e+"s"}("item",s)," in stock"),r.a.createElement("span",null,"$",u)),r.a.createElement("button",{onClick:function(){var t=m.find((function(e){return e._id===o}));t?(a({type:"UPDATE_CART_QUANTITY",_id:o,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),E("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})}),E("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},w=a(64),_=a(24),T=a(104),k=Object(T.a)(g||(g=Object(_.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),N=Object(T.a)(h||(h=Object(_.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),C=(Object(T.a)(O||(O=Object(_.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(T.a)(v||(v=Object(_.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),A=Object(T.a)(y||(y=Object(_.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),x=a(45),R=a.n(x);var D=function(){var e=Object(b.c)((function(e){return e})),t=Object(b.b)(),a=e.currentCategory,c=Object(w.a)(k),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_PRODUCTS",products:l.products}),l.products.forEach((function(e){E("products","put",e)}))):o||E("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[l,o,t]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),e.products.length?r.a.createElement("div",{className:"flex-row"},(a?e.products.filter((function(e){return e.category._id===a})):e.products).map((function(e){return r.a.createElement(j,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:R.a,alt:"loading"}):null)};var S=function(){var e=Object(b.c)((function(e){return e})),t=Object(b.b)(),a=e.categories,c=Object(w.a)(C),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_CATEGORIES",categories:l.categories}),l.categories.forEach((function(e){E("categories","put",e)}))):o||E("categories","get").then((function(e){t({type:"UPDATE_CATEGORIES",categories:e})}))}),[l,o,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),a.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var a;a=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},e.name)})))},P=a(17),U=a.n(P),I=a(28),Q=a(27),$=a(16),F=a(65),L=a(97),M=function(e){var t=e.item,a=Object(b.b)();return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),E("cart","delete",Object(l.a)({},t))):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),E("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),E("cart","delete",Object(l.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},q=a(66),G=a(67),Y=a(54),W=a.n(Y),B=new(function(){function e(){Object(q.a)(this,e)}return Object(G.a)(e,[{key:"getProfile",value:function(){return W()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return W()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),H=(a(91),Object(F.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),V=function(){var e=Object(b.c)((function(e){return e})),t=Object(b.b)(),a=Object(L.a)(N),c=Object($.a)(a,2),o=c[0],l=c[1].data;function i(){t({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){l&&H.then((function(e){e.redirectToCheckout({sessionId:l.checkout.session})}))}),[l]),Object(n.useEffect)((function(){function a(){return(a=Object(Q.a)(U.a.mark((function e(){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("cart","get");case 2:a=e.sent,t({type:"ADD_MULTIPLE_TO_CART",products:Object(I.a)(a)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.cart.length||function(){a.apply(this,arguments)}()}),[e.cart.length,t]),e.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:i},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),e.cart.length?r.a.createElement("div",null,e.cart.map((function(e){return r.a.createElement(M,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var t=0;return e.cart.forEach((function(e){t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()),B.loggedIn()?r.a.createElement("button",{onClick:function(){var t=[];e.cart.forEach((function(e){for(var a=0;a<e.purchaseQuantity;a++)t.push(e._id)})),o({variables:{products:t}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:i},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},J=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(S,null),r.a.createElement(D,null),r.a.createElement(V,null))};var z=function(){var e=Object(b.c)((function(e){return e})),t=Object(b.b)(),a=Object(u.f)().id,c=Object(n.useState)({}),o=Object($.a)(c,2),s=o[0],m=o[1],d=Object(w.a)(k),p=d.loading,f=d.data,g=e.products,h=e.cart;return Object(n.useEffect)((function(){g.length?m(g.find((function(e){return e._id===a}))):f?(t({type:"UPDATE_PRODUCTS",products:f.products}),f.products.forEach((function(e){E("products","put",e)}))):p||E("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[g,f,p,t,a]),r.a.createElement(r.a.Fragment,null,s&&h?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,s.name),r.a.createElement("p",null,s.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",s.price," ",r.a.createElement("button",{onClick:function(){var e=h.find((function(e){return e._id===a}));e?(t({type:"UPDATE_CART_QUANTITY",_id:a,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),E("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(t({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},s),{},{purchaseQuantity:1})}),E("cart","put",Object(l.a)(Object(l.a)({},s),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!h.find((function(e){return e._id===s._id})),onClick:function(){t({type:"REMOVE_FROM_CART",_id:s._id}),E("cart","delete",Object(l.a)({},s))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(s.image),alt:s.name})):null,p?r.a.createElement("img",{src:R.a,alt:"loading"}):null,r.a.createElement(V,null))};var K,X,Z,ee=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},te=function(){return r.a.createElement("div",null,r.a.createElement(ee,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},ae=a(33),ne=a(98),re=Object(T.a)(K||(K=Object(_.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ce=Object(T.a)(X||(X=Object(_.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),oe=Object(T.a)(Z||(Z=Object(_.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var le=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object($.a)(t,2),c=a[0],o=a[1],u=Object(ne.a)(re),s=Object($.a)(u,2),m=s[0],d=s[1].error,p=function(){var e=Object(Q.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,B.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(ae.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:f})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:f})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ie=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object($.a)(t,2),c=a[0],o=a[1],u=Object(ne.a)(oe),s=Object($.a)(u,1)[0],m=function(){var e=Object(Q.a)(U.a.mark((function e(t){var a,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,B.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(ae.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ue=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,B.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return B.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))},se=a(71),me={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""};var de=Object(se.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(l.a)(Object(l.a)({},e),{},{products:Object(I.a)(t.products)});case"ADD_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(I.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(I.a)(e.cart),Object(I.a)(t.products))});case"UPDATE_CART_QUANTITY":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(l.a)(Object(l.a)({},e),{},{cartOpen:a.length>0,cart:a});case"CLEAR_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(l.a)(Object(l.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(l.a)(Object(l.a)({},e),{},{categories:Object(I.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(l.a)(Object(l.a)({},e),{},{currentCategory:t.currentCategory});default:return e}}));var pe=function(){var e=Object(ne.a)(ce),t=Object($.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(Q.a)(U.a.mark((function e(){var a,n,r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){E("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(ee,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the home page")))};var fe=function(){var e,t=Object(w.a)(A).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},Ee=Object(s.a)({uri:"/graphql"}),be=Object(f.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),ge=new m.a({link:be.concat(Ee),cache:new d.a});var he=function(){return r.a.createElement(p.a,{client:ge},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(b.a,{store:de},r.a.createElement(ue,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:J}),r.a.createElement(u.a,{exact:!0,path:"/login",component:le}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:ie}),r.a.createElement(u.a,{exact:!0,path:"/success",component:pe}),r.a.createElement(u.a,{exact:!0,path:"/orderHistory",component:fe}),r.a.createElement(u.a,{exact:!0,path:"/products/:id",component:z}),r.a.createElement(u.a,{component:te}))))))},Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(t,e)}))}}()}},[[76,1,2]]]);
//# sourceMappingURL=main.470dbc1d.chunk.js.map