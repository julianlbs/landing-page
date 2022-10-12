/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		loader: "default",
		domains: ["i.ibb.co"],
	},
};

module.exports = nextConfig;
