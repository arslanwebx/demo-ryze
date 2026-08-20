const p0 = require('../assets/hero-part0.js');
const p1 = require('../assets/hero-part1.js');
const p2 = require('../assets/hero-part2.js');

module.exports = function handler(req, res) {
  const image = Buffer.from(p0 + p1 + p2, 'base64');
  res.setHeader('Content-Type', 'image/webp');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.statusCode = 200;
  res.end(image);
};
