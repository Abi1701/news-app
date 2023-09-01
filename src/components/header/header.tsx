import Link from "next/link";
import styled from "./header.module.scss";

export default function Header() {
	return (
		<div className={styled.header}>
			<h1>NEWS APP</h1>
			<div className={styled.headerNav}>
				<Link className={styled.link} href="/">
					Home
				</Link>
				<Link className={styled.link} href="/economics">
					Economics
				</Link>
				<Link className={styled.link} href="/sport">
					Sport
				</Link>
				<Link className={styled.link} href="/entertainment">
					Entertainment
				</Link>
				<Link className={styled.link} href="/crime">
					Crime
				</Link>
			</div>
		</div>
	);
}
