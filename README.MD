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

## Default errors
```
  BAD_REQUEST: {
    message: 'Bad Request',
    statusCode: 400
  },
  UNAUTHORIZED: {
    message: 'Unauthorized',
    statusCode: 401
  },
  PAYMENT_REQUIRED: {
    message: 'Payment Required',
    statusCode: 402
  },
  FORBIDDEN: {
    message: 'Forbidden',
    statusCode: 403
  },
  NOT_FOUND: {
    message: 'Not Found',
    statusCode: 404
  },
  METHOD_NOT_ALLOWED: {
    message: 'Method Not Allowed',
    statusCode: 405
  },
  NOT_ACCEPTABLE: {
    message: 'Not Acceptable',
    statusCode: 406
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    message: 'Proxy Authentication Required',
    statusCode: 407
  },
  REQUEST_TIMEOUT: {
    message: 'Request Timeout',
    statusCode: 408
  },
  CONFLICT: {
    message: 'Conflict',
    statusCode: 409
  },
  GONE: {
    message: 'Gone',
    statusCode: 410
  },
  LENGTH_REQUIRED: {
    message: 'Length Required',
    statusCode: 411
  },
  PRECONDITION_FAILED: {
    message: 'Precondition Failed',
    statusCode: 412
  },
  PAYLOAD_TOO_LARGE: {
    message: 'Payload Too Large',
    statusCode: 413
  },
  URI_TOO_LONG: {
    message: 'URI Too Long',
    statusCode: 414
  },
  UNSUPPORTED_MEDIA_TYPE: {
    message: 'Unsupported Media Type',
    statusCode: 415
  },
  RANGE_NOT_SATISFIABLE: {
    message: 'Range Not Satisfiable',
    statusCode: 416
  },
  EXPECTATION_FAILED: {
    message: 'Expectation Failed',
    statusCode: 417
  },
  IM_A_TEAPOT: {
    message: 'I\'m a teapot',
    statusCode: 418
  },
  MISDIRECTED_REQUEST: {
    message: 'Misdirected Request',
    statusCode: 421
  },
  UNPROCESSABLE_ENTITY: {
    message: 'Unprocessable Entity',
    statusCode: 422
  },
  LOCKED: {
    message: 'Locked',
    statusCode: 423
  },
  FAILED_DEPENDENCY: {
    message: 'Failed Dependency',
    statusCode: 424
  },
  UNORDERED_COLLECTION: {
    message: 'Unordered Collection',
    statusCode: 425
  },
  UPGRADE_REQUIRED: {
    message: 'Upgrade Required',
    statusCode: 426
  },
  PRECONDITION_REQUIRED: {
    message: 'Precondition Required',
    statusCode: 428
  },
  TOO_MANY_REQUESTS: {
    message: 'Too Many Requests',
    statusCode: 429
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    message: 'Request Header Fields Too Large',
    statusCode: 431
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    message: 'Unavailable For Legal Reasons',
    statusCode: 451
  },
  INTERNAL_SERVER_ERROR: {
    message: 'Internal Server Error',
    statusCode: 500
  },
  NOT_IMPLEMENTED: {
    message: 'Not Implemented',
    statusCode: 501
  },
  BAD_GATEWAY: {
    message: 'Bad Gateway',
    statusCode: 502
  },
  SERVICE_UNAVAILABLE: {
    message: 'Service Unavailable',
    statusCode: 503
  },
  GATEWAY_TIMEOUT: {
    message: 'Gateway Timeout',
    statusCode: 504
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    message: 'HTTP Version Not Supported',
    statusCode: 505
  },
  VARIANT_ALSO_NEGOTIATES: {
    message: 'Variant Also Negotiates',
    statusCode: 506
  },
  INSUFFICIENT_STORAGE: {
    message: 'Insufficient Storage',
    statusCode: 507
  },
  LOOP_DETECTED: {
    message: 'Loop Detected',
    statusCode: 508
  },
  BANDWIDTH_LIMIT_EXCEEDED: {
    message: 'Bandwidth Limit Exceeded',
    statusCode: 509
  },
  NOT_EXTENDED: {
    message: 'Not Extended',
    statusCode: 510
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    message: 'Network Authentication Required',
    statusCode: 511
  }
```

if the error to throw is `UNAUTHORIZED` just do `throw new Error(errorName.UNAUTHORIZED)`
and the result will be:
```
{
  "errors": [
    {
      "message": 'Unauthorized',
      "statusCode": 401
    }
  ],
  "data": null
}
```


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