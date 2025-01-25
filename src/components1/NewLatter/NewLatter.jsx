import React from 'react'
import './NewLatter.css'
const NewLatter = () => {
  return (
    <div className='news-letter'>
     <h1>Get Exclusive Offer On Your Email</h1>
     <p>Subscribe to our NewLatter and stay updated</p>
     <div>
        <input type="Email" placeholder='Your Email id' />
        <button>Subcribe</button>
     </div>
    </div>
  )
}
export default NewLatter
