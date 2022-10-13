import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Article } from "../../../core/blogTypes";
import { Container } from "../../utils";

interface Props extends React.ComponentProps<"div"> {
	article: Article;
}

export default function ArticleCard({ className, article }: Props) {
	const content = article.attributes.content.endsWith("...")
		? article.attributes.content.substring(0, 120)
		: article.attributes.content.substring(0, 120) + "...";

	return (
		<div
			className={`${className} w-80 md:w-96 h-[28rem] md:h-[24rem] border border-primary border-opacity-20 rounded flex flex-col`}
		>
			<div className="h-24 w-full">
				{article.attributes.image && (
					<Link href={`blog/${article.attributes.slug}`}>
						<a>
							<Image
								src={
									article.attributes.image.data.attributes.formats.medium.url
								}
								alt={article.attributes.image.data.attributes.caption}
								height={96}
								width={384}
								objectFit="cover"
								objectPosition="50% 20%"
							/>
						</a>
					</Link>
				)}
			</div>
			<Container className="relative h-full pt-0 px-4">
				<div className="flex flex-1 flex-col gap-1">
					<Link href={`blog/${article.attributes.slug}`}>
						<a>
							<h3 className="text-primary pt-2">{article.attributes.title}</h3>
						</a>
					</Link>
					<span className="text-sm mb-4 text-slate-400">
						{format(new Date(article.attributes.publishedAt), "PPP")}
					</span>
					<p className="mb-2">{content}</p>
					<span className="text-sm mb-2">
						Category: {article.attributes.category?.data.attributes.name}
					</span>
				</div>
				<div className="absolute bottom-4 left-4">
					<span className="text-secondary">
						by {article.attributes.author?.data.attributes.name}
					</span>
				</div>
			</Container>
		</div>
	);
}
