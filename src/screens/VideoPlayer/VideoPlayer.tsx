import { SafeScreen } from '@/components/template';
import { apiKey } from '@/services/listVideos/fetchVideoList';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList, VideoPlayerScreenParams } from '@/types/navigation';
import YoutubeIframe from 'react-native-youtube-iframe';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { useRef, useState } from 'react';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';

interface Props extends NativeStackScreenProps<RootStackParamList> { }

function VideoPlayer({ route }: Props) {
    const { params } = route
    const videoParams = params as VideoPlayerScreenParams

    const viewShotRef = useRef<ViewShot>(null);
    const [imageUri, setImageUri] = useState<string | null>("");

    
    const captureScreen = async () => {
        try {
            if (viewShotRef.current) {
                const uri = await captureRef(viewShotRef.current, {
                    format: "jpg",
                    quality: 0.9
                });
                console.log("Image saved to", uri);
                setImageUri(uri);
            }
        } catch (error) {
            console.error("Capture failed", error);
        }
    };


    return (
        <SafeScreen>
            <ViewShot ref={viewShotRef} options={{ fileName:"image", format: "jpg", quality: 0.9 }} >
                <YoutubeIframe
                    height={300}
                    play
                    videoId={videoParams.videoId}
                    webViewProps={{
                        allowsInlineMediaPlayback: true,
                        mediaPlaybackRequiresUserAction: false,
                    }}
                />
            </ViewShot>
            <Button onPress={captureScreen} >
                Capture Screen
            </Button >
            {imageUri && (
                <Image
                    source={{ uri: imageUri }}
                    style={{ width: '100%', height: 200, marginTop: 20 }}
                    resizeMode="contain"
                />
            )}
        </SafeScreen>
    )
}

export default VideoPlayer;
