'use strict'

const errorName = {
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  PAYMENT_REQUIRED: 'PAYMENT_REQUIRED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  METHOD_NOT_ALLOWED: 'METHOD_NOT_ALLOWED',
  NOT_ACCEPTABLE: 'NOT_ACCEPTABLE',
  PROXY_AUTHENTICATION_REQUIRED: 'PROXY_AUTHENTICATION_REQUIRED',
  REQUEST_TIMEOUT: 'REQUEST_TIMEOUT',
  CONFLICT: 'CONFLICT',
  GONE: 'GONE',
  LENGTH_REQUIRED: 'LENGTH_REQUIRED',
  PRECONDITION_FAILED: 'PRECONDITION_FAILED',
  PAYLOAD_TOO_LARGE: 'PAYLOAD_TOO_LARGE',
  URI_TOO_LONG: 'URI_TOO_LONG',
  UNSUPPORTED_MEDIA_TYPE: 'UNSUPPORTED_MEDIA_TYPE',
  RANGE_NOT_SATISFIABLE: 'RANGE_NOT_SATISFIABLE',
  EXPECTATION_FAILED: 'EXPECTATION_FAILED',
  IM_A_TEAPOT: 'IM_A_TEAPOT',
  MISDIRECTED_REQUEST: 'MISDIRECTED_REQUEST',
  UNPROCESSABLE_ENTITY: 'UNPROCESSABLE_ENTITY',
  LOCKED: 'LOCKED',
  FAILED_DEPENDENCY: 'FAILED_DEPENDENCY',
  UNORDERED_COLLECTION: 'UNORDERED_COLLECTION',
  UPGRADE_REQUIRED: 'UPGRADE_REQUIRED',
  PRECONDITION_REQUIRED: 'PRECONDITION_REQUIRED',
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
  REQUEST_HEADER_FIELDS_TOO_LARGE: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  UNAVAILABLE_FOR_LEGAL_REASONS: 'UNAVAILABLE_FOR_LEGAL_REASONS',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_IMPLEMENTED: 'NOT_IMPLEMENTED',
  BAD_GATEWAY: 'BAD_GATEWAY',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  GATEWAY_TIMEOUT: 'GATEWAY_TIMEOUT',
  HTTP_VERSION_NOT_SUPPORTED: 'HTTP_VERSION_NOT_SUPPORTED',
  VARIANT_ALSO_NEGOTIATES: 'VARIANT_ALSO_NEGOTIATES',
  INSUFFICIENT_STORAGE: 'INSUFFICIENT_STORAGE',
  LOOP_DETECTED: 'LOOP_DETECTED',
  BANDWIDTH_LIMIT_EXCEEDED: 'BANDWIDTH_LIMIT_EXCEEDED',
  NOT_EXTENDED: 'NOT_EXTENDED',
  NETWORK_AUTHENTICATION_REQUIRED: 'NETWORK_AUTHENTICATION_REQUIRED'
}

const errorType = {
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
}

module.exports = { errorName, errorType }
