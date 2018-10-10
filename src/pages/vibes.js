// Empty constructor
module.exports = {

  //Cal the sdk to register a device, with appropriate callback methods
  configure: function(successCallback, errorCallback) {
    var options = {};
    cordova.exec(successCallback, errorCallback, 'VibesCordovaPlugin', 'configure', [options]);
  },

  //Cal the sdk to register a device, with appropriate callback methods
  registerDevice: function(successCallback, errorCallback) {
    var options = {};
    cordova.exec(successCallback, errorCallback, 'VibesCordovaPlugin', 'registerDevice', [options]);
  },

  //Call the sdk to unregister a device, with appropriate callback methods
  unregisterDevice: function(successCallback, errorCallback) {
    var options = {};
    cordova.exec(successCallback, errorCallback, 'VibesCordovaPlugin', 'unregisterDevice', [options]);
  },
  //Call the sdk to register a push token, with appropriate callback methods
  registerPush: function(token, successCallback, errorCallback) {
    var options = {};
    options.token = token;
    cordova.exec(successCallback, errorCallback, 'VibesCordovaPlugin', 'registerPush', [options]);
  },

  //Call the sdk to unregister a push token, with appropriate callback methods
  unregisterPush: function(successCallback, errorCallback) {
    var options = {};
    cordova.exec(successCallback, errorCallback, 'VibesCordovaPlugin', 'unregisterPush', [options]);
  },

  //Call the sdk to associate a person with a device via their external id, with appropriate callback methods
  associatePerson: function(externalPersonId, successCallback, errorCallback) {
    var options = {};
    options.externalPersonId = externalPersonId;
    cordova.exec(successCallback, errorCallback, 'VibesCordovaPlugin', 'associatePerson', [options]);
  }
};