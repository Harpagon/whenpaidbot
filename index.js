const Tgfancy = require("tgfancy");
const settings = require("./settings.json");
const bot = new Tgfancy(settings.token, {
  tgfancy: {
    // options for this fanciness
    ratelimiting: {
      // number of times to retry a request before giving up
      maxRetries: 10, // default: 10
      // number of milliseconds to wait before retrying the
      // request (if API does not advise us otherwise!)
      timeout: 1000 * 60, // default: 60000 (1 minute)
      // (optional) function invoked whenever this fanciness handles
      // any ratelimiting error.
      // this is useful for debugging and analysing your bot
      // behavior
      // notify(methodName, ...args) {   // default: undefined
      //     // 'methodName' is the name of the invoked method
      //     // 'args' is an array of the arguments passed to the method
      //     // do something useful here
      //     // ...snip...
      // },
      // maximum number of milliseconds to allow for waiting
      // in backoff-mode before retrying the request.
      // This is important to avoid situations where the server
      // can cause lengthy timeouts e.g. too long of a wait-time
      // that is causes adverse effects on efficiency and performance.
      maxBackoff: 1000 * 60 * 5 // default: 5 minutes
    }
  }
});
