/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.sodimac.com",
      "fakestoreapi.com",
      "s3.us-west-2.amazonaws.com",
      "cdn-icons-png.flaticon.com",
      "homecenterco.scene7.com"
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
