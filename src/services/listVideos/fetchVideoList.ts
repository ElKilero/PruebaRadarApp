import { instance } from '@/services/instance';
import { videoListSchema } from '@/types/schemas/videoList';
import { youtubeInstance } from '../youtubeInstance';

export default async (search: string) => {
	const response = await youtubeInstance.get(`search?part=snippet&q=${search}h&maxResults=15&type=video&key=AIzaSyDrJ6V44t-TTSbHfdTq7rCYSWI5BSQOmTI`).json();
	return videoListSchema.parse(response);
};
