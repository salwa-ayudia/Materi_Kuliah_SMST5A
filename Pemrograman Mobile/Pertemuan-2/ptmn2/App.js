import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cv}>
        
        <Text style={styles.nama}>Salwa Ayudia Putri</Text>
        <Text style={styles.jurusan}>Mahasiswa Informatika</Text>

        <View style={styles.garis} />

        <Text style={styles.judul}>DATA DIRI</Text>

        <Text style={styles.info}>
          NIM                  : 2488010042
        </Text>

        <Text style={styles.info}>
          Asal Sekolah     : SMAN 1 Haurgeulis
        </Text>

        <Text style={styles.info}>
          Cita-cita            : Data Scientist
        </Text>

        <View style={styles.garis} />

        <Text style={styles.judul}>RENCANA MENCAPAI CITA-CITA</Text>

        <Text style={styles.deskripsi}>
          Saat ini saya sedang berusaha mencapai cita-cita dengan
          belajar mendalami Python, Machine Learning, data wrangling,
          analisis data, dan visualisasi data.
        </Text>

        <Text style={styles.deskripsi}>
          Selain itu, saya juga mengikuti program ASAH supported by
          GoTo yang diselenggarakan oleh Dicoding dengan mengambil
          learning path Data Science. Saya berharap dapat
          menyelesaikan program ini dengan hasil terbaik dan menjadi
          salah satu lulusan terbaik.
        </Text>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  cv: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
  },

  nama: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  jurusan: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
  },

  garis: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },

  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  info: {
    fontSize: 15,
    marginBottom: 8,
  },

  deskripsi: {
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'justify',
    marginBottom: 12,
  },
});