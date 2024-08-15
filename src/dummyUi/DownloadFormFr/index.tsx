import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DownloadFormFr: React.FC = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    const renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress}>
                <AntDesign name='arrowleft' color={'black'} size={28} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Download form</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {renderHeader()}
            <View style={styles.content}>
                <Image source={require('../../assets/images/check-circle.png')} style={styles.image} />
                <Text style={styles.title}>Aucun formulaire à télécharger</Text>
                <Text style={styles.subtitle}>Téléchargez le formulaire pour commencer.</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Démarrer un nouveau formulaire</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: 100,
        // height: 100,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black'
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1160AA',
        paddingVertical: 15,
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default DownloadFormFr;
