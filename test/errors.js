'use strict'

const { expect } = require('chai')
const FormatError = require('../index')

describe('Get Errors with message and code', () => {
  let formatError
  let errorName
  before(() => {
    formatError = new FormatError([
      {
        name: 'INVALID_CREDENTIALS',
        message: 'Sorry, the credentials are invalid',
        statusCode: 401
      },
      {
        name: 'INVALID_EMAIL_FORMAT',
        message: 'Sorry, the email format is not valid',
        statusCode: 400
      }
    ])

    errorName = formatError.errorName
  })

  describe('HTTP Errors', () => {
    it('Should respond with an HTTP error and the statusCode', async () => {
      try {
        throw new Error(errorName.UNAUTHORIZED)
      } catch (err) {
        const error = formatError.getError(err)

        expect(error.message).to.be.eq('Unauthorized')
        expect(error.statusCode).to.be.eq(401)
      }
    })

    it('Should get Invalid credentials error with the statusCode', async () => {
      try {
        throw new Error(errorName.INVALID_CREDENTIALS)
      } catch (err) {
        const error = formatError.getError(err)

        expect(error.message).to.be.eq('Sorry, the credentials are invalid')
        expect(error.statusCode).to.be.eq(401)
      }
    })

    it('Should get Invalid email format error with the statusCode', async () => {
      try {
        throw new Error(errorName.INVALID_EMAIL_FORMAT)
      } catch (err) {
        const error = formatError.getError(err)

        expect(error.message).to.be.eq('Sorry, the email format is not valid')
        expect(error.statusCode).to.be.eq(400)
      }
    })
  })
})
