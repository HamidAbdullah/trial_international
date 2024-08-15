import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const ReadyToSendScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };
    const renderHeader = () => (
        <View style={styles.header} >
            <TouchableOpacity onPress={handleBackPress}>
                <AntDesign name='arrowleft' color={'black'} size={28} />
            </TouchableOpacity>
            <Text style={styles.backText}>Ready to send</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            {renderHeader()}
            <View style={styles.content}>
                <Image source={require('../../assets/images/Message.png')} style={styles.image} />
                <Text style={styles.title}>Rien de prêt à envoyer</Text>
                <Text style={styles.subtitle}>Lorsque vous finalisez les brouillons, ils apparaîtront ici.</Text>
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
        backgroundColor: 'white',
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems:'center'
    },
    
    backText: {
    fontSize: 20,
        color: '#000',
        marginStart: 20,
    fontWeight:'600'
},
    content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
    image: {
    // width: 50,
    height: 50,
    marginBottom: 20,
},
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
    subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
},
    icon: {
    transform: [{ rotate: '45deg' }], // Change '45deg' to any degree you want
},
});

export default ReadyToSendScreen;
