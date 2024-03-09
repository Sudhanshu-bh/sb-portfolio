// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import ProjectsGroup from '../../components/projects/ProjectsGroup';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Projects = () => {
	return (
		<div className="h-full pt-24 pb-16 sm:pb-24 flex flex-col xl:flex-row items-center">
			<Circles />

			{/* content */}
			<div className="container mx-auto pb-8 sm:pb-0 overflow-y-auto md:overflow-hidden">
				<div className="flex flex-col xl:flex-row gap-x-8 relative z-20">
					{/* text */}
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2 mt-7 md:mt-12"
						>
							My personal <span className="text-accent">projects.</span>
						</motion.h2>

						<motion.p
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mt-6 mb-12 max-w-[400px] mx-auto lg:mx-0"
						>
							I have developed diverse personal projects utilizing Angular,
							React.js, Next.js, Tailwind CSS, Bootstrap, and more.
						</motion.p>
					</div>

					{/* slider */}
					<motion.div
						variants={fadeIn('down', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="w-full xl:max-w-[65%] "
					>
						<ProjectsGroup />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default Projects;
