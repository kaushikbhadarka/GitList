import React from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppStyles from '../../config/styles';

import { useSelector, useDispatch } from 'react-redux';
import * as searchRepoAction from 'app/store/actions/searchRepoAction';
import * as repoListAction from 'app/store/actions/repoListAction';
import styles from './styles';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  const [repoListItem, setRepoListItems] = React.useState([]);

  const data = useSelector((state: AppState) => state.repoListReducer);
  const responseData = useSelector(
    (state: AppState) => state.searchRepoReducer,
  );

  const searchHandler = (search) => {
    setSearch(search);
  };

  React.useEffect(() => {
    if (responseData.responseData.items) {
      setRepoListItems(
        responseData.responseData.items.sort((elem1, elem2) => {
          return elem2.stargazers_count - elem1.stargazers_count;
        }),
      );
    }
  }, [responseData]);

  const onSearchClick = () => {
    dispatch(searchRepoAction.searchRepoRequest(search));
  };

  const addRepoToList = (item: any) => {
    const found = data.data.some((el: any) => el.id === item.id);
    if (!found) {
      let repoData = {
        id: item.id,
        name: item.full_name,
        starCount: item.stargazers_count,
        url: item.clone_url,
      };
      dispatch(repoListAction.addRepoToList(repoData));
      alert('Repo Saved!');
    } else {
      alert('This repository is already added');
    }
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
              onPress={() => addRepoToList(item)}
              style={styles.swiperView}>
              <Text style={styles.saveTxt}>{'Save Repo'}</Text>
            </TouchableOpacity>
          );
        }}>
        <Text style={styles.repoTxtName} onPress={() => getItem(item)}>
          {'Repo :- '}
          <Text
            style={styles.starCountTxt}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.full_name}
          </Text>
        </Text>
        <Text style={styles.starCountNormal}>
          {'Star Count :- '}
          <Text style={styles.starCountTxt}>{item.stargazers_count}</Text>
        </Text>
      </Swipeable>
    );
  };

  const ItemSeparatorView = () => {
    return <View style={styles.separatorLine} />;
  };

  const getItem = (item) => {
    Linking.openURL(item.clone_url);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerTxt}>{'Search Repositories'}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.txtInput}
            placeholder="Search Repositories..."
            value={search}
            onChangeText={searchHandler}
            onSubmitEditing={onSearchClick}
          />
          <Feather
            style={styles.iconView}
            name={'search'}
            size={24}
            color={AppStyles.color.COLOR_GREY}
            onPress={onSearchClick}
          />
        </View>

        <FlatList
          data={repoListItem}
          extraData={repoListItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fListContainer}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
