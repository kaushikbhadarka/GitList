import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: AppStyles.color.COLOR_PRIMARY,
    marginTop: 10,
  },

  btnTxt: {
    fontSize: 16,
    paddingVertical: 14,
    color: AppStyles.color.COLOR_WHITE,
  },
});

export default styles;
