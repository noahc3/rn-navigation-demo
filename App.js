import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

function AScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>A</Text>
            <Button title="Go to B" onPress={() => navigation.navigate('B')}></Button>
        </View>
    );
}

function BScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>B</Text>
            <Button title="Go to C" onPress={() => navigation.navigate('C')}></Button>
            <Button title="Go back" onPress={() => navigation.goBack()}></Button>
        </View>
    );
}

function CScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>C</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}></Button>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="A">
            <Stack.Screen name="A" component={AScreen} />
            <Stack.Screen name="B" component={BScreen} />
            <Stack.Screen name="C" component={CScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
