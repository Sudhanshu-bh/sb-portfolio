// data
const workSlides = {
	slides: [
		{
			projects: [
				{
					title: 'Amazon clone',
					desc: 'Full e-commerce website',
					path: '/m-thumb1.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/fs-amazon-clone',
						live: 'https://fs--clone.web.app/',
					},
				},
				{
					title: 'Shortly',
					desc: 'A url-shortner with clean design',
					path: '/thumb4.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/shortly',
						live: 'https://ushortly.netlify.app/',
					},
				},
				{
					title: 'Worldpedia',
					desc: "a country's list",
					path: '/thumb3.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/worldpediasb',
						live: 'https://worldpediasb.netlify.app/',
					},
				},
				{
					title: 'Heyalien',
					desc: 'my other portfolio',
					path: '/thumb4.jpg',
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

// swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// modules
import { Pagination } from 'swiper';

const ProjectsGroup = () => {
	return (
		<>
			<div className="hidden md:flex">
				{workSlides.slides.map((slide, slideIndex) => (
					<div
						className="my-grid grid grid-cols-2 md:grid-rows-2 text-center gap-4"
						key={slideIndex}
					>
						{slide.projects.map((project, projectIndex) => (
							<div key={projectIndex}>
								<ProjectCard {...project} />
							</div>
						))}
					</div>
				))}
			</div>

			{/* simple scroll behaviour for xs and sm screens */}
			<div className="md:hidden">
				{workSlides.slides.map((slide, slideIndex) => (
					<div
						className="my-grid flex flex-col w-full text-center gap-8"
						key={slideIndex}
					>
						{slide.projects.map((project, projectIndex) => (
							<div key={projectIndex}>
								<ProjectCard {...project} />
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
};

export default ProjectsGroup;
