(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{15:function(e,t,c){e.exports={overlay:"Drawer_overlay__1JqaJ",overlayVisible:"Drawer_overlayVisible__XZWeB",drawer:"Drawer_drawer__L-c_Z",items:"Drawer_items__2XZql",removeBtn:"Drawer_removeBtn__34OdG"}},19:function(e,t,c){e.exports={card:"Card_card__1P8pC",favorite:"Card_favorite__1kU4p",button:"Card_button__2361_"}},40:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(32),s=c.n(a),i=c(13),o=(c(40),c(41),c(10)),l=c(12),j=c(5),d=c.n(j),u=c(11),b=c(4),x=function(){var e=Object(r.useContext)(M),t=e.cartItems,c=e.setCartItems,n=t.reduce((function(e,t){return e+t.price}),0);return{cartItems:t,setCartItems:c,totalPrice:n}},h=c(0),m=function(e){var t=e.image,c=e.title,n=e.description,a=Object(r.useContext)(M).setCartOpened;return Object(h.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column",children:[Object(h.jsx)("img",{className:"mb-20",width:120,src:t,alt:"Empty Cart"}),Object(h.jsx)("h2",{children:c}),Object(h.jsx)("p",{className:"opacity-6 text-center",children:n}),Object(h.jsxs)("button",{onClick:function(){return a(!1)},className:"greenButton",children:[Object(h.jsx)("img",{className:"pr-10",src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},C=c(15),O=c.n(C),f=function(e){return new Promise((function(t){return setTimeout(t,e)}))},v=function(e){var t=e.onClose,c=e.onRemove,n=e.opened,a=e.items,s=void 0===a?[]:a,i=Object(r.useContext)(M).instance,o=x(),l=o.cartItems,j=o.setCartItems,C=o.totalPrice,v=Object(r.useState)(!1),p=Object(b.a)(v,2),g=p[0],w=p[1],N=Object(r.useState)(null),k=Object(b.a)(N,2),y=k[0],L=k[1],_=Object(r.useState)(!1),B=Object(b.a)(_,2),I=B[0],S=B[1],F=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,i.post("orders",{items:l});case 4:t=e.sent,c=t.data,L(c.id),w(!0),j([]),r=0;case 10:if(!(r<l.length)){e.next=19;break}return n=l[r],e.next=14,i.delete("cart/"+n.id);case 14:return e.next=16,f(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 :(");case 24:S(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"".concat(O.a.overlay," ").concat(n?O.a.overlayVisible:""),children:Object(h.jsx)("div",{className:"".concat(O.a.drawer," d-flex justify-between flex-column"),children:Object(h.jsxs)("div",{className:"d-flex flex-column flex justify-between",style:{overflow:"auto"},children:[Object(h.jsxs)("h2",{className:"mb-30 d-flex justify-between",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(h.jsx)("img",{onClick:t,className:O.a.removeBtn,src:"img/btn_remove.svg",alt:"remove"})]}),s.length>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:O.a.items,style:{overflow:"auto"},children:s.map((function(e,t){return Object(h.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(h.jsxs)("div",{className:"mr-20 flex",children:[Object(h.jsx)("p",{className:"mb-5",children:e.name}),Object(h.jsxs)("b",{children:[e.price.toLocaleString("ru")," \u0440\u0443\u0431."]})]}),Object(h.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn_remove.svg",alt:"remove"})]},e.name+e.imageUrl+t)}))}),Object(h.jsxs)("div",{className:"cardTotalBlock mt-50",children:[Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[C," \u0440\u0443\u0431. "]}),Object(h.jsx)("b",{})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%: "}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[.05*C," \u0440\u0443\u0431. "]})]})]}),Object(h.jsxs)("button",{disabled:I,onClick:F,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(h.jsx)("img",{src:"img/arrow_cart.svg",alt:"arrow_cart"})]})]})]}):Object(h.jsx)(m,{title:g?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:g?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(y," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:g?"img/complete_order.jpg":"img/empty_cart.jpg"})]})})})},p=function(e){var t=e.onClickCart,c=x().totalPrice;return Object(h.jsxs)("header",{className:"d-flex flex-wrap justify-between align-center p-40",children:[Object(h.jsxs)(i.b,{to:"/",children:[" ",Object(h.jsxs)("div",{className:"d-flex align-center",children:[Object(h.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"text-uppercase",children:"REACT SNEAKERS"}),Object(h.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})]}),Object(h.jsx)("div",{className:"user_ui",children:Object(h.jsxs)("ul",{className:"d-flex align-center",children:[Object(h.jsxs)("li",{onClick:t,className:"mr-30 d-flex align-end",children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z",stroke:"#9B9B9B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z",stroke:"#9B9B9B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H3.09091",stroke:"#9B9B9B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(h.jsxs)("span",{className:"ml-10",children:[c," \u0440\u0443\u0431."]}),"  "]}),Object(h.jsx)("li",{className:"mr-30 d-flex mt-5 align-center",children:Object(h.jsx)(i.b,{to:"/favorites",children:Object(h.jsx)("svg",{width:"22",height:"19",viewBox:"0 0 22 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z",fill:"#9B9B9B"})})})}),Object(h.jsx)("li",{className:"d-flex align-center",children:Object(h.jsx)(i.b,{to:"/orders",children:Object(h.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z",fill:"#9B9B9B"})})})})]})})]})},g=c(34),w=c(2),N=c(19),k=c.n(N),y=c(35),L=function(e){var t=e.id,c=e.name,n=e.price,a=e.imageUrl,s=e.onPlus,i=e.onFavorite,o=e.favorited,l=void 0!==o&&o,j=e.loading,d=void 0!==j&&j,u=Object(r.useContext)(M).isItemAdded,x=Object(r.useState)(l),m=Object(b.a)(x,2),C=m[0],O=m[1],f={id:t,parentId:t,name:c,price:n,imageUrl:a};return Object(h.jsx)("div",{className:k.a.card,children:d?Object(h.jsxs)(y.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(h.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(h.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(h.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{onClick:function(){i(f),O(!C)},className:k.a.favorite,children:C?Object(h.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("rect",{width:"32",height:"32",rx:"7",fill:"#FEF0F0"}),Object(h.jsx)("path",{d:"M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z",fill:"#FF8585"})]}):Object(h.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("rect",{x:"0.5",y:"0.5",width:"31",height:"31",rx:"6.5",fill:"white",stroke:"#F3F3F3"}),Object(h.jsx)("path",{d:"M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.756 12.0728 21.9429 12.5021C22.1365 12.9486 22.2347 13.4203 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3936 21.4543 15.417 21.469 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z",stroke:"#c0c0c0",strokeWidth:"1.4"})]})}),Object(h.jsx)("img",{width:"100%",height:135,src:a,alt:"card_item"}),Object(h.jsx)("h3",{children:c}),Object(h.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{children:"\u0426\u0415\u041d\u0410:"}),Object(h.jsxs)("b",{children:[n.toLocaleString("ru")," \u0440\u0443\u0431."]})]}),s&&Object(h.jsx)("img",{src:u(t)?"img/btn_checked.svg":"img/btn_plus.svg",alt:"addToCart",onClick:function(){s(f)},className:k.a.button})]})]})})},_=function(e){var t=e.items,c=e.searchValue,r=e.onChangeSearchInput,n=e.onAddToFavorite,a=e.onAddToCart,s=e.isLoading;return Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(h.jsx)("h1",{children:c?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(c):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(h.jsxs)("div",{className:"search-block d-flex",children:[Object(h.jsx)("img",{src:"img/search.svg",alt:"Search"}),Object(h.jsx)("input",{className:"search",onChange:r,type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a"})]})]}),Object(h.jsx)("div",{style:{justifyContent:"space-evenly"},className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return(s?Object(l.a)(Array(8)):e).map((function(e,t){return Object(h.jsx)(L,Object(o.a)({onPlus:function(e){return a(e)},onFavorite:function(e){return n(e)},loading:s},e),t)}))}()})]})},B=function(){var e=Object(r.useContext)(M),t=e.favorites,c=e.onAddToFavorite;return Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(h.jsx)("div",{style:{justifyContent:"space-evenly"},className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(h.jsx)(L,Object(o.a)({favorited:!0,onFavorite:c},e),e.name+t)}))})]})},I=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),s=Object(b.a)(a,2),i=s[0],j=s[1],x=Object(r.useContext)(M),m=x.instance,C=x.onAddToFavorite;return Object(r.useEffect)((function(){Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("orders");case 3:t=e.sent,c=t.data,n(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),j(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(h.jsx)("div",{style:{justifyContent:"space-evenly"},className:"d-flex flex-wrap",children:(i?Object(l.a)(Array(8)):c).map((function(e,t){return Object(h.jsx)(L,Object(o.a)({onFavorite:function(e){return C(e)},loading:i},e),t)}))})]})},M=Object(r.createContext)({});function S(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),i=s[0],j=s[1],x=Object(r.useState)([]),m=Object(b.a)(x,2),C=m[0],O=m[1],f=Object(r.useState)(""),N=Object(b.a)(f,2),k=N[0],y=N[1],L=Object(r.useState)(!1),S=Object(b.a)(L,2),F=S[0],Z=S[1],A=Object(r.useState)(!0),T=Object(b.a)(A,2),E=T[0],H=T[1],P=g.create({baseURL:"https://60edf22ceb4c0a0017bf42cc.mockapi.io/",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,c,r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([P.get("cart"),P.get("favorites"),P.get("items")]);case 3:t=e.sent,c=Object(b.a)(t,3),r=c[0],a=c[1],s=c[2],H(!1),n(r.data),O(a.data),j(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 :(");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(){var e=Object(u.a)(d.a.mark((function e(t){var r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=c.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return n((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,P.delete("cart/".concat(r.id));case 6:e.next=14;break;case 8:return n((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,P.post("cart",t);case 11:a=e.sent,s=a.data,n((function(e){return e.map((function(e){return e.parentId===s.parentId?Object(o.a)(Object(o.a)({},e),{},{id:s.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n((function(e){return e.filter((function(e){return Number(e.id)!==Number(t)}))})),e.next=4,P.delete("cart/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!C.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}P.delete("favorites/".concat(t.id)),O((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,P.post("favorites",t);case 8:c=e.sent,r=c.data,O((function(e){return[].concat(Object(l.a)(e),[r])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438!");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(M.Provider,{value:{items:i,cartItems:c,favorites:C,instance:P,isItemAdded:function(e){return c.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:U,onAddToCart:V,setCartOpened:Z,setCartItems:n},children:Object(h.jsxs)("div",{className:"wrapper clear",children:[Object(h.jsx)(v,{items:c,onClose:function(){return Z(!1)},onRemove:R,opened:F}),Object(h.jsx)(p,{onClickCart:function(){return Z(!0)}}),Object(h.jsx)(w.a,{path:"/",exact:!0,children:Object(h.jsx)(_,{items:i,cartItems:c,searchValue:k,onChangeSearchInput:function(e){y(e.target.value)},onAddToFavorite:U,onAddToCart:V,isLoading:E})}),Object(h.jsx)(w.a,{path:"/favorites",exact:!0,children:Object(h.jsx)(B,{})}),Object(h.jsx)(w.a,{path:"/orders",exact:!0,children:Object(h.jsx)(I,{})})]})})}s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(S,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.305df510.chunk.js.map