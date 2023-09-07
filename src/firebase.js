//require("dotenv").config();

const serviceAccount = require("../creds.json")

const {initializeApp, applicationDefault} = require("firebase-admin/app")
const {getFirestore} = require("firebase-admin/firestore")

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore();

module.exports = {
    db,
}
