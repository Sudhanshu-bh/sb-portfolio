// data
const workSlides = {
	slides: [
		{
			projects: [
				{
					title: 'Amazon clone - an e-commerce website',
					path: '/thumb1.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/fs-amazon-clone',
						live: '',
					},
				},
				{
					title: 'Shortly - a URL shortener',
					path: '/m-thumb2.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/shortly',
						live: 'https://ushortly.netlify.app/',
					},
				},
				{
					title: "Worldpedia - a country's list",
					path: '/thumb3.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/worldpediasb',
						live: 'https://worldpediasb.netlify.app/',
					},
				},
				{
					title: 'Heyalien - my other portfolio',
					path: '/thumb4.jpg',
					link: {
						github: 'https://github.com/Sudhanshu-bh/portfolio',
						live: 'https://heyalien.web.app/',
					},
				},
			],
		},
		{
			projects: [
				{
					title: 'title',
					path: '/thumb4.jpg',
					link: {
						github: '',
						live: '',
					},
				},
				{
					title: 'title',
					path: '/thumb1.jpg',
					link: {
						github: '',
						live: '',
					},
				},
				{
					title: 'title',
					path: '/thumb2.jpg',
					link: {
						github: '',
						live: '',
					},
				},
				{
					title: 'title',
					path: '/thumb3.jpg',
					link: {
						github: '',
						live: '',
					},
				},
			],
		},
	],
};

// swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight, BsGithub } from 'react-icons/bs';

// next image
import Image from 'next/image';
import ProjectBtn from './ProjectBtn';

const WorkSlider = () => {
	const removeOverlay = (projectIndex) => {
		const projInfo = document.getElementById(`overlay-${projectIndex}`);

		setTimeout(() => {
			projInfo.style.display = 'none';
		});
	};

	const addOverlay = (projectIndex) => {
		const projInfo = document.getElementById(`overlay-${projectIndex}`);
		projInfo.style.display = 'block';
	};

	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="h-[280px] sm:h-[480px]"
		>
			{workSlides.slides.map((slide, slideIndex) => (
				<SwiperSlide key={slideIndex}>
					<div className="grid grid-cols-2 grid-rows-2 gap-4">
						{slide.projects.map((project, projectIndex) => (
							<div
								className="relative rounded-lg overflow-hidden flex items-center justify-center group"
								key={projectIndex}
							>
								<div
									onMouseEnter={() => removeOverlay(projectIndex)}
									onMouseLeave={() => addOverlay(projectIndex)}
									className="flex items-center justify-center relative overflow-hidden group"
								>
									{/* image */}
									<Image src={project.path} width={500} height={300} alt="" />

									{/* overlay gradient */}
									<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

									{/* hover content */}
									<div className="absolute w-full h-full flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-600 delay-200">
										{/* layer on top to prevent accidental clicking of links on mobile devices */}
										<div
											id={`overlay-${projectIndex}`}
											className="absolute h-full w-full bg-transparent"
										></div>

										{/* title */}
										<div className="md:h-[50%] text-sm flex items-center bg-gray-950/40 justify-center p-1">
											{project.title}
										</div>

										{/* links */}
										<div className="flex flex-col items-center justify-evenly h-full gap-x-2 text-[13px] tracking-wide">
											{/* Code and Live */}
											<div className="flex justify-evenly w-full">
												<ProjectBtn link={project.link.github}>
													<BsGithub />
												</ProjectBtn>

												{/* Live, icon */}
												<ProjectBtn link={project.link.live}>
													{/* Live&nbsp; */}
													<BsArrowRight />
												</ProjectBtn>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;
