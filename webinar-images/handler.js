const request = require('request');
const gm = require('gm').subClass({ imageMagick: true });

module.exports.image = (event, ctx, callback) => {
  const { width, height, quality, url } = event.queryStringParameters;
  gm(request(url))
    .resize(width, height)
    .quality(quality)
    .toBuffer((err, buf) => {
      if (err) { console.error(err); callback(err); return }
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'image/jpeg' },
        isBase64Encoded: true,
        body: buf.toString('base64')
      });
    });
};
