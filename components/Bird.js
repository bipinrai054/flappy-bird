import { View, Text, Image } from 'react-native';

const Bird = ({ birdBottom, birdLeft }) => {
  const birdWidth = 50;
  const birdHeight = 60;

  return (
    // <View
    //   style={{
    //     position: 'absolute',
    //     width: 50,
    //     height: 60,
    //     bottom: birdBottom,
    //     left: birdLeft - birdWidth / 2,
    //     bottom: birdBottom - birdHeight / 2,
    //   }}
    // >
    <Image
      style={{
        position: 'absolute',
        width: 90,
        height: 90,
        bottom: birdBottom,
        left: birdLeft - birdWidth / 2,
        bottom: birdBottom - birdHeight / 2,
      }}
      // style={{ width: 80, height: 80 }}
      source={require('../assets/bird.png')}
    />
    // </View>
  );
};

export default Bird;
