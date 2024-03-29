// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
	return (
		<div className="flex-1 flex flex-col" id="homepage">
			{/* text */}
			<div className="flex-1 relative z-20 text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
				{/* title */}
				<motion.h1
					variants={fadeIn('down', 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="h1"
				>
					Code. Create. <br /> <span className="text-accent">Captivate.</span>
				</motion.h1>

				{/* subtitle */}
				<motion.p
					variants={fadeIn('down', 0.3)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
				>
					Elegance in Every Line, Brilliance in Every Design - Your Digital
					Experience Elevated.
				</motion.p>

				{/* my projects button */}
				<div className="flex justify-center xl:hidden relative">
					<ProjectsBtn />
				</div>
				<motion.div
					variants={fadeIn('down', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="hidden xl:flex mb-12"
				>
					<ProjectsBtn />
				</motion.div>
				<div className="min-h-24 hidden"></div>
			</div>

			{/* image */}
			<div className="w-[1200px] h-full absolute right-0 bottom-0 overflow-hidden">
				{/* bg img */}
				<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

				{/* particles */}
				<ParticlesContainer />

				{/* aavatar img */}
				<motion.div
					variants={fadeIn('up', 0.5)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 1, ease: 'easeInOut' }}
					className="w-full max-w-[35vw] max-h-[880px] absolute bottom-0 lg:right-[13%] right-2"
				>
					<Avatar />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
