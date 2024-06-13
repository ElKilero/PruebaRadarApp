import { SafeScreen } from '@/components/template';
import { apiKey } from '@/services/listVideos/fetchVideoList';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList, VideoPlayerScreenParams } from '@/types/navigation';
import YoutubeIframe from 'react-native-youtube-iframe';

interface Props extends NativeStackScreenProps<RootStackParamList> { }

function VideoPlayer({ route }: Props) {
    const { params } = route
    const videoParams = params as VideoPlayerScreenParams
    console.log(videoParams.videoId)
    console.log(apiKey)
    /*
    Errores:
    La libreria de react native video no puede reproducir los videos de youtube
    La libreria de youtube react native tiene errores con los styles y necesita ser parcheada
    La libreria de youtube react native tiene como dependencia el YoutubeAndroidPlayer API que esta deprecado
    
    Observaciones:
    Cambiar a posible libreria react-native-youtube-iframe
    */
    return (
        <SafeScreen>
            <YoutubeIframe
                videoId={videoParams.videoId}
                play
                key={apiKey}
                height={300}
            />
        </SafeScreen>
    )
}

export default VideoPlayer;
