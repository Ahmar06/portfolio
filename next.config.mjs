/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"www.freepik.com",
                hostname:"st2.depositphotos.com",
            }
        ]


    }
};

export default nextConfig;
