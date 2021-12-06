const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51K3YjqHr7OIFpmih1yvu6GxbelHFRxRuaahtdIsaJw2AzMvryDbdC4XM4K94bAdqR67Wj5C5bCo7vzBYwMJHrYjv00WwuxlPwT');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('hello');
});

app.post('/payments/create', async(req, res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-13ee0/us-central1/api