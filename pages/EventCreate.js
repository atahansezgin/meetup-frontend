import React,{useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CustomButton from '../components/CustomButton'
import Card from '../components/Card'

const EventCreate = () => {

    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[place,setPlace] = useState("");
    const[date,setDate] = useState("");

    const submitHandler = () => {
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
                    placeholder="Date"
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
        backgroundColor:'#8e44ad'
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

