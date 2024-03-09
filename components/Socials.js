// links
import Link from 'next/link';

// icons
import {
	RiInstagramLine,
	RiLinkedinLine,
	RiGithubLine,
	RiMailLine,
} from 'react-icons/ri';

const socials = [
	{
		link: 'https://www.linkedin.com/in/sudhanshu-bh/',
		icon: RiLinkedinLine,
		name: 'linkedIn',
	},
	{
		link: 'https://github.com/Sudhanshu-bh',
		icon: RiGithubLine,
		name: 'github',
	},
	{
		link: 'https://www.instagram.com/the_dapper_guy/',
		icon: RiInstagramLine,
		name: 'instagram',
	},
	{ link: 'mailto:bsudhanshu3@gmail.com', icon: RiMailLine, name: 'email' },
];

const Socials = () => {
	return (
		<div className="flex flex-col md:flex-row gap-y-4 md:gap-x-5 items-center text-xl md:text-lg w-full">
			{socials.map((Social, i) => (
				<Link
					href={Social.link}
					target="_blank"
					className="flex gap-3 items-center justify-center text-gray-300 md:text-inherit text-lg hover:text-accent transition-all duration-300"
					key={i}
				>
					<Social.icon />
					<span className="md:hidden capitalize">{Social.name}</span>
				</Link>
			))}
		</div>
	);
};

export default Socials;
