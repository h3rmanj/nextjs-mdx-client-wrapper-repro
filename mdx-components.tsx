import type { MDXComponents } from "mdx/types";
import Wrapper from "./components/Wrapper";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: Wrapper,
  };
}
