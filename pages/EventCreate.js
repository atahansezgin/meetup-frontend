import React,{useState} from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import CustomButton from '../components/CustomButton'
import Card from '../components/Card'
import { postEvent } from '../services/EventServices'
import { UserContext } from '../components/Context'

const EventCreate = () => {
    const user = React.useContext(UserContext);

    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[place,setPlace] = useState("");
    const[date,setDate] = useState("");

    const post = () => {
        const event = {
            title: title,
            description: description,
            place: place,
            date: date,
            deleted: false,
        }
        postEvent(event,user.id);
        Alert.alert("Event Posted");
    }

    const submitHandler = () => {
        post();
        setTitle('');
        setDescription('');
        setPlace('');
        setDate('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTag}>
                    Event Create
                </Text>
            </View>
            <View style={styles.body}>
                <Card
                    label="Title"
                    placeholder="Title"
                    onChangeText={(value)=>setTitle(value)}
                    value={title}
                />
                <Card
                    label="Place"
                    placeholder="Place"
                    onChangeText={(value)=>setPlace(value)}
                    value={place}
                />
                <Card
                    label="Description"
                    placeholder="Description"
                    onChangeText={(value)=>setDescription(value)}
                    value={description}
                />
                <Card
                    label="Date"
                    placeholder="2020-01-01T20:00"
                    onChangeText={(value)=>setDate(value)}
                    value={date}
                />
                <CustomButton
                    title="Create"
                    onPress={submitHandler}
                />
            </View>
        </View>
    )
}

export default EventCreate

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#2980b9'
    },
    header:{
        flex:1,
        justifyContent:'center',
    },
    headerTag:{
        fontSize:40,
        textAlign:'center',
        color:'#fff'
    },
    body:{
        flex: 3,
        backgroundColor:'#fff',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        justifyContent:'center'
    },
})

