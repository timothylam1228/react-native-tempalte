import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';
import { useLazyFetchAllWorkshopQuery } from '../../services/modules/workshops';
import { useTheme } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setWorkshop, WorkshopPayload } from '../../store/workshop';
import Workshop from '../../../src/components/Workshop/Workshop';
import useWorkshop from '../../hooks/useWorkshop';
const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  workshopContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const HomeScreen = () => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();

  const { workshops } = useWorkshop();

  const [fetchAllWorkshop, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchAllWorkshopQuery();

  const dispatch = useDispatch();

  const handlePress = async () => {
    const temp = await fetchAllWorkshop();
    console.log('temp', JSON.stringify(temp));
    dispatch(setWorkshop(temp.data.data));
  };

  const itemSeparator = () => {
    return (
      <View
        style={{ height: 10, alignItems: 'center', justifyContent: 'center' }}
      >
        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: '#C5C5C5',
          }}
        ></View>
      </View>
    );
  };

  return (
    <View style={Layout.fill}>
      {isLoading || isFetching ? (
        <ActivityIndicator />
      ) : (
        <View style={[Layout.fullWidth, styles.contentContainer]}>
          <Text>
            <Button
              title="Test"
              style={Common.buttonPrimary}
              onPress={handlePress}
            />
          </Text>
          <View style={styles.workshopContainer}>
            <FlatList
              data={workshops}
              renderItem={({ item }) => <Workshop workshop={item} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={itemSeparator}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
