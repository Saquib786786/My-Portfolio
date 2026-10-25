import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/aboutus",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contactus",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
