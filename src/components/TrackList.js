
import { FlatList,View,Text,Image,Pressable, ScrollView,SafeAreaView } from "react-native";
import styles from "../css/TrackListCss";

const Item =(props)=>(<Pressable onLongPress={()=>props.dItem.deleteItem(props.item.title)} style={styles.card}> 
        <View style={styles.imageBox}>
        <Image source={{uri:props.item.imgSrc}}  resizeMode="contain" style={styles.image} />
        </View>
        <View style={styles.content}>
            <Text numberOfLines={2} style={styles.title}>{props.item.title}</Text>
            <Text style={styles.price}>{props.item.price}</Text>
        </View>
        
    </Pressable>
)

const TrackList =({navigator, ...props})=>{
    console.log(props.item);
    return(
            <>      
            <FlatList 
                data={props.items}
                renderItem={({item})=>{ return (<Item dItem={props} item={item}/>)}}
                ListEmptyComponent={<Text>{"No Data"}</Text>}
            />               
            </>
        
        
    )
}

export default TrackList;