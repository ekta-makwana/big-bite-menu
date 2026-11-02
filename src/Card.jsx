import React from 'react'
import {Lock} from 'lucide-react'


const Card = (props) => {
  console.log(props.name,props.image)
  return (

    
    
    <div>
        <div className="card">

            <div>
                 <div className="top">
                    <img
                         src={props.image}
                         alt={props.name}
                         className={
                              props.name === "French Fries" ? "fries-img" :
                              props.name === "Hotdog" ? "hotdog-img" :
                              props.name === "Pizza" ? "pizza-img" :
                              props.name === "Sandwich" ? "small-img" :
                              props.name === "Ice Cream" ? "small-img" :
                              props.name === "Sushi" ? "small-img" :
                              props.name === "Waffles" ? "small-img" :
                              props.name === "Tacos" ? "small-img" :
                              props.name === "Chocolate Brownie" ? "small-img" : ""
                          }
                        />
                 
                 </div>

                 <div className="center">
                    <h2>{props.name}</h2>
                      <div className="tags">
                        <h4 className='one'>{props.tag1}</h4>
                        <h4 className='two'>{props.tag2}</h4>
                        <h4 className='three'>{props.tag3}</h4>
                      </div>

                      <p>{props.description}</p>
                 </div>

                 <div className="bottom">
                    
                    <div className="tag2">
                        <h2>{props.price}</h2>

                    <button> <Lock /> Add to cart</button>
                    </div>
                 </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card
