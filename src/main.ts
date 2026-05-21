import "./style.css";

import * as antiqueCamera from "./assets/AntiqueCamera.glb.js";

async function main() {
  const { camera, tripod } = antiqueCamera.SceneScene;
  const cameraNode = await antiqueCamera.getNode(camera);
  const tripodNode = await antiqueCamera.getNode(tripod);
  console.log(cameraNode, tripodNode);
}

main();
