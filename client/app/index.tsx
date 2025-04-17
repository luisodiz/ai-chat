import { View, Text } from 'react-native';
import { CustomButton } from '../src/shared/ui/CustomButton';
import { CustomText } from '../src/components/ui/CustomText';

export default function HomeScreen() {
  return (
    <View>
      <CustomText />
      <CustomButton />
    </View>
  );
}
