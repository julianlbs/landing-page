import Image from "next/image";
import Zoom from "react-medium-image-zoom";

interface CarouselProps extends React.ComponentProps<"div"> {
	images: string[];
	height?: string | number;
	width?: string | number;
	phone?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ images, phone }) => {
	return (
		<div className="carousel w-full">
			{images.map((image, i) => (
				<div
					key={image}
					id={`slide${i + 1}`}
					className="carousel-item relative w-full"
				>
					<div className="mx-auto" style={{ height: "313px", width: "640px" }}>
						<Zoom>
							<Image
								src={image}
								height={313}
								width={640}
								// layout="fill"
								alt="Portfolio image"
								objectFit={phone ? "scale-down" : "contain"}
							/>
						</Zoom>
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
