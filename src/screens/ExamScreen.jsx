import { StyleSheet, View, FlatList } from "react-native"
import { ExamCard } from "../components/examCard"

export const ExamScreen = ( {navigation} ) => {

    const provas = [
        {
            id: 1,
            title: 'Prova 1 Turma 01 - 2024.1',
            expires: '20/04/2024'
        },
        {
            id: 2,
            title: 'Prova 2 Turma 01 - 2024.1',
            expires: '20/05/2024'
        },
        {
            id: 3,
            title: 'Prova Final Turma 01 - 2024.1',
            expires: '20/06/2024'
        },
        {
            id: 4,
            title: 'Prova 1 Turma 02 - 2024.1',
            expires: '20/04/2024'
        },
        {
            id: 5,
            title: 'Prova 2 Turma 02 - 2024.1',
            expires: '20/05/2024'
        },
        {
            id: 6,
            title: 'Prova Final Turma 02 - 2024.1',
            expires: '20/06/2024'
        }
    ]

    function renderExam( { item } ) {
        return(
            <ExamCard title={item.title} expiration={item.expires} />
        )
    }


    return(

        <View style={styles.root}>
            <FlatList 
                data={provas}
                renderItem={renderExam}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
    },
})