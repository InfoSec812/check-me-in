const SW_FAMILY_NAME = process.env.SW_FAMILY_NAME;
const SW_GIVEN_NAME = process.env.SW_GIVEN_NAME;
const SW_RES_CODE = process.env.SW_RES_CODE;
const SW_PHONE_NUM = process.env.SW_PHONE_NUM;

/*
#swa-content > div > div:nth-child(2) > div > section > div > div > div.air-check-in-review-results--confirmation > button
*/

module.exports = {
  'Check in to Southwest Flight' : function (browser) {
    browser
      .url('https://www.southwest.com/air/check-in/')
      .waitForElementVisible('input')
      .setValue('input[id=confirmationNumber]', SW_RES_CODE)
      .setValue('input[id=passengerFirstName]', SW_GIVEN_NAME)
      .setValue('input[id=passengerLastName]', SW_FAMILY_NAME)
      .click('button[id=form-mixin--submit-button]')
      .waitForElementVisible('button[data-a="airCheckInReviewResults_checkIn"]', 50000)
      .click('button[data-a="airCheckInReviewResults_checkIn"]')
      .waitForElementVisible('button[data-a="airCheckInBoardingPassOption_button_mobileBoardingPassOption_text"]', 50000)
      .click('button[data-a="airCheckInBoardingPassOption_button_mobileBoardingPassOption_text"]')
      .setValue('input[id=textBoardingPass]', SW_PHONE_NUM)
      .click('button[id=form-mixin--submit-button]')
      .end();
  }
};