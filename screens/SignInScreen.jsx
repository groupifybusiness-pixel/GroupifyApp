import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaStorage } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoText}>G</Text>
        </View>
        <Text style={styles.title}>Groupify</Text>
        <Text style={styles.subtitle}>Wholesale groceries for your community.</Text>

        <Text style={styles.label}>Mobile number</Text>
        <View style={styles.phoneInputRow}>
          <View style={styles.countryCode}>
            <Text style={styles.countryCodeText}>+91 🇮🇳</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="98765 43210"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.buttonText}>Continue with OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF9F5', justifyContent: 'center', padding: 24 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 28, padding: 24, borderWidth: 1, borderColor: '#E2E8F0', shadowOpacity: 0.05, shadowRadius: 10 },
  logoBadge: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#1B6B2F', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 12 },
  logoText: { color: '#FFFFFF', fontSize: 22, fontWeight: '900' },
  title: { fontSize: 24, fontWeight: '900', color: '#0A2540', textAlign: 'center' },
  subtitle: { fontSize: 13, color: '#64748B', textAlign: 'center', marginBottom: 24 },
  label: { fontSize: 12, fontWeight: '700', color: '#0A2540', marginBottom: 8 },
  phoneInputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  countryCode: { backgroundColor: '#F1F5F9', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 16, paddingVertical: 14, paddingHorizontal: 12, marginRight: 8 },
  countryCodeText: { fontSize: 13, fontWeight: 'bold', color: '#0A2540' },
  input: { flex: 1, backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 14, fontSize: 14, color: '#0A2540' },
  button: { backgroundColor: '#0A2540', borderRadius: 16, paddingVertical: 16, alignItems: 'center', shadowOpacity: 0.1, shadowRadius: 4 },
  buttonText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' }
});