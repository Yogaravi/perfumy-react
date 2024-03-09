import one from "./perfume2.jpg"
import two from "./perfume3.jpg"
import three from "./perfume2.jpg"

// product component
function Product()
{
    return(
        <div class="products">
        
        <div class="box">
            
                    <img src={two}alt="one"></img>
                    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
        </div>
        
        <div class="box">
            <img src={three}alt="three"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
        </div>
        <div class="box">
            <img src={one}alt="two"></img>
            <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
        
    </div>
    )
}


export default Product