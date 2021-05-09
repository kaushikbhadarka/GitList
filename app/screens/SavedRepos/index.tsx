import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Linking,
  Text,
} from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppStyles from '../../config/styles';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import * as repoListAction from 'app/store/actions/repoListAction';

const SavedRepos: React.FC = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const onLogout = () => dispatch(loginActions.logOut());
  const [repoListItem, setRepoListItems] = React.useState([]);
  const data = useSelector((state: AppState) => state.repoListReducer);

  React.useEffect(() => {
    setRepoListItems(
      data.data.sort((elem1, elem2) => {
        return elem2.starCount - elem1.starCount;
      }),
    );
  }, [isFocused, data]);

  const rmvRepoFromList = (item) => {
    dispatch(repoListAction.removeRepoFromList(item.id));
  };

  const ItemView = ({ item, index }) => {
    return (
      <Swipeable
        key={index}
        overshootRight={false}
        containerStyle={styles.swiperContainer}
        renderRightActions={(progress, dragX) => {
          return (
            <TouchableOpacity
              onPress={() => rmvRepoFromList(item)}
              style={styles.swiperView}>
              <Text style={styles.saveTxt}>{'Remove Repo'}</Text>
            </TouchableOpacity>
          );
        }}>
        <Text style={styles.repoTxtName} onPress={() => getItem(item)}>
          {'Repo :- '}
          <Text
            style={styles.starCountTxt}>
            {item.name}
          </Text>
        </Text>
        <Text style={styles.starCountNormal}>
          {'Star Count :- '}
          <Text style={styles.starCountTxt}>{item.starCount}</Text>
        </Text>
      </Swipeable>
    );
  };

  const ItemSeparatorView = () => {
    return <View style={styles.separatorLine} />;
  };

  const getItem = (item) => {
    Linking.openURL(item.url);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={styles.headerStyle}>
        <Text
          style={styles.headerTxt}>
          {'Saved Repositories'}
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={repoListItem}
          extraData={repoListItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fListContainer}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button
          icon="logout"
          mode="outlined"
          onPress={onLogout}
          contentStyle={{ height: 44 }}
          color={AppStyles.color.COLOR_PRIMARY}>
          {'Logout'}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SavedRepos;
