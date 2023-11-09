const nodeMailer = require('nodemailer')
require('dotenv').config()

const transportService = nodeMailer.createTransport({
    service:"gmail",
host:"smpt.gmail.com",
port:465,
secure:true,
auth:{
user: process.env.USER,
pass:process.env.PASSWORD
}

})

module.exports.emailService = async(req,res) => {
console.log(req.body,"body of the email")
const mailOptions =  await {
    from : {
        name:'Godwit',
        address:process.env.USER
    },
    to:req.body.email,
    subject:"Ticket Booking Confirmation",
    text:"Hello word",
    html:`<div style= "color:black"> 
     
    <h3>Dear Customer,</h3>
    <ul>
    <li>Bus Name : ${req.body.busName} </li>
    <li>Bus Type : ${req.body.busType} </li>
    <li>Seats : ${req.body.seats} </li>
    <li>Price : ${req.body.price} </li>   
    </ul>
    <h3>Important information: </h3> 
     <ol> 
     <li>Please arrive at the bus terminal at least 30 minutes before the scheduled departure time to ensure a smooth boarding process </li>
     <li>Don't forget to carry a valid government-issued ID and a copy of this booking confirmation for hassle-free boarding </li>
     <li>In case you have any question or require assistance, our customer support team is available 24/7. you can reach us </li>
     </ol>
     <p>we hope you have a plesent journey with us, and we look forward to serving you again in the future. Thank you for choosing Godwit for your travel needs</p>
    <p>Safe travels! </p>
     <div style="position:relative;">
     <pre>
<span style="font-size: 17px; font-weight: bold;">Best regards,<span/> 
<span style ="font-weight: 100; font-size: 15px;">Madhesh</span>
<span style ="font-weight: 100; font-size: 15px;">Godwit</span>
<span style ="font-weight: 100; font-size: 15px;">9790609284</span>    
     </pre>
    </div> 
    </div>`
} 

try {
   const mailStatus = await transportService.sendMail(mailOptions)
   console.log('email  sent successfully!')
   res.status(200).json({message:"Your message had sent successfully! "})
} catch (error) {
   res.status(500).json({message: error.message})
}

}


