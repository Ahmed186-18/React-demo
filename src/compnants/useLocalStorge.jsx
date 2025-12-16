
const useLocalStorge = (key) => {

    const setItem = (value) =>{
        try {
            window.localStorage.setItem(key,JSON.stringify([...getItems(),value]));
        }
        catch (error) {
            console.log(error);
        }

    }
    const getItems = () => {

        try {
            return JSON.parse(window.localStorage.getItem('cart'));
        }catch (error) {
            console.log(error);
        }
    }
    const deleteItem = (id) => {
        let found = false;

        const updatedItems = getItems().filter((item) => {
            if (item.id === id && !found) {
                found = true;
                return false;
            }
            return true;
        });


        window.localStorage.setItem(key,JSON.stringify(updatedItems));
    }

    const getCartItemsNumber = () => {
        try{
            return getItems().length;
        }catch(error){
            console.log(error);
        }
    }
    return {getItems,setItem , deleteItem , getCartItemsNumber};
}

export default useLocalStorge;