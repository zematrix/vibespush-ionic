// Empty constructor
module.exports = {

  //Cal the sdk to register a device without caring about success or failure
  configure: function() {
    var options = {};
    cordova.exec(null, null, 'VibesCordovaPlugin', 'configure', [options]);
  },

  //Cal the sdk to register a device without caring about success or failure
  registerDevice: function() {
    var options = {};
    cordova.exec(null, null, 'VibesCordovaPlugin', 'registerDevice', [options]);
  },

  //Call the sdk to unregister a device without caring about success or failure
  unregisterDevice: function() {
    var options = {};
    cordova.exec(null, null, 'VibesCordovaPlugin', 'unregisterDevice', [options]);
  },
  //Call the sdk to register a push token without caring about success or failure
  registerPush: function(token) {
    var options = {};
    options.token = token;
    cordova.exec(null, null, 'VibesCordovaPlugin', 'registerPush', [options]);
  },

  //Call the sdk to unregister a push token without caring about success or failure
  unregisterPush: function() {
    var options = {};
    cordova.exec(null, null, 'VibesCordovaPlugin', 'unregisterPush', [options]);
  },

  //Call the sdk to associate a person with a device via their external id. Ignores  success or failure
  associatePerson: function(externalPersonId) {
    var options = {};
    options.externalPersonId = externalPersonId;
    cordova.exec(null, null, 'VibesCordovaPlugin', 'associatePerson', [options]);
  }
};