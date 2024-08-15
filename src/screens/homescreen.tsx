import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {httpsCallable, functions} from '../firebaseConfig';

const HomeScreen = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [operation, setOperation] = useState('');

  const calculate = async (op: string) => {
    setLoading(true);
    setOperation(op);
    try {
      const callable = httpsCallable(functions, op);
      const response = await callable({ a: Number(a), b: Number(b) });
      // @ts-ignore
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
      setResult('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
      <TextInput
        style={styles.input}
        value={a}
        onChangeText={setA}
        placeholder="Enter number A"
        keyboardType="numeric"
        editable={!loading}
      />
      <TextInput
        style={styles.input}
        value={b}
        onChangeText={setB}
        placeholder="Enter number B"
        keyboardType="numeric"
        editable={!loading}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={() => calculate('addTwoNp')}
          disabled={loading}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.subtractButton]}
          onPress={() => calculate('subtractTwoNp')}
          disabled={loading}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.multiplyButton]}
          onPress={() => calculate('multiplyTwoNp')}
          disabled={loading}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.divideButton]}
          onPress={() => calculate('divideTwoNp')}
          disabled={loading}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
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
  buttonContainer: {
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginVertical: 8,
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
  addButton: {
    backgroundColor: '#4caf50',
  },
  subtractButton: {
    backgroundColor: '#f44336', 
  },
  multiplyButton: {
    backgroundColor: '#ff9800', 
  },
  divideButton: {
    backgroundColor: '#2196f3', 
  },
  result: {
    marginTop: 16,
    fontSize: 25,
    textAlign: 'center', 
    color: '#000', 
    marginBottom: 30,
  },
});

export default HomeScreen;
