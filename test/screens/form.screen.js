class FormScreen {
  get #inputField() {
    return $('~text-input');
  }

  get #switch() {
    return $('~switch');
  }

  get #dropdown() {
    return $('~Dropdown');
  }

  get #dropdown2() {
    const selector =
      'new UiSelector().text("webdriver.io is awesome").className("android.widget.CheckedTextView")';
    return $(`android=${selector}`);
  }

  get #button() {
    return $('~button-Active');
  }

  async setInputField(text) {
    await this.#inputField.setValue(text);
  }

  async setSwitch() {
    await this.#switch.click();
  }

  async setDropdown() {
    await this.#dropdown.click();
  }

  async setDropdown2() {
    await this.#dropdown2.click();
  }

  async setButton() {
    await this.#button.click();
  }

  async getMessage() {
    const message = await $('id:android:id/message');
    return await message.getText();
  }
}

module.exports = new FormScreen();
