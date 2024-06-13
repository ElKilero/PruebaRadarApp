import { instance } from '@/services/instance';
import { videoListSchema } from '@/types/schemas/videoList';
import { youtubeInstance } from '../youtubeInstance';
import { string } from 'zod';

export const apiKey: string = 'AIzaSyDrJ6V44t-TTSbHfdTq7rCYSWI5BSQOmTI'

export default async (search: string) => {
	const response = await youtubeInstance.get(`search?part=snippet&q=${search}h&maxResults=15&type=video&key=${apiKey}`).json();
	return videoListSchema.parse(response);
};
