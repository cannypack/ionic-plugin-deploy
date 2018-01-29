var IonicDeploy = {
  init: function(server_host, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'initialize',
      [server_host]
    );
  },
  check: function(customHeaders, checkOptions, success, failure) {
    var opts = checkOptions || {};
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'check',
      [customHeaders, opts]
    );
  },
  download: function(customHeaders, success, failure) {
  	cordova.exec(
  		success,
  		failure,
  		'IonicDeploy',
  		'download',
  		[customHeaders]
  	);
  },
  extract: function(success,failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'extract',
      []
    );
  },
  redirect: function(success, failure) {
  	cordova.exec(
  		success,
  		failure,
  		'IonicDeploy',
  		'redirect',
  		[]
  	);
  },
  info: function(success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'info',
      []
    );
  },
  getVersions: function(success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'getVersions',
      []
    );
  },
  deleteVersion: function(version, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'deleteVersion',
      [version]
    );
  },
  getMetadata: function(uuid, success, failure) {
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'getMetadata',
      [uuid]
    );
  },
  parseUpdate: function(jsonResponse, success, failure) {
    if (typeof jsonReponse !== 'string') {
      jsonResponse = JSON.stringify(jsonResponse);
    }
    cordova.exec(
      success,
      failure,
      'IonicDeploy',
      'parseUpdate',
      [jsonResponse]
    );
  },
}

module.exports = IonicDeploy;
