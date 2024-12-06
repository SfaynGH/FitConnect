import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { faUser, faHome, faCalendarDays, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const CourseScreen = () => {
  const navigation = useNavigation();
    const courses = [
        { name: 'Hiit', image: require('../assets/images/run.png') },
        { name: 'Circuits', image: require('../assets/images/circuit.png') },
        { name: 'Yoga', image: require('../assets/images/yoga.png') },
        { name: 'Tone', image: require('../assets/images/tone.png') },
    ];

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
        }}>
            <ScrollView>
              <View style = {{alignItems :'center'}}>
                {courses.map((course, index) => (
                    <View key={index} style ={styles.CourseContainer}>
                        <Image source={course.image} style = {styles.CourseImage} />
                        <Text style={styles.CourseText}>{course.name}</Text>
                        <TouchableOpacity style = {{flex:1, alignItems: 'center', top: 40, left: -20}} onPress={() => navigation.navigate("CourseDetailScreen")}>
                            <Text style = {{
                              backgroundColor: '#B478BD',
                              paddingTop: 5,
                              paddingBottom: 5,
                              paddingLeft: 10,
                              paddingRight: 10,
                              borderRadius: 20,
                            }}>See more</Text>
                        </TouchableOpacity>
                    </View>
                ))}
              </View>
            </ScrollView>
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
      CourseContainer:{
        width : 330,
        height : 115,
        marginBottom: 20,
        backgroundColor: '#313150',
        flexDirection: 'row',
        borderRadius: 30,
      },
      CourseImage:{
        width : 80,
        height: 80,
        borderRadius: 10,
        marginLeft: 20,
        top : 15,
        borderColor: 'white',
        borderWidth: 3,
        flex : 1,
      },
      CourseText:{
        marginLeft: 15,
        top : 40,
        fontSize: 16,
        color: 'white',
        flex: 1,
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

export default CourseScreen;