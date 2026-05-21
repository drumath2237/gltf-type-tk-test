import { defineConfig } from "vite";
import gltf from "@todde.tv/gltf-type-toolkit/vite";

export default defineConfig(() => {
  const baseUrl = "gltf-type-tk-test";
  return {
    plugins: [
      gltf({
        forceBasePath: baseUrl,
        verbose: true,
      }),
    ],
    base: `/${baseUrl}/`,
  };
});
