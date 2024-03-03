import Link from 'next/link';
import React from 'react';

const ProjectBtn = (props) => {
	return (
		<Link href={props.link} className="rounded-full" target="_black">
			<div className="flex h-10 w-10 md:h-14 md:w-14 text-lg items-center justify-center border rounded-full bg-slate-600/70 hover:bg-slate-700 transition-all duration-300">
				{props.children}
			</div>
		</Link>
	);
};

export default ProjectBtn;
