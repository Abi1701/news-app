import * as React from "react";
import styled from "@/styles/subPage.module.scss";
import Image from "next/image";
import CrimeNews from "@/components/crimeNews/crimeNews";
import SportNews from "@/components/sportNewsCard/sportNews";
import Link from "next/link";

type Articles = {
	id: number;
	title: string;
	url: string;
	urlToImage: string;
};

export default function CrimePage() {
	const [news, setNews] = React.useState([]);

	React.useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?q=crime&apiKey=be3c881bd3ba42009e7442cb7876dbd4"
		)
			.then((res) => res.json())
			.then((response) => {
				setNews(response.articles);
			});
	}, []);
	return (
		<div className={styled.subPage}>
			<div className={styled.newsContainer}>
				{news.slice(0, 12).map((article: Articles, index: any) => {
					return (
						<>
							{!!article.url && (
								<Link className={styled.link} href={article.url}>
									<div key={index} className={styled.cardNews}>
										{!!article.urlToImage && (
											<Image
												src={article.urlToImage}
												alt="product"
												width={0}
												height={0}
												sizes="100vw"
												style={{
													width: "300px",
													height: "200px",
													borderRadius: "8px",
													objectFit: "cover",
												}}
											/>
										)}
										<div className={styled.contentContainer}>
											<div className={styled.cardContent}>
												<h1 className={styled.title}>{article.title}</h1>
											</div>
										</div>
									</div>
								</Link>
							)}
						</>
					);
				})}
			</div>
			<div className={styled.headlineContainer}>
				<h1>Headline</h1>
				<CrimeNews />
				<SportNews />
			</div>
		</div>
	);
}
