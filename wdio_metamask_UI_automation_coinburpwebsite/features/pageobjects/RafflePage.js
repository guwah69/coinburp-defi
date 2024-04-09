const expectChai = require('chai').expect;
class RafflePage{
    get raffleIndex(){
        // Get locator of raffle index of Load raffle
        return $("//div[@id='root']/div/div[2]/div[2]/div[2]/form//input")
    }
    get getButtonOfLoadRaffle(){
        // Get locator of load raffle
        return $("//h6[text()='Load raffle']/following-sibling::div/following-sibling::button")
    }
    get raffleIndexOfDraftWinner(){
        // Get locator of raffle index of draft winner
        return $("//h6[text()='Draft Winner']/following-sibling::div[1]//input")
    }
    get entropyOfDraftWinner(){
        // Get locator of entropy 
        return $("//h6[text()='Draft Winner']/following-sibling::div[2]//input")
    }
    get submitButtonOfDraftWinner(){
        // Get locator of submit button
        return $("//h6[text()='Draft Winner']/following-sibling::button")
    }
    get raffleIndexOfAddPrize(){
        // Get locator of raffle index of add prize
        return $("//h6[text()='Add Prize']/following-sibling::div[1]//input")
    }
    get submitButtonOfAddPrize(){
        // Get locator of add prize
        return $("//h6[text()='Add Prize']/following-sibling::button")
    }
    get raffleIndexOfLoadPrize(){
        // Get locator of raffle index 
        return $("//h6[text()='Load Prizes']/following-sibling::div[1]//input")
    }
    get getButtonOfLoadPrize(){
        // Get locator of get button
        return $("//h6[text()='Load Prizes']/following-sibling::button")
    }
    get raffleIndexOfGetPrizeWinner(){
        // Get locator of raffle index 
        return $("//h6[text()='Get Prize Winner']/following-sibling::div[1]//input")
    }
    get prizeIdOfGetPrizeWinner(){
        // Get locator of prize id 
        return $("//h6[text()='Get Prize Winner']/following-sibling::div[2]//input")
    }
    get getButtonOfPrizeWinner(){
        // Get locator of get button
        return $("//h6[text()='Get Prize Winner']/following-sibling::button")
    }
    verifyRafflePageIsDisplayed(){
        // Verify raffle page is displayed
     let element =   $("//h6[text()='Load raffle']").isDisplayed();
     expectChai(element).to.equal(true)
    }
    get rejectButton(){
        // get locator of reject button
        return $("//button[text()='Reject']")
    }

}
export  default new RafflePage()