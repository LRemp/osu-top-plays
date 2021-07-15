const axios = require('axios');
require('dotenv').config();

class MapCollection {
	constructor(){
		this.list = [];
	}
	async updateMapCollection(API_CLIENT){
		let rawData = await this.fetchRawMapList()
		rawData.data.map(async (x) => {
			var beatmap = await API_CLIENT.beatmap(x.beatmap_id)
		})
	}
	async fetchRawMapList(){
		return await new Promise((resolve, reject) => {
			axios.get(`https://osutrack-api.ameo.dev/bestplays?mode=0&limit=${process.env.FETCH_LIMIT}`)
				.then((res) => resolve(res))
				.catch((err) => console.log(err))
		})
	}
}

module.exports = MapCollection;