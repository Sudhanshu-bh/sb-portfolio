import React from 'react';

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
			<div>
				{experience.map((item, itemIndex) => (
					<div key={itemIndex} className="mb-4 text-white/60">
						{item.title}
						<br />
						{item.stage}
					</div>
				))}
			</div>
		</>
	);
};

export default Experience;
