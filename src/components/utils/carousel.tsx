import Image from "next/image";

interface CarouselProps extends React.ComponentProps<"div"> {
	images: string[];
	height?: string | number;
	width?: string | number;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
	return (
		<div className="carousel w-full">
			{images.map((image, i) => (
				<div
					key={image}
					id={`slide${i + 1}`}
					className="carousel-item relative w-full"
				>
					{/* <img src={image} width="100%" /> */}
					<div style={{ height: "313px", width: "640px" }}>
						<Image
							src={image}
							layout="fill"
							alt="Portfolio image"
							objectFit="contain"
						/>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href={`#slide${i == 0 ? images.length : i}`}
							className="btn btn-circle"
						>
							❮
						</a>
						<a
							href={`#slide${i + 1 === images.length ? 1 : i + 2}`}
							className="btn btn-circle"
						>
							❯
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default Carousel;
