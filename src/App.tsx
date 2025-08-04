import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout';
import { Home } from './pages/home';
import { NotFound } from './pages/error';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Menu } from './pages/menu';
import { Cart } from './pages/cart';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/menu",
        element: <Menu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

export { router }
