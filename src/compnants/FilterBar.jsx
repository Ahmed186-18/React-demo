const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
    const getButtonClass = (category) => {
        return `filter-button ${selectedCategory === category ? 'active' : ''}`;
    };
    return (
        <div className="filter-container">
            <button
                onClick={() => onSelectCategory('All Products')}
                className={getButtonClass('All Products')}
            >
                All Products
            </button>

            {categories.map(category => (
                <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={getButtonClass(category)}>
                    {category}
                </button>

            ))}
        </div>
    )
}

export default FilterBar;