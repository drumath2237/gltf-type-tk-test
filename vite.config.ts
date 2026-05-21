import gltf from "@todde.tv/gltf-type-toolkit/vite";
import { defineConfig } from "vite";

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
