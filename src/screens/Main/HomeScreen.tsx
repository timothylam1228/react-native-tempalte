import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Pressable,
} from 'react-native';
import { useLazyFetchAllWorkshopQuery } from '../../services/modules/workshops';
import { useTheme } from '../../hooks';
import { useDispatch } from 'react-redux';
import { setWorkshop } from '../../store/workshop';
import Workshop from '../../components/Workshop/Workshop';
import useWorkshop from '../../hooks/useWorkshop';
// import useCategory from '../../hooks/useCategory';
import ChipsContainer from '../../components/Category/ChipsContainer';
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
  const { Common, Layout } = useTheme();

  const { workshops } = useWorkshop();

  const [fetchAllWorkshop, { isLoading, isFetching }] =
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

  // console.log('categoies',categoies)
  return (
    <View style={Layout.fill}>
      {isLoading || isFetching ? (
        <ActivityIndicator />
      ) : (
        <View style={[Layout.fullWidth, styles.contentContainer]}>
          <Text>
            <Pressable style={Common.buttonPrimary} onPress={handlePress}>
              <Text>Test</Text>
            </Pressable>
          </Text>
          <View>
            <ChipsContainer />
          </View>
          <View style={styles.workshopContainer}>
            <FlatList
              data={workshops}
              renderItem={({ item }) => <Workshop workshop={item} />}
              ItemSeparatorComponent={itemSeparator}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
