(()=>{var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{fetch("http://localhost:3000/api/products").then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){alert("Erreur : "+t)}));var t=function(t){for(var e in t){var n='\n            <a href="./product.html?id='.concat(t[e]._id,'">\n                <article>\n                    <img src="').concat(t[e].imageUrl,'" alt="').concat(t[e].altTxt,'">\n                    <h3 class="productName">').concat(t[e].name,'</h3>\n                    <p class="productDescription">').concat(t[e].description,"</p>\n                </article>\n            </a>");document.getElementById("items").innerHTML+=n}}})(),(()=>{function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=new URLSearchParams(window.location.search).get("id");fetch("http://localhost:3000/api/products/"+n).then((function(t){return t.json()})).then((function(r){var o=new(function(){function t(e,n,o,a,i,c,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=r._id,this.colors=r.colors,this.name=r.name,this.price=r.price,this.description=r.description,this.imageUrl=r.imageUrl,this.altTxt=r.altTxt}var n,o;return n=t,(o=[{key:"kanapProduct",value:function(){document.getElementById("title").innerHTML+=this.name,document.getElementById("price").innerHTML+=this.price,document.getElementById("description").innerHTML+=this.description;var t=document.createElement("img");for(var e in t.setAttribute("src",this.imageUrl),t.setAttribute("alt",this.altTxt),document.getElementsByClassName("item__img")[0].appendChild(t),this.colors)document.getElementById("colors").innerHTML+='<option value="'.concat(this.colors[e],'">').concat(this.colors[e],"</option>")}}])&&e(n.prototype,o),t}());o.kanapProduct(),document.getElementById("addToCart").addEventListener("click",(function(e){e.preventDefault();var r,a,i=document.getElementById("colors"),c=document.getElementById("quantity"),l=JSON.parse(localStorage.getItem("cart"))||[],u={id:n,name:o.name,price:o.price,description:o.description,imageUrl:o.imageUrl,altTxt:o.altTxt,color:i.value,quantity:Number(c.value)},s=!1,d=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(l);try{for(d.s();!(a=d.n()).done;){var m=a.value;m.color===u.color&&(s=!0,r=l.indexOf(m))}}catch(t){d.e(t)}finally{d.f()}""!==i.value&&0!==c.value?s?(l[r].quantity=+l[r].quantity+ +u.quantity,localStorage.setItem("cart",JSON.stringify(l)),window.confirm("".concat(u.name," ").concat(u.color," a bien été ajouté. Souhaitez vous consulter votre panier ?"))&&(window.location.href="cart.html")):(l.push(u),localStorage.setItem("cart",JSON.stringify(l)),window.confirm("".concat(u.name," ").concat(u.color," a bien été ajouté. Souhaitez vous consulter votre panier ?"))&&(window.location.href="cart.html")):alert("Veuillez sélectioner une couleur et une quantité supérieur à 0 !")}))})).catch((function(t){alert("Erreur : "+t)}))})(),(()=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.d({},{N:()=>o});var r,o=JSON.parse(localStorage.getItem("cart")),a=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(o);try{for(a.s();!(r=a.n()).done;){var i=r.value,c='\n  <article class="cart__item" data-id="'.concat(i.id,'">\n  <div class="cart__item__img">\n    <img src="').concat(i.imageUrl,'" alt="').concat(i.altTxt,'">\n  </div>\n  <div class="cart__item__content">\n    <div class="cart__item__content__titlePrice">\n      <h2>').concat(i.name,"</h2>\n      <h3>").concat(i.color,"</h3>\n      <p>").concat(i.price,'</p>\n    </div>\n    <div class="cart__item__content__settings">\n      <div class="cart__item__content__settings__quantity">\n        <p>Qté : </p>\n        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="').concat(i.quantity,'">\n      </div>\n      <div class="cart__item__content__settings__delete">\n        <p class="deleteItem">Supprimer</p>\n      </div>\n    </div>\n  </div>\n</article>');document.getElementById("cart__items").innerHTML+=c}}catch(t){a.e(t)}finally{a.f()}!function(){for(var t=document.getElementsByClassName("itemQuantity"),e=function(e){t[e].addEventListener("change",(function(n){n.preventDefault();var r=t[e].value,a={id:o[e]._id,description:o[e].description,imageUrl:o[e].imageUrl,altTxt:o[e].altTxt,name:o[e].name,color:o[e].color,price:o[e].price,quantity:r};o[e]=a,localStorage.setItem("cart",JSON.stringify(o)),location.reload()}))},n=0;n<t.length;n++)e(n)}(),function(){for(var t=document.getElementsByClassName("deleteItem"),e=function(e){t[e].addEventListener("click",(function(t){t.preventDefault();var n=o[e].id,r=o[e].color,a=o.filter((function(t){return t.id!==n||t.color!==r}));localStorage.setItem("cart",JSON.stringify(a)),location.reload()}))},n=0;n<t.length;n++)e(n)}(),document.getElementById("totalQuantity").innerHTML+=function(){var t=0;for(var e in o)t+=Number(o[e].quantity);return document.getElementById("totalQuantity").textContent=t,t}(),document.getElementById("totalPrice").innerHTML+=function(){var t,n=0,r=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(o);try{for(r.s();!(t=r.n()).done;){var a=t.value;n+=a.price*a.quantity}}catch(t){r.e(t)}finally{r.f()}return n}(),document.getElementById("order").addEventListener("click",(function(t){t.preventDefault();var e={fisrtName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,address:document.getElementById("address").value,city:document.getElementById("city").value,email:document.getElementById("email").value};!function(){if(function(){if(/^[A-Za-z]{3,20}$/.test(e.fisrtName))return!0;document.getElementById("firstNameErrorMsg").textContent="Merci de vérifier votre prénom, 3 caractères minimum requis avec des lettres uniquement"}()&&function(){if(/^[A-Za-z]{3,20}$/.test(e.lastName))return!0;document.getElementById("lastNameErrorMsg").textContent="Merci de vérifier votre nom, 3 caractères minimum requis avec des lettres uniquement"}()&&function(){if(/^[a-zA-Z0-9-\s]+$/.test(e.address))return!0;document.getElementById("addressErrorMsg").textContent="Merci de vérifier votre addresse, caractères alphanumériques autorisés"}()&&function(){if(/^[a-zA-Z0-9-\s]+$/.test(e.city))return!0;document.getElementById("cityErrorMsg").textContent="Merci de vérifier votre ville, 3 caractères minimum requis avec des lettres uniquement"}())return localStorage.setItem("contact",JSON.stringify(e)),!0;alert("Merci de vérifier le contenu de votre formulaire")}();var n={contact:e,cart:o};fetch("http://localhost:3000/api/products/order",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){localStorage.setItem("orderId",t.orderId),console.log(t)})).catch((function(t){alert(t)}))}))})(),document.getElementById("orderId").innerHTML=localStorage.getItem("orderId")})();