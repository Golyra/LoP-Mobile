import { StyleSheet, View, Text, TouchableHighlight } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

const Docs = [
    {
        id: 1,
        name: 'Histórico escolar'
    },
    {
        id: 2,
        name: 'Comprovante de vínculo'
    }
]

export const DocScreen = ( {navigation} ) => {
    return(

        <View style={styles.background}>
            {Docs.map( (document) => (
                <View key={document.id} style={styles.docsCard}>
                    <TouchableHighlight>
                        <FontAwesome5 name='download' color='#989797' size={26} />
                    </TouchableHighlight>
                    <Text style={styles.docsCardHeader}>
                        {document.name}
                    </Text>
                </View>                
            ))}
        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    docsCard: {
        backgroundColor: 'white',
        borderRadius: 3,
        width: '90%',
        height: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 12,
        margin: 4,
        flexDirection: 'row', 
    },

    docsCardHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'sans-serif-thin',
        color: 'rgb(100, 100, 100)',
        marginTop: 2,
        marginBottom: 2, 
        marginLeft: 16,
    },
})