import '../styles/globals.css';

// next head
import Head from 'next/head';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Sudhanshu Bhardwaj</title>
				<meta
					name="description"
					content="Frontend developer proficient in Angular, ReactJS and much more."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<AnimatePresence mode="wait">
					<motion.div key={router.route} className="h-full">
						<Transition />
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</Layout>
		</>
	);
}

export default MyApp;
