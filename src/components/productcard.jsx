// write product card here
import Button from "./button";

const Productcard = () => { 
    const productName = 'Apple Air Pods Max';
    const productImage = 'https://m.media-amazon.com/images/I/71j3WqqU7WL.AC_UF1000,1000_QL80.jpg';
    const price = '$569.69';
    
    return(
        <div>
            <h3>Name of Product: {productName} </h3>
            <img style={{width: "200px"}} src={productImage} alt="product image"/>
            <p><strong>Price: {price} </strong></p>
            <Button/>
        </div>
    )
}


export default Productcard;