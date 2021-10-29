import React , { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

const Event = ({title,date,description,place}) => {
    return(
        <View style={styles.event}>
            <View style={styles.eventHeader}>
                <View>
                    <Text style={styles.eventHeaderTag}>
                        {title}
                    </Text>
                </View>
                <View>
                    <Text>
                        {moment(date).format('d MMM Y hh:mm')}
                    </Text>
                </View>
            </View>            
            <View style={styles.eventBody}>
                <Text>
                    {description}
                </Text>
                <View style={styles.eventPlace}>
                    <Text>
                        {place}
                    </Text>
                </View>
            </View>
            
        </View>
    );
}

export default Event;

const styles = StyleSheet.create({
    event:{
        borderRadius:10,
        width: '90%',
        margin:20,
        backgroundColor:'#fff'
    },
    eventHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
    },
    eventHeaderTag:{
        fontSize:30
    },
    eventBody:{
        padding: 10
    },
    eventPlace:{
        padding: 10,
        alignSelf:'flex-end'
    }
})
