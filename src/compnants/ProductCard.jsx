import { useEffect, useState } from "react";
import useLocalStorge from "./useLocalStorge.jsx";

const ProductCard = ({ product, onAddToCart }) => {
    const [onCart, setOnCart] = useState(false);
    const { getItems } = useLocalStorge("cart");

    useEffect(() => {
        const items = getItems() || [];
        const exists = items.some(item => item.id === product.id);
        setOnCart(exists);
    }, [getItems, product.id]);

    return (
        <div className="product-card">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />

            <div className="product-content">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">
                    {product.description.slice(0, 80)}...
                </p>
                <br />
                <p className="product-category">
                    Category: {product.category}
                </p>
            </div>

            <div className="product-footer">
                <h4 className="product-price">${product.price}</h4>

                <button
                    className={onCart ? "on-cart" : "add-to-cart-button"}
                    onClick={() => {
                        onAddToCart(product);
                        setOnCart(true);
                    }}
                    disabled={onCart}
                >
                    {onCart ? "Added to Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
