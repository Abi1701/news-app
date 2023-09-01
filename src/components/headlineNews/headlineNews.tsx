import * as React from "react";
import styled from "@/styles/headlineCard.module.scss";
import Image from "next/image";
import Link from "next/link";

type Articles = {
	id: string;
	name: string;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	content: string;
};

export default function HeadlineNews() {
	const [headline, setHeadline] = React.useState([]);
	React.useEffect(() => {
		fetch(
			"https://newsapi.org/v2/top-headlines?country=us&apiKey=be3c881bd3ba42009e7442cb7876dbd4"
		)
			.then((res) => res.json())
			.then((response) => {
				setHeadline(response.articles);
			});
	}, []);
	return headline.slice(1, 2).map((article: Articles, index: any) => {
		return (
			<>
				{!!article.url && (
					<Link className={styled.link} href={article.url}>
						<div className={styled.cardNews}>
							{!!article.urlToImage && (
								<Image
									src={article.urlToImage}
									alt="product"
									width={0}
									height={0}
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
										borderRadius: "8px",
										objectFit: "cover",
									}}
								/>
							)}
							<div className={styled.contentContainer}>
								<div className={styled.cardContent}>
									<h1 className={styled.titleHeadline}>{article.title}</h1>
									<p className={styled.content}>{article.content}</p>
								</div>
							</div>
						</div>
					</Link>
				)}
			</>
		);
	});
}
