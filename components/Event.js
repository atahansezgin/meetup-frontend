import React , { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Eventt = ({title,date,description,place}) => {
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
                        {date}
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

export default Eventt;

const styles = StyleSheet.create({
    event:{
        borderWidth:2,
        borderRadius:10,
        width: '95%',
        margin:20
    },
    eventHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10
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
