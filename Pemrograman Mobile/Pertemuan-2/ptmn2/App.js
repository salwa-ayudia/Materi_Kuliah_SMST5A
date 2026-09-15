import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const cvData = {
  namaLengkap: 'Salwa Ayudia Putri',
  nim: '2488010042',
  asalSekolah: 'SMAN 1 Haurgeulis',
  citaCita: 'Data Scientist/Machine Learning Engineer',
  rencanaMencapaiCitaCita:
    'Saat ini saya sedang proses mencapai cita-cita saya dengan mulai dari belajar mendalami python, machine learning, data wrangling, menganalisis data, sampai memvisualisasikan data. Selain itu, saat ini saya juga mengikuti bootcamp yaitu ASAH supported by GoTo yang diselenggarakan oleh dicoding dengan mengambil learning path Data Science. Saya berharap bisa lulus program bootcamp ini dengan nilai terbaik dan bisa menjadi lulusan terbaik, serta bisa semakin dekat lagi untuk mencapai cita-cita saya.'
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>

          <View style={styles.yellowCircle} />
          <View style={styles.pinkCircle} />

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>SA</Text>
          </View>

          <Text style={styles.hello}>HELLO!</Text>

          <Text style={styles.name}>
            {cvData.namaLengkap}
          </Text>

          <Text style={styles.subTitle}>
            My Personal Profile ♡
          </Text>

        </View>

        {/* CONTENT */}
        <View style={styles.content}>

          {/* DATA DIRI */}
          <Text style={styles.sectionTitle}>
            Data Diri <Text style={styles.decor}>✦</Text>
          </Text>

          <View style={styles.infoCard}>

            <Info
              icon="👤"
              title="Nama Lengkap"
              value={cvData.namaLengkap}
            />

            <Info
              icon="🎓"
              title="NIM"
              value={cvData.nim}
            />

            <Info
              icon="🏫"
              title="Asal Sekolah"
              value={cvData.asalSekolah}
            />

          </View>

          {/* CITA-CITA */}
          <Text style={styles.sectionTitle}>
            Cita-cita <Text style={styles.decor}>♡</Text>
          </Text>

          <View style={styles.dreamCard}>

            <Text style={styles.dreamEmoji}>🌼</Text>

            <Text style={styles.dreamLabel}>
              MY DREAM
            </Text>

            <Text style={styles.dream}>
              {cvData.citaCita}
            </Text>

          </View>

          {/* RENCANA */}
          <Text style={styles.sectionTitle}>
            Rencana <Text style={styles.decor}>✿</Text>
          </Text>

          <View style={styles.planCard}>

            <View style={styles.planNumber}>
              <Text style={styles.planNumberText}>01</Text>
            </View>

            <View style={styles.planContent}>
              <Text style={styles.planTitle}>
                Cara Mencapai Cita-cita
              </Text>

              <Text style={styles.planText}>
                {cvData.rencanaMencapaiCitaCita}
              </Text>
            </View>

          </View>

          <Text style={styles.footer}>
            Keep learning & keep growing ♡
          </Text>

        </View>

      </ScrollView>
    </View>
  );
}


/* COMPONENT */

function Info({ icon, title, value }) {
  return (
    <View style={styles.infoItem}>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>

      <View style={styles.infoText}>
        <Text style={styles.infoTitle}>
          {title}
        </Text>

        <Text style={styles.infoValue}>
          {value}
        </Text>
      </View>

    </View>
  );
}


/* STYLE */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF9F5',
  },

  /* HEADER */

  header: {
    backgroundColor: '#FFD6E3',
    alignItems: 'center',

    paddingTop: 60,
    paddingBottom: 40,

    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,

    overflow: 'hidden',
  },

  yellowCircle: {
    position: 'absolute',

    width: 130,
    height: 130,
    borderRadius: 65,

    backgroundColor: '#FFE89A',

    top: -60,
    left: -40,
  },

  pinkCircle: {
    position: 'absolute',

    width: 100,
    height: 100,
    borderRadius: 50,

    backgroundColor: '#FFC1D4',

    bottom: -40,
    right: -25,
  },

  profileCircle: {
    width: 95,
    height: 95,
    borderRadius: 50,

    backgroundColor: '#FFF4C7',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 5,
    borderColor: '#FFFFFF',

    marginBottom: 15,

    elevation: 4,
  },

  profileText: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#D58B9F',
  },

  hello: {
    fontSize: 12,
    fontWeight: 'bold',

    letterSpacing: 3,

    color: '#B66F83',
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',

    color: '#5F4A50',

    marginTop: 5,

    textAlign: 'center',
  },

  subTitle: {
    fontSize: 13,

    color: '#A87583',

    marginTop: 5,
  },

  /* CONTENT */

  content: {
    padding: 22,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',

    color: '#59484E',

    marginTop: 10,
    marginBottom: 13,
  },

  decor: {
    color: '#E8B83F',
  },

  /* DATA DIRI */

  infoCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 22,

    padding: 17,

    borderWidth: 1,
    borderColor: '#F4E2D9',

    elevation: 3,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 7,
  },

  iconContainer: {
    width: 47,
    height: 47,

    borderRadius: 15,

    backgroundColor: '#FFF0B7',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 13,
  },

  icon: {
    fontSize: 20,
  },

  infoText: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 11,

    color: '#B19EA3',

    marginBottom: 3,
  },

  infoValue: {
    fontSize: 15,

    fontWeight: '600',

    color: '#5F4A50',
  },

  /* CITA-CITA */

  dreamCard: {
    backgroundColor: '#FFF0B5',

    borderRadius: 23,

    padding: 25,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#F1D98B',

    elevation: 3,
  },

  dreamEmoji: {
    fontSize: 32,

    marginBottom: 5,
  },

  dreamLabel: {
    fontSize: 11,

    letterSpacing: 3,

    fontWeight: 'bold',

    color: '#AD8A3E',
  },

  dream: {
    fontSize: 27,

    fontWeight: 'bold',

    color: '#685633',

    marginTop: 7,

    textAlign: 'center',
  },

  /* RENCANA */

  planCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 22,

    padding: 18,

    flexDirection: 'row',

    borderWidth: 1,
    borderColor: '#F4E2D9',

    elevation: 3,
  },

  planNumber: {
    width: 43,
    height: 43,

    borderRadius: 22,

    backgroundColor: '#F5B8C9',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 13,
  },

  planNumberText: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: 'bold',
  },

  planContent: {
    flex: 1,
  },

  planTitle: {
    fontSize: 15,

    fontWeight: 'bold',

    color: '#5F4A50',

    marginBottom: 6,
  },

  planText: {
    fontSize: 13,

    lineHeight: 20,

    color: '#87777C',
  },

  /* FOOTER */

  footer: {
    textAlign: 'center',

    color: '#C79A6B',

    fontSize: 13,

    fontWeight: '600',

    marginTop: 28,
  },

});