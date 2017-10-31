example calc test : const expect = chai.expect


describe('calc', function() {
it('adds two numbers', function () {
  expect(calc('3*3=')).to.equal(9)
})
})
