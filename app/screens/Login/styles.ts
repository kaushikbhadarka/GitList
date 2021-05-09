import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  login: {
    padding: 8,
  },

  forgot: {
    marginTop: 12,
  },

  labelStyle: {
    fontSize: 12,
  },

  txtInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: AppStyles.color.COLOR_PRIMARY,
    borderRadius: 4,
  },

  errTxt: {
    color: AppStyles.color.COLOR_RED,
    fontSize: 14,
    marginBottom: 15,
  },
});

export default styles;
