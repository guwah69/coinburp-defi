import { Given, When, Then } from '@cucumber/cucumber';

// Page Objects

import metaMaskPO from '../pageobjects/MetaMask';
import elementHelper from '../pageobjects/ElementUtil';
import homepagePo from '../pageobjects/HomePage';
import rafflePagePo from '../pageobjects/RafflePage'


// Page Data

import metamaskData from '../pagedata/metamaskData';

var raffleText="";
Given('User setup the metamask plugin', () => {

    let window = browser.getWindowHandles();
    if ((window.length) > 1) {
        browser.switchWindow('data:,');
        browser.closeWindow();
    }
    browser.switchWindow('MetaMask');
    browser.maximizeWindow();
    elementHelper.click(metaMaskPO.StartedButton);
    elementHelper.click(metaMaskPO.importWalletButton);
    browser.pause(2000);
    elementHelper.click(metaMaskPO.iAgreeButton);
    metaMaskPO.importAccount(metamaskData.metaMaskInformation);
    elementHelper.click(metaMaskPO.allDoneButton);
    elementHelper.click(metaMaskPO.closeButton);
    elementHelper.click(metaMaskPO.networkIcon);
    elementHelper.click(metaMaskPO.selectNetwork);
    browser.url("https://burp.staging.coinburp.ninja/stake");
    browser.pause(3000)
    $('//input[@name=\'checkedA\']').click();
    $('//input[@name=\'checkedB\']').click();
    $('//span[contains(text(),\'Submit\')]').isDisplayed();
    $('//span[contains(text(),\'Submit\')]').click();
    browser.pause(2000)
    browser.switchWindow('https://burp.staging.coinburp.ninja/stake');
    elementHelper.click(homepagePo.connectedToWalletButton)
    elementHelper.click(homepagePo.connectMetaMaskButton)
    browser.pause(3000)
    browser.switchWindow('MetaMask Notification');
    elementHelper.click(metaMaskPO.nextButton);
    elementHelper.click(metaMaskPO.connectButton);
    browser.switchWindow('https://burp.staging.coinburp.ninja/stake');
    browser.pause(5000)



});
When('User enter the stake amount {string}', amount => {
    
    elementHelper.enterText(homepagePo.inputStakeAmount, amount);
});
When('User select stake length {string}', Month => {
    homepagePo.selectStakeLength(Month);
    raffleText=homepagePo.getTextOfRaffleEarningText()
});
Then('Verify stack amount {string},date {string} and other information in stack summary', function (amount, month) {
    homepagePo.verifyStackSummaryArea(amount, month)
})

When('User click on start state button and confirm the payment', () => {

    let element = (homepagePo.authorizedButton).isDisplayed();
    if (element) {
        browser.pause(5000);
        elementHelper.scrollToElement(homepagePo.authorizedButton);
        elementHelper.click(homepagePo.authorizedButton);
        browser.pause(3000);
        browser.switchWindow('MetaMask Notification');
        elementHelper.click(homepagePo.confirmButton);
        browser.switchWindow('https://burp.staging.coinburp.ninja/stake');
        browser.pause(10000);
        ////div[@class='MuiBox-root jss2794']
    }
    browser.pause(3000);
    elementHelper.scrollToElement(homepagePo.startStakeButton);
    browser.pause(5000);
    elementHelper.click(homepagePo.startStakeButton);
    browser.pause(7000);
    browser.switchWindow('MetaMask Notification');
    elementHelper.click(homepagePo.confirmButton);
    browser.pause(5000);
    browser.switchWindow('https://burp.staging.coinburp.ninja/stake');
    browser.pause(20000);
});
When('User click on withdraw button',()=>{
    
})
Then('User can displayed the stake {string}', amount => {
    homepagePo.verifyTransactionAmount(amount);
    browser.pause(3000);

});
Then('User can displayed his stake amount {string} , stake length {string} and other information',function(amount,month){
    browser.pause(2000)
    browser.refresh();
    browser.pause(5000)
    browser.refresh();
    browser.pause(2000)
    browser.refresh();
    homepagePo.verifyStackDetails(amount,month,raffleText)
    homepagePo.verifyStartDate()
    homepagePo.verifyLastDate(month)

})
When('user navigate to url and click on the Raffle index', () => {

    let window = browser.getWindowHandles();
    if ((window.length) > 1) {
        browser.switchWindow('data:,');
        browser.closeWindow();
        browser.switchWindow('MetaMask');
        browser.maximizeWindow();
        browser.pause(2000)
    }

    browser.url('baseUrl')
    elementHelper.click(homepagePo.raffleButton)

})
Then('raffle page is displayed', () => {
    rafflePagePo.verifyRafflePageIsDisplayed();
})
When('enters a raffle Index {string}', loadRaffle => {
    elementHelper.enterText(rafflePagePo.raffleIndex, loadRaffle)
    elementHelper.click(rafflePagePo.getButtonOfLoadRaffle)
    browser.pause(2000)
})
When('enters a raffle Index of draft winner {string}', draftWinner => {
    elementHelper.enterText(rafflePagePo.raffleIndexOfDraftWinner, draftWinner)
})
When('enters a entropy of draft winner {string}', entropy => {
    elementHelper.enterText(rafflePagePo.entropyOfDraftWinner, entropy)
    elementHelper.click(rafflePagePo.submitButtonOfDraftWinner)
    browser.pause(2000)
})
When('enters raffle index of add prizes {string}', addPrizes => {
    elementHelper.enterText(rafflePagePo.raffleIndexOfAddPrize, addPrizes)
    elementHelper.click(rafflePagePo.submitButtonOfAddPrize)
})
When('enters raffle index of load prizes {string}', loadPrizes => {
    elementHelper.enterText(rafflePagePo.raffleIndexOfLoadPrize, loadPrizes)
    elementHelper.click(rafflePagePo.getButtonOfLoadPrize)
})
When('enters raffle index of prize winner {string}', prizeWinner => {
    elementHelper.enterText(rafflePagePo.raffleIndexOfGetPrizeWinner, prizeWinner)
})
When('enters a prize id of prize winner {string}', prizeId => {
    elementHelper.enterText(rafflePagePo.prizeIdOfGetPrizeWinner, prizeId)
    elementHelper.click(rafflePagePo.getButtonOfPrizeWinner)
    browser.pause(3000)
})



