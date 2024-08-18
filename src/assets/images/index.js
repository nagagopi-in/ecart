// src/assets/images/index.js

// Importing all images from the folder
const images = require.context('./', false, /\.(png|jpe?g|svg)$/);

export const imagePaths = images.keys().map(images);
