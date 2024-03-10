// import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const RESUME_LINK =
	'https://drive.google.com/file/d/1osCwxH53uDRN-drNHKTC0IxRiPfLla7E/view?usp=sharing';

const Resume = () => {
	return (
		<a href={RESUME_LINK} target="_blank">
			<button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
				<span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
					Resume
				</span>
				<BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
			</button>
		</a>
	);
};

export default Resume;
