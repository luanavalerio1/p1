import React from "react";
import {BottomTabNavigationProp, createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { ScreenCamera, ScreenOpcoes } from "../screens"
import { colors } from "../styles/colors";
import { FontAwesome } from '@expo/vector-icons'

export interface IPhoto{
    uri: string
}


type TabParamList = {
// Para alterar o nome das páginas
    Opcoes: undefined | IPhoto
    Camera: undefined
}
type TabScreenNav = BottomTabNavigationProp<TabParamList, 'Opcoes' >
export type TabTypes = {
    navigation: TabScreenNav
}

export function TabNavigation(){
    const Tab = createBottomTabNavigator<TabParamList>()
    return (
        <Tab.Navigator 
            screenOptions={{
                //Para alterar as características do tab
                //Fundo quando o botão estiver clicado
                tabBarActiveBackgroundColor: colors.primaryLight,
                //Cor do ícone e do label na guia ativa.
                tabBarActiveTintColor: colors.white,
                headerStyle: {
                    backgroundColor: colors.primaryLight
                },
                headerTintColor: colors.white,
                // Fundo quando o botão não estiver clicado
                tabBarInactiveBackgroundColor: colors.primary
            }}
        >
            <Tab.Screen name="Opcoes" component={ScreenOpcoes} 
                options={{
                    tabBarIcon:() => (
                        // Para mudar o ícone do botão
                        <FontAwesome name="file-text" size={24} color={colors.white} />
                    ),
                }}
            />
            <Tab.Screen name="Camera" component={ScreenCamera}
                options={{
                    tabBarIcon:() => (
                        // Para mudar o ícone do botão
                        <FontAwesome name="camera" size={24} color={colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}