const chromium = require('chrome-aws-lambda');

module.exports.urlImage = async (event) => {
  const { url } = event.queryStringParameters;
  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath, args: chromium.args,
    defaultViewport: { height: 800, width: 1280 }, headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url);
  const result = {
    statusCode: 200, isBase64Encoded: true,
    headers: { 'Content-Type': 'image/jpeg' },
    body: await page.screenshot({ encoding: "base64" })
  };
  await browser.close();
  return result;
};
