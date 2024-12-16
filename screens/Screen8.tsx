import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { faUser, faHome, faCalendarDays, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
    const personalProfile = {FullName: 'OUK Hamdi', image: require('../assets/images/3ou9.jpg'), email: 'hamdiouk69@gmail.com', phone: '+216 31 31 31 31', Birth: '07/11/2002', sex: 'Male'};
  return (
    <View style = {{
        flex: 1,
        flexDirection: 'column',
    }}>
        <View style = {{
            flex: 1,
            backgroundColor: '#B478BD',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 720,
            zIndex: 1,
        }} >
            <Image source={require('../assets/images/LogoUp.png')} style = {{top: 15}}/>
        </View>
        <View style = {{
            flex: 11.5,
            backgroundColor: '#000',
            padding: 20,
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Image source={personalProfile.image} style = {styles.personalProfileImage}/>
            <View style = {{}}>
                <Text>Full Name:</Text>
                <View style = {{
                    borderBottomWidth: 1,
                    borderColor : '#FFFFFF',
                    width : 320,
                    marginTop: 15,
                }}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>{personalProfile.FullName}</Text>
                </View>
            </View>
            <View style = {{marginTop: 10}}>
                <Text>Email:</Text>
                <View style = {{
                    borderBottomWidth: 1,
                    borderColor : '#FFFFFF',
                    width : 320,
                    marginTop: 15,
                }}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>{personalProfile.email}</Text>
                </View>
            </View>
            <View style = {{marginTop: 10}}>
                <Text>Phone Number:</Text>
                <View style = {{
                    borderBottomWidth: 1,
                    borderColor : '#FFFFFF',
                    width : 320,
                    marginTop: 15,
                }}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>{personalProfile.phone}</Text>
                </View>
            </View>
            <View style = {{marginTop: 10}}>
                <Text>Birth Day:</Text>
                <View style = {{
                    borderBottomWidth: 1,
                    borderColor : '#FFFFFF',
                    width : 320,
                    marginTop: 15,
                }}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>{personalProfile.Birth}</Text>
                </View>
            </View>
            <View style = {{marginTop: 10}}>
                <Text>Gender:</Text>
                <View style = {{
                    borderBottomWidth: 1,
                    borderColor : '#FFFFFF',
                    width : 320,
                    marginTop: 15,
                }}>
                    <Text style={{color: '#ccc', marginBottom: 10}}>{personalProfile.sex}</Text>
                </View>
            </View>
            <TouchableOpacity style = {styles.bookBottom} onPress={() => navigation.navigate("LogIn")}>
                <Text style = {styles.bookButtonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    personalProfileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    container: {
        marginVertical: 16,
      },
      headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      seeAllText: {
        fontSize: 16,
        color: 'white',
      },
      imageContainer: {
        position: 'relative',
        alignItems: 'center',
      },
      image: {
        width: '100%',
        height: 100,
        borderRadius: 20,
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
      },
      viewClassesButton: {
        backgroundColor: '#B478BD',
        borderRadius: 12,
        height : 35,
        width : 330,
        alignItems: 'center',
        top : -45
      },
      viewClassesText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop : 5,
      },
      classTimeText: {
        color: 'white',
        fontSize: 14,
        top: -120,
        left : -90,
      },
      personalTrainersHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
      },
      personalTrainersTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
      personalTrainersContent: {
        paddingVertical: 12,
      },
      trainerCard: {
        width: 70,
        height: 100,
        marginRight: 16,
        alignItems: 'center',
      },
      trainerImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
      },
      trainerName: {
        fontSize: 12,
        color: '#DFDFF9',
        opacity: 0.8,
        marginTop: 8,
      },
      footext:{
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        marginTop: 5,
    },
    footextSelected:{
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        backgroundColor: '#6D6DFF',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: 5,
    },
    bookBottom: {
        alignItems: 'center',
        backgroundColor: '#6D6DFF',
        height : 50,
        borderRadius: 50,
        marginTop: 20,
        width : '100%',
      },
      bookButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'center',
      },
});

export default ProfileScreen;