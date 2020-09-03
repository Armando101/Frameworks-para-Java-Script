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

app.post('/goty', async(req, res) => {
	const id = req.params.id;
	const gameRef = db.collection('goty').doc(id);
	const gameSnap = await gameRef.get();

	if (!gameSnap.exists) {
		res.status(404).json({
			error: true,
			message: 'Invalid ID' + id
		});
	} else {
		const currentGame = gameSnap.data() || {votos: 0};
		await gameRef.update({
			votos: currentGame.votos + 1
		})
		res.status(200).json({
			error: false,
			message: `Gracias por tu voto por ${currentGame.nombre}`
		});
	}

});

export const api = functions.https.onRequest(app);