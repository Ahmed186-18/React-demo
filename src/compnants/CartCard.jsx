import useLocalStorge from "./useLocalStorge.jsx";

const CartCard = ({product , onRemoveItem , onCartChange}) => {
    const {getItems} = useLocalStorge('cart')
    return (
            <div className="product-card">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"/>
                <div className="product-content">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-description">{product.description.slice(0,80)}...</p>
                    <br/>
                    <p className="product-category">Category:{product.category}</p>
                </div>
                <div className="product-footer">
                    <h4 className="product-price">${product.price}</h4>
                    <button className="remove-btn" onClick={() =>{
                        onRemoveItem(product.id);
                        onCartChange(getItems());
                    }}>
                        remove
                    </button>
                </div>
            </div>
        );
}

export default CartCard;