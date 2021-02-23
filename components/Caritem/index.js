import React from 'react'
import { Text, View,ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton/index'
const CarItem=(props)=>{
  const{name,tagline,taglineCTA,image}=props.car;
return(
    <View style={styles.carContainer}>
    <ImageBackground source={image} style={styles.images}/>
    <View style={styles.titles}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.subtitle}>{tagline}
    <Text style={styles.subtitleCTA}>{' '}{taglineCTA}</Text>
    </Text>
  </View>
  <View style={styles.buttonsContainer}>
  <StyledButton type="primary" content={"Custom Button"}
  onPress={()=>{
    console.warn("Primary")
  }}
  />
  <StyledButton type="secondary" content={"Existing Inventory"}
  onPress={()=>{
    console.warn("Secondary")
  }}
  />
  </View>
  </View>
)

}
export default CarItem;


