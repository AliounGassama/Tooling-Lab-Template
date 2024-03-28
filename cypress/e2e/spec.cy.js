import { equal } from "assert"

describe(`The Home Page`, () => {
  it(`successfully loads`, () => {
    cy.visit(`/`) // change URL to match your dev URL
  })

  it(`test game`, () => {
    cy.visit(`/`)
    cy.get(`input[name=username]`).type(`Bob`)
    cy.get(`button[id=start-game-button]`).click()
    cy.get(`select[name=user-selection]`).select('Paper')
    cy.get(`button[id=go-button]`).click()
    cy.get(`p[id=game-history]`).invoke(`text`).then((text) => {
      var list_game_history = text.split(`,`)
      expect(list_game_history.length).equal(1)
      expect(text).contain(`Bob`)
    })
  })
})