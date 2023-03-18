/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.unsplash.com", "via.placeholder.com", "localhost"],
		remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
	},
};

module.exports = nextConfig;
