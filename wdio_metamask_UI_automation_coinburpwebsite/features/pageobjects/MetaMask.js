import elementHelper from '../../../Work_old_ framworks/CB_GH/coinburp_qa_tests/wdio_metamask_UI_automation_coinburpwebsite/features/pageobjects/ElementUtil'
class MetaMask {
    get StartedButton() {
        // Get locator of GetStarted button
        return $("//button[text()='Get Started']")
    }
    get importWalletButton() {
        // Get locator of Import button
        return $("//button[text()='Import wallet']")
    }
    get iAgreeButton() {
        // Get locator of I Agree Button
        return $("//button[text()='I Agree']")
    }
    get inputSecretKey() {
        // Get locator of secret key text box
        return $("//input[@placeholder='Paste Secret Recovery Phrase from clipboard']")
    }
    get inputPassword() {
        // Get locator of password text box
        return $("//input[@id='password']")
    }
    get inputConfirmPassword() {
        // Get locator of confirm button text box
        return $("//input[@id='confirm-password']")
    }
    get TermsAndConditionCheckBox() {
        // Get locator of terms and condition check box
        return $("//span[text()='I have read and agree to the ']/parent::span//preceding-sibling::div")
    }
    get importButton() {
        // Get locator of import button
        return $("//button[text()='Import']")
    }
    get allDoneButton() {
        // Get locator of All Done button
        return $("//button[text()='All Done']")
    }
    get closeButton() {
        // Get locator of close button of pop up
        return $("//button[@title='Close']")
    }
    get networkIcon() {
        // Get locator of network icon
        return $("//div[@class='app-header__contents']/div[2]//div[@class='chip__left-icon']")
    }
    get selectNetwork() {
        // Get locator of kovan network
        return $("//span[text()='Kovan Test Network']")
    }
    get nextButton() {
        // Get locator of next button
        return $("//button[text()='Next']")
    }
    get connectButton() {
        // Get locator of connect button
        return $("//button[text()='Connect']")
       
    }
    importAccount(metamaskInfo) {
        // Enter the Account information 
        elementHelper.enterText(this.inputSecretKey, metamaskInfo.secretKey)
        elementHelper.enterText(this.inputPassword, metamaskInfo.password)
        elementHelper.enterText(this.inputConfirmPassword, metamaskInfo.password)
        elementHelper.click(this.TermsAndConditionCheckBox)
        elementHelper.click(this.importButton)
    }
}
export default new MetaMask()