import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const COLLECTION_NAME = 'userData';

const FirebaseDataUpload = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');

  const handleDataUpload = async () => {
    if (!name || !email || !phoneNumber || !education) {
      Alert.alert('Fill All Fields');
      return;
    }

    try {
      const querySnapshot = await firestore()
        .collection(COLLECTION_NAME)
        .where('name', '==', name)
        .where('email', '==', email)
        .where('phoneNumber', '==', phoneNumber)
        .where('education', '==', education)
        .get();

        console.log(`querySnapsho: `,  querySnapshot.docs[0]?.id)
        console.log(`check querySnapShot Empty or Not: ${querySnapshot.empty}`);

      if (!querySnapshot.empty) {
        Alert.alert(
          'Duplicate Data',
          'The same Name, Email, Phone Number, and Education already exist. Do you want to update the data?',
          [
            {
              text: 'No',
              onPress: () => console.log('Cancelled'),
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => {
                const docId = querySnapshot.docs[0].id;
                firestore()
                  .collection(COLLECTION_NAME)
                  .doc(docId)
                  .update({
                    name: name,
                    phoneNumber: phoneNumber,
                    email: email,
                    education: education,
                  })
                  .then(() =>
                    Alert.alert(
                      'Data Updated',
                      `Name: ${name}\nPhone: ${phoneNumber}\nEmail: ${email}\nEducation: ${education}`,
                    ),
                  )
                  .catch(error =>
                    Alert.alert(
                      'Error',
                      `Failed to update data: ${error.message}`,
                    ),
                  );
              },
            },
          ],
        );
      } else {
        firestore()
          .collection(COLLECTION_NAME)
          .add({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            education: education,
          })
          .then(() =>
            Alert.alert(
              'Data Submitted',
              `Name: ${name}\nPhone: ${phoneNumber}\nEmail: ${email}\nEducation: ${education}`,
            ),
          )
          .catch(error =>
            Alert.alert('Error', `Failed to submit data: ${error.message}`),
          );
      }
    } catch (error) {
      console.error('Error checking for existing data: ', error);
    }
  };

  const getDataFromFireStore = async () => {
    try {
      const getCollections = await firestore()
        .collection(COLLECTION_NAME)
        .get();
      const userList = getCollections.docs.map(userData => {
        console.log({userData: userData});
      });
      return userList;
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={education}
        onChangeText={setEducation}
        placeholder="Enter Education"
      />

      <TouchableOpacity style={styles.button} onPress={handleDataUpload}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getDataFromFireStore}>
        <Text style={styles.buttonText}>Get Data From FireStore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 60,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 23,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: '#4caf50',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default FirebaseDataUpload;
