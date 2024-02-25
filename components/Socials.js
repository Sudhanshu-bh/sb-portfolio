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
	{ link: 'https://www.linkedin.com/in/sudhanshu-bh/', icon: RiLinkedinLine },
	{ link: 'https://github.com/Sudhanshu-bh', icon: RiGithubLine },
	{
		link: 'https://www.instagram.com/the_dapper_guy/',
		icon: RiInstagramLine,
	},
	{ link: 'mailto:bsudhanshu3@gmail.com', icon: RiMailLine },
];

const Socials = () => {
	return (
		<div className="flex items-center gap-x-5 text-lg">
			{socials.map((Social, i) => (
				<Link
					href={Social.link}
					target="_blank"
					className="hover:text-accent transition-all duration-300"
					key={i}
				>
					<Social.icon />
				</Link>
			))}
		</div>
	);
};

export default Socials;
