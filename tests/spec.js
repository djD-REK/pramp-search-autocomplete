// Run test suite with: yarn mocha tests/*

const expect = require("chai").expect

const { SearchAutocomplete } = require("../src/SearchAutocomplete.js")

const searchAutocomplete = SearchAutoComplete()

describe("SearchAutocomplete()", function () {
  it("should do the thing", function () {
    expect().to.equal(4)
  })
})
