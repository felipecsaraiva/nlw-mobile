import React from 'react';
import styles from './styles';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';

function PageHeader() {
    function handelGoBack() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <BorderlessButton onPress={handelGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>
            </View>
        </View>
    );
}

export default PageHeader;