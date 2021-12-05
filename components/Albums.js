import React, { useEffect, useState,useReducer} from 'react';
import {View,Text, FlatList,StyleSheet, 
    TouchableOpacity, VirtualizedList, SafeAreaView,StatusBar,Dimensions} from 'react-native';
import {getAlbums} from '../networking/request'
import { Actions, albumDetailsReducer, initialState } from '../reducer/albumreducer';
import Loading from './loader'


const getItemCount = (data) => {
    return data.length
};
const getItem = (data,index) =>{
    
    return{
        id: data[index].id,
        title: data[index].title,
        name: data[index].name,
        
    }
}

const Item = ({title,navigation,index,name,id})=>{
    
return(
    <TouchableOpacity
    key ={index}
    style ={styles.item}
    onPress = {()=> 
     navigation.navigate('Gallery',
    {id:id
    },)
    }
    >
    <Text style={styles.title}>{"Album title :"}  {title}</Text>
    <Text style={styles.author}>{"Author :"} {name}</Text>
    </TouchableOpacity>
)
} 
const Albums =({navigation}) =>{

    const[state,dispatch] = useReducer(albumDetailsReducer,initialState)

    useEffect(()=> {
        dispatch({type:Actions.API_CALL})
        getAlbums.fetchData().then((res)=>{
           
            if(res.status === 200)
            {
                getAlbums.fetchUser().then((item)=>{
                    dispatch({
                        type:Actions.SUCCESS,
                        data:res.data,
                        user:item.data
                    });
                })
               
                
                return;
            }
            dispatch({ type: Actions.ERROR, 
                error: res.error });
        })
    },[],);
    return(
       
        state.loading ? <Loading/> :
        <SafeAreaView sytle={styles.container}>
            
            <VirtualizedList
                data = {state.albumDetails}
                initialNumToRender={4}
                numColumns={2}
                getItemCount={getItemCount}
                getItem={getItem}
                keyExtractor ={(item) => item.id}
                renderItem ={({item})=>
               <Item title ={item.title}
               navigation = {navigation}
               name ={item.name}
               id={item.id}
               />
            }
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     marginTop: StatusBar.currentHeight,
   
    
    },
    item: {
      padding: 10,
      height: 60,
      backgroundColor:"#fff",
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent:"center",
      
    },
   
    title:{
        fontSize: 16,
        color:"black",
       
    },author:{
        color:"black"
    },

   
  });

export default Albums;