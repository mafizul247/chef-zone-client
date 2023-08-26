import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import RecipeDetails from "../components/Chefs/RecipeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://chef-zone-server-mafizul247.vercel.app/chefs')
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'blog',
                element: <PrivateRoute><Blog /></PrivateRoute>
            },
            {
                path: 'recipeDetails/:id',
                element: <RecipeDetails />,
                loader: ({params}) => fetch(`https://chef-zone-server-mafizul247.vercel.app/chefs/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    },
])

export default router;