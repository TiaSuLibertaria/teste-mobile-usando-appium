class HomeScreen {
  async enterSelector() {
    return await $('~Forms');
  }

  async goToForm() {
    const form = await this.enterSelector();
    await form.click();
  }
}

module.exports = new HomeScreen();
