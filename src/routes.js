import Cart from "./pages/CartPage/Cart"
import Checkout from "./pages/checkout/Checkout"
import Gallery from "./pages/Gallery"
import Home from "./pages/HomePage/Home"
import NotFoundPage from "./pages/NotFound/NotFound"
import Profile from "./pages/Profile"
import Saved from "./pages/SavedPage/Saved"
import Setting from "./pages/Setting"
import Signup from "./pages/Signup/Signup"
const routes = [
    { path: "/", element: <Home /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/cart", element: <Cart /> },
    { path: "/saved", element: <Saved /> },
    { path: "/profile", element: <Profile /> },
    { path: "/setting", element: <Setting /> },
    { path: "/signup", element: <Signup /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/*", element: <NotFoundPage /> },
]
export default routes