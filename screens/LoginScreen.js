import React, {useState} from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'

function LoginScreen() {
  const [form, setForm] = useState({
    username: 'actual username',
    password: 'actual password',
  })


  const changeManagment = (e) =>{
    Alert.alert(e.target.value)
    console.log(e.target.value);
  }

    return (
        <View>
            <Text>Login Form</Text>
          <View>
            <Text>username: {form.username}</Text>
            <TextInput placeholder='Write Your Username' name='username' onChange={changeManagment} value={form.username} />

            <Text>Password: </Text>
            <TextInput placeholder='Write Your Username' secureTextEntry value={form.password} onChange={changeManagment}/>
          </View>
        </View>
    )
}

export default LoginScreen
