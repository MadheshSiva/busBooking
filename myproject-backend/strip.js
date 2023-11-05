
// const { json } = require('body-parser')
//  const cros = require('cros')
// const express = require('express')
// const app = express()
// Middleware
// app.use(json.express())
// app.use(cros({
//     origin:"http://localhost:3000/",
// })) 

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

module.exports.Payment = async(req, res) => {
console.log('stripe page called')
// const reqData = req.body.items.map( reqDatas => reqDatas.busName)
// console.log(reqData, "reqqq")
try{ 
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items.map(item => {
            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.busName, // Change 'busName' to 'name' for product name
                        description: item.busType, // Optional description
                    },
                    unit_amount: item.price * 100, // Amount in cents
                },
                quantity: 1, // Assuming you want to purchase one item at a time
            };
        }),
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
     
    res.json({url:session.url})
} catch(error){
   res.status(500).json({message : error.message})
}

}

