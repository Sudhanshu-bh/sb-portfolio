// next image
import Image from 'next/image';

// next link
import Link from 'next/link';
import Logo from '../public/logo.svg';

// components
import Socials from '../components/Socials';
import Resume from '../components/Resume';
import TopLeftImg from '../components/TopLeftImg';

const Header = () => {
	return (
		<>
			<div className="fixed h-[4.8rem] md:h-0 top-0 left-0 z-[45] md:z-10 w-full bg-[rgb(17,16,34)] md:mix-blend-color-dodge overflow-hidden md:overflow-visible">
				<TopLeftImg />
			</div>
			<header className="fixed z-50 w-full flex items-center px-16 xl:px-20 xl:h-[90px] mx-auto md:mx-20 md:-left-20">
				<div className="container mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center gap-y-6 py-6 md:py-8">
						{/* logo */}
						<Link href={'/'} className="lg:hidden">
							<Image
								src={Logo}
								width={280}
								height={38}
								alt=""
								priority={true}
							/>
						</Link>
						<Link href={'/'} className="hidden lg:flex">
							<Image
								src={Logo}
								width={350}
								height={48}
								alt=""
								priority={true}
							/>
						</Link>

						<div className="hidden md:flex gap-8 ml-8">
							{/* Resume */}
							<Resume />

							{/* socials */}
							<Socials />
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
