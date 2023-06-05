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
import { Colors } from '../../../src/theme/Variables';
import { useTheme } from '../../hooks';
import { WorkshopPayload } from '../../store/workshop';
// Create a Workshop component

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    borderRadius: 99,
    width: 70,
    height: 70,

    // backgroundColor: 'red',
  },

  contentContainer: {
    flex: 3,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: Colors.info,
  },
});
const Workshop = (props: { workshop: WorkshopPayload }) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();

  const { workshop } = props;

  const thumbnailUrl = useMemo(() => {
    if (workshop.attributes.thumbnail?.data.attributes.formats.thumbnail.url) {
      console.log('process.env.BASE_URL', process.env.BASE_URL);
      return (
        process.env.BASE_URL +
        workshop.attributes.thumbnail.data.attributes.formats.thumbnail.url
      );
    }
    return null;
  }, [workshop]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {thumbnailUrl ? (
          <Image source={{ uri: thumbnailUrl }} style={styles.image} />
        ) : (
          <Text>Null</Text>
        )}
      </View>
      <View style={styles.contentContainer}>
        <Text>{workshop.id}</Text>
        <Text style={[Fonts.textBold, Fonts.titleSmall]}>
          {workshop.attributes.name}
        </Text>
        <Text style={[Fonts.textLight, styles.description]}>
          {workshop.attributes.description}
        </Text>
      </View>
    </View>
  );
};

export default Workshop;
