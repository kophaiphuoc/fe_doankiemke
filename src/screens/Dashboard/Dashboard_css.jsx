import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Vmenu2:{
        marginTop:10,
        alignItems:'center'
    },
    txtdescription:{
        fontSize:12
    },
    txtquantity:{
        fontWeight:'600',
        fontSize:20
    },
    txttitlemenu:{
        fontSize:15,
        fontWeight:'300'
    },
    submenu:{
        width:98,
        height:90,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        borderRadius:15
    },
    Vmenu:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    imguser:{
        width:'15%',
        alignItems:'center',
        height:60,
        justifyContent:'center'
    },
    txtheader:{
        textAlign:'center',
        width:'85%',
        paddingLeft:'15%',
        fontSize:16,
        fontWeight:'600',
        color:'#595085',
        lineHeight:60,
    },
    Vheader:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        alignContent:'center',
        
    },
    container:{
        width:'100%',
        height:'100%',
        padding:10
    }
})

export default styles