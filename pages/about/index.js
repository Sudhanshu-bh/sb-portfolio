import React, { useEffect, useState } from 'react';

// components
import Circles from '../../components/Circles';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Bulb from '../../components/Bulb';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';
import moment from 'moment';

// about sections
const aboutSections = [
	{
		title: 'skills',
		component: <Skills />,
	},
	{
		title: 'experience',
		component: <Experience />,
	},
];

const NoOfProjects = 3;

const About = () => {
	const [index, setIndex] = useState(0);
	const [yoe, setYoe] = useState(0);

	const startTime = moment('2021-08-14 00:00', 'YYYY-MM-DD HH:mm');
	const currentTime = new Date();

	const YOE = moment.duration(moment(currentTime).diff(startTime)).years();

	useEffect(() => {
		setYoe(YOE);
	}, [YOE]);

	return (
		<div className="flex-1 flex flex-col justify-center h-full pt-24 pb-16 sm:pb-24 text-center xl:text-left">
			<Circles />

			{/* content */}
			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative z-20 pb-8 sm:pb-0">
				{/* text */}
				<div className="flex-1 flex flex-col justify-center">
					<motion.h2
						variants={fadeIn('right', 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2"
					>
						Crafting <br />
						<span className="text-accent">digital dreams</span>.
					</motion.h2>

					<motion.p
						variants={fadeIn('right', 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
					>
						With {yoe} years in coding, I excel as a passionate frontend
						developer, intrigued by backend complexities. Committed to
						excellence, I integrate testing strategies, including unit and
						end-to-end testing, ensuring top-notch quality and efficiency in
						every project.
					</motion.p>

					{/* counters */}
					<motion.div
						variants={fadeIn('right', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
					>
						<div className="flex flex-1 xl:gap-x-6">
							{/* experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={-1} end={yoe} duration={2} />+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
									Years of experience
								</div>
							</div>

							{/* projects */}
							<div className="relative flex-1 xl:after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={NoOfProjects} duration={2} />
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
									enterprise-level projects
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* info tabs (skills, experience) */}
				<motion.div
					variants={fadeIn('left', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="flex flex-col w-full xl:max-w-[48%] xl:h-[26.25rem] mt-4 xl:mt-0"
				>
					{/* tabs title */}
					<div className="flex gap-x-10 xl:gap-x-8 mx-auto xl:mx-0">
						{aboutSections.map((item, itemIndex) => (
							<div
								className={`${
									index === itemIndex &&
									'text-accent after:!w-full after:!bg-accent after:transition-all after:duration-300'
								} hover:text-accent cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white
								 hover:after:bg-accent after:absolute after:bottom-0 after:left-0 transition-all`}
								onClick={() => setIndex(itemIndex)}
								key={itemIndex}
							>
								{item.title}
							</div>
						))}
					</div>

					{/* tabs content */}
					<div className="py-2 xl:py-6">{aboutSections[index].component}</div>
				</motion.div>
			</div>

			<Bulb />
		</div>
	);
};

export default About;
