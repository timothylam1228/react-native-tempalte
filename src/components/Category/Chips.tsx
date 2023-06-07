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
import { CategoryAttributes } from 'react-native-tempalte/src/store/category';

const styles = StyleSheet.create({
  container: {},
  text: {},
});
const Chips = (props: CategoryAttributes) => {
  const [selected, setSelected] = useState(false);
  const { name, tag } = props;
  const handlePress = () => {
    setSelected(!selected);
    // onPress();
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.container} key={tag}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Chips;
