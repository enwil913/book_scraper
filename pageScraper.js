const scraperObject = {
	url: 'https://www.google.com.hk',
	// url: 'http://books.toscrape.com',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);

        // Wait for the required DOM to be rendered
		const element = await page.waitForSelector('.gb_hd');
        //obtain text
        const text = await (await element.getProperty('textContent')).jsonValue()
        console.log("Text is: " + text)
	}
}

module.exports = scraperObject;