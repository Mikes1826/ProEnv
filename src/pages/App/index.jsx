
import { useRoutes, BrowserRouter } from  "react-router-dom"
import { Home } from "../Home"
import { SignIn } from "../SignIn"
import { SignUp } from "../SignUp"
import { Profile } from "../Profile"
import { NotFound } from "../NotFound"
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/sign-in", element: <SignIn/>},
    {path: "/sign-up", element: <SignUp/>},
    {path: "/profile", element: <Profile/>},
    {path: "/*", element: <NotFound/>}
  ])
  return routes
}

const App = () => {

  return (
    <>
      <BrowserRouter>
        <AppRoutes>
          
        </AppRoutes>
      </BrowserRouter>
    </>
  )
}

export default App
