import { useMemo } from 'react';
import { Image, ImageProps, ImageSourcePropType, TouchableOpacity, View } from 'react-native';

import { Text } from 'react-native-paper';

type Props = {
    thumbnail: string;
    title: string;
    channel: string;
    description: string;
    onPress: () => void;
};

function VideoThumbnail({ thumbnail, title, channel, description, onPress }: Props) {

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Image height={150} width={150} source={{ uri: thumbnail }} />
                <Text>{title}</Text>
                <Text>{channel}</Text>
                <Text>{description}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default VideoThumbnail;
