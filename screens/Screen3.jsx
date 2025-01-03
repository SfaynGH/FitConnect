import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { faUser, faHome, faCalendarDays, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import firestore, { collection } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const HomeScreen = () => {
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    
    const userId = auth().currentUser.uid;

    firestore()
      .collection('Users')
      .doc(userId)
      .get()
      .then((doc) => {
        setName(doc.data().name); 
        setImage(doc.data().image);
      })
      .catch((error) => {
        console.error('Error fetching user name:', error);
      });
  }, []); 

  const [personalTrainers, setTrainer] = useState([]);
  console.log(personalTrainers)
  
  useEffect(() => {
    
    const subscriber = firestore()
    .collection('coaches')
    .get()
    .then(querySnapshot => {
      const trainersData = [];
      querySnapshot.forEach(doc => {
        trainersData.push(doc.data());
      });
      setTrainer(trainersData)
    });

    return ()=> subscriber
  
  }, []); 
 
  
  /* coaches.forEach(doc => {
    trainersData.push(doc.data());
    console.log('this data:',doc.data())
  }); */
  
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
        }}>
            <View style = {{flexDirection :'row',}}>
                <Image source={{uri : image}} style = {{width: 50, height: 50, borderRadius: 50, marginBottom: 10}}/>
                <Text style = {{
                    color: '#FFFFFF',
                    fontSize: 20,
                    marginLeft: 10,
                    top: 10,
                    fontFamily: 'Poppins-Medium',
                }}>Hello {name}</Text>
            </View>
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Upcoming classes</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                    source={require('../assets/images/run.png')}
                    style={styles.image}
                    />
                    <View style={styles.overlay} />
                    <TouchableOpacity style={styles.viewClassesButton} onPress={() => navigation.navigate("CourseScreen")}>
                        <Text style={styles.viewClassesText}>View classes</Text>
                    </TouchableOpacity>
                    <Text style={styles.classTimeText}>10:00 AM - 12:00 PM</Text>
                </View>
                <View>
                    <View style={styles.personalTrainersHeader}>
                    <Text style={styles.personalTrainersTitle}>Personal trainers</Text>
                    <Text style={styles.seeAllText}>See all</Text>
                    </View>
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.personalTrainersContent}
                    >
                    {personalTrainers.map((trainer, index) => (
                        <View key={index} style={styles.trainerCard}>
                        <TouchableOpacity onPress={() => navigation.navigate("CoachDetail",{data :trainer})}>
                            <Image  source={{ uri: trainer.image }}  style={styles.trainerImage} />
                        </TouchableOpacity>
                        <Text style={styles.trainerName}>{trainer.name}</Text>
                        </View>
                    ))}
                    </ScrollView>
                </View>
            </View>
            </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default HomeScreen;