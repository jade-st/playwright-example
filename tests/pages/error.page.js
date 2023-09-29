exports.ErrorPage = class ErrorPage {

    constructor(page) {
        this.page = page;
        this.errorMessage = page.getByTestId('error-message');
        this.returnButton = page.getByTestId('return-button');
    }
}