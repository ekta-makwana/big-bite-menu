import React , {useState} from 'react'
import Card from './Card'

import bur from './images/bur.png'
import donutt from './images/donutt.png'
import french from './images/french.png'
import hot from './images/hot.png'
import pizza from './images/pizza.png'
import cack from './images/cack.png'
import sandwich from './images/sandwich.png'
import icecream from './images/icecream.png'
import sushi from './images/sushi.png'
import waffles from './images/waffles.png'
import tacos from './images/tacos.png'
import brownie from './images/brownie.png'
import bitbite from './images/bitbite.png'

const App = () => {
  
const [currentPage, setCurrentPage] = useState(1)

const itemsPerPage = 6



 const foodItems = [
  {
       image:bur,
        name:"Burger",
        tag1:"Chicken",
        tag2:"Cheese",
        tag3:"Lettuce",
        description:"Juicy chicken burger with fresh lettuce, tomatoes, cheese and delicious sauce!",
        price:"$5.99"
  },

  {
      image:donutt,
        name:"Donut",
        tag1:"Chocolate",
        tag2:"Vanilla",
        tag3:"Sprinkles",
        description:"Soft and fluffy donut topped with rich chocolate glaze and colorful sprinkles!",
        price:"$3.99"
  },  

  {
      image:french,
        name:"French Fries",
        tag1:"Potato",
        tag2:"Crispy",
        tag3:"Salted",
        description:"Golden crispy French fries seasoned with salt and served hot and fresh!",
        price:"$2.99"
  },   

  {
      image:hot,
        name:"Hotdog",
        tag1:"Sausage",
        tag2:"Mustard",
        tag3:"Ketchup",
        description:"Delicious grilled sausage in a soft bun topped with mustard and ketchup!",
        price:"$4.99"
  },   

  {
      image:pizza,
        name:"Pizza",
        tag1:"Cheese",
        tag2:"Tomato",
        tag3:"Olives",
        description:"Freshly baked pizza loaded with melted cheese!",
        price:"$9.99"
  },    

  {
      image:cack,
        name:"Pancake",
        tag1:"Strawberry",
        tag2:"Cream",
        tag3:"Maple Syrup",
        description:"Fluffy golden pancakes topped with fresh strawberries, whipped cream and delicious strawberry syrup!",
        price:"$8.99"
  },

  {
    image:sandwich,
        name:"Sandwich",
        tag1:"Cheese",
        tag2:"Tomato",
        tag3:"Lettuce",
        description:"Fresh and delicious sandwich filled with melted cheese, juicy tomatoes, crisp lettuce and creamy sauce!",
        price: "$6.99"
  },

  {

 image: icecream,
    name: "Ice Cream",
    tag1: "Vanilla",
    tag2: "Chocolate",
    tag3: "Strawberry",
    description: "Creamy and delicious ice cream topped with chocolate sauce and colorful sprinkles!",
    price: "$3.99"    
  },

  {
    image: sushi,
    name: "Sushi",
    tag1: "Rice",
    tag2: "Seaweed",
    tag3: "Avocado",
    description: "Fresh sushi rolls prepared with seasoned rice, seaweed and creamy avocado!",
    price: "$10.99"
},

{
    image: waffles,
    name: "Waffles",
    tag1: "Chocolate",
    tag2: "Honey",
    tag3: "Berries",
    description: "Crispy golden waffles topped with rich chocolate sauce, sweet honey and fresh berries!",
    price: "$6.99"
},

{
    image: tacos,
    name: "Tacos",
    tag1: "Chicken",
    tag2: "Cheese",
    tag3: "Lettuce",
    description: "Crunchy tacos filled with seasoned chicken, melted cheese, fresh lettuce and delicious salsa!",
    price: "$7.49"
},

{
    image: brownie,
    name: "Chocolate Brownie",
    tag1: "Chocolate",
    tag2: "Walnuts",
    tag3: "Vanilla",
    description: "Rich and fudgy chocolate brownie topped with crunchy walnuts and served with creamy vanilla ice cream!",
    price: "$4.99"
}
];   

const lastItemIndex = currentPage * itemsPerPage
const firstItemIndex = lastItemIndex - itemsPerPage
const currentItems = foodItems.slice(firstItemIndex, lastItemIndex)
const totalPages = Math.ceil(foodItems.length / itemsPerPage)

   return(
    <>
        
        <header className="header">
                <img src={bitbite} alt="big-bite logo" className='logo' />
                 <p className="tagline">Every Bite, Pure Delight</p>
        </header>
         
         <div className="heading">
             <h1>Explore Our Menu</h1>
             <p>Discover your favorite food!</p>
         </div>

    <div className="parent">

      {currentItems.map((item,index)=> (
      
        <Card 
            key={index.name}
            image={item.image}
            name={item.name}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            description={item.description}
            price={item.price}
        />
      ))}
      
        </div>



         <div className="pagination">

        <button
            onClick={() => setCurrentPage(prev => prev -1)}
            disabled={currentPage === 1}
        >
            Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
            >
                {index + 1}
            </button>
        ))}

        <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </button>

    </div>
</>

)
}  
  
export default App
