const { OAuth2Client } = require('google-auth-library');
const config = require('./config.js')
const Imap = require('imap');
const base64 = require('base64-js');
const fs = require('fs');

// Replace these values with your OAuth2 credentials
const clientId = config.clientId;
const clientSecret = config.clientSecret;
const refreshToken = config.refreshToken;
const email = config.email;


console.log(email);
// Create an OAuth2 client with the given credentials
const oAuth2Client = new OAuth2Client({
    clientId,
    clientSecret,
});

// Set the refresh token for the client
oAuth2Client.setCredentials({ refresh_token: refreshToken });

// Function to refresh the access token
async function refreshAccessToken() {
    try {
        const { token } = await oAuth2Client.getAccessToken();
        const xoauth2 = `user=${email}\u0001auth=Bearer ${token}\u0001\u0001`;
        const encodedToken = base64.fromByteArray(Buffer.from(xoauth2, 'utf-8'));

        // Save the encoded token to a file
        fs.writeFileSync('encodedToken.txt', encodedToken, 'utf-8');
        
    } catch (error) {
        console.error('Error refreshing access token:', error.message);
    }
}

module.exports = {
refreshAccessToken,
};
