const puppeteer = require('puppeteer');

(async () => {



  try{
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://google.com/');
    await page.type('input[name="q"]', 'Udemy Tutorials', {delay: 100});  // selector will probably change
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    
    await page.screenshot({path: 'example.png'});
  
    await browser.close();
  }catch(e){
      console.log(e)
  }

})();

