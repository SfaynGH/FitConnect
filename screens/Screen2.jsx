import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, View, Text, Image, ScrollView ,Pressable, TouchableOpacity, ImageBackground, Alert, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import { faSquareFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default function SignUpScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Get the user's unique ID
        const userId = userCredential.user.uid;
  
        // Save additional user details to Firestore
        return firestore()
          .collection('Users') // Collection name
          .doc(userId) // Document ID is the user's UID
          .set({
            name: name, // Name from the input field
            email: email, // Email used during sign-up
            createdAt: firestore.FieldValue.serverTimestamp(), // Timestamp
          });
      })
      .then(() => {
        Alert.alert('User Created', 'Successfully registered and details added to Firestore!');
        setEmail('');
        setName('');
        setPassword('');
        navigation.navigate('LogIn');
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', err.message);
      });
  };
  const [Reload, setReload] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setReload(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {
      (
        <View style={{flex: 1, flexDirection:'column'}}>
          <View style={{flex: 1}}>
              <Image 
              style={{ flex: 1, width: '100%',height: '35%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
              source={require('../assets/images/image.png')}
              resizeMode="cover" />
          </View>
          <View style={{
            flex: 2.5,
            width: '100%',
            height: '76%',
            position: 'absolute',
            backgroundColor: 'transparent', // Change background to transparent
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderRadius: 40,
            alignItems: 'center',
            bottom: 0,
            alignContent: 'center'
          }}>
            <ImageBackground source={require('../assets/images/back.png') } style={{height: '100%', width: '100%',alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 59,borderTopEndRadius:59 ,overflow : 'hidden'}} resizeMode= "cover">
              <Text style={styles.title}>Get Started</Text>
              <ScrollView>
                <Text style={{marginBottom: 10, fontFamily: 'Poppins-Regular',color: '#ccc'}}>Email Adress</Text>
                <View style={styles.inputContainer}>
                  <FontAwesomeIcon icon={faEnvelope} style={{color: '#ccc'}}/>
                  <TextInput                   
                    value={email}
                    onChangeText={text =>setEmail(text)}
                    placeholder="Your email address"
                    placeholderTextColor="#ccc"
                    style={styles.input}
                  />
                </View>
                <Text style={{marginBottom: 10, fontFamily: 'Poppins-Regular',}}>Your Name</Text>
                <View style={styles.inputContainer}>
                  <FontAwesomeIcon icon={faUser} style={{color: '#ccc'}}/>
                  <TextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder="Full Name"
                    placeholderTextColor="#ccc"
                    style={styles.input}
                  />
                </View>
                <Text style={{marginBottom: 10, fontFamily: 'Poppins-Regular',}}>Password</Text>
                <View style={styles.inputContainer}>
                  <FontAwesomeIcon icon={faKey} style={{color: '#ccc'}}/>
                  <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    style={styles.input}
                  />
                  <TouchableOpacity style={styles.iconContainer}>
                    <FontAwesomeIcon icon={faEye} style={{marginTop: 15, marginRight: 10, color: '#ccc'}} />
                  </TouchableOpacity>
                </View>
                {/* Sign In Button */}
                <LinearGradient
                  colors={['#8a2be2', '#ff7f50']}
                  style={styles.signInButtonGradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                >
                  <TouchableOpacity style={styles.signInButton} onPress={signUp}>
                    <Text style={styles.signInText}>Sign up</Text>
                  </TouchableOpacity>
                </LinearGradient>
                {/* Or Continue With */}
                <Text style={styles.orText}>Or sign up with</Text>
                <View style={styles.socialContainer}>
                  <TouchableOpacity style={styles.socialButton}>
                    <FontAwesomeIcon icon={faGoogle} size={24} color="#DB4437" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <FontAwesomeIcon icon={faApple} size={24} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <FontAwesomeIcon icon={faSquareFacebook} size={24} color="#4267B2" />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        </View>
      )
    }
    
     
    </>
   
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 2.5,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon1: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 30, // Adjust font size as needed
    color: '#fff', // White text
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    top: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 314,
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#FFF',
    marginLeft: 10,
  },
  icon: {
    fontSize: 16,
    color: '#A4A4A4',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#A4A4A4',
    marginBottom: 20,
  },
  signInButtonGradient: {
    width: 314,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  signInButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: '85%',
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Medium',
  },
  orText: {
    fontSize: 14,
    color: '#B6B6B6',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 45,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
