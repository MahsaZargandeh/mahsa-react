import tee from "../assets/images/Capture.jpg";
import legumes from "../assets/images/Legumes-1.jpeg";
import saffron from "../assets/images/Saffron-cover.jpg";


const products = [
 {
  img:tee,
  title:"چای ممتاز",
  price:"250,000 تومان"
 },
 {
  img:legumes,
  title:"حبوبات گلستان",
  price:"180,000 تومان"
 },
 {
  img:saffron,
  title:"زعفران ایرانی",
  price:"450,000 تومان"
 },
 {
  img:tee,
  title:"چای سبز",
  price:"220,000 تومان"
 },
 {
  img:legumes,
  title:"عدس و لوبیا",
  price:"150,000 تومان"
 },
 {
  img:saffron,
  title:"زعفران ویژه",
  price:"600,000 تومان"
 }
];


const Products = ()=>{

return(

<section className="bg-gray-100 py-16">

<div className="
max-w-7xl
mx-auto
px-5
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


{
products.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-2xl
overflow-hidden
shadow-md
hover:-translate-y-3
hover:shadow-2xl
transition
"
>

<img
src={item.img}
className="w-full h-60 object-cover"
/>

<div className="p-5">

<h2 className="text-2xl font-bold text-red-600">
{item.title}
</h2>

<p className="mt-3 text-gray-700">
{item.price}
</p>


<button className="
mt-5
bg-green-700
text-white
px-5
py-2
rounded-lg
">
خرید
</button>

</div>


</div>


))
}


</div>


</section>


)

}


export default Products;