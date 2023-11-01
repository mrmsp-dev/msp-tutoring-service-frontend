/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ["m.media-amazon.com", "example.com", "i.ibb.co", "ibb.co"]
	}
};

module.exports = nextConfig;