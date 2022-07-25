import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowBack } from '../../components/ArrowBack';
import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { DropDown } from '../../components/DropDown';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import { NAVIGATORS } from '../../navigation/constants';

import { styles } from './styles';
import { FormFieldKey, FormIndexes } from './types';
import { initialFormState } from './_helpers/initialState';
import { validateFormField } from './_helpers/validateFormField';
import { getFormField } from './_helpers/getFormField';
import { mockCountries } from './_helpers/mockedContries';

export const Register = () => {
  const [form, setForm] = useState(initialFormState);
  const [checked, setChecked] = useState(false);

  const updateForm = (
    fieldIndex: FormIndexes,
    fieldKey: FormFieldKey,
    fieldValue: string | boolean
  ) => {
    const newForm = [...form];
    (newForm[fieldIndex][fieldKey] as typeof fieldValue) = fieldValue;
    setForm(newForm);
  };

  const { navigate } = useNavigation();
  const { goBack } = useNavigation();

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

  const handlerNextTep = () => {
    console.log('CONTINUE');
  };

  const onSignIn = () => {
    navigate(NAVIGATORS.REGISTER as never);
  };

  const onPrivacyPolicy = () => {
    console.log('Privacy Policy');
  };

  const onReceiveNews = () =>
    // send to API
    console.log('Receive News');

  const enabled = () => {
    const isFieldValid = form.every((field) => {
      return field.errorMessage === '';
    });

    return checked && isFieldValid;
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.registerContainer}>
        <ArrowBack onPress={() => goBack()} />
        <Spacer amount={1} />
        <Icon name={'EpicGames'} />
        <Spacer amount={3} />
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
            message={form[FormIndexes.displayName].errorMessage}
            placeholder={'Name'}
          />
          <Input
            small={true}
            onChangeText={(value) => onFieldChange(value, FormIndexes.lastName)}
            placeholder={'Last Name'}
            onBlur={() => onBlur(FormIndexes.lastName)}
            onFocus={() => onFocus(FormIndexes.lastName)}
            message={form[FormIndexes.lastName].errorMessage}
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
          message={form[FormIndexes.displayName].errorMessage}
        />
        <Spacer amount={4} />
        <Input
          onChangeText={(value) => onFieldChange(value, FormIndexes.email)}
          placeholder={'Email'}
          onBlur={() => onBlur(FormIndexes.email)}
          onFocus={() => onFocus(FormIndexes.email)}
          message={form[FormIndexes.email].errorMessage}
        />
        <Spacer amount={4} />
        <Input
          onChangeText={(value) => onFieldChange(value, FormIndexes.password)}
          onBlur={() => onBlur(FormIndexes.password)}
          onFocus={() => onFocus(FormIndexes.password)}
          message={form[FormIndexes.password].errorMessage}
          placeholder={'Password'}
        />
        <Spacer amount={4} />
        <View>
          <CheckBox
            text="I would like to receive news, surveys and special offers from Legendary Games"
            onPress={onReceiveNews}
          />
          <Spacer amount={4} />
          <CheckBox
            text="I read and agree to the terms of service."
            onPress={setChecked}
          />
        </View>
        <Spacer amount={4} />
        <Button enabled={enabled()} onPress={handlerNextTep} title="CONTINUE" />
        <Spacer amount={4} />
        <Text
          onPress={onPrivacyPolicy}
          font="brutalRegular"
          size={17}
          textDecorationLine="underline"
        >
          Privacy Policy
        </Text>
        <Spacer amount={3} />
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
