const axios = require('axios');
const { V1, V2, mods, tools } = require('osu-api-extended');
require('dotenv').config();
const v2 = new V2(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

const getTopPPOPlays = async () => {
	return await new Promise((resolve, reject) => {
		axios.get(`https://osutrack-api.ameo.dev/bestplays?mode=0&limit=${process.env.FETCH_LIMIT}`)
			.then((res) => resolve(res))
			.catch((err) => console.log(err))
	})
} 

getTopPPOPlays()

/*(async () => {
  try {
    await v2.login();
    let beatmap = await v2.beatmap(2632763);
    console.log(beatmap);
  } catch (err) {
    console.error(err);
  }
})();*/
