import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface CustomInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};



const FormScreen: React.FC = () => {
    const navigation = useNavigation();

    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleBackPress = () => {
        navigation.goBack();
    };
    const renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress}>
                <AntDesign name='arrowleft' color={'black'} size={28} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Ajouter un nouveau projet</Text>
        </View>
    );

    const handleAddPress = () => {
        Alert.alert('Added');
    };

    return (
        <View style={styles.container}>
            {renderHeader()}
            <View style={styles.contentContainer} >
           
            <CustomInput
                label="URL"
                value={url}
                onChangeText={setUrl}
                placeholder="Enter URL"
            />
            <CustomInput
                label="Nom d'utilisateur"
                value={username}
                onChangeText={setUsername}
                placeholder="Enter Username"
            />
            <CustomInput
                label="Mot de passe"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter Password"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleAddPress}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        // padding: 20,
    },
    contentContainer: {
        padding: 20,

    },
    inputContainer: {
        marginBottom: 20,
        
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#D7D7D7',

    },
    button: {
        backgroundColor: '#1160AA',
        paddingVertical: 15,
        // width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
        fontWeight: 'bold',
    },
});

export default FormScreen;