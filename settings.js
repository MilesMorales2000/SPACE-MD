require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAEp+4lptxlItVAQAAHIHAAAKAAAAY3JlZHMuanNvbpVUyZKjOBT8F13taIMNBhxREcNqU9gYL+VtYg4qECB2JIGNO*zvE1R1dfVhpqfmpi3y5cuXqe+gKDFFDurA7DuoCG4hQ*2SdRUCM6A1YYgIGIIAMghmwF86mzrhrrtnUWibybQMo5CXKnHvtnNeWEhKt4*SgI8Pp9UTeAxB1bxm2P8NIHYEzF*HlT8ZY1XiwqTeH2gqKgpna*es0g6HdnTqojJdbJ7Ao0eEmOAiMqsY5YjAzEGdBzH5Gv2NbcjzzWJdY5cdy6smcGoRRb5WHO3n0yJqSlNBOBDt3Cy*Rn+iDaKp8XrVq9E5PdnCleJTfbOeJ47bBfObdPEF4zYVCqal7*QpjgoU2AEqGGbdl3XPLUJy8a4YbjMVKo+GIWHSgKB2LZlr6temJ8aJsYc5f*0a8aVk1uoh90euTek5UXTPF0zfGXQ3Y48DLXnx1zsr5S*PV*orcY98eCX9P7qfl7vtVUh9rhXyhJ7bkVhl2w03lUPDywyRC23PzwxDOo2Fr9F3k0COR83I4zKzli+SN3WJtVRZJbnxKjkF0MjuEudB5Wp*0oesIb9jOd6htUutwjhG5fPK3KTOecqkmN1XyO4cy*XpaM0W3JHFXKMo+*Y8LhYH3J3qceoG*lxdknwUL2UvMUxYV0i2gvkhuT69dZSizg7AjH8MAUERpoxAhsuiPxvz*BDAoN0hnyD2Ji9wB7vCKKTXsw1XOKi32podxJG1vVt6vlY3Cxh0d3ixQnIxn8AQVKT0EaUoWGDKStKtEKUwQhTM*vxrCAp0Y++D68tN+CEIMaHspWiqrITBx1Q*LqHvl03Bdl3h6*0CETDjPo8RY7iIaK9jU0Dix7hFegwZBbMQZhT97BARFIAZIw36mVq9DHrhT0fFGx*5CRiC*G0gOOjln0zGnCgpU0lUZor8B*127WFhVX0rEANDkL094zlelkWJ4yRJVMRJ*7K*ePxk2AMGiEGcUTAD+nqQ3S6pbjrjOvNX87nKRaoeqeCzow9rvEt*Fgbpdd5YyXyduXM9HYxZetyXaK9scvklMrdW3DQToQ5x+fQPIGAGzB3*ysKl6Bj5zZ0IQS3ImbNRSuYb3FlztUkpbGL4aqKBJquj2zp14nLpcq2zye+WkI0TIQm1Wt6ibCcmms*k57ow1Ke+WoBa7KNfix3weLmRGopTnYoIXeZN6x74juqLKmsn+YRTjFfTCRRU7XKkDnTr5TatlDLmbX+Ry7f5dXu7LSyxgtHaPi+by0nQLtHm3bRvocl+fFb4zU79rPptiNFb9gvYT*C*Z*dOvLcY9xj+gvHjN*mXRGrHtVetNBKfb0m130aVx8jFSqeLdPTy3Fq2Zm7Pr4QNnEKowePx1xBUGWRhSXIwA7AISIkDMASkbHrP2kVY*qaYrr7YuvreeQYpUz9zsMc5ogzmFZjxksgLEi9w8vsrj5TVAtK4F2EuqHnTm7pTq2rHIPuIFVCtUlWNnQoefwNQSwECFAMUAAAICABKfuJabcZSLVQEAAByBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=',
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'MilesMorales2000',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
