import { useEffect, useState } from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    FlatList,
    ListRenderItem,
} from 'react-native';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { fetchOne } from '@/services/users';
import fetchVideoList from '@/services/listVideos/fetchVideoList';
import { TextInput } from 'react-native-paper';
import { VideoListItemProp } from '@/types/schemas/videoList';
import VideoThumbnail from '@/components/atoms/VideoThumbnail/VideoThumbnail';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '@/types/navigation';

function Home() {
    const { t } = useTranslation(['example', 'welcome']);

    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const {
        colors,
        variant,
        changeTheme,
        layout,
        gutters,
        fonts,
        components,
        backgrounds,
    } = useTheme();

    const [currentId, setCurrentId] = useState(-1);

    const [search, setSearch] = useState("halo reach")

    const { isSuccess, data, isFetching, refetch } = useQuery({
        queryKey: ['videoList', 0],
        queryFn: () => {
            return fetchVideoList(search);
        },
        enabled: currentId >= 0,
    });

    useEffect(() => {
        if (isSuccess) {

        }
    }, [isSuccess, data]);

    const handleSearch = () => {
        if (search.trim() !== "") {
            refetch();
        } else {
            Alert.alert("Please enter a search term");
        }
    };

    const navigateVideo = (videoId: string, title: string,) => {
        navigate('VideoPlayer', {
            videoId: videoId,
            title: title
        })
    }

    const renderItem: ListRenderItem<VideoListItemProp> = ({ item }) => (
        <VideoThumbnail
            thumbnail={item.snippet.thumbnails.default.url}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            description={item.snippet.description}
            onPress={() => navigateVideo(item.id.videoId, item.snippet.title)}
        />
    )

    return (
        <SafeScreen>
            <TextInput value={search} onChangeText={text => setSearch(text)} right={<TextInput.Icon icon="search-web" onPress={handleSearch} />} />
            <FlatList data={data?.items} renderItem={renderItem} keyExtractor={(item) => item.id.videoId}>

            </FlatList>
        </SafeScreen>
    );
}

export default Home;
