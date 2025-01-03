import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import {faX} from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CoachDetail = ({route}) => {

  const {data} = route.params;

  const navigation = useNavigation();
    const personalTrainer ={ name: 'Emile', FamilyName: 'Cassel', image: require('../assets/images/emile.jpg'), years: '3' };
    const course = { name: 'Yoga', image: require('../assets/images/yoga.png'), date: 'Tuesday 24 Nov', duration: '30 mins', Time: '9:30 am' };

  return (
    <View style = {{
        flex: 1,
        flexDirection: 'column',
    }}>
        <View style = {{
            flex: 4,
            backgroundColor: '#fff'
        }}>
            <Image source={course.image} style ={styles.CourseImage} />
            <LinearGradient
            colors={['transparent', '#000']}
            style = {{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
            }}
            />
            <TouchableOpacity style = {{
                position: 'absolute',
                backgroundColor: '#6D6DFF',
                padding: 10,
                borderRadius:50,
                left: '85%',
                top: '5%'
            }} onPress={() => navigation.navigate("Main")}>
                <FontAwesomeIcon icon={faX} style={{
                    color : '#ccc'
                }}></FontAwesomeIcon>
            </TouchableOpacity>
        </View>
        <View style ={{
            flex: 8.5,
            backgroundColor: '#000',
            flexDirection: 'column',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
        }}>
            <Image source={{ uri: data.image }} style= {styles.trainerImage}/>
            <Text style = {styles.personalTrainerName}>{data.name} {personalTrainer.FamilyName}</Text>
            <Text style = {styles.personalTrainerYears}>{personalTrainer.years} years of experience</Text>
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
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
      CourseImage:{
        top : 0,
        bottom : 0,
        height : '100%',
        width : '100%'
      },
      title:{
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      description:{
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center'
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
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: 75,
        top: -100,
      },
      personalTrainerYears: {
        top: -100,
      },
      personalTrainerName: {
        marginTop: 25,
        fontSize: 20,
        color: 'white',
        marginBottom: 8,
        fontWeight: 'bold',
        top: -100,
      },
      trainerName: {
        fontSize: 12,
        color: '#DFDFF9',
        opacity: 0.8,
        marginTop: 8,
      },
      seeAllText: {
        fontSize: 16,
        color: 'white',
      },
      bookBottom: {
        alignItems: 'center',
        backgroundColor: '#6D6DFF',
        height : 50,
        borderRadius: 50,
        marginTop: 50,
      },
      bookButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 12,
        paddingBottom: 12,
        textAlign: 'center',
      },
      socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        alignItems: 'center',
        alignContent: 'center',
        gap: 30,
      },
      socialButton: {
        width: 70,
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default CoachDetail;