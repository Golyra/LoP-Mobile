import { StyleSheet, View, Image, Text } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


export const FancyDrawer = ( props ) => {
    return(
        <>
            <View style={styles.fancyHeaderShadow}>
                <View style={styles.fancyHeader}/>
            </View>       
            <View style={{flex:1}}>
                <View style={styles.profile}>
                    <Image 
                        source={require('../../assets/Wilson.jpeg')} 
                        style={styles.profilePic}
                    />
                    <View>
                        <Text style={styles.profileName}>
                            Wilson H. Higgsbury
                        </Text>    
                        <Text style={{marginLeft: 20}}>
                            20240077085    
                        </Text>                    
                    </View>
                </View>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                </DrawerContentScrollView>                
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },

    fancyHeader: {
        height: 60,
        backgroundColor: '#989797',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'static',
        alignItems: 'center',
        paddingLeft: 18,
        flexDirection: 'row'
    },

    fancyHeaderShadow: {
        height: 70,
        backgroundColor: '#BECDEB',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'static',
        marginBottom: 0
    },

    fancyHeaderText: {
        marginLeft: 28,
        color: 'white',
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        fontSize: 24,
    },

    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 20
    },
    profile: {
        flexDirection: 'row'
    },
    
    profileName: {
        marginLeft: 20,
        marginTop: 40,
        fontWeight: 'bold'
    }

})