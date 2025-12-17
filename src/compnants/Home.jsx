import '../App.css'
import {useEffect, useState} from "react";
import FilterBar from "./FilterBar.jsx";
import ProductCard from "./ProductCard.jsx";
import useLocalStorge from "./useLocalStorge.jsx";
import Loader from "./Loader.jsx";

function Home({onChangePage}) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {getCartItemsNumber,setItem} = useLocalStorge('cart');

    useEffect( () =>{
        setLoading(true)
            const fetchData = async () => {
                try{
                    const categories = await fetch("https://dummyjson.com/products/category-list");
                    const CategoriesData = await categories.json();
                    setCategories(CategoriesData);
                    const products = await fetch(`https://dummyjson.com/products${selectedCategory === 'All Products' ? "" : `/category/${selectedCategory}`}`);
                    const productsData = await products.json();
                    console.log(productsData);
                    setFilteredProducts(productsData.products);
                }catch (e){
                    console.error(e)
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
    },[selectedCategory])

    if (loading){
        return <Loader /> ;
    }
    return (
        < div className="ecommerce-container">
            <header className="app-header">
                <h1 className="app-title">Simple E-Commerce Store</h1>
                <p className="app-subtitle">React Training : useState & useEffect Demo</p>
                <div className="cart-info">
                    Cart Items: {getCartItemsNumber()}
                    <button onClick={() => onChangePage("Cart")} className="cart-btn">Cart</button>
                </div>
            </header>
                <h2>Filter by Category:</h2>
            <FilterBar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            <div className="products-grid">
                {
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={setItem}
                        />
                    ))

                }
            </div>

        </div>
    );
}

export default Home
