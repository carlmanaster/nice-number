const { niceNumber } = require(`./nice-number`)

describe(`nice-number`, () => {
  it(`should return 'null' for null`, () => {
    expect(niceNumber(null)).toBe(`null`)
  })

  it(`should return 'null' for undefined`, () => {
    expect(niceNumber(undefined)).toBe(`null`)
  })

  it(`should use exponential notation for values < 0.001`, () => {
    expect(niceNumber(0.00091)).toBe(`9.1e-4`)
  })

  it(`should use 0.xxx notation for values < 1`, () => {
    expect(niceNumber(0.001)).toBe(`0.001`)
    expect(niceNumber(0.123)).toBe(`0.123`)
    expect(niceNumber(0.700)).toBe(`0.700`)
  })

  it(`should use x.x notation for values < 10`, () => {
    expect(niceNumber(5.437)).toBe(`5.4`)
    expect(niceNumber(7)).toBe(`7.0`)
    expect(niceNumber(9.9)).toBe(`9.9`)
  })

  it(`should use integer notation for values < 1,000`, () => {
    expect(niceNumber(10)).toBe(`10`)
    expect(niceNumber(100)).toBe(`100`)
    expect(niceNumber(999)).toBe(`999`)
  })

  it(`should use K notation for values < 1,000,000`, () => {
    expect(niceNumber(10000)).toBe(`10K`)
    expect(niceNumber(100000)).toBe(`100K`)
    expect(niceNumber(999000)).toBe(`999K`)
  })

  it(`should use M notation for values < 1,000,000,000`, () => {
    expect(niceNumber(10000000)).toBe(`10M`)
    expect(niceNumber(100000000)).toBe(`100M`)
    expect(niceNumber(999000000)).toBe(`999M`)
  })

  it(`should use G notation for values < 1,000,000,000,000`, () => {
    expect(niceNumber(10000000000)).toBe(`10G`)
    expect(niceNumber(100000000000)).toBe(`100G`)
    expect(niceNumber(999000000000)).toBe(`999G`)
  })

  it(`should use exponential notation for values >= 1,000,000,000,000`, () => {
    expect(niceNumber(1000000000000)).toBe(`1.0e+12`)
  })

  it(`should handle negative numbers properly`, () => {
    expect(niceNumber(-0.00091)).toBe(`-9.1e-4`)
    expect(niceNumber(-0.123)).toBe(`-0.123`)
    expect(niceNumber(-7)).toBe(`-7.0`)
    expect(niceNumber(-100)).toBe(`-100`)
    expect(niceNumber(-100000)).toBe(`-100K`)
    expect(niceNumber(-100000000)).toBe(`-100M`)
    expect(niceNumber(-100000000000)).toBe(`-100G`)
    expect(niceNumber(-1000000000000)).toBe(`-1.0e+12`)
  })
})
