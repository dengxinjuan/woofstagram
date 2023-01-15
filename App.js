import React,{useState} from 'react';
import { View,Text, TextInput, ScrollView } from 'react-native';

function App() {
const[email, setEmail] =useState('');
const[name, setName] =useState('');
const[bday, setBday] =useState('');
const[password, setPassword] =useState('');
const[confirmationPassword, setConfirmationPassword] =useState('');


function confirmationPasswordMatch({nativeEvent:{text}}){
  //...check the password 
  if(text!=password){
    alert('password not match')
  }

}



  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      backgroundColor: '#ecf0f1' 
    }}>
    
    
      <InputWithLable label='Email' placeholder='Type your email here' value={email} onChangeText={setEmail}/>
      <InputWithLable label='Password' placeholder='Type your PWD here' value={password} onChangeText={setPassword} secureTextEntry/>
      <InputWithLable label='Confirmed Password' placeholder='Confirm the password' value={confirmationPassword} onChangeText={setConfirmationPassword} secureTextEntry onSubmitEditing={confirmationPasswordMatch}/>
      <InputWithLable label='Name' placeholder='Type your name' value={name} onChangeText={setName}/>
      <InputWithLable label='Date of Birth' placeholder='Type your date of birth' value={bday} onChangeText={setBday}/>
      
    </View>
  )
}

//resuable inPUT
function InputWithLable(props){
  const {label,placeholder,value,onChangeText,secureTextEntry, onSubmitEditing} = props;
  return(
    <View style={{padding:16}}>
    <View>
      <Text style={{padding:8, fontSize:18}}>{label}</Text>
      <TextInput  style={{padding:8, fontSize:18}} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}  onSubmitEditing={onSubmitEditing}/>

    </View>
    </View>
  )

}

export default App;
