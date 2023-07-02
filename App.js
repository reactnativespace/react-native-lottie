import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function App() {

  const windowWidth = Dimensions.get('window').width;

  const animation = useRef(null);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', padding: 18 }}>

      <Animated.View entering={FadeInDown.delay(500).duration(1000)}>

        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: windowWidth,
            height: windowWidth,
            alignSelf: 'center',
            marginTop: 20
          }}
          source={require('./27637-welcome.json')}
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(1000).duration(500)}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#4863e1', alignSelf: 'center', marginTop: 12 }}>Create an account</Text>

        <View style={{ borderWidth: 0.5, borderColor: '#4863e1', borderRadius: 10, padding: 12, marginTop: 12 }}>
          <TextInput placeholder='Enter Your Email' placeholderTextColor={'#4863e1'} style={{ fontSize: 16 }}></TextInput>
        </View>
      </Animated.View>
      
      <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
        <TouchableOpacity style={{ backgroundColor: '#4863e1', padding: 12, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#FFF' }}>Register</Text>
        </TouchableOpacity>
      </Animated.View>

    </View>
  );
}