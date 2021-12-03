import EventsSection from "../utils/EventsSection";
import NavigationBar from "../utils/NavigationBar";

const xpath = require('cypress-xpath');

before(() => {
    cy.viewport('macbook-13');
    cy.visit('/');
})

beforeEach(() => {
    const navigationBar = new NavigationBar();

    //Verify if nav bar is loaded correctly
    navigationBar
        .getNavBarAnchorByTitle('Vue.js Docs').should('be.visible')

    navigationBar
        .getNavBarAnchorByTitle('Featured Events').should('be.visible')

    navigationBar
        .getNavBarAnchorByTitle('Today’s Events').should('be.visible')

    navigationBar
        .getNavBarAnchorByTitle('New External Link').should('be.visible')

    navigationBar
        .getSearchEventInputForm().should('be.visible')
})

afterEach(() => {
    //cleanup after test
    cy.visit('/')

    const eventSection = new EventsSection();

    eventSection
        .verifyIfThereIsNoUpcomingEvents()

  })

describe('Events e2e tests - coursedog', () => {

    it("Verify if user can see one today's event assuming today is 20.11.2021", () => {

        const eventSection = new EventsSection();

        //go to 20.11.2021 date
        cy.visit('https://damian-events.coursedog.com/2021/11/20')
            
        //Verify if proper event has been displayed
        eventSection
            .countEvents().should('have.length', 1)
        
        eventSection
            .getSectionTitle().should('include.text', 'Saturday, November 20, 2021')
        
        eventSection    
            .getEventTitle().should('include.text', 'Tokyo: Art and Photography')

        eventSection
            .getEventDate().should('include.text', 'Sat Nov 20 2021')
        
        eventSection
            .getEventDescription().contains('This major exhibition will explore Tokyo through the varied and vibrant arts it has generated over 400 years, from its beginnings as the headquarters ...')
            
        eventSection
            .getEventOrganizedByLabel().should('exist').and('be.visible')

        eventSection
            .getEventOrganizedByData().should('include.text', 'Department of Art & Art History')

        eventSection            
            .getEventTypeLabel().should('exist').and('be.visible')

        eventSection
            .getEventTypeData().should('include.text', 'Speaker')

        //Write in search event 'Tokyo'
        const navigationBar = new NavigationBar();

        navigationBar
            .getSearchEventInputForm().clear().type('Tokyo{enter}')

        //Verify if search results are as expected
        eventSection
            .getSearchResultTitle().should('include.text', 'Search results for "Tokyo"')

        eventSection
            .getSearchStatusResultsInformation().should('include.text', 'Showing 0 to 1 of 1 total results')

        //Filter events by organization Model UN
        eventSection
            .getSearchInput().clear().type('{enter}')

        eventSection
            .setFilterByOrganization('Model UN')

        eventSection
            .getSearchStatusResultsInformation().should('include.text', 'No results found')

    });

    it("Verify if user is able to see details of the event", () => {

        //go to 03.02.2022 date
        cy.visit('https://damian-events.coursedog.com/2022/2/3')

        const eventSection = new EventsSection()

        //Verify if proper event has been displayed
        eventSection
            .getSectionTitle().should('include.text', 'Thursday, February 3, 2022')
        
        eventSection    
            .getEventTitle().should('include.text', 'event 49')

        eventSection
            .getEventDate().should('include.text', 'Thu Feb 3 2022')
        
        eventSection
            .getEventDescription().contains('event 5')
            
        eventSection
            .getEventOrganizedByLabel().should('exist').and('be.visible')

        eventSection
            .getEventOrganizedByData().should('include.text', 'Cantor Arts Center')

        eventSection            
            .getEventTypeLabel().should('exist').and('be.visible')

        eventSection
            .getEventTypeData().should('include.text', 'Normal')

        //Click on eventTitle to open Event Details
        eventSection
            .getEventTitle()
            .click()

        //Verify if event details contains all expected informations
        eventSection
            .verifyIfAddToCalendarLinkIsVisibleAndEnabled()

        eventSection
            .verifyIfAddToGoogleCalendarLinkIsVisibleAndEnabled()

        eventSection
            .verifyIfEventTypeHasProperValue('Normal')

        eventSection
            .verifyIfOrganizedByHasProperValue('Cantor Arts Center')

        eventSection
            .verifyIfEventHasProperDescription('event 5')
    })
});