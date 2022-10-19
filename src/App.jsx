import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './components/Loader';

// Home Pages
import Home from './pages/home/Home.page';
import About from './pages/home/About.page';
import ServicesPage from './pages/home/Services.page';
import Contact from './pages/home/Contact.page';
import Shop from './pages/home/Shop.page';
import ShopItem from './pages/home/ShopItem.page';
import CartPage from './pages/home/Cart.page';
import BlogPage from './pages/home/Blog.page';
import Article from './pages/home/Article.page';
import HomeTemplate from './pages/templates/Home.template';
import ErrroPage from './pages/Error.page';

// Error Pages

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path='/' element={<HomeTemplate />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='services' element={<ServicesPage />} />
					<Route path='contact' element={<Contact />} />
					<Route path='shop'>
						<Route index element={<Shop />} />
						<Route path=':product' element={<ShopItem />} />
					</Route>
					<Route path='cart' element={<CartPage />} />
					<Route path='blog'>
						<Route index element={<BlogPage />} />
						<Route path=':article' element={<Article />} />
					</Route>
					<Route path='*' element={<ErrroPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
