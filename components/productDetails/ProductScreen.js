import React from 'react'
import './ProductScreen.css'
import { Link } from 'react-router-dom'

const ProductScreen = () => {
  return (
    <div>
    <div className='product-title'>PRODUCTS</div>
    <div className='product-cards'>
        <Link to="engine-mods">
    <img className='engine-card'src='https://carfromjapan.com/wp-content/uploads/2020/01/01-02-6027-1024x683.jpg'/>
    </Link>
    <Link to="steering-mods">
    <img className='steering-card'src='https://d2ki9f8hbbggyv.cloudfront.net/en-us/modules/jscomposer/uploads/Momo/Categories/image007-home-category-banner.jpg'/>
    </Link>
    <Link to='wheels'>
    <img className='wheels-card'src='https://www.sparcowheels.com/images/products/wheels/ff1/technical-images/Sparco_FF_One_BlackGlossy_Cr01.jpg'/>
    </Link>
    <Link to='suspension-mods'>
    <img className='suspension-card'src='https://cdn.shopify.com/s/files/1/0069/8433/5444/files/sf-racing-close-up_800x.jpg?v=1614289093'/>
    </Link>
    <Link to='accessories'>
    <img className='accessories-card'src='https://cdn.shopify.com/s/files/1/0161/4694/products/TallCondorKnob_1200x1200.jpg?v=1586363930'/>
    </Link>
    <Link to='brake-mods'>
    <img className='braking-card'src='https://cdna.artstation.com/p/marketplace/presentation_assets/000/557/166/large/file.jpg?1603116873'/>
    </Link>
    </div>
    <div className='text-container'>
    <Link to="engine-mods">
    <div className='engine-text'>ENGINE</div>
    </Link>
    <Link to="steering-mods">
    <div className='steering-text'>STEERING</div>
    </Link>
    <Link to='wheels'>
    <div className='wheels-text'>WHEELS</div>
    </Link>
    <Link to='suspension-mods'>
    <div className='suspension-text'>SUSPENSION</div>
    </Link>
    <Link to='accessories'>
    <div className='accessories-text'>ACCESSORIES</div>
    </Link>
    <Link to='brake-mods'>
    <div className='braking-text'>BRAKING</div>
    </Link>
    </div>
    </div>
  )
}

export default ProductScreen