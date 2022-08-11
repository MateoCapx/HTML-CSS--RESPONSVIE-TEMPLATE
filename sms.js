// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid =  "AC8d3cc94ff29d9e21a15eba794cebbffc";
const authToken =  "9cc02597548d7a1315743d2e8c2d2db7";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19065694397 ',
     to: '+13214827882'
   })
  .then(message => console.log(message.sid));
 