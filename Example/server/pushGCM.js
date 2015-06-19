/**
 * Install the dependency with
 * `$ npm install node-gcm`
 *
 * More details here: https://github.com/ToothlessGear/node-gcm/blob/master/README.md
 */

var gcm = require('node-gcm');
var sender = new gcm.Sender('YOUR_API_KEY_HERE');

var registrationIds = [];

var message = new gcm.Message();
// Value the payload data to send...
message.addData('key1', 'message1');
message.addData('key2', 'message2');
message.addData('key1', 'message1');

message.addData('msgcnt','2'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); // Sound to play upon notification receipt - put in the www folder in app
message.collapseKey = 'demo';
message.delayWhileIdle = true; // Default is false
message.timeToLive = 3000; // Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.

// Add your regId devices
registrationIds.push('REGISTRATION_ID_GOES_HERE');
registrationIds.push('REGISTRATION_ID_GOES_HERE');

/**
 * Send push notifications to devices
 * @param  {object} message
 * @param  {array}  registrationIds
 * @param  {integer} numberRetries
 */
sender.send(message, registrationIds, 4, function(err, result) {
  console.log(result);
  console.log(err);
});
