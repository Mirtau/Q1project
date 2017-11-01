const expect = chai.expect

describe('timer', function() {
  it('returns the value of the button clicked', function() {
    expect(timer(25)).to.equal(25);
  })
})

describe('namer', function() {
  it('it puts name into welcome statement', function() {
    expect(namer('')).to.equal('');
  })
})

describe('todoEx', function() {
  it('returns 5 random excercises', function() {
    let array = ['pushups', 'situps', 'plank', 'jumping jacks', 'wall sits', 'leg lifts', 'lunges', 'squats', 'mtn climbers', 'crunches', 'side plank', 'wide hands push-ups'];
    expect(todoEx(array).length).to.equal(5);
  })
})
