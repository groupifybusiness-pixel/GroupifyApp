import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function AccountScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Account</Text>
      
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.name}>Narayana Reddy</Text>
            <Text style={styles.phone}>+91 98765 43210 · Verified</Text>
            <Text style={styles.address}>📍 Ajanta Heights, Tower B, Flat 402</Text>
          </View>
          <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.editBtnText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Promise')}>
        <Text style={styles.cardButtonText}>The Groupify Promise &gt;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutBtn} onPress={() => navigation.replace('SignIn')}>
        <Text style={styles.signOutText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF9F5' },
  contentContainer: { padding: 20, gap: 16 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#0A2540' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#E2E8F0' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#0A2540', marginBottom: 2 },
  phone: { fontSize: 12, color: '#64748B', marginBottom: 6 },
  address: { fontSize: 12, fontWeight: '500', color: '#0A2540' },
  editBtn: { backgroundColor: '#EBF5EC', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  editBtnText: { color: '#1B6B2F', fontSize: 12, fontWeight: 'bold' },
  cardButton: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#E2E8F0' },
  cardButtonText: { fontSize: 13, fontWeight: 'bold', color: '#0A2540' },
  signOutBtn: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 14, borderWidth: 1, borderColor: '#CBD5E1', alignItems: 'center' },
  signOutText: { fontSize: 13, fontWeight: 'bold', color: '#334155' }
});