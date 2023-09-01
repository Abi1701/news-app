/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "image.cnbcfm.com",
				port: "",
				pathname: "/api/v1/image/**",
			},
			{
				protocol: "https",
				hostname: "media.cnn.com",
				port: "",
				pathname: "/api/v1/images/**",
			},
			{
				protocol: "https",
				hostname: "i.kinja-img.com",
				port: "",
				pathname: "/gawker-media/image/upload/**",
			},
			{
				protocol: "https",
				hostname: "cdn.vox-cdn.com",
				port: "",
				pathname: "/thumbor/**",
			},
			{
				protocol: "https",
				hostname: "i.ytimg.com",
				port: "",
				pathname: "/vi/**",
			},
			{
				protocol: "https",
				hostname: "images.barrons.com",
				port: "",
				pathname: "/im-843013/social/**",
			},
			{
				protocol: "https",
				hostname: "ichef.bbci.co.uk",
				port: "",
				pathname: "/live-experience/**",
			},
			{
				protocol: "https",
				hostname: "ichef.bbci.co.uk",
				port: "",
				pathname: "/news/**",
			},
			{
				protocol: "https",
				hostname: "a.fsdn.com",
				port: "",
				pathname: "/sd/**",
			},
			{
				protocol: "https",
				hostname: "a.espncdn.com",
				port: "",
				pathname: "/combiner/**",
			},
			{
				protocol: "https",
				hostname: "www.newsnationnow.com",
				port: "",
				pathname: "/wp-content/**",
			},
			{
				protocol: "https",
				hostname: "www.sciencealert.com",
				port: "",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "i.insider.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "readwrite.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i0.wp.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "variety.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.macrumors.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "media.npr.org",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "api.time.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "o.aolcdn.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "media.wired.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};
