import React from 'react';
import {
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import backgroundImage from '../assets/images/registration-screen-bg.jpg';
import { Controller, useForm } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

const RegistrationScreen = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.registerFormWrap}>
          <View style={styles.avatar}>
            <Ionicons
              name='add-circle-outline'
              size={32}
              style={styles.addIcon}
            />
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.registerForm}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder='Логін'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.formField}
                />
              )}
              name='login'
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder='Адреса електронної пошти'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.formField}
                />
              )}
              name='email'
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.passwordField}>
                  <TextInput
                    placeholder='Пароль'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.formField}
                    secureTextEntry={true}
                  />
                  <TouchableOpacity
                    style={styles.showPasswordBtn}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.showPasswordBtnText}>Показати</Text>
                  </TouchableOpacity>
                </View>
              )}
              name='password'
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            activeOpacity={0.8}
            style={styles.registerBtn}
          >
            <Text style={styles.registerBtnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.signInLink}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  registerFormWrap: {
    position: 'relative',
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  avatar: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    width: 120,
    height: 120,
    alignSelf: 'center',
    top: -60,
  },
  addIcon: {
    color: '#FF6C00',
    position: 'absolute',
    right: -16,
    bottom: 16,
  },
  title: {
    textAlign: 'center',
    color: '#212121',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  registerForm: {
    gap: 16,
    marginTop: 33,
    marginBottom: 43,
  },
  formField: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
  },
  passwordField: {
    position: 'relative',
  },
  showPasswordBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  showPasswordBtnText: {
    color: '#1B4371',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
  },
  registerBtn: {
    backgroundColor: '#FF6C00',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  registerBtnText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
  },
  signInLink: {
    color: '#1B4371',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 16,
  },
});
