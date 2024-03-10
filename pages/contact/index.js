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

		<div className="flex-1 flex flex-col pt-24 pb-16 sm:pb-24 text-center">
			<Circles />

			{/* content */}
			<div className="flex-1 md:hidden container mx-auto h-full flex flex-col items-center justify-between relative z-20 pb-16 sm:pb-24 overflow-y-auto ">
				{/* let's connect */}
				<motion.h2
					variants={fadeIn('right', 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="h2"
				>
					Let&apos;s <span className="text-accent">connect.</span>
				</motion.h2>

				<motion.p
					variants={fadeIn('right', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="mx-auto max-w-80 px-2"
				>
					Explore my professional journey and stay updated on my latest projects
					by connecting with me.
				</motion.p>

				{/* resume */}
				<motion.div
					variants={fadeIn('left', 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					<Resume />
				</motion.div>

				{/* socials */}
				<motion.div
					variants={fadeIn('left', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					<Socials />
				</motion.div>

				{/* 'developed by' text */}
				<motion.p variants={reveal(0.8)} initial="hidden" animate="show">
					Developed by{' '}
					<span className="underline font-semibold">Sudhanshu Bhardwaj</span>.
				</motion.p>
			</div>
		</div>
	);
};

export default index;
