const useLocalStorage = (key) => {

    const isBrowser = typeof window !== 'undefined';

    const getItems = () => {
        if (!isBrowser) return [];
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const setItem = (value) => {
        if (!isBrowser) return;
        try {
            const items = getItems();
            localStorage.setItem(key, JSON.stringify([...items, value]));
        } catch (error) {
            console.log(error);
        }
    };

    const deleteItem = (id) => {
        if (!isBrowser) return;
        const updatedItems = getItems().filter(item => item.id !== id);
        localStorage.setItem(key, JSON.stringify(updatedItems));
    };

    const getCartItemsNumber = () => {
        return getItems().length;
    };

    return { getItems, setItem, deleteItem, getCartItemsNumber };
};

export default useLocalStorage;
