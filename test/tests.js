const expect = chai.expect

describe('timer', function() {
  it('button puts time in clock', function() {
    expect(timer).to.be.a('function');
  })
  it('should be a string', function(){
    expect(timer('25')).to.equal('25')
  })
})

// describe('getsName', function() {
//   it('gets user input', function() {
//     expect(localStorage.getItem('name')).to.equal('Tim');
//   })
// })
// describe('calculator', function () {
//   it('is an object', function () {
//     expect(calculator).to.be.a('object')
//   })
//
//   describe('add', function () {
//     it('should be a function', function () {
//       expect(calculator.add).to.be.a('function')
//     })
//
//     it('should add two numbers together', function () {
//       expect(calculator.add(10,20)).to.equal(30)
//     })
//   })
// })
