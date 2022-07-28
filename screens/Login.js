import React from 'react';
import { StyleSheet, View, Text, TextInput, Image , TouchableOpacity} from 'react-native';
export default Login = ({navigation}) => {

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.jpg')}/>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="EMAIL" placeholderTextColor="#003F5C"/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="PASSWORD" placeholderTextColor="#003F5C"/>
      </View>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text >
          Login
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:20, borderColor:'#FFC0CB', borderWidth: 1, borderRadius: 15, padding: 10}}
        onPress={() =>
          navigation.navigate('Register')
        }
      >
        <Text style={styles.registerButton} >
          Registruj se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginBottom: 40,
    height: 250,
    width: 250
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 25,
    height: 45,
    width: "60%",
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInput: {
    flex: 1,
    height: 50,
    marginBottom: 20
  },
  registerButton: {
    height: 30
  },
  loginBtn: {
    backgroundColor: "#FF1493",
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 40
  }
});