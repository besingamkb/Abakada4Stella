import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { consonantsArray, colorsArrays } from './constant';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(colorsArrays[0]); // Initial gradient colors

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorsArrays.length);
    return colorsArrays[randomIndex];
  }

  const getRandomConsonant = (consonants) => {
    const randomIndex = Math.floor(Math.random() * consonantsArray.length);
    return consonants[randomIndex];
  }

  const [currentConsonant, setCurrentConsonant] = useState(getRandomConsonant(consonantsArray));

  const changeConsonant = () => {
    const randomConsonant = getRandomConsonant(consonantsArray);
    setCurrentConsonant(randomConsonant);
    setBackgroundColor(getRandomColor());
  }

  useEffect(() => {
    if (!currentConsonant) {
      setCurrentConsonant(getRandomConsonant(consonantsArray));
    }
  }, []);

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const adjustFontSize = (numChars, baseFontSize = 200) => {
    const charsPerLine = 2;
    return Math.min(baseFontSize, numChars / charsPerLine * baseFontSize);
  }

  return (
    <LinearGradient colors={backgroundColor} style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={changeConsonant}>
          <Text style={[styles.textStyle, {
            fontSize: adjustFontSize(currentConsonant.length),
            lineHeight: Math.min(deviceWidth, deviceHeight) * 0.5 * 1.2,
          }]}>{currentConsonant.toUpperCase()}</Text>
          <Text style={[styles.textStyle, {
            fontSize: adjustFontSize(currentConsonant.length, 100),
            lineHeight: Math.min(deviceWidth, deviceHeight) * 0.3 * 1.2,
          }]}>{currentConsonant.toLowerCase()}</Text>
          <StatusBar style="auto" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
      <Text style={styles.paragraphStyles}>Made with ❤️️ </Text>
        <Text style={styles.paragraphStyles}>By Tatay For SabAnaSam</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  paragraphStyles: {
    fontSize: 16,
    color: '#e2e2e2',
    textAlign: 'center',
    marginTop: 10,
  },
});
