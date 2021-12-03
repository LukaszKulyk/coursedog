class NavigationBar {

    verifyUrl(url) {
        return cy.url().should('include', url)
    }

    getNavigationBar() {
        return cy.xpath("//div[@id='announcer']/following-sibling::nav");
    }

    getNavBarAnchorByTitle(title) {
        return cy.xpath(`//div[@id='announcer']/following-sibling::nav//div/a[contains(@title, '${title}')]`);
    }

    getSearchEventInputForm() {
        return cy.xpath("//div[@id='announcer']/following-sibling::nav//div/form[@role='search']/input[@role='search']")
    }
}

export default NavigationBar;