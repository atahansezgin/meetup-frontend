import { StyleSheet } from 'react-native'

const UserPageSyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        flex: 1,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    body:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },
    headerTag:{
        fontSize:40,
    },
})

export default UserPageSyles;
