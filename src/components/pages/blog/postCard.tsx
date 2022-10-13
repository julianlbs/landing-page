import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Article } from "../../../core/blogTypes";
import { Container } from "../../utils";

interface Props extends React.ComponentProps<"div"> {
	post: Article;
}

export default function PostCard({ className, post }: Props) {
	const content = post.attributes.content.endsWith("...")
		? post.attributes.content.substring(0, 120)
		: post.attributes.content.substring(0, 120) + "...";
	return (
		<Container
			className={`${className} w-80 h-[20rem] border border-primary border-opacity-20 rounded px-4 pt-4 pb-4`}
		>
			{/* <div className="h-10 w-full overflow-hidden">
				<Image
					src="https://i.ibb.co/rHzfCRQ/LTClean-1.png"
					alt={post.attributes.image?.data.attributes.caption}
					layout="fill"
					objectFit="cover"
				/>
			</div> */}
			<div className="flex flex-col gap-2">
				<Link href={`blog/${post.attributes.slug}`}>
					<a>
						<h3 className="text-primary">{post.attributes.title}</h3>
					</a>
				</Link>
				<span className="text-sm mb-4 text-slate-400">
					{format(new Date(post.attributes.publishedAt), "PPP")}
				</span>
				<p className="mb-2">{content}</p>
				<span className="text-sm mb-2">
					Category: {post.attributes.category?.data.attributes.name}
				</span>
				<span className="text-secondary">
					by {post.attributes.author?.data.attributes.name}
				</span>
			</div>
		</Container>
	);
}
