import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';

import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import { styles } from './styles';
import { formHelper } from './_helpers/form.Helper';

export const Login = () => {
    const [form, setForm] = useState(formHelper);

    const [email, password] = form;

    const enabled = email.value.length > 0 && password.value.length > 0;

    const onLogin = () => {
        console.log('Login');
    };

    const onHandlerEmail = (value: string) => {
        setForm(
            form.map((input) => (input.key === 'email' ? { ...input, value } : input))
        );
    };
    const onHandlerPassword = (value: string) => {
        setForm(
            form.map((input) => (input.key === 'password' ? { ...input, value } : input))
        );
    };

    const onForgotPassword = () => {
        console.log('Forgot Password');
    };

    const onSignUp = () => {
        console.log('Sign Up');
    };

    const onPrivacyPolicy = () => {
        console.log('Privacy Policy');
    };

    const onBackHandler = () => {
        console.log('Back');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Spacer amount={8} />
            <Icon name={'EpicGames'} />
            <Spacer amount={6} />
            <Text font="brutalBold">Sign in with a Legendary Games Account.</Text>
            <Spacer amount={4} />

            <Input onChangeText={onHandlerEmail} placeholder="Account Email" />
            <Spacer amount={4} />
            <Input
                onChangeText={onHandlerPassword}
                placeholder="Password"
                secureTextEntry={true}
                maxLength={16}
            />

            <Spacer amount={4} />
            <View
                style={styles.checkBoxContainer}
            >
                <CheckBox
                    text={'Remember me'}
                    onPress={() => console.log('checkbox')}
                />
                <Text onPress={onForgotPassword} font="brutalRegular" size={17}>
          Forgot Your Password
                </Text>
            </View>
            <Spacer amount={6} />

            <Button enabled={enabled} title={'LOG IN NOW'} onPress={onLogin} />
            <Spacer amount={6} />
            <Text onPress={onPrivacyPolicy} font="brutalRegular" size={17} textDecorationLine='underline'>
          Privacy Policy
            </Text>
            <Spacer amount={5} />
            <Text font="brutalRegular" size={17} >
              Dont have a Legendary Games Account?
            </Text>
            <Spacer amount={1} />
            <Text onPress={onSignUp} font="brutalRegular" size={17} textDecorationLine='underline' >
              Sign Up
            </Text>
            <Spacer amount={5} />
            <Text onPress={onBackHandler} font="brutalRegular" size={17} textDecorationLine='underline'>
              Back to all sign in options.
            </Text>
        </SafeAreaView>
    );
};
