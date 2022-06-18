import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

export default function App() {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = React.useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = React.useState(screenWidth);
  const obstaclesWidth = 100;
  const obstaclesHeight = 300;
  const gap = 50;
  const gravity = 3;
  let gamerTimerId;
  let obstaclesLeftTimerId;

  React.useEffect(() => {
    if (birdBottom > 0) {
      gamerTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 15);

      return () => {
        clearInterval(gamerTimerId);
      };
    }
  }, [birdBottom]);

  useEffect(() => {
    if (obstaclesLeft > -obstaclesWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 30);
    }

    return () => {
      clearInterval(obstaclesLeftTimerId);
    };
  }, [obstaclesLeft]);

  return (
    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
      <Obstacles
        gap={gap}
        obstaclesLeft={obstaclesLeft}
        obstaclesWidth={obstaclesWidth}
        obstaclesHeight={obstaclesHeight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
