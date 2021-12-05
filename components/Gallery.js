import React, { useEffect, useState,useReducer } from 'react';
import {StyleSheet,Image,View,VirtualizedList,SafeAreaView,Modal,Pressable, TouchableOpacity,Dimensions} from 'react-native';
import {getAlbums} from '../networking/request'
import { Actions,albumDetailsReducer,initialState } from '../reducer/albumreducer';
import { useRoute } from '@react-navigation/native';


const getItemCount = (data) => {
    return data.length
};
const getItem = (data,index) =>{
    
    return{
        id: index,
        url: data[index].url,
        thumbnailUrl: data[index].thumbnailUrl
    }
}

const Item = ({thumbnailUrl,index,url,navigation})=>{
  
const thumbnaillUrl = thumbnailUrl
return(
    <TouchableOpacity
    key ={index}
    onPress ={()=> 
        navigation.navigate('PhotoView',{url:url
    }
    ,)
    }
    >

   <Image source={{uri:thumbnaillUrl}} style ={styles.image}/>
    
    </TouchableOpacity>
)
} 

const Gallery =({navigation}) =>{

 const[state,dispatch] = useReducer(albumDetailsReducer,initialState)

    const route = useRoute();
    
    useEffect(()=> {
        getAlbums.fetchImages().then((res)=>{
           
            if(res.status == 200)
            {
                dispatch({
                    type :Actions.GET_THUMBNAILS,
                    data : res.data,
                    albumId : route.params.id
                });
                return;
            }
            dispatch({ type: Actions.ERROR, 
                error: res.error });

                
            });
         
    },[])
    return(

        state.loading ? <Loading/> :
        <SafeAreaView sytle={styles.container}>
       
        <VirtualizedList
            style = {styles.list}
            data = {state.thumbnail}
            numColumns ={2}
            initialNumToRender={4}
            getItemCount={getItemCount}
            getItem={getItem}
            keyExtractor ={(item) => item.id}
            renderItem ={({item})=>
           <Item url ={item.url}
           navigation = {navigation}
           thumbnailUrl ={item.thumbnailUrl}
            />
        }
        />
       
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
     flex: 1,

      },
      image: {
        width: (Dimensions.get('window').width)/2 - 20,
        height: 150,
        margin: 20,
        },
      list:{
        //flex:1
        },
   
  });

export default Gallery;