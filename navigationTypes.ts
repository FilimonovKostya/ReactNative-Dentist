import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined
    Users: undefined
};

export type HomeScreeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export  type UsersScreeProps = NativeStackScreenProps<RootStackParamList, 'Users'>;
