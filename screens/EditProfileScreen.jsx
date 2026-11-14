import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function EditProfileScreen({ navigation }) {
  const [name, setName] = useState('Narayana Reddy');
  const [community, setCommunity] = useState('Ajanta Heights');
  const [towerFlat, setTowerFlat] = useState('Tower B, Flat 402');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Gated Community / Apartment</Text>
        <TextInput style={styles.input} value={community} onChangeText={setCommunity} />

        <Text style={styles.label}>Delivery Address (Tower & Flat No)</Text>
        <TextInput style={styles.input} value={towerFlat} onChangeText={setTowerFlat} />

        <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.saveBtnText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF9F5' },
  contentContainer: { padding: 20 },
  navHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E2E8F0', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  backText: { fontSize: 18, fontWeight: 'bold', color: '#0A2540' },
  headerTitle: { fontSize: 18, fontWeight: '900', color: '#0A2540' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#E2E8F0', gap: 14 },
  label: { fontSize: 12, fontWeight: '700', color: '#0A2540' },
  input: { backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14, color: '#0A2540' },
  saveBtn: { backgroundColor: '#0A2540', borderRadius: 16, paddingVertical: 14, alignItems: 'center', marginTop: 10 },
  saveBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' }
});