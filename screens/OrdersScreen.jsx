import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>My Orders</Text>
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.orderId}>Order #GF-16</Text>
          <View style={styles.badge}><Text style={styles.badgeText}>✓ Confirmed</Text></View>
        </View>
        <Text style={styles.dateText}>Placed Today, 13 Nov</Text>
        <View style={styles.detailsBox}>
          <Text style={styles.itemsText}>Items: Basmati Rice, Cashews</Text>
          <Text style={styles.deliveryText}>🚚 Delivery: Tomorrow, 14 Nov • 3:00 – 4:00 PM</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF9F5' },
  contentContainer: { padding: 20 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#0A2540', marginBottom: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#E2E8F0', marginBottom: 12 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  orderId: { fontSize: 14, fontWeight: 'bold', color: '#0A2540' },
  badge: { backgroundColor: '#EBF5EC', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  badgeText: { color: '#1B6B2F', fontSize: 11, fontWeight: 'bold' },
  dateText: { fontSize: 11, color: '#64748B', marginBottom: 12 },
  detailsBox: { backgroundColor: '#F8FAFC', padding: 12, borderRadius: 12, gap: 4 },
  itemsText: { fontSize: 12, fontWeight: '600', color: '#0A2540' },
  deliveryText: { fontSize: 12, color: '#64748B' }
});