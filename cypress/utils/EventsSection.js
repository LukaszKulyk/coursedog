class EventsSection {

    getEventsSection() {
        return cy.xpath("//article[@id='main-content']")
    }

    countEvents() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div")
    }

    countEventsAndVerifyIfEqualToExpectedValue(value) {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']").find('div').its('length').should('eq', value)
    }

    getSectionTitle() {
        return cy.xpath("//article[@id='main-content']/section/h1/span")
    }

    getEventTitle() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/a");
    }

    getEventDate() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/p[position()=1]/span[position()=1]")
    }

    getEventTime() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/p[position()=1]/span[position()=2]")
    }

    getEventDescription() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/p[position()=2]")
    }

    getEventOrganizedByLabel() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/div/div[position()=2]/label")
    }

    getEventOrganizedByData() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/div/div[position()=2]/a")
    }

    getEventTypeLabel() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/div/div[position()=1]/label")
    }

    getEventTypeData() {
        return cy.xpath("//article[@id='main-content']/section/div[@role='group']/div/div[last()]/div/div[position()=1]/a")
    }

    getSearchResultTitle(){
        return cy.xpath("//article[@id='main-content']/section/div/h1")
    }

    getSearchStatusResultsInformation() {
        return cy.xpath("//article[@id='main-content']/section/div/p[@role='status']")
    }

    setFilterByOrganization(value) {
        return cy.xpath("//article[@id='main-content']/section/div[position()=3]/div/div[position()=2]/select").select(value)
    }

    getSearchInput() {
        return cy.xpath("//article[@id='main-content']/section//input[@id='search-input']")
    }

    countFoundEventsAndVerifyIfEqualToExpectedValue(value) {
        return cy.xpath("//section[@id='search-results']/div/div[last()]/div/div[position()=2]").find('label').its('length').should('eq', value)
    }

    getHeadingElementWhenNoEventsFound() {
        return cy.xpath("//section/div/h1")
    }

    verifyIfThereIsNoUpcomingEvents() {
        return cy.xpath("//article[@id='main-content']/section/div//h1").should('include.text', 'No upcoming events');
    }

    //EventDetailsSection
    verifyIfAddToCalendarLinkIsVisibleAndEnabled() {
        return cy.xpath("//div[@data-test='event-type']/preceding-sibling::div/button").should('be.visible').and('be.enabled')
    }

    verifyIfAddToGoogleCalendarLinkIsVisibleAndEnabled() {
        return cy.xpath("//div[@data-test='event-type']/preceding-sibling::div/a/button").should('be.visible').and('be.enabled')
    }

    verifyIfEventTypeHasProperValue(value) {
        return cy.xpath("//div[@data-test='event-type']/a").should('include.text', value);
    }

    verifyIfOrganizedByHasProperValue(value) {
        return cy.xpath("//div[@data-test='organisation']/a").should('include.text', value);
    }

    verifyIfEventHasProperDescription(description) {
        return cy.xpath("//article[@id='main-content']//article//h3/following-sibling::p").should('include.text', description);
    }

}

export default EventsSection;