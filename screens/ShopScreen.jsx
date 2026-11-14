import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function ShopScreen() {
  const [memberCount, setMemberCount] = useState(2);
  const [cart, setCart] = useState({ basmati: { qty: 2, price: 970 }, cashews: { qty: 0, price: 850 } });

  const total = (cart.basmati.qty * cart.basmati.price) + (cart.cashews.qty * cart.cashews.price);
  const minGoal = 2000;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Top Header */}
      <View style={styles.headerRow}>
        <View style={styles.brandRow}>
          <View style={styles.miniLogo}><Text style={styles.miniLogoText}>G</Text></View>
          <Text style={styles.brandTitle}>Groupify</Text>
        </View>
        <View style={styles.badge}><Text style={styles.badgeText}>📍 Ajanta Heights</Text></View>
      </View>

      {/* Basket Status Card */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.memberText}>{memberCount} OF 5 MEMBERS</Text>
          <View style={styles.openBadge}><Text style={styles.openBadgeText}>Open</Text></View>
        </View>
        <Text style={styles.totalPrice}>₹{total}.00</Text>
        <Text style={styles.totalSubtitle}>Combined discounted product total</Text>

        <View style={styles.alertBox}>
          <Text style={styles.alertText}>
            {total >= minGoal ? '✓ Group minimum met! Ready to check out.' : `Shop ₹${minGoal - total} more to check out.`}
          </Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => setMemberCount(prev => Math.min(5, prev + 1))}>
          <Text style={styles.primaryButtonText}>🧪 Simulate Neighbour Joining ({memberCount}/5)</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <Text style={styles.sectionTitle}>Shop groceries</Text>
      
      <View style={styles.productCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.productSize}>5 kg pack</Text>
          <Text style={styles.productName}>Basmati Rice</Text>
          <Text style={styles.productPrice}>₹970.00 <Text style={styles.mrp}>MRP ₹1200</Text></Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={() => setCart({...cart, basmati: {...cart.basmati, qty: cart.basmati.qty + 1}})}>
          <Text style={styles.addBtnText}>+ Add ({cart.basmati.qty})</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF9F5' },
  contentContainer: { padding: 20, paddingBottom: 100 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  brandRow: { flexDirection: 'row', alignItems: 'center' },
  miniLogo: { width: 32, height: 32, borderRadius: 10, backgroundColor: '#1B6B2F', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  miniLogoText: { color: '#FFF', fontWeight: 'bold' },
  brandTitle: { fontSize: 20, fontWeight: '900', color: '#0A2540' },
  badge: { backgroundColor: '#EBF5EC', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  badgeText: { color: '#1B6B2F', fontSize: 12, fontWeight: 'bold' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#E2E8F0', marginBottom: 20 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  memberText: { fontSize: 11, fontWeight: '900', color: '#1B6B2F', letterSpacing: 0.5 },
  openBadge: { backgroundColor: '#EBF5EC', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  openBadgeText: { color: '#1B6B2F', fontSize: 11, fontWeight: 'bold' },
  totalPrice: { fontSize: 32, fontWeight: '900', color: '#0A2540' },
  totalSubtitle: { fontSize: 12, color: '#64748B', marginBottom: 16 },
  alertBox: { backgroundColor: '#EBF1F8', padding: 12, borderRadius: 16, marginBottom: 16 },
  alertText: { fontSize: 12, fontWeight: '600', color: '#0A2540' },
  primaryButton: { backgroundColor: '#1B6B2F', borderRadius: 16, paddingVertical: 14, alignItems: 'center' },
  primaryButtonText: { color: '#FFFFFF', fontSize: 13, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: '900', color: '#0A2540', marginBottom: 12 },
  productCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#E2E8F0', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  productSize: { fontSize: 10, fontWeight: 'bold', color: '#64748B', backgroundColor: '#F1F5F9', alignSelf: 'flex-start', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, marginBottom: 4 },
  productName: { fontSize: 15, fontWeight: 'bold', color: '#0A2540', marginBottom: 4 },
  productPrice: { fontSize: 14, fontWeight: '900', color: '#1B6B2F' },
  mrp: { fontSize: 11, color: '#94A3B8', textDecorationLine: 'line-through', fontWeight: 'normal' },
  addBtn: { backgroundColor: '#0A2540', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 14 },
  addBtnText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' }
});