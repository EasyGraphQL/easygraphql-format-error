<h1 align="center">
  <img src="https://cdn.rawgit.com/EasyGraphQL/easygraphql-mock/baab331c/EasyGraphQL.png" alt="EasyGraphQL " width="350">
  <br>
  EasyGraphQL Format Error
  <br>
  <br>
</h1>

Easy GraphQL Format Error is a node library used to handle the errors and return them with the respective
status code.

## Installation
```bash
$ npm install easygraphql-format-error --save
```

## Usage
To get started with the format error, you might need to follow the next steps:

### Basic
```js
// App.js
const FormatError = require('easygraphql-format-error')

const formatError = new FormatError()
// pass the errorName on the context
const errorName = formatError.errorName

app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
    context: { errorName },
    formatError: (err) => {
      return formatError.getError(err)
    }
  })(req, res)
})

// Resolver
userInformation: ({ isLoggedIn }, { errorName }) => {
  if (!isLoggedIn) {
    throw new Error(errorName.UNAUTHORIZED)
  }

  return 'My username'
}

// If the user is not loggedIn the response will be
{
  "errors": [
    {
      "message": "Unauthorized",
      "statusCode": 401
    }
  ],
  "data": null
}
```

### With Custom errors
You can pass custom error and access those errors from the resolver, calling `errorName.YOUR_ERROR_NAME`

```js
// App.js
const FormatError = require('easygraphql-format-error')

const formatError = new FormatError([{
  name: 'INVALID_EMAIL',
  message: 'The email is not valid',
  statusCode: '400'
}])
// pass the errorName on the context
const errorName = formatError.errorName

app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
    context: { errorName },
    formatError: (err) => {
      return formatError.getError(err)
    }
  })(req, res)
})

// Resolver
findUserByEmail: ({ email }, { errorName }) => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    throw new Error(errorName.INVALID_EMAIL)
  }

  return email
}

// If the email is not valid the response will be
{
  "errors": [
    {
      "message": "The email is not valid",
      "statusCode": "400"
    }
  ],
  "data": null
}
```

## Demo
Here is an [Example](https://github.com/EasyGraphQL/easygraphql-format-error/tree/master/example) that can be useful!

# License
### The MIT License

Copyright (c) 2018 EasyGraphQL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.