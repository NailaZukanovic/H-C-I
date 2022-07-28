import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourite from '../components/Favourite';

const width = Dimensions.get("screen").width / 2 - 25;
const Home = () => {

  const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const products = () => {
   
    var res = fetch(url);
    var data = res.json();
    
    return data;
  }
  const Box = ({product}) => {
    return(
      <View style={styles.card}>
        <View style={styles.favourite}>
          <Favourite />
        </View>
        <TouchableOpacity style={{height: 100, alignItems: 'center'}}>
          <Image source={product.image_link} style={{flex:1, heigth: 50, width: 50}} />
        </TouchableOpacity>
        <Text style={styles.name}>{product.name}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:25, fontWeight: 'bold'}}>Dobrodosli</Text>
          <Text style={{fontSize:30, fontWeight: 'bold', color: 'pink'}}>Frizerski Salon</Text>
        </View>
        <Icon name="logout" size={25}/>

      </View>  

      <FlatList />

    </View>
  )


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15
  },
  logout: {
    backgroundColor: "#FF1493",
    height: 20,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop:50
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between'
  },
  card: {
    height: 225,
    width: width,
    backgroundColor: '#FFC0CB',
    borderRadius: 10,
    borderColor: 'rgba(245,45,45,0.5)',
    borderWidth: 1,
    marginVertical: 15
  
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 18,
    marginLeft: 18
  },
  favourite: {
    alignItems: 'flex-end',
    padding: 10
  }

})
export default Home;