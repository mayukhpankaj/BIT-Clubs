import React, {useState, useEffect} from "react";
import { Image,View, Text, TouchableOpacity, FlatList, Dimensions, StyleSheet} from "react-native";
import { ActivityIndicator } from "react-native";
import { db } from "../Backend/firestore";
import { collection , query, where, getDocs } from "firebase/firestore";


export default function Posts({navigation}){

    const [loading, setLoading] = useState(true); // Setting Initial loading to true on component mount
    const [posts, setPosts] = useState([]); // Initial empty array of Posts





    

    useEffect(()=> {


          async function getPosts() {

            var data = []

            const querySnapshot = await getDocs(collection(db, "events"));


            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            
            data.push({...doc.data(),key:doc.id});

            });




            console.log(data);

            setPosts(data);
            setLoading(false);

        }

        getPosts();
       

    }, []);
    



    if (loading) {
      return <ActivityIndicator />;
    }



    return (

        <View style={styles.container}>
        {/* <View style={styles.header}>
                <Text style={styles.headerText}> Newsroom </Text>
            </View> */}


        <FlatList 
            data={posts}
            renderItem={({ item }) => (
                
                <View style={styles.post}  key={item.key}>

               
                <View style={styles.postHeader}>
                <Text>User Name: {item.eventName}</Text>
                {/* <Image style={styles.clubLogo } source={{uri: item.club_logo_uri}} /> */}
                </View>

                 <TouchableOpacity onPress={()=>{navigation.navigate('EventDetails',{ data: item})}}>
                
                <View style={styles.imageContainer}>
                    <Image source={{uri: item.posterUri}} style={styles.postImage} />
                        </View>
                </TouchableOpacity>

                </View>
            )}
        />

        </View>


    )


}

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 50,
        width: '95%',
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


