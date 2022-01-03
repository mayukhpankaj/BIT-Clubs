
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, FlatList, Imag } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useState, useEffect } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width

const getImageAspectRatio = (uri) => {
    Image.getSize(uri, (width, height) => {
        const aspectRatio = width / height
        console.log(aspectRatio)
        return aspectRatio
    })
}

export default function MainScreen() {
    const [eventData, setEventData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/events')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setEventData(data)
    })
    }, [])

    function posterStyles(aspectRatio) {
        return {
            width: '100%',
            aspectRatio: aspectRatio,
            borderRadius: 10,
        }
    }

    if(!eventData) {
        return <AppLoading />
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Main</Text>
            </View>
            <FlatList
                data={eventData}
                style={styles.list}
                renderItem={({item}) => {
                    return(
                        <View style={styles.post} key={item.id}>
                            <TouchableWithoutFeedback>
                                <View style={styles.postHeader}>
                                    <Image style={styles.clubLogo } source={{uri: item.club_logo_uri}} />
                                    <Text style={styles.clubName}>{item.club_name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableOpacity>
                                <Image style={styles.postImage} source={{uri: item.poster_uri}} />
                            </TouchableOpacity>
                 
                        </View>  )}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        width: SCREEN_WIDTH,
    },
    header: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        width: '100%',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
        // padding: 10,
        paddingHorizontal: 20,
    },
    post: {
        // flexDirection: 'row',
        marginBottom: 40,
        // borderBottomWidth: 1,
        // borderBottomColor: '#eee',
    },
    postHeader: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingTop: 10,
        // paddingLeft: 10,
    },
    clubLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    clubName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    postImage: {
        // height: 200,
        // resizeMode: 'center',
        // aspectRatio: 1,
        flex: 1,
        width: '100%',
        // height: '100%',
        // resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10,
    },
    poster: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    postFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    postDate: {
        fontSize: 15,
    },
})



