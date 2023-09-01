import BusinessNews from "@/components/businessNews/businessNews";
import CrimeNews from "@/components/crimeNews/crimeNews";
import HeadlineNews from "@/components/headlineNews/headlineNews";
import FinanceNews from "@/components/financeNews/financeNews";
import SportNews from "@/components/sportNewsCard/sportNews";
import styled from "@/styles/Home.module.scss";
import MoviesNews from "@/components/moviesNews/moviesNews";
import ArtistNews from "@/components/artistNews/artistNews";

export default function Home() {
	return (
		<>
			<div className={styled.mainPage}>
				<div className={styled.articleContainer}>
					<div className={styled.headline}>
						<HeadlineNews />
					</div>
					<div className={styled.subHeadline}>
						<div className={styled.subHeadline1}>
							<h3>Finances</h3>
							<FinanceNews />
						</div>
						<div className={styled.subHeadline2}>
							<h3>Crime</h3>
							<CrimeNews />
						</div>
					</div>
				</div>
				<div className={styled.bottomContent}>
					<div className={styled.bottomContainerLeft}>
						<div className={styled.sportNews}>
							<h3>Sport News</h3>
							<div className={styled.sportNewsContainer}>
								<SportNews />
							</div>
						</div>
						<div className={styled.businessNews}>
							<h3>Business</h3>
							<div className={styled.businessNewsContainer}>
								<BusinessNews />
							</div>
						</div>
					</div>
					<div className={styled.bottomContainerRight}>
						<div className={styled.sportNews}>
							<h3>Movie</h3>
							<div className={styled.sportNewsContainer}>
								<MoviesNews />
							</div>
						</div>
						<div className={styled.businessNews}>
							<h3>Artist</h3>
							<div className={styled.businessNewsContainer}>
								<ArtistNews />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
