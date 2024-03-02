import React from 'react';

// icons
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaAngular,
	FaBootstrap,
} from 'react-icons/fa';

import { SiJasmine } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbBrandCypress } from 'react-icons/tb';

// framer motion
import { motion } from 'framer-motion';

const SkillsData = [
	{ name: 'Angular', icon: FaAngular, key: 'angular' },
	{ name: 'React.js', icon: FaReact, key: 'reactjs' },
	{ name: 'Bootstrap', icon: FaBootstrap, key: 'bootstrap' },
	{ name: 'HTML5', icon: FaHtml5, key: 'html5' },
	{ name: 'CSS3', icon: FaCss3, key: 'css3' },
	{ name: 'JavaScript', icon: FaJs, key: 'js' },
	{ name: 'TypeScript', icon: BiLogoTypescript, key: 'typescript' },
	{ name: 'Jasmine', icon: SiJasmine, key: 'jasmine' },
	{ name: 'Cypress', icon: TbBrandCypress, key: 'cypress' },
];

const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex flex-wrap"
		>
			{SkillsData.map((item, itemIndex) => (
				<motion.div
					whileHover={{ scale: 1.06, color: 'white' }}
					className="flex-[50%] flex w-full items-center px-10 xl:px-0 mb-1 text-white/60 cursor-default"
					key={itemIndex}
				>
					<item.icon />
					&nbsp; {item.name}
				</motion.div>
			))}
		</motion.div>
	);
};

export default Skills;
