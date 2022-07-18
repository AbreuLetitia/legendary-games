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
import { regexCheckEmail } from '../../utils/regex';
import { styles } from './styles';
import { initialFormState } from './_helpers/initialState';

export type FormFieldKey =
  | 'id'
  | 'value'
  | 'placeholder'
  | 'errorMessage'
  | 'small';

export enum FormIndexes {
  name,
  lastName,
  displayName,
  email,
  password,
}

export const Register = () => {
  const [form, setForm] = useState(initialFormState);
  const [errorMessage, setErrorMessage] = useState('');
  const mockCountries = [
    'Brazil',
    'French',
    'Italy',
    'Australia',
    'United State',
  ];

  const updateForm = (
    fieldIndex: FormIndexes,
    fieldKey: FormFieldKey,
    fieldValue: string | boolean
  ) => {
    const newForm = [...form];
    (newForm[fieldIndex][fieldKey] as typeof fieldValue) = fieldValue;
    setForm(newForm);
  };

  const getFormField = (fieldIndex: FormIndexes) => {
    return form[fieldIndex];
  };

  const validateFormField = (fieldIndex: FormIndexes): string => {
    const { value } = getFormField(fieldIndex);

    switch (fieldIndex) {
      case FormIndexes.name:
        if (value === '') return 'name is required';
        if (value.length < 3) return 'name must be at leat 3 characters';
        return '';

      case FormIndexes.lastName:
        if (value === '') return 'last name is required';
        if (value.length < 3) return 'name must be at leat 3 characters';
        return '';

      case FormIndexes.displayName:
        if (value === '') return 'display name is required';
        if (value.length < 3) return 'name must be at leat 3 characters';
        return '';

      case FormIndexes.email:
        if (value === '') return 'email is required';
        if (value.length < 3) return 'email must be at leat 3 characters';
        if (!value.match(regexCheckEmail)) return 'email is invalid';
        return '';

      case FormIndexes.password:
        if (value === '') return 'password is required';
        if (value.length < 7) return 'password must be at least 7 characters';
        if (!RegExp(/[A-Z]/).test(value))
          return 'password must contain at least one uppercase letter';
        if (!RegExp(/[0-9]/).test(value))
          return 'password must contain at least one number';
        if (!RegExp(/[!@#$%^&*(.),?":{}|<>]/).test(value))
          return 'password must contain at least one special character';
        return '';

      default:
        return '';
    }
  };

  const { navigate } = useNavigation();
  const { goBack } = useNavigation();

  const onBlur = (fieldIndex: FormIndexes) => {
    const { value } = getFormField(fieldIndex);

    if (value !== '') {
      // TODO: Integrate API when its ready
      return;
    }

    updateForm(fieldIndex, 'errorMessage', validateFormField(fieldIndex));
    setErrorMessage(validateFormField(fieldIndex));
  };

  const onFocus = (fieldIndex: FormIndexes) => {
    const { value } = getFormField(fieldIndex);

    !value &&
      updateForm(fieldIndex, 'errorMessage', validateFormField(fieldIndex));
  };

  const onFieldChange = (value: string, fieldIndex: FormIndexes) => {
    updateForm(fieldIndex, 'value', value);
  };

  const handlerNextTep = () => {
    console.log('CONTINUE');
  };

  const enabled = true;

  const onSignIn = () => {
    navigate(NAVIGATORS.REGISTER as never);
  };

  const onPrivacyPolicy = () => {
    console.log('Privacy Policy');
  };

  const onBackHandler = () => {
    console.log('Back');
  };

  const onReceiveNews = () => '';
  const onTermsOfService = () => '';

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
          <Input small={true} onChangeText={() => ''} placeholder={'Name'} />
          <Input
            small={true}
            onChangeText={() => ''}
            placeholder={'Last Name'}
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
          messege={'faz um breakdown pra mim'}
        />
        <Spacer amount={4} />
        <Input onChangeText={() => ''} placeholder={'Email'} />
        <Spacer amount={4} />
        <Input onChangeText={() => ''} placeholder={'Password'} />
        <Spacer amount={4} />
        <View>
          <CheckBox
            text="I would like to receive news, surveys and special offers from Legendary Games"
            onPress={onReceiveNews}
          />
          <Spacer amount={4} />
          <CheckBox
            text="I read and agree to the terms of service."
            onPress={onTermsOfService}
          />
        </View>
        <Spacer amount={4} />
        <Button enabled={enabled} onPress={handlerNextTep} title="CONTINUE" />
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
          <Text font="brutalRegular" size={17}>
            Have a Legendary Games Account?
          </Text>
          <Text
            onPress={onSignIn}
            font="brutalRegular"
            size={17}
            textDecorationLine="underline"
          >
            Sign In
          </Text>
        </View>
        <Spacer amount={1} />
        {/* <Text
          onPress={onBackHandler}
          font="brutalRegular"
          size={17}
          textDecorationLine="underline"
        >
          Back to all sign in options.
        </Text> */}
        <Spacer amount={2} />
      </SafeAreaView>
    </ScrollView>
  );
};
