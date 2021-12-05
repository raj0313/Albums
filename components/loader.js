import React from 'react';
import{View,ActivityIndicator} from "react-native"


const Loading =()=>{
    return(
<View style ={{flex:1}}>
    <ActivityIndicator/>
</View>
    )
}
export default Loading;