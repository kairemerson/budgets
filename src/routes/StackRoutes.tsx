import CreateBudget from "@/app/CreateBudget"
import Details from "@/app/Details"
import { Home } from "@/app/Home"
import { theme } from "@/styles/theme"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

export type StackRoutesList = {
    home: undefined
    create: undefined
    details: undefined
}


const Stack = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: theme.colors.white
                }
            }}>
            <Stack.Screen  name="home" component={Home}/>
            <Stack.Screen  name="create" component={CreateBudget}/>
            <Stack.Screen  name="details" component={Details}/>
        </Stack.Navigator>
    )
}