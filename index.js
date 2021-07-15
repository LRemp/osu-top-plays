const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require("cors");
const { V1, V2, mods, tools } = require('osu-api-extended');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;
const v2 = new V2(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

const loginAPIClient = async () => {
	try {
	    await v2.login();
	} catch (err) {
	    console.error(err);
	}
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'web/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/web/build/index.html'));
});

app.post('/ping', (req, res) => {
  console.log('got ping');
  res.json({ message: 'pong' });
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

loginAPIClient()

/*(async () => {
  try {
    await v2.login();
    let beatmap = await v2.beatmap(2632763);
    console.log(beatmap);
  } catch (err) {
    console.error(err);
  }
})();*/
