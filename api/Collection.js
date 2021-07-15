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
			console.log(x)
			this.list.push({
				title: beatmap.title,

				cover: beatmap.beatmapset.covers.slimcover,
				pp: x.pp,
				rank: x.rank,
			})
			//build beatmap data object and push to the list
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