const express = require('express');
const accountSid =  "AC8d3cc94ff29d9e21a15eba794cebbffc";
const authToken =  "9cc02597548d7a1315743d2e8c2d2db7";
const client = require('twilio')(accountSid, authToken);



const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.post('/twilio',(req,res)=>{
  const textMessage = `Name:${req.body.fname}
    Email:${req.body.Email}
    Phone:${req.body.Phone}
    Message:${req.body.message}
  `

  console.log(req.body)
  client.messages
  .create({
     body: textMessage,
     from: '+19065694397 ',
     to: '+13214827882'
   })
  .then(message => {
    console.log(message.sid)
    res.json(message.sid)
  }).catch( err=> res.json(err))

} )

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

