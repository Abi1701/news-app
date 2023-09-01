import Header from "@/components/header/header";
import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
