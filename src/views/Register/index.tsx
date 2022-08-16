import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowBack } from '../../components';
import { Button } from '../../components';
import { CheckBox } from '../../components';
import { DropDown } from '../../components';
import { Icon } from '../../components';
import { Input } from '../../components';
import { Spacer } from '../../components';
import { Text } from '../../components';

import { styles } from './styles';
import { FormFieldKey, FormIndexes } from './types';
import { initialFormField } from './_helpers/initialFormField';
import { validateFormField } from './_helpers/validateFormField';
import { getFormField } from './_helpers/getFormField';
import { mockCountries } from './_helpers/mockedContries';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../store/types';
import { addUser } from '../../store/userManage';
import { NAVIGATORS } from '../../navigation/constants';
import { width } from '../../components/Theme/Responsive';

export const Register = () => {
  const [form, setForm] = useState(initialFormField);
  const [TermsOfService, setTermsOfService] = useState(false);
  const selector = useSelector((store: IStore) => store.user);
  const { navigate, goBack } = useNavigation();
  const dispatch = useDispatch();

  const updateForm = (
    fieldIndex: FormIndexes,
    fieldKey: FormFieldKey,
    fieldValue: string | boolean
  ) => {
    const newForm = [...form];
    (newForm[fieldIndex][fieldKey] as typeof fieldValue) = fieldValue;
    setForm(newForm);
  };

  let userData: any;
  const getUserData = () => {
    form.forEach((field) => {
      userData = {
        ...userData,
        [field.id]: field.value,
      };
    });
    return userData;
  };

  const onBlur = (fieldIndex: FormIndexes) => {
    const errorMessage = validateFormField(form, fieldIndex);

    updateForm(fieldIndex, 'errorMessage', errorMessage);

    if (errorMessage === '') {
      // TODO: Integrate API when its ready
      return;
    }
  };

  const onFocus = (fieldIndex: FormIndexes) => {
    const { value } = getFormField(form, fieldIndex);

    value || updateForm(fieldIndex, 'errorMessage', '');
  };

  const onFieldChange = (value: string, fieldIndex: FormIndexes) => {
    updateForm(fieldIndex, 'value', value);
  };

  const nextStepHandler = () => {
    dispatch(addUser(getUserData()));
    console.log(selector);
  };

  const onSignIn = () => {
    navigate(NAVIGATORS.LOGIN as never);
  };

  const onPrivacyPolicy = () => {
    console.log('Privacy Policy');
  };

  const onReceiveNews = () => {
    //TODO: send to API
  };

  const enableConfirmButton = () => {
    return (
      TermsOfService &&
      form.every((field) => {
        const fieldVerify = field.errorMessage === '' && field.value !== '';
        return fieldVerify;
      })
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.registerContainer}>
        <ArrowBack onPress={() => goBack()} />
        <Spacer amount={1} />
        <Icon name={'EpicGames'} />
        <Spacer amount={2} />
        <Text font="brutalBold" color="White">
          Sign Up
        </Text>
        <Spacer amount={2} />
        <DropDown options={mockCountries} />
        <Spacer amount={3} />
        <View style={styles.fullNameContainer}>
          <Input
            small={true}
            onChangeText={(value) => onFieldChange(value, FormIndexes.name)}
            onBlur={() => onBlur(FormIndexes.name)}
            onFocus={() => onFocus(FormIndexes.name)}
            errorMessage={form[FormIndexes.name].errorMessage}
            placeholder={'Name'}
          />
          <Input
            small={true}
            onChangeText={(value) => onFieldChange(value, FormIndexes.lastName)}
            placeholder={'Last Name'}
            onBlur={() => onBlur(FormIndexes.lastName)}
            onFocus={() => onFocus(FormIndexes.lastName)}
            errorMessage={form[FormIndexes.lastName].errorMessage}
          />
        </View>
        <Spacer amount={4} />
        <Input
          onChangeText={(value) =>
            onFieldChange(value, FormIndexes.displayName)
          }
          onBlur={() => onBlur(FormIndexes.displayName)}
          onFocus={() => onFocus(FormIndexes.displayName)}
          placeholder={'Display Name'}
          errorMessage={form[FormIndexes.displayName].errorMessage}
        />
        <Spacer amount={4} />
        <Input
          onChangeText={(value) => onFieldChange(value, FormIndexes.email)}
          placeholder={'Email'}
          onBlur={() => onBlur(FormIndexes.email)}
          onFocus={() => onFocus(FormIndexes.email)}
          errorMessage={form[FormIndexes.email].errorMessage}
        />
        <Spacer amount={4} />
        <Input
          onChangeText={(value) => onFieldChange(value, FormIndexes.password)}
          onBlur={() => onBlur(FormIndexes.password)}
          onFocus={() => onFocus(FormIndexes.password)}
          errorMessage={form[FormIndexes.password].errorMessage}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <Spacer amount={4} />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            text="I would like to receive news, surveys and special offers from Legendary Games"
            onPress={onReceiveNews}
          />
          <Spacer amount={4} />
          <CheckBox
            text="I read and agree to the terms of service."
            onPress={setTermsOfService}
          />
        </View>
        <Spacer amount={4} />
        <Button
          enabled={enableConfirmButton()}
          onPress={nextStepHandler}
          title="CONTINUE"
        />
        <Spacer amount={4} />
        <Text
          onPress={onPrivacyPolicy}
          font="brutalRegular"
          size={17}
          textDecorationLine="underline"
        >
          Privacy Policy
        </Text>
        <Spacer amount={2} />
        <View style={styles.signInLink}>
          <Text font="brutalRegular" size={16}>
            Have a Legendary Games Account?
          </Text>
          <Text
            onPress={onSignIn}
            font="brutalRegular"
            size={16}
            textDecorationLine="underline"
          >
            Sign In
          </Text>
          <Spacer amount={1} />
        </View>
        <Spacer amount={2} />
      </SafeAreaView>
    </ScrollView>
  );
};
