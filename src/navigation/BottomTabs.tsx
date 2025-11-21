import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FiltersScreen from "../screens/FiltersScreen";
import HomeScreen from "../screens/HomeScreen";
import LikedScreen from "../screens/LikedScreen";
import MatchesScreen from "../screens/MatchesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Filters" component={FiltersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
