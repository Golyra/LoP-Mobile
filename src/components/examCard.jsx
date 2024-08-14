import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export const ExamCard = ( {title, expiration} ) => {
    return(
        <View style={styles.examCard}>
            <Text style={styles.examCardHeaderText}>
                {title}
            </Text>
            <Text style={styles.examCardSubheaderText}>
                entrega até {expiration}
            </Text>
            <View style={styles.examCardButtons}>
                <TouchableOpacity style={styles.blueButton}>
                    <Text style={styles.buttonText}>Correções</Text>
                    <FontAwesome5 name='file-invoice' size={16} color='white' marginLeft={8} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.greenButton}>
                    <Text style={styles.buttonText}>Acessar</Text>
                    <MaterialCommunityIcons name='telescope' size={20} color='white' marginLeft={8} />
                </TouchableOpacity>
            </View>
        </View>        
    )
}


const styles = StyleSheet.create({

    examCard: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 3,
        width: '95%',
        height: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 12,
        marginTop: 10,
        marginLeft: 10, 
    },

    examCardButtons: {
        flexDirection: 'row',
        marginTop: 10,
    },

    examCardHeaderText: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'sans-serif-thin',
        color: 'rgb(100, 100, 100)',
        marginTop: 2,
        marginBottom: 2, 
        marginLeft: 4,
        flexDirection: 'column'
    },

    examCardSubheaderText: {
        fontSize: 11,
        color: 'rgb(120, 120, 120)',
        marginLeft: 5
    },

    blueButton: {
        backgroundColor: 'rgb(80, 130, 179)',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },

    greenButton: {
        backgroundColor: 'green',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})