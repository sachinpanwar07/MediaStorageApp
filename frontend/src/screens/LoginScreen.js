import {StyleSheet, Text, View, ImageBackground, Alert} from 'react-native';
import React, {useState, useContext} from 'react';
import TextInputComponent from '../components/TextInputComponent';
import CustomButton from '../components/CustomButton';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/Responsive';
import String from '../Constant/String';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecuretext] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text
          style={{
            fontSize: textScale(24),
            paddingHorizontal: moderateScale(16),
            fontWeight: 900,
          }}>
          {String.WelCome_BACk}
        </Text>
        <Text
          style={{
            fontSize: textScale(16),
            paddingHorizontal: moderateScale(16),
            fontWeight: 600,
          }}>
          {String.WE_ARE_HAPPY_TO_SEE}
        </Text>
      </View>
      <View style={styles.inputView}>
     
        <TextInputComponent
          value={email}
          placeholder={String.EMAIL}
          onChangeText={value => setEmail(value)}
        />
        <TextInputComponent
          placeholder={String.PASSWORD}
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={secureText}
          secureText={secureText ? String.SHOW : String.HIDE}
          onPressSecure={() => setSecuretext(!secureText)}
        />
        <CustomButton text={String.LOGIN} onPress={{}} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
  },
  textView: {
    marginVertical: moderateScaleVertical(40),
    flex: 0.3,
  },
  inputView: {
    flex: 0.6,

    justifyContent: 'center',
  },
});
