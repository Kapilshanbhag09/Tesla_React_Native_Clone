import React from 'react'
import { Text, View,ImageBackground, Pressable } from 'react-native'
import styles from './style'
const StyledButton=(props)=>{
    const type=props.type;
    const backgroundColor=type==='primary'?'#171A20CC':'#FFFFFFA6';
    const textcolor=type==='primary'?'#FFFFFF':'#171A20'
    const content=props.content
    const onPress=props.onPress
    //const{type,content,onPress}=props;
return(
<View style={styles.container}>
    <Pressable style={[styles.button,{backgroundColor: backgroundColor}]}
    onPress={()=>onPress()}
    >
        <Text style={[styles.text,{color:textcolor}]}>{content}</Text>
        </Pressable>
</View>
)

}
export default StyledButton;