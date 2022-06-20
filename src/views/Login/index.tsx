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

export const Login = () => {
    const [form, setForm] = useState([
        {
            key: 'email',
            value: '',
            placeholder: 'Email',
            touched: false,
            error: false,
        },
        {
            key: 'password',
            value: '',
            placeholder: 'Password',
            touched: false,
            error: false,
        },
    ]);

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
            <Text onPress={onForgotPassword} font="brutalRegular" size={17}>
          Privacy Policy
            </Text>
            <Spacer amount={4} />
            <Text onPress={onForgotPassword} font="brutalRegular" size={17}>
              Dont have a Legendary Games Account? Sign Up
            </Text>
            <Spacer amount={2} />
            <Text onPress={onForgotPassword} font="brutalRegular" size={17}>
              Back to all sign in options.
            </Text>
        </SafeAreaView>
    );
};
