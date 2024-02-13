/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fakestoreapi.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
