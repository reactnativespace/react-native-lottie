import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function App() {

  const data = [{
          temp: '15°C',
          time:'12:00',
          source: require('./assets/weather_2.json')
      },
      {
          temp: '18°C',
          time:'15:00',
          source: require('./assets/weather_3.json')
      },
      {
          temp: '12°C',
          time:'18:00',
          source: require('./assets/weather_4.json')
      }];

  const animation = useRef<LottieView>(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={{
        flex: 1,
        padding: 12,
        backgroundColor: '#34495e',
    }}>

        <Animated.View style={{
            marginTop: 100,
            flexDirection:'row',
            justifyContent:'space-evenly'
        }} entering={FadeInDown.delay(500).duration(1000)}>
            <Text style={{color:'#FFF', fontSize: 16, fontWeight: 'bold'}}>Today</Text>
            <Text style={{color:'#FFF', fontSize: 16, fontWeight: 'bold'}}>Tomorrow</Text>
            <Text style={{color:'#FFF', fontSize: 16, fontWeight: 'bold'}}>After</Text>
        </Animated.View>

        <Animated.View style={{
            marginTop: 20,
            alignItems:'center'
        }} entering={FadeInDown.delay(800).duration(1000)}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,

                }}
                source={require('./assets/weather_1.json')}
            />
            <Text style={{color:'#FFF', fontSize: 32, fontWeight: 'regular'}}>New York, NY</Text>
            <Text style={{color:'#FFF', fontSize: 64, fontWeight: 'bold'}}>14°C</Text>
            <Text style={{color:'#FFF', fontSize: 24, fontWeight: 'regular'}}>Rainy</Text>
        </Animated.View>

        <Animated.View style={{
            flexDirection:'row',
            marginTop: 50,
            gap: 10,
            alignSelf:'center'
        }} entering={FadeInDown.delay(1000).duration(1000)}>
            {data.map((item:any, key:number)=>
                <View key={key.toString()} style={{
                    alignItems:'center',
                    borderColor:'#FFF',
                    borderWidth: 2,
                    borderRadius: 20,
                    paddingVertical: 20,
                    paddingHorizontal: 16
                }}>
                    <Text style={{color:'#FFF', fontSize: 16, fontWeight: 'regular'}}>{item.time}</Text>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 80,
                            height: 80,
                            marginVertical: 12
                        }}
                        source={item.source}
                    />
                    <Text style={{color:'#FFF', fontSize: 16, fontWeight: 'bold'}}>{item.temp}</Text>

                </View>)}
        </Animated.View>



      <StatusBar style='light' />
    </View>
  );
}
