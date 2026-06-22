
const products=[
{id:1,name:'Luxury Earrings',price:599},
{id:2,name:'Gold Bangles',price:999},
{id:3,name:'Diamond Ring',price:1299},
{id:4,name:'Pearl Set',price:1499},
{id:5,name:'Fashion Bracelet',price:499},
{id:6,name:'Party Earrings',price:699}
];
let cart=JSON.parse(localStorage.getItem('cart')||'[]');

const p=document.getElementById('products');
if(p){
p.innerHTML=products.map(x=>`<div class='card'><h3>${x.name}</h3><p>₹${x.price}</p><button onclick='addToCart(${x.id})'>Add To Cart</button></div>`).join('');
}
function addToCart(id){cart.push(products.find(x=>x.id===id));localStorage.setItem('cart',JSON.stringify(cart));alert('Added to cart');}
const c=document.getElementById('cart');
if(c){
c.innerHTML=cart.map(x=>`<div class='card'>${x.name} - ₹${x.price}</div>`).join('');
document.getElementById('total').innerText='Total ₹'+cart.reduce((a,b)=>a+b.price,0);
}
