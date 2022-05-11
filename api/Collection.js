const axios = require('axios');
require('dotenv').config();

class MapCollection {
	constructor(){
		this.list = [];
	}
	async updateMapCollection(API_CLIENT){
		let rawData = await this.fetchRawMapList()
		rawData.data.map(async (score) => {
			var beatmap = await API_CLIENT.beatmap(score.beatmap_id)
			console.log(score.pp);
			this.list.push({
				title: beatmap.beatmapset.title,
				id: beatmap.score,
				cover: beatmap.beatmapset.covers.slimcover,
				pp: score.pp,
				rank: score.rank,
				version: beatmap.version,
				score_time: score.score_time
			})
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