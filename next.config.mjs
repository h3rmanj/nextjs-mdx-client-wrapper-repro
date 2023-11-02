import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "mdx"],
  output: "export",
};

export default withMDX(nextConfig);
