import "./App.css"
import {useState} from "react";
import Home from "./compnants/Home.jsx";
import Cart from "./compnants/Cart.jsx";

const App = () => {
    const [page, setPage] = useState("Home");
    if (page === "Home") {
        return <Home onChangePage={setPage}/>;
    }
    return (
        <Cart onChangePage={setPage} />
    )
}

export default App;
