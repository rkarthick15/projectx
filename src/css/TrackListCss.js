import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#decce1',
        flexDirection:"row",
        borderRadius:10,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
        marginBottom:0,
        marginLeft:7,
        marginRight:7,
        marginEnd:5,
        marginTop:4
    },
    image:{
        width:90,
        height:80
    },
    imageBox:{
        margin:5,
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:15,
        padding:5
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        color:"black",
    },
    content:{
        marginTop:5,
        padding:2,
        marginRight:0,
        width:232,
        height:80
    },
    price:{
        position:"absolute",
        bottom:0,
        color:"black"
    }
  });
export default styles;