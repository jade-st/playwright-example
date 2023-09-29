exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.header = page.getByText(`Hi, I'm Jade`);
        this.personalTabContent = page.getByTestId('personal-tab-content');
    }

    async clickSocialLink(platformName) {
        const socialLink = this.page.getByTestId(platformName);
        await socialLink.click();
    }

    async clickTab(tabName) {
        const tab = this.page.locator(`[id="${tabName}-tab"]`);
        await tab.click();
    }
}