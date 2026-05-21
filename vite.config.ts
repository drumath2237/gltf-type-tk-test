import { defineConfig } from "vite";
import gltf from "@todde.tv/gltf-type-toolkit/vite";

export default defineConfig({
  plugins: [gltf()],
});
