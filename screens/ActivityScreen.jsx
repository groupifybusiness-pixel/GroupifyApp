import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ActivityScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Group Activity</Text>
      <View style={styles.card}>
        <Text style={styles.activityTitle}>✓ Order #GF-16 Confirmed</Text>
        <Text style={styles.activityDesc}>All members paid. Society order locked in for delivery.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF9F5' },
  contentContainer: { padding: 20 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#0A2540', marginBottom: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#E2E8F0', gap: 6 },
  activityTitle: { fontSize: 13, fontWeight: 'bold', color: '#1B6B2F' },
  activityDesc: { fontSize: 12, color: '#64748B', lineHeight: 18 }
});