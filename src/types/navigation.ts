import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  EditProfile: undefined;
  // 다른 스크린들도 여기에 추가
};

export type EditProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'EditProfile'>;