import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/felipecsaraiva.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Felipe Saraiva</Text>
                    <Text style={styles.subject}>Biologia</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Um texto para a bio {'\n'}{'\n'}
                Com quebra na linha, pois aqui eu vou escrever uma descrição maior sobre as minhas capacidades professorísticas.
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 60,00</Text>
                </Text>
                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton,styles.favorited]}>
                        <Image source={heartOutlineIcon} />
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;