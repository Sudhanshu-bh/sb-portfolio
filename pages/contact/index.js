import React from 'react';

// components
import Circles from '../../components/Circles';
import Resume from '../../components/Resume';
import Socials from '../../components/Socials';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn, reveal } from '../../variants';

const index = () => {
	return (
		// This page will be visible only on xs and sm screens.

		<div className="h-full pt-24 pb-16 sm:pb-24 text-center xl:text-left">
			<Circles />

			{/* content */}
			<div className="md:hidden container mx-auto h-full flex flex-col items-center gap-x-6 relative z-20 pb-16 sm:pb-24 overflow-y-auto ">
				{/* let's connect */}
				<motion.h2
					variants={fadeIn('right', 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="h2 mt-8"
				>
					Let&apos;s <span className="text-accent">connect.</span>
				</motion.h2>

				<motion.p
					variants={fadeIn('right', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="mt-5 mx-auto max-w-80 xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
				>
					Explore my professional journey and stay updated on my latest projects
					by connecting with me.
				</motion.p>

				{/* resume and socials */}
				<div className="flex-1 flex flex-col justify-center gap-12">
					<motion.div
						variants={fadeIn('left', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<Resume />
					</motion.div>
					<motion.div
						variants={fadeIn('left', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<Socials />
					</motion.div>
				</div>

				{/* 'developed by' text */}
				<motion.p variants={reveal(0.8)} initial="hidden" animate="show">
					Developed by{' '}
					<span className="underline font-semibold">Sudhanshu Bhardwaj</span>
				</motion.p>
			</div>
		</div>
	);
};

export default index;
