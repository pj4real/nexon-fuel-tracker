import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fuel Tracker - Home</Text>
      <Button title="Add Fuel Entry" onPress={() => router.push('/add-entry')} />
    </View>
  );
}