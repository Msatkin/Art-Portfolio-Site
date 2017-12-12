import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const getRoutes = (page) => {
    return (routes[page] != null) ? routes[page] : NotFound;
}

const routes = {
    Home: Home,
    Contact: Contact,
    About: About,
    Login: Login,
    NotFound: NotFound
}

export default getRoutes;