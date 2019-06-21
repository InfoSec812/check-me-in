const SW_FAMILY_NAME = process.env.SW_FAMILY_NAME;
const SW_GIVEN_NAME = process.env.SW_GIVEN_NAME;
const SW_RES_CODE = process.env.SW_RES_CODE;
const SW_PHONE_NUM = process.env.SW_PHONE_NUM;

module.exports = {
  'Check in to Southwest Flight' : function (browser) {
    browser
      .url('https://www.southwest.com/air/check-in/')
      .waitForElementVisible('input')
      .setValue('input[id=confirmationNumber]', SW_RES_CODE)
      .setValue('input[id=passengerFirstName]', SW_GIVEN_NAME)
      .setValue('input[id=passengerLastName]', SW_FAMILY_NAME)
      .click('button[id=form-mixin--submit-button]')
      .waitForElementVisible('button')
      .click('button[class=air-check-in-review-results--check-in-button]')
      .waitForElementVisible('button')
      .click('button[class=boarding-pass-options--button-text]')
      .setValue('input[id=textBoardingPass]', SW_PHONE_NUM)
      .click('button[id=form-mixin--submit-button]')
      .end();
  }
};