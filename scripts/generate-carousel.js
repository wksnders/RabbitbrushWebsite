import { readdirSync, writeFileSync, statSync, readFileSync } from "fs";
import { join } from "path";

const rootDir = join(process.cwd(), "public/images/carousels");
const output = {};

// Get all top-level folders
const topDirs = readdirSync(rootDir).filter(name =>
  statSync(join(rootDir, name)).isDirectory()
);

for (const topDir of topDirs) {
  const topPath = join(rootDir, topDir);
  const subDirs = readdirSync(topPath).filter(name =>
    statSync(join(topPath, name)).isDirectory()
  );

  output[topDir] = {};

  if (subDirs.length > 0) {
    // Multiple subfolders = multiple carousels
    for (const subDir of subDirs) {
      const carouselPath = join(topPath, subDir);
      const carouselMetaPath = join(carouselPath, "carousel.json");

      let carouselMeta = {};
      try {
        carouselMeta = JSON.parse(readFileSync(carouselMetaPath, "utf-8"));
      } catch (e) {}

      const files = readdirSync(carouselPath).filter(
        f => !f.startsWith(".") && !f.endsWith(".json")
      );

      const imagesWithMeta = files.map(file => {
        const metaFile = file.replace(/\.\w+$/, ".json");
        let meta = {};
        try {
          meta = JSON.parse(readFileSync(join(carouselPath, metaFile), "utf-8"));
        } catch (e) {}
        return { filename: file, ...meta };
      });

      output[topDir][subDir] = {
        meta: carouselMeta,
        images: imagesWithMeta
      };
    }
  } else {
    // No subfolders = treat topDir as single carousel
    const carouselMetaPath = join(topPath, "carousel.json");
    let carouselMeta = {};
    try {
      carouselMeta = JSON.parse(readFileSync(carouselMetaPath, "utf-8"));
    } catch (e) {}

    const files = readdirSync(topPath).filter(
      f => !f.startsWith(".") && !f.endsWith(".json")
    );

    const imagesWithMeta = files.map(file => {
      const metaFile = file.replace(/\.\w+$/, ".json");
      let meta = {};
      try {
        meta = JSON.parse(readFileSync(join(topPath, metaFile), "utf-8"));
      } catch (e) {}
      return { filename: file, ...meta };
    });

    output[topDir] = {
      meta: carouselMeta,
      images: imagesWithMeta
    };
  }
}

writeFileSync(
  join(process.cwd(), "public/carousels.json"),
  JSON.stringify(output, null, 2)
);

console.log("✅ Generated carousels.");
