import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image , TouchableOpacity} from 'react-native';

const Register = ({navigation}) => {
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [adresa, setAdresa] = useState('');
    const [telefon, setTelefon] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [tip, setTip] = useState('');


    function login() {
              fetch('https://localhost:7191/api/Korisnik', {
                  method: 'post',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    
                      ime: ime,
                      prezime: prezime,
                      adresa: adresa,
                      telefon: telefon,
                      username: username,
                      password: password,
                      email: email,
                      tip: tip
                  })
              }).then((Response) => console.log(Response.json()))
          }
      

  return(
    <View style={styles.container}>
      <View style={styles.inputView}>
      <TextInput style={styles.TextInput} placeholder="ime" placeholderTextColor="#003F5C" onChange={(e) => setIme(e.target.value)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="prezime" placeholderTextColor="#003F5C"onChange={(e) => setPrezime(e.target.value)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="adresa" placeholderTextColor="#003F5C" onChange={(e) => setAdresa(e.target.value)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="telefon" placeholderTextColor="#003F5C" onChange={(e) => setTelefon(e.target.value)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="username" placeholderTextColor="#003F5C"onChange={(e) => setUsername(e.target.value)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="password" placeholderTextColor="#003F5C"onChange={(e) => setPassword(e.target.value)} secureTextEntry={true}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="email" placeholderTextColor="#003F5C"onChange={(e) => setEmail(e.target.value)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="tip" placeholderTextColor="#003F5C"onChange={(e) => setTip(e.target.value) }/>
      </View>





      <TouchableOpacity style={styles.loginBtn} onPress={()=> login()}>
        <Text >
          Registruj se
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:20, borderColor:'#FFC0CB', borderWidth: 1, borderRadius: 15, padding: 10}}
              onPress={() =>
                navigation.navigate('Login')
              }
      >
        <Text style={styles.registerButton} >
          Imate nalog? Login
        </Text>
      </TouchableOpacity>
    </View>
  )


};
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
export default Register;