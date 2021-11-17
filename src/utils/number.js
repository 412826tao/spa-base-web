import Big from 'bignumber.js'

const toFixed = (value, dp, rm = 1) => {
  if (value === '' || value === undefined || value === null) return value
  return new Big(value).toFixed(dp, rm)
}

// demo 123456789.123456789 ==> 123456789.12000000
export const toFixed8 = (value) => {
  return toFixed(value, 8)
}

export const toFixed6 = (value) => {
  return toFixed(value, 6)
}

const toFormat = (value, dp, rm = 1) => {
  if (value === '' || value === undefined || value === null) return value
  return new Big(value).toFormat(dp, rm)
}

// demo 123456789.123456789 ==> 123,456,789.12000000
const toFormat8 = (value, dp) => {
  return toFormat(value, 8)
}

const toFormat6 = (value, dp) => {
  return toFormat(value, 6)
}

export default {
  toFixed,
  toFixed8,
  toFixed6,
  toFormat,
  toFormat8,
  toFormat6
}
