import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectCard = ({ path, title, desc, link }) => {
	const [innerWid, setInnerWid] = useState();

	useEffect(() => {
		setInnerWid(window.innerWidth);
	}, [setInnerWid]);

	return (
		<>
			<figure class="effect-ruby cursor-default relative group">
				<div>
					<Image
						src={path}
						width={700}
						height={300}
						className="cardImage opacity-70 md:group-hover:opacity-10 duration-300"
						alt=""
					/>
				</div>
				<figcaption className="flex flex-col md:gap-6 p-4 md:p-6 text-white bg-gray-700 md:bg-inherit md:uppercase md:absolute inset-0 md:captionLinks">
					<h2 className="text-lg text-gray-200 md:text-shadow md:uppercase md:translate-y-5 md:group-hover:translate-y-0 duration-300">
						{title}
					</h2>
					<p className="text-[0.98rem] md:text-sm md:font-semibold capitalize md:p-[1.4rem] md:border md:border-gray-400 md:opacity-0 md:translate-y-5 md:scale-110 duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
						{desc}
						{link.live && innerWid >= 600 && (
							<>
								{' '}
								|{' '}
								<a href={link.live} target="_blank" rel="noreferrer">
									View
								</a>
							</>
						)}
						{link.github && innerWid > 599 && (
							<>
								{' '}
								|{' '}
								<a href={link.github} target="_blank" rel="noreferrer">
									Github
								</a>
							</>
						)}
					</p>
				</figcaption>
				<div className="project__mobileLinks flex md:hidden bg-slate-800 text-gray-300">
					{link.live && (
						<a href={link.live} target="_blank" rel="noreferrer">
							View
						</a>
					)}
					{link.github && (
						<a href={link.github} target="_blank" rel="noreferrer">
							Github
						</a>
					)}
				</div>
			</figure>
		</>
	);
};

export default ProjectCard;
