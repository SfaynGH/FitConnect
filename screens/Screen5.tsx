import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { faUser, faHome, faCalendarDays, faHeartPulse, faX} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CourseDetailScreen = () => {
  const navigation = useNavigation();
    const personalTrainers = [
        { name: 'Leslie', image: require('../assets/images/leslie.jpg') },
        { name: 'Kathryn', image: require('../assets/images/kathryn.jpg') },
        { name: 'Dianne', image: require('../assets/images/Dianne.jpg') },
        { name: 'Floyd', image: require('../assets/images/floyd.jpg') },
        { name: 'Emile', image: require('../assets/images/emile.jpg') },
    ];

  return (
    <View style = {{
        flex: 1,
        flexDirection: 'column',
    }}>
        <View style = {{
            flex: 4,
            backgroundColor: '#fff'
        }}>
            <Image source={require('../assets/images/yoga.png')} style ={styles.CourseImage} />
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
            }} onPress={() => navigation.navigate("CourseScreen")}>
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
            <Text style = {styles.title}>Yoga</Text>
            <Text style = {styles.description}>Build strength in the flow with this class that will deepen your practice. Each sequence will warm you up for the day by relieving tension in your muscles, welcoming in energy, and opening up your entire body</Text>
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
                        <TouchableOpacity>
                            <Image source={trainer.image} style={styles.trainerImage} />
                        </TouchableOpacity>
                        <Text style={styles.trainerName}>{trainer.name}</Text>
                        </View>
                    ))}
                    </ScrollView>
                </View>
        </View>
        <View style = {{
            flex: 1.5,
            backgroundColor: '#4C4C6B',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 685,
            zIndex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
        }}>
            <View style = {{
                flexDirection: 'row',
                justifyContent:'space-around',
                alignItems: 'center',
                width: '100%',
                paddingTop: 25,
            }}>
                <TouchableOpacity style ={{alignItems: 'center'}} onPress={() => navigation.navigate("HomeScreen")}>
                    <FontAwesomeIcon icon={faHome} style={{color: '#ccc'}} size={24}></FontAwesomeIcon>
                    <Text style={styles.footext}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{alignItems: 'center'}}>
                    <FontAwesomeIcon icon={faHeartPulse} style={{color: '#ccc'}} size={24}></FontAwesomeIcon>
                    <Text style={styles.footextSelected}>Classes</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{alignItems: 'center'}} onPress={() => navigation.navigate("PlanningScreen")}>
                    <FontAwesomeIcon icon={faCalendarDays} style={{color: '#ccc'}} size={24}></FontAwesomeIcon>
                    <Text style={styles.footext}>Planing</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{alignItems: 'center'}} onPress={() => navigation.navigate("ProfileScreen")}>
                    <FontAwesomeIcon icon={faUser} style={{color: '#ccc'}} size={24}></FontAwesomeIcon>
                    <Text style={styles.footext}>Account</Text>
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
      seeAllText: {
        fontSize: 16,
        color: 'white',
      },
});

export default CourseDetailScreen;