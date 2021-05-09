import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },

  swiperContainer: {
    paddingVertical: 5,
  },

  headerStyle:{
    height: 60,
    backgroundColor: AppStyles.color.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTxt:{
    fontSize: 18,
    color: AppStyles.color.COLOR_WHITE,
    fontWeight: 'bold',
  },

  swiperView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: 80,
    backgroundColor: AppStyles.color.COLOR_GREY_TRANSP,
    borderRadius: 4,
  },

  saveTxt: {
    fontWeight: 'bold',
    fontSize: 14,
    color: AppStyles.color.COLOR_WHITE,
    alignSelf: 'center',
  },

  repoTxtName: {
    padding: 10,
    fontSize: 16,
  },

  starCountTxt: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 10,
    fontWeight: '600',
  },

  starCountNormal: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 10,
  },

  separatorLine: {
    height: 0.4,
    width: '100%',
    marginVertical: 2,
    backgroundColor: AppStyles.color.COLOR_BLACK_TRANSP,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  txtInput: {
    padding: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: AppStyles.color.COLOR_PRIMARY,
    borderRadius: 4,
  },

  iconView: {
    position: 'absolute',
    right: 12,
  },

  fListContainer: {
    marginTop: 10,
    paddingVertical: 10,
  },
});

export default styles;
