// next image
import Image from 'next/image';

const Circles = () => {
	return (
		<div className="fixed w-[200px] xl:w-[300px] -right-16 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10">
			<Image
				src={'/circles.png'}
				width={260}
				height={200}
				alt=""
				className="w-full h-full"
			/>
		</div>
	);
};

export default Circles;
