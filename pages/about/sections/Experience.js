import React from 'react';

// framer motion
import { motion } from 'framer-motion';

const experience = [
	{
		title: 'Software Engineer - Siemens',
		stage: 'Feb 2022 - Present',
	},
	{
		title: 'Software trainee - KENT Cam Technologies',
		stage: 'Aug 2021 - Feb 2022',
	},
];

const Experience = () => {
	return (
		<>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				{experience.map((item, itemIndex) => (
					<div key={itemIndex} className="mb-4 text-white/60">
						{item.title}
						<br />
						<span className="text-white/35">{item.stage}</span>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default Experience;
