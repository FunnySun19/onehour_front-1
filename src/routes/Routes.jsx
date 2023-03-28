import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import Apartment from "../pages/Apartment/Apartment";
import Host from "../pages/BecomeHost/Host";
import SignUp from "../pages/SignUp/SignUp";
import MySpaces from "../pages/MySpaces/MySpaces";
import MyBookings from "../pages/MyBookings/MyBookings";
import BookingsForMySpaces from "../pages/BookingsForMySpaces/BookingsForMySpaces";

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
  },
  {
    path: "/create_space",
    Component: Host,
  },
  {
    path: "/sign_up",
    Component: SignUp,
  },
  {
    path: "/my_space",
    Component: MySpaces,
  },
  {
    path: "/rent/tenant",
    Component: MyBookings,
  },
  {
    path: "/rent/owner",
    Component: BookingsForMySpaces,
  },
];
