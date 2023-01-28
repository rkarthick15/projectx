import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    textInput:{
      margin:10, 
      backgroundColor:"white", 
      color:"black",
      padding:5,
      borderStyle:"solid",
      borderWidth:2,
      borderColor:"#7c038c",
      

    },
    button:{
      width:100,
      alignItems: 'center',
      backgroundColor: '#7c038c',
      padding: 10,
      alignSelf: 'flex-end',
      marginEnd:11
      
    },
    title:{
      fontWeight:"bold",
      fontSize:17,
      color:"black",
      margin:10
    },
    price:{
      fontWeight:"bold",
      fontSize:25,
      color:"black",
      marginLeft:10
    },
    imageBox:{
      margin:10,
      backgroundColor:"white",
      alignItems:"center",
      borderRadius:15,
  
      padding:5,
      borderColor:"#7c038c",
      borderWidth:3,
      borderStyle:"Solid"
    },
    image:{
      width:300,
      height:200
    },
    crossButton:{
        width:30,
        height:30+1,
        borderWidth:1,
        borderRadius:30/2,
        textAlign:'right',
        backgroundColor:'white',
        borderColor:'red',
        alignSelf:'flex-end'

    },
  
    storeButton:{
      width:155,
      alignItems: 'center',
      backgroundColor:"#7c038c",
      padding: 10,
      flexDirection:"row",
      borderRadius:5,
      margin:5,
      color:"white",
      marginLeft:0,
      
      
    },
    trackerButton:{
      width:155,
      alignItems: 'center',
      backgroundColor:"#7c038c",
      padding: 10,
      flexDirection:"row",
      borderRadius:5,
      margin:5,
      color:"white",
      atalignContent:"center"
      
    },
    storeIcon:{
    }
  });
export default styles;