import CartCard from "./CartCard.jsx";
import useLocalStorge from "./useLocalStorge.jsx";
import "../Cart.css"
import {useState} from "react";

const Cart = ({onChangePage}) => {
    const {deleteItem,getItems} = useLocalStorge('cart');
    const [cartItems,setCartItems] = useState(getItems());
    return(
        <div className="cart-page">
            <button className="home-btn" onClick={() => onChangePage("Home")}>Back to Home page</button>
            <div className="cart-container">
                {cartItems.map(item => (
                    <CartCard
                        key={item.id}
                        product={item}
                        onRemoveItem={deleteItem}
                        onCartChange={setCartItems}
                    />
                ))}
            </div>
        </div>
    )
}
export default Cart;