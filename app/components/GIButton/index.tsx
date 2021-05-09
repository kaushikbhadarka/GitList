import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const GIButton: React.FC<IButton.IProps> = (props) => {
  const { onPress, BtnName } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      <Text style={styles.btnTxt}>{BtnName}</Text>
    </TouchableOpacity>
  );
};

export default GIButton;
