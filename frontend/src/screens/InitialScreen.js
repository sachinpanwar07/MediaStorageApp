import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import { moderateScale, textScale } from '../styles/Responsive';
import String from '../Constant/String';
import Colors from '../styles/Colors';
import ImagePath from '../Constant/ImagePath';


const InitialScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.textStyleView}>
        <Text style={styles.titleStyle}>PixPals</Text>
        <Text style={styles.tagLineStyle}>
          make every moment count share your memories with pixPals
        </Text>
        <Image source={ImagePath.mainLogo} style={styles.imgStyle} />
      </View>
      <View style={styles.btnView}>
        <CustomButton
          text={String.LOGIN}
          onPress={() => navigation.navigate('login')}
          style={styles.LoginbtnStyle}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: textScale(18),
            fontWeight: 'bold',
          }}>
          OR
        </Text>
        <CustomButton
          text={String.REGISTER}
          onPress={() => navigation.navigate('Register')}
          style={styles.LoginbtnStyle}
        />
      </View>
    </>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyleView: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:"white",
   
  },
  btnView: {
    flex: 0.5,

    justifyContent: 'center',
  },
  LoginbtnStyle: {
    margin: moderateScale(20),
  },
  titleStyle: {
    fontSize: textScale(40),
    fontWeight: 'condensed',
    margin: moderateScale(20),
    color:Colors.orangeColor
  },
  tagLineStyle: {
    fontSize: textScale(20),
    margin: moderateScale(20),
    color:Colors.oliveColor
  },
  imgStyle: {
    marginTop:moderateScale(50),
    width: '90%',
    height: '60%',
    backgroundColor: 'transparent',
    resizeMode: 'cover',
   borderRadius:moderateScale(10)
  },
});