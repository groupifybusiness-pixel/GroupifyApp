import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function PromiseScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>The Groupify Promise</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Customer first. No compromise on quality.</Text>
        <Text style={styles.cardBody}>We handpick quality groceries and pool society group orders to deliver wholesale savings directly to your gate.</Text>
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
  card: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 24, borderWidth: 1, borderColor: '#E2E8F0', gap: 12 },
  cardTitle: { fontSize: 18, fontWeight: '900', color: '#0A2540' },
  cardBody: { fontSize: 13, color: '#475569', lineHeight: 20 }
});