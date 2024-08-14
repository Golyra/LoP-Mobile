import { createDrawerNavigator } from '@react-navigation/drawer'
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { FancyDrawer } from '../components/FancyDrawer';
import { HistoryScreen } from '../screens/HistoryScreen';
import { DocScreen } from '../screens/DocScreen';
import { ExamScreen } from '../screens/ExamScreen';

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (

        <Drawer.Navigator 
            initialRouteName='Minhas Turmas'
            drawerContent={props => <FancyDrawer {...props} />}
            screenOptions={{ 
                headerStyle: {
                    backgroundColor: '#BECDEB',
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 10,
                    borderRadius: 10,
                },
            }}>
          <Drawer.Screen name='Minhas Turmas' options={{ drawerLabel: 'Minhas Turmas', title: 'Minhas Turmas',
                         drawerIcon: () => (<FontAwesome name='group' size={20}/>)}}
                         component={HomeScreen}/>
        
          <Drawer.Screen name='Provas' options={{ drawerLabel: 'Provas', title: 'Provas',
                         drawerIcon: () => (<FontAwesome5 name='code' size={20}/>)}}
                         component={ExamScreen}/>

          <Drawer.Screen name='Historico' options={{ drawerLabel: 'Histórico', title: 'Histórico',
                         drawerIcon: () => (<MaterialIcons name='history-edu' size={20}/>)}}
                         component={HistoryScreen}/>

          <Drawer.Screen name='Documentos' options={{ drawerLabel: 'Documentos', title: 'Documentos',
                         drawerIcon: () => (<Ionicons name='documents' size={20}/>)}}
                         component={DocScreen}/>

        </Drawer.Navigator>        

    )
}