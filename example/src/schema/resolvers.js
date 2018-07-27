'use strict'

const resolvers = {
  userInformation: ({ isLoggedIn }, { errorName }) => {
    if (!isLoggedIn) {
      throw new Error(errorName.UNAUTHORIZED)
    }

    return 'My username'
  },

  findUserByEmail: ({ email }, { errorName }) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      throw new Error(errorName.INVALID_EMAIL)
    }

    return email
  }
}

module.exports = resolvers
