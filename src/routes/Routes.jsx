import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import Apartment from "../pages/Apartment/Apartment"



export const onehourRoutes = [
{
    path: "/",
    Component: Home,
},
{
    path: "/checkout/:id",
    Component: Checkout,
},
{
    path: "/space/:id",
    Component: Apartment,
}
]
