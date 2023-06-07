import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import Chips from './Chips';

const styles = StyleSheet.create({
  container: {},
  text: {},
});
const ChipsContainer = (data) => {
  const [selected, setSelected] = useState(false);
  const handlePress = () => {
    setSelected(!selected);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Chips />
      </View>
    </TouchableOpacity>
  );
};
export default ChipsContainer;
