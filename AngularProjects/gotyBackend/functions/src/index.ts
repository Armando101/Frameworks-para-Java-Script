import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-graphics.firebaseio.com"
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.json({
   	mensaje: "Hello from Firebase Functions!!!"
   });
 });

export const getName = functions.https.onRequest((request, response) => {
   const nombre = request.query.nombre || 'Armando';
   response.json({
   	nombre
   });
});

export const getGOTY = functions.https.onRequest( async(request, response) => {
   const gotyRef = db.collection('goty');
   const docsSnap = await gotyRef.get();
   const juegos = docsSnap.docs.map(doc => doc.data());

   response.json(
   	juegos
   );
});

// Express
const app = express();
app.use(cors({ origin: true })); // Esto es para que cualquiera pueda hacer get a mi servidor

app.get('/goty', async (req, res) => {
	const gotyRef = db.collection('goty');
   const docsSnap = await gotyRef.get();
   const juegos = docsSnap.docs.map(doc => doc.data());

   res.json(
   	juegos
   );
});

export const api = functions.https.onRequest(app);