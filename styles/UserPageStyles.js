import { StyleSheet } from 'react-native'

const UserPageSyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#8e44ad'
    },
    header:{
        flex: 1,
        justifyContent:'center'       
    },
    body:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderTopStartRadius:30,
        borderTopEndRadius:30
    },
    headerTag:{
        fontSize:40,
        color:'#fff',
        textAlign:'center',
    },
})

export default UserPageSyles;
