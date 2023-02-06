const formScreen = require('../screens/form.screen');
const homeScreen = require('../screens/home.screen');

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

describe('Access form', () => {
  it('Should enter form', async () => {
    await homeScreen.goToForm();
    await formScreen.setInputField('banana');
    await formScreen.setSwitch();
    await formScreen.setDropdown();
    await formScreen.setDropdown2();
    await formScreen.setButton();

    expect(await formScreen.getMessage()).toEqual('This button is active');
  });
});
