import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as solanaWeb3 from '@solana/web3.js';

export default function App() {
  const [publicKey, setPublicKey] = useState(null);

  useEffect(() => {
    generateWallet();
  }, []);

  async function generateWallet() {
    const keypair = solanaWeb3.Keypair.generate();
    await SecureStore.setItemAsync('privateKey', JSON.stringify(Array.from(keypair.secretKey)));
    setPublicKey(keypair.publicKey.toBase58());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YING YANG Wallet</Text>
      {publicKey ? (
        <Text style={styles.address}>Your Wallet: {publicKey}</Text>
      ) : (
        <Text>Generating wallet...</Text>
      )}
      <Button title="Buy GOD Coin" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  title: { color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  address: { color: 'white', fontSize: 16, padding: 10, textAlign: 'center' }
});
