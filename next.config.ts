import type { NextConfig } from "next";
import { withYak } from "next-yak/withYak";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "*",
      port: "",
      pathname: "/**",
    }]
  }
};

export default withYak(nextConfig);
