const CRAIGSLIST_HEADING_SELECTOR = "#leftbar #logo a"

before(
    "will visit Craigslist Miami",
    () => {
        cy.visitCraigslistMiami()
    }
)

describe(
    "will validate main headings have correct text",
    () => {
        it(
            "validates main 'Craigslist' heading has the correct text",
            () => {
                cy.get(CRAIGSLIST_HEADING_SELECTOR).text()
                    .should("equal", "craigslist")
            }
        )
    }
)
