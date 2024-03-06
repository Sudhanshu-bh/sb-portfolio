// next image
import Image from 'next/image';

// next link
import Link from 'next/link';
import Logo from '../public/logo.svg';

// components
import Socials from '../components/Socials';
import Resume from '../components/Resume';

const Header = () => {
	return (
		<header className="absolute z-50 w-full flex items-center px-16 xl:px-20 xl:h-[90px] mx-auto md:mx-20 md:-left-20">
			<div className="container mx-auto">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 py-8">
					{/* logo */}
					<Link href={'/'} className="lg:hidden">
						<Image src={Logo} width={280} height={38} alt="" priority={true} />
					</Link>
					<Link href={'/'} className="hidden lg:flex">
						<Image src={Logo} width={350} height={48} alt="" priority={true} />
					</Link>

					<div className="hidden sm:flex gap-8 ml-8">
						{/* Resume */}
						<Resume />

						{/* socials */}
						<Socials />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
