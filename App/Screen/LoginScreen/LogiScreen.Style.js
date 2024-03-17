import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    login:{
        display:"flex",
        height:"90%",
        alignItems:"center",
        justifyContent:"center",
        gap:30,
        marginTop:30
    },
    logo:{
        fontSize:40,
        fontWeight:"800"
    },
    img:{
        width:"100%",
        height:200,
        objectFit:"cover"
    },
    station:{
        color:"#4cbb17"
    },
    content:{
        display:"flex",
        alignItems:'center',
        padding:10,
        gap:10,
        marginTop:20
    },
    title:{
        fontSize:24,
        fontWeight:"700",
        textAlign:"center"
    },
    des:{
        fontSize:18,
        color:"#333333",
        textAlign:"center"
    },
    loginBtn:{
        width:"80%",
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:"#4cbb17",
        alignItems:"center",
        borderRadius:30
    },
    loginBtnText:{
        color:"#fff",
        fontSize:20,
        fontWeight:"600"
    }
})

export default styles;