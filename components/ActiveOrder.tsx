import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Pressable, ButtonProps, Alert } from 'react-native';

interface AlertConfirmationProps {
    messageTitle: string;
    messageBody?: string;
    optionLeft: string;
    optionLeftStyle: "default" | "cancel" | "destructive" | undefined;
    onPressLeft: () => void;
    optionRight: string;
    optionRightStyle: "default" | "cancel" | "destructive" | undefined;
    onPressRight: () => void;
}

interface OrderButtonProps {
    onPress: () => void;
    disabled: boolean;
}

export const AlertConfirmation = (props: AlertConfirmationProps) => {
    const { onPressLeft, onPressRight, messageTitle, messageBody, optionLeft, optionLeftStyle, optionRight, optionRightStyle } = props;
    Alert.alert(messageTitle, messageBody, [
        {
            text: optionLeft,
            onPress: onPressLeft,
            style: optionLeftStyle,
        },
        { text: optionRight,
            onPress: onPressRight,
            style: optionRightStyle,
        },
    ]);
}

export const ClearButton = (props: OrderButtonProps) => {
    const { onPress, disabled } = props;
    return (
        <Pressable onPress={onPress} disabled={disabled} style={[styles.buttonClear, disabled && styles.buttonClearDisabled]}>
            <Ionicons name='trash-bin-outline' style={[styles.buttonClearText, disabled && styles.buttonClearTextDisabled]} ></Ionicons>
        </Pressable>
    );
}

export const SubmitButton = (props: OrderButtonProps) => {
    const { onPress, disabled } = props;
    return (
        <Pressable onPress={onPress} disabled={disabled} style={[styles.buttonSubmit, disabled && styles.buttonSubmitDisabled]}>
            <Text style={[styles.buttonSubmitText, disabled && styles.buttonSubmitTextDisabled]} >Submit</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonClear: {
        borderRadius: 8,
        borderColor: '#ef4444',
        borderWidth: 1,
        justifyContent: 'center',
    },
    buttonClearText: {
        color: '#ef4444',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    buttonClearDisabled: {
        borderRadius: 8,
        borderColor: '#fecaca',
        borderWidth: 1,
        justifyContent: 'center'
    },
    buttonClearTextDisabled: {
        color: '#fecaca',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    buttonSubmit: {
        flex: 0.9,
        backgroundColor: '#2cc56f',
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 10,
    },
    buttonSubmitText: {
        color: '#FFFFFF',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonSubmitDisabled: {
        flex: 0.9,
        backgroundColor: '#8eddb1',
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 10,
    },
    buttonSubmitTextDisabled: {
        color: '#ffffff',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
});