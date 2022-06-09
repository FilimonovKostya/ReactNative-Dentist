import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: {
        id: number,
        name: string,
        isMarried: boolean
    }
    Users: undefined
};

export type HomeScreeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export  type UsersScreeProps = NativeStackScreenProps<RootStackParamList, 'Users'>;
