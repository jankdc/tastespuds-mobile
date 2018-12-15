
export class LocationPermissionError extends Error {
  constructor (...args) {
    super(...args)
    this.name = 'LocationPermissionError'
  }
}

export class ReverseGeocodeError extends Error {
  constructor (...args) {
    super(...args)
    this.name = 'ReverseGeocodeError'
  }
}
