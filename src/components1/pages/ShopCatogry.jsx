import React, { useContext } from 'react'
import './CSS/ShopCatogry.css'
// import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from'../Assets/dropdown_icon.png'
import Item from '../Item/Item'
// import Item from '..components1/Item/Item'
const ShopCatogry = (props) => {
  // const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-catogry'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcatogry-indexShort">
        <p>
          <span>Showing 1-12 </span> out of products
        </p>
        <div className="shopcatogry-short">
          Short by <img src={dropdown_icon} alt="" />
        </div>
      </div>
       {/* <div className="shopcatogry-product">
        {all_product.map((item,i)=>{
        if(props.category===item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} 
          new_price={item.new_price} old_price={item.old_price} />
        }
        else{
          return null;
        }
        })}
       </div> */}
    </div>
  )
}
export default ShopCatogry
