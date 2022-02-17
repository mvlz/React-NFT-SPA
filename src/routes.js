import Cart from "./pages/CartPage/Cart"
import Gallery from "./pages/Gallery"
import Home from "./pages/HomePage/Home"
import Profile from "./pages/Profile"
import Saved from "./pages/Saved"
import Setting from "./pages/Setting"
const routes = [
    { path: "/", element: <Home /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/cart", element: <Cart /> },
    { path: "/saved", element: <Saved /> },
    { path: "/profile", element: <Profile /> },
    { path: "/setting", element: <Setting /> },
]
export default routes