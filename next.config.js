/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.unsplash.com", "via.placeholder.com", "localhost", "i.postimg.cc"],
		remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
	},
};

module.exports = nextConfig;
