// import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const RESUME_LINK =
	'https://drive.google.com/file/d/1gJ4k0S8r0Xcgn_921Kmz-gWtX_pCrsOS/view?usp=sharing';

const Resume = () => {
	return (
		<a href={RESUME_LINK} target="_blank">
			<button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden lg:hover:border-accent group">
				<span className="lg:group-hover:-translate-y-[120%] lg:group-hover:opacity-0 transition-all duration-500">
					Resume
				</span>
				<BsArrowRight className="-translate-y-[120%] opacity-0 lg:group-hover:flex lg:group-hover:-translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
			</button>
		</a>
	);
};

export default Resume;
