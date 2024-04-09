
const expectChai = require('chai').expect;
class HomePage {

    get inputStakeAmount() {
        // Get locator of stake amount text box
        return $("//input")
    }
    selectStakeLength(Month) {
        // Select stake length
        $("//span[text()='" + Month + "']").click()
    }
    get startStakeButton() {
        // Get locator of start stake button
        return $("//span[text()='Start Stake']")
    }
    get confirmButton() {
        // Get locator of confirm button
        return $("//button[text()='Confirm']")
    }
    get authorizedButton() {
        // Get locator of Authorized button
        return $("//span[text()='Authorise BURP']")
    }
    get disclaimerButtonTerms() {
        // Get locator of disclaimer Terms button
        return $("//input[@name='checkedA']")
    }
    get disclaimerButtonResident() {
        // Get locator of disclaimer Resident Tick button
        return $("//input[@name='checkedB']")
    }
    get disclaimerButtonSubmit() {
        // Get locator of disclaimer Submit button
        return $("//span[contains(text(),'Submit')]")
    }
    get connectedToWalletButton() {
        // Get locator of connected to wallet button
        //return $("//span[contains(text(),'Connected to Wallet')]")
        return $("//span[text()='Connect wallet']")
    }
    get connectMetaMaskButton() {
        // Get locator of connect meta mask button
        //return $("//span[contains(text(),'Connect a MetaMask')]")
        return $("//p[text()='Use the MetaMask Desktop browser wallet']/parent::div/following-sibling::div[1]//button")
    }
    get raffleButton() {
        // Get locator of Raffle button
        return $("//span[text()='Raffle']")
    }
    verifyTransactionAmount(amount) {
        // Verify Transaction completed
        $("//h4[text()='BURP " + amount + "']").scrollIntoView();
        $("//h4[text()='BURP " + amount + "']").isDisplayed()
    }
    get stackAmountText() {
        // Get locator of stack amount 
        return $("//h4[text()='Stake Summary']/parent::div//following-sibling::div/div[1]/h5")
    }
    getTextOfRaffleEarningText() {
        // Get the Raffle Ticket earning text 

        return $("//h5[text()='Raffle Ticket']/following-sibling::h5").getText();
    }
    verifyStackSummaryArea(amount, stakeLength) {
        // Verify amount
        var text = $('//h4[text()="Stake Summary"]/parent::div//following-sibling::div/div[1]/h5').getText();
        var expectedText = amount + " $BURP"
        expectChai(text).to.equal(expectedText)

        // Verify Locking date
        var month = stakeLength.split(" ")[0]
        var d = new Date();
        var expectedDate = $('//h4[text()="Stake Summary"]/parent::div//following-sibling::div/div[2]/h5').getText()
        var currentMonth = (d.getMonth() + 1)
        if ((parseInt(currentMonth) + parseInt(month)) > 12) {
            var lockingMonth = (parseInt(currentMonth) + parseInt(month)) - 12
            var lockingYear = (d.getFullYear()) + 1
            var lockingDate = ((d.getDate() < 10) ? ("0" + d.getDate()) : (d.getDate())) + "/" + ((lockingMonth < 10) ? ("0" + lockingMonth) : (lockingMonth)) + "/" + lockingYear
            expectChai(lockingDate).to.equal(expectedDate)

        }
        else {
            var lockingMonths = parseInt(currentMonth) + parseInt(month)
            var lockingDates = ((d.getDate() < 10) ? ("0" + d.getDate()) : (d.getDate())) + "/" + ((lockingMonths < 10) ? ("0" + lockingMonths) : (lockingMonths)) + "/" + d.getFullYear()
            expectChai(lockingDates).to.equal(expectedDate)
        }

        // Verify Reward Multiplier has correct value
        var expectedRewardMultiplier = $("//h5[text()='Reward Multiplier']/parent::div//h5[2]").getText();
        if (month == 1) {
            expectChai(expectedRewardMultiplier).to.equal("1x")
        } else if (month == 3) {
            expectChai(expectedRewardMultiplier).to.equal("1.5x")
        } else if (month == 6) {
            expectChai(expectedRewardMultiplier).to.equal("2.5x")
        } else if (month == 12) {
            expectChai(expectedRewardMultiplier).to.equal("7.5x")
        }

    }
    verifyStackDetails(amount, stakeMonthLength, raffleText) {

        // Verify stack amount
        $("//h4[text()='BURP " + amount + "']").scrollIntoView();
        $("//h4[text()='BURP " + amount + "']").isDisplayed()
        browser.pause(3000)


        // Get the APR
        var actualAPR = $("//h4[text()='BURP " + amount + "']/parent::div/parent::div/parent::div/parent::div/following-sibling::div[2]//h4").getText();

        // Click on More info 
        $("//h4[text()='BURP " + amount + "']/parent::div/parent::div/parent::div/parent::div/parent::div/parent::div/parent::div/parent::div/following-sibling::div//button").click();
        browser.pause(3000)


        // Verify stack month
        var month = stakeMonthLength.split(" ")[0]
        var getMonth = $("//span[text()='Stake details']/parent::div/parent::div//following-sibling::div/div/div[1]//p[1]").getText();
        if (month == 1) {
            expectChai(getMonth).to.equal(month + " month")
        }
        expectChai(getMonth).to.equal(month + " months")

        // Verify reward multiplier
        var expectedRewardMultiplier = $("//span[text()='Stake details']/parent::div/parent::div//following-sibling::div/div/div[1]//p[2]").getText();
        if (month == 1) {
            expectChai(expectedRewardMultiplier).to.equal("x1")
        } else if (month == 3) {
            expectChai(expectedRewardMultiplier).to.equal("x1.5")
        } else if (month == 6) {
            expectChai(expectedRewardMultiplier).to.equal("x2.5")
        } else if (month == 12) {
            expectChai(expectedRewardMultiplier).to.equal("x7.5")
        }

        // Verify the Apr to date
        var expectedAPR = $("//h5[text()='APR to date']/following-sibling::h5").getText();
        expectChai(actualAPR).to.equal(expectedAPR)

        // Verify the Raffle earning text
        var expectedRaffleText = $("//p[text()='Raffle earning']/following-sibling::p").getText();
        expectChai(raffleText).to.equal(expectedRaffleText)

    }
    verifyStartDate() {
        // Verify start date 
        var d = new Date();

        var date1 = $('//p[text()="Start Date"]/parent::div//p[2]').getText();
        var startingDate = date1.replace(/(\d+)(st|nd|rd|th)/, "$1");
        var todayDate = d.getFullYear() + "/" + (((d.getMonth() + 1) < 10) ? ("0" + (d.getMonth() + 1)) : (d.getMonth() + 1)) + "/" + d.getDate()
        const date = new Date(todayDate)

        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        var day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
        if (day.split("")[0] == 0) {
            var day = day.split("")[1]
        }
        expectChai(startingDate).to.equal(day + " " + month + " " + year)
    }
    verifyLastDate(stakeLength) {
        // Verify Last Date
        var date2 = $('//p[text()="Locked Until"]/parent::div//p[2]').getText();
        var lastDate = date2.replace(/(\d+)(st|nd|rd|th)/, "$1");

        var month = stakeLength.split(" ")[0]
        var d = new Date();
        var currentMonth = (d.getMonth() + 1)
        if ((parseInt(currentMonth) + parseInt(month)) > 12) {
            var lockingMonth = (parseInt(currentMonth) + parseInt(month)) - 12
            var lockingYear = (d.getFullYear()) + 1
            var lockingDate = lockingYear + "/" + ((lockingMonth < 10) ? ("0" + lockingMonth) : (lockingMonth)) + "/" + d.getDate()
        }
        else {
            var lockingMonths = parseInt(currentMonth) + parseInt(month)
            var lockingDate = d.getFullYear() + "/" + ((lockingMonths < 10) ? ("0" + lockingMonths) : (lockingMonths)) + "/" + d.getDate()
        }
        const date = new Date(lockingDate)
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const month2 = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
        var day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
        if (day.split("")[0] == 0) {
            
            var day = day.split("")[1]
        }
        expectChai(lastDate).to.equal(day + " " + month2 + " " + year)
    }

}
export default new HomePage()