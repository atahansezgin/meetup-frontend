import React from 'react';
import { SafeAreaView,RefreshControl,FlatList,StyleSheet } from 'react-native';
import Event from './Event';

const EventList = ({onRefresh,data,}) => {
    return(
        <SafeAreaView>
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={false} onRefresh={onRefresh}/>
                }
                contentContainerStyle={styles.container}
                data={data}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => (<Event
                    title={item.title}
                    date={item.date}
                    place={item.place}
                    description={item.description}
                />)}
            />
        </SafeAreaView>
    )
}

export default EventList;

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#2980b9'
    }
})