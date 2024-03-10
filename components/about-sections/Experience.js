import React from 'react';

// framer motion
import { motion } from 'framer-motion';

const experience = [
	{
		title: 'Software Engineer - Siemens',
		stage: 'Feb 2022 - Present',
		projects: 'Sinec AMS, Sinec NMS',
	},
	{
		title: 'Software Trainee - KENT Cam Technologies',
		stage: 'Aug 2021 - Feb 2022',
		projects: 'KENT CamAttendance',
	},
];

const Experience = () => {
	return (
		<>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				{experience.map((item, itemIndex) => (
					<div key={itemIndex} className="mb-4 text-white/60">
						<span className="font-bold text-white/70">{item.title}</span>
						<div className="text-white/35">{item.stage}</div>
						<span className="font-semibold">Projects:</span>{' '}
						<span className="text-white/55">{item.projects}</span>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default Experience;
