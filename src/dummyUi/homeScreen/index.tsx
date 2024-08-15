import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface CustomButtonProps {
  iconName: string;
  label: string;
  onPress: () => void;
}

const CustomBtn: React.FC<CustomButtonProps> = ({iconName, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={20} color="#000" style={styles.icon} />
      <Text style={styles.label}> {label} </Text>
    </TouchableOpacity>
  );
};

const renderHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Trial International</Text>
  </View>
);

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.buttonContainer}>
        {/* <CustomBtn iconName="plus" label="Démarrer un nouveau formulaire" onPress={() => { }} /> */}
        <View>
          <TouchableOpacity
            style={styles.firstButton}
            onPress={() => {
              navigation.navigate('FormScreen' as never);
            }}>
            <Icon name="plus" size={20} color="#fff" style={styles.icon} />
            <Text style={[styles.label, {color: 'white'}]}>
              {' '}
              Démarrer un nouveau formulaire{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <CustomBtn
          iconName="edit"
          label="Brouillons"
          onPress={() => {
            navigation.navigate('ReadyToSendScreenEng' as never);
          }}
        />
        <CustomBtn
          iconName="download"
          label="Télécharger le formulaire"
          onPress={() => {
            navigation.navigate('DownloadForm' as never);
          }}
        />
        <CustomBtn
          iconName="check"
          label="Envoyé"
          onPress={() => {
            navigation.navigate('DownloadFormFr' as never);
          }}
        />
        <CustomBtn
          iconName="paper-plane"
          label="Envoyer maintenant"
          onPress={() => {
            navigation.navigate('ReadyToSendScreen' as never);
          }}
        />
        <CustomBtn
          iconName="trash"
          label="Supprimer le formulaire"
          onPress={() => {
            navigation.navigate('Deleteforms' as never);
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
