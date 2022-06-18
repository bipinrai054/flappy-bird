import React from 'react';
import { View, Image } from 'react-native';

export default function Obstacles({
  obstaclesWidth,
  obstaclesHeight,
  obstaclesLeft,
  gap,
}) {
  return (
    <>
      <Image
        style={{
          position: 'absolute',
          width: obstaclesWidth,
          height: obstaclesHeight,
          left: obstaclesLeft,
          bottom: 0 + obstaclesHeight + gap,
        }}
        source={require('../assets/pipe.png')}
      />
      <Image
        style={{
          position: 'absolute',
          width: obstaclesWidth,
          height: obstaclesHeight,
          left: obstaclesLeft,
          bottom: 0,
        }}
        source={require('../assets/pipe.png')}
      />
    </>
  );
}
