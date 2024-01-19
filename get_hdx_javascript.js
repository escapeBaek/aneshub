const sharp = require("sharp");
const path = require("path");

// Path to the image file
const imagePath = path.join(
  "C:\\Users\\codeHSJ\\OneDrive\\WORKSPACE\\html\\aneshub",
  "syringe2.jpg"
);

// Coordinates of the pixel
const x = 100; // Replace with the x-coordinate of the pixel
const y = 200; // Replace with the y-coordinate of the pixel

// Read the image
sharp(imagePath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const channels = info.channels; // Number of color channels in the image (3 for RGB)
    const pixelData = data.slice(
      (y * info.width + x) * channels,
      (y * info.width + x + 1) * channels
    );

    // Get the RGB values
    const red = pixelData[0];
    const green = pixelData[1];
    const blue = pixelData[2];

    // Convert RGB to hexadecimal
    const hexCode = `#${((1 << 24) + (red << 16) + (green << 8) + blue)
      .toString(16)
      .slice(1)}`;

    // Log the hexadecimal color code
    console.log("Hexadecimal Color Code:", hexCode);
  })
  .catch((err) => {
    console.error(err);
  });
