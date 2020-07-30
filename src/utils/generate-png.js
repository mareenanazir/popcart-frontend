const puppeteer = require("puppeteer")

const generatePNG = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    timeout: 200000,
  })

  const page = await browser.newPage()
  const url = "http://localhost:8000/"
  await page.goto(url, {
    waitUntil: "networkidle2",
  })
  await page.waitForSelector("#product-wrapper", { visible: true })
  const element = await page.$("#product-wrapper")
  await element.screenshot({ path: "static/elchim-dryer.png" })
  browser.close()
}

generatePNG()
