// data
const workSlides = {
	slides: [
		{
			projects: [
				{
					title: 'Amazon clone',
					desc: 'Full e-commerce website',
					path: '/thumb_fsam.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/fs-amazon-clone',
						live: 'https://fs--clone.web.app/',
					},
				},
				{
					title: 'Shortly',
					desc: 'A url-shortner with clean design',
					path: '/thumb_shortly.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/shortly',
						live: 'https://ushortly.netlify.app/',
					},
				},
				{
					title: 'Worldpedia',
					desc: "a country's list",
					path: '/thumb_worldpedia.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/worldpediasb',
						live: 'https://worldpediasb.netlify.app/',
					},
				},
				{
					title: 'Heyalien',
					desc: 'my other portfolio',
					path: '/thumb_portfolio.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/portfolio',
						live: 'https://heyalien.web.app/',
					},
				},
			],
		},
	],
};

import React from 'react';

// components
import ProjectCard from './ProjectCard';

const ProjectsGroup = () => {
	return (
		<>
			{workSlides.slides.map((slide, slideIndex) => (
				<div className="my-grid text-center projectsGrid" key={slideIndex}>
					{slide.projects.map((project, projectIndex) => (
						<div key={projectIndex}>
							<ProjectCard {...project} />
						</div>
					))}
				</div>
			))}
		</>
	);
};

export default ProjectsGroup;
