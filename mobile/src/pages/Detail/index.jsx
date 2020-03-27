import React from "react"
import { View, Text, TouchableOpacity, Image, Linking } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import * as MailComposer from "expo-mail-composer"
import styles from "./styles"

import logoImg from "../../assets/logo.png"

const Detail = () => {
  const navigation = useNavigation()
  const message = `Olá ONGName, estou entrando em contato pois gostaria de ajudar no caso "CaseName1" com o valor de R$120`

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: Caso name 1",
      recipients: ["hansalmeida@hotmail.com"],
      body: message
    })
  }
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5571993312557&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>ONG name 1</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Caso name 1</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-Mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Detail
