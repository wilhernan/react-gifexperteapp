import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/productsDetail"
import ServicesList from "./pages/services/ServicesList"
import ServicesDetail from "./pages/services/ServiceDetail"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function App2() {
    return(
        <BrowserRouter>
        <div>
            {/* <Header /> */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/* <Route exact path="/services">
                    <ServicesList />
                </Route> 
                <Route path="/services/:serviceId">
                    <ServicesDetail />
                </Route>*/}
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/products/:productId">
                    <ProductDetail />
                </Route>
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App2