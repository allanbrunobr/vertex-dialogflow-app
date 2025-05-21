const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleAuth } = require('google-auth-library');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const LOCATION = 'us-central1';

app.post('/predict', async (req, res) => {
  try {
    // Recebe projectNumber e endpointId do body enviado pelo frontend
    const { projectNumber, endpointId, ...payload } = req.body;

    if (!projectNumber || !endpointId) {
      return res.status(400).json({ error: 'projectNumber e endpointId são obrigatórios' });
    }

    const auth = new GoogleAuth({ scopes: 'https://www.googleapis.com/auth/cloud-platform' });
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    const url = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${projectNumber}/locations/${LOCATION}/endpoints/${endpointId}:predict`;

    console.log('URL Vertex AI:', url);
    console.log('Payload:', payload);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), // envie só o payload relevante para o modelo
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error('Erro na predição:', error);
    res.status(500).json({ error: 'Erro ao fazer a predição com o modelo AutoML' });
  }
});

// Exporta como função do Firebase
exports.api = functions.https.onRequest(app); 
