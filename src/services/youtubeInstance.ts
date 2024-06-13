import ky from 'ky';

const prefixUrl = `${process.env.YOUTUBE_URL ? process.env.YOUTUBE_URL : ''}/`;

export const youtubeInstance = ky.extend({
	prefixUrl,
	headers: {
		Accept: 'application/json',

	},
});
