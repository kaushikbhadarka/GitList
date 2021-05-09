import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import GIButton from '../../components/GIButton';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isEmailError, setEmailError] = React.useState(false);
  const [isPwdError, setPwdError] = React.useState(false);
  const inputRef = React.useRef(null);

  const emailHandler = (email) => {
    setEmail(email);
  };

  const pwdHandler = (pwd) => {
    setPassword(pwd);
  };

  const onLogin = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valid: boolean = false;
    if (reg.test(email) === true) {
      setEmailError(false);
      valid = true;
    } else {
      setEmailError(true);
      valid = false;
    }

    if (password == '' || password.length < 6) {
      setPwdError(true);
      valid = false;
    } else {
      setPwdError(false);
      valid = true;
    }

    if (valid) {
      dispatch(loginActions.requestLogin(email, password));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.txtInput, { marginBottom: !isEmailError ? 15 : 0 }]}
        placeholder="Username or Email"
        value={email}
        onChangeText={emailHandler}
        onSubmitEditing={() => inputRef.current.focus()}
      />

      {isEmailError && (
        <Text style={styles.errTxt}>{'please enter valid email id'}</Text>
      )}

      <TextInput
        style={styles.txtInput}
        placeholder="Password"
        value={password}
        onChangeText={pwdHandler}
        ref={inputRef}
        secureTextEntry
        onSubmitEditing={onLogin}
      />

      {isPwdError && (
        <Text style={styles.errTxt}>{'please enter password'}</Text>
      )}

      <GIButton BtnName={'Login'} onPress={onLogin} />
    </View>
  );
};

export default Login;
