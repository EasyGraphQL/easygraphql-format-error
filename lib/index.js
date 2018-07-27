'use strict'

const { errorName, errorType } = require('./errors')

class FormatError {
  constructor (customErrors) {
    this.errorName = errorName
    this.errorType = errorType

    if (customErrors && Array.isArray(customErrors)) {
      customErrors.forEach(element => {
        this.errorName[element.name] = element.name
        this.errorType[element.name] = {
          message: element.message,
          statusCode: element.statusCode
        }
      })
    } else if (customErrors && !Array.isArray(customErrors)) {
      throw new Error('The parameters of the class must be an array')
    }
  }

  errorName () {
    return this.errorName
  }

  getError (err) {
    const error = this.errorType[err.message]

    if (!error) {
      return err
    }

    return error
  }
}

module.exports = FormatError
