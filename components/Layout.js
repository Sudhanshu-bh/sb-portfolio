// fonts
import { Sora } from '@next/font/google';

// font settings
const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
	return (
		<div
			className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
		>
			<Nav />
			<div className="min-h-screen h-full w-full xl:px-20 bg-primary/60 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<Header />
				{children}
			</div>
		</div>
	);
};

export default Layout;
