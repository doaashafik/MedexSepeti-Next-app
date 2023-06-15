/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.medexsepeti.com',
                port: '',
                pathname: '/graph/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn1.medexsepeti.com',
                port: '',
                pathname: '/dims/**',
            },
            {
                protocol: 'https',
                hostname: 'www.medexsepeti.com',
                port: '',
                pathname: '/image/**',
            },
        ],
    },

}
module.exports = nextConfig
