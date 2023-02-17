import { View, Text } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View className = "">
      <Text className = "text-2xl font-bold bg-red-200">LoginScreen</Text>
      <Text className = "font-bold text-lg"
        onPress={()=> navigation.navigate("Register")}>Some text in here</Text>
    </View>
  )
}

export default LoginScreen