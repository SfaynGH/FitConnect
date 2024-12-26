import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { faUser, faHome, faCalendarDays, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const PlanningScreen = () => {
  const navigation = useNavigation();
    const courses = [
        { name: 'Hiit', image: require('../assets/images/run.png'), Time: '09:30 am', duration: '30 mins', Space: '3' , state: 'Booked'},
        { name: 'Circuits', image: require('../assets/images/circuit.png'), Time: '09:30 pm', duration: '30 mins', Space:'0' , state: 'Full'},
        { name: 'Yoga', image: require('../assets/images/yoga.png'), Time: '09:30 pm', duration: '30 mins', Space:'3' , state: 'Available'},
        { name: 'Tone', image: require('../assets/images/tone.png'), Time: '06:00 pm', duration: '45 mins', Space: '7', state: 'Available' },
    ];
    const date =[
        {day: 'Tue', date :'25'},
        {day: 'Wed', date :'26'},
        {day: 'Thu', date :'27'},
        {day: 'Fri', date :'28'},
        {day: 'Sat', date :'29'},
        {day: 'Sun', date :'30'},
        {day: 'Mon', date :'01'},
        {day: 'Tue', date :'02'},
        {day: 'Wed', date :'03'},
        {day: 'Thu', date :'04'},
        {day: 'Fri', date :'05'},
        {day: 'Sat', date :'06'},
    ]

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
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 90,
            flexDirection: 'column',
            alignItems:'center',
        }}>
            <View style = {{
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'center',
                flex: 1,
            }}>
                <TouchableOpacity style = {styles.headbottomSelected}>
                  <Text style ={styles.header}>All classes</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.headbottom}>
                  <Text style ={styles.header}>Booked classes</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:2, marginBottom: 10}}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {date.map((date, index) => (
                    <TouchableOpacity key={index} style ={styles.DayContainer }>
                      <View style = {{
                        alignItems: 'center',
                        top: 15,
                      }}>
                        <Text style={{color: '#fff', fontSize: 16}}>{date.day}</Text>
                        <Text style={{color: '#fff', fontSize: 12}}>{date.date}</Text>
                      </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </View>
            <View style={{flex: 10}}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
                <View style = {{alignItems :'center'}}>
                    {courses.map((course, index) => (
                        <View key={index} style ={styles.CourseContainer}>
                            <Image source={course.image} style = {styles.CourseImage} />
                            <View style ={{flex: 1, flexDirection: 'column', left: 5, top: 15}}>
                              <Text style={styles.CourseText}>{course.name}</Text>
                              <Text style={styles.CourseTimeDuration}>{course.Time} - {course.duration}</Text>
                              <TouchableOpacity style = {{alignItems: 'center', backgroundColor: '#B478BD', width: 80, height: 30, borderRadius: 50, left: 10, marginTop: 5 }}
                              onPress={() => navigation.navigate("PlanningDetailScreen")}>
                                  <Text>{course.state}</Text>
                              </TouchableOpacity>
                            </View>
                            <Text style={{top: 80, right: 20}}>{course.Space} Spaces left</Text>
                        </View>
                    ))}
                </View>
                </ScrollView>
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
      headbottomSelected: {
        backgroundColor : '#A68BE2',
        borderRadius: 50,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
      },
      headbottom: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
      },
      header: {
        fontSize: 19,
      },
      DayContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#4C4C6B',
        marginLeft: 5,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        borderTopEndRadius : 25,
        borderTopStartRadius : 25,
        borderWidth: 1,
        borderColor: '#6D6DFF',
        width : 50,
        height : 80, 
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
        marginBottom: 10,
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
      },
      CourseText:{
        marginLeft: 15,
        fontSize: 16,
        color: 'white',
      },
      CourseTimeDuration:{
        marginLeft: 15,
        fontSize: 14,
        color: 'white',
        marginTop: 5,
        color: '#ccc',
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

export default PlanningScreen;