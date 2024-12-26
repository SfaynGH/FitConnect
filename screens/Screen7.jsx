import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { faUser, faHome, faCalendarDays, faHeartPulse, faX} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const PlanningDetailScreen = ({route}) => {

  console.log(route.params);

    const {data} = route.params

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
            <Image source={{uri:data.image}} style ={styles.CourseImage} />
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
        }}>
            <View style={{flexDirection: 'row'}}>
                <Text style = {styles.title}>{data.name}</Text>
                <View style={{flexDirection: 'column', alignItems: 'center', top:10,left: 160}}>
                    <Text>{data.date}</Text>
                    <Text>{data.Time} - {data.duration}</Text>
                </View>
            </View>
            <View>
                <Text>Instractor</Text>
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity><Image source={personalTrainer.image} style = {styles.trainerImage}/></TouchableOpacity>
                    <View style = {{flexDirection: 'column', marginLeft: 25, marginTop: 10}}>
                        <Text style = {styles.personalTrainerName}>{personalTrainer.name} {personalTrainer.FamilyName}</Text>
                        <Text style = {styles.personalTrainerYears}>{personalTrainer.years} years of experience</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style = {styles.bookBottom}>
                <Text style = {styles.bookButtonText}>Book Class</Text>
            </TouchableOpacity>
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
        width: 90,
        height: 90,
        borderRadius: 50,
      },
      personalTrainerYears: {

      },
      personalTrainerName: {
        marginTop: 25,
        fontSize: 20,
        color: 'white',
        marginBottom: 8,
        fontWeight: 'bold',
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
});

export default PlanningDetailScreen;