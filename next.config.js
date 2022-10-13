/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		loader: "default",
		domains: [
			"localhost",
			"julianlbs-blog.up.railway.app",
			"i.ibb.co",
			"res.cloudinary.com",
		],
	},
};

module.exports = nextConfig;
