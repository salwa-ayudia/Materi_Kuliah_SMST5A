// Import Library
import React, { useState, useEffect, useRef } from 'react';

// Import Component
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  Animated,
  Linking,
} from 'react-native';

const PROFILE = {
  name: 'Salwa Ayudia Putri',
  title: 'Data Scientist',
  email: 'salwaayudiaputri2121@gmail.com',
  phone: '+62 813-2421-2132',
  location: 'Cirebon, Jawa Barat',
  bio: 'Mahasiswa Informatika Semester 5 | Data Enthusiast',
  avatarOffline: require('./assets/fotoProfile.jpeg'),
};

const SKILL = [
  {
    id: '1',
    name: 'Python',
    level: 85,
    color: '#EFA7A2',
  },
  {
    id: '2',
    name: 'SQL',
    level: 80,
    color: '#BFD9A8',
  },
  {
    id: '3',
    name: 'UI/UX Design',
    level: 90,
    color: '#D98F9A',
  },
  {
    id: '4',
    name: 'PHP',
    level: 80,
    color: '#86A86B',
  },
  {
    id: '5',
    name: 'Git & GitHub',
    level: 75,
    color: '#F6B0BB',
  },
];

const SECTIONS = [
  {
    title: 'Pengalaman Organisasi',
    data: [
      {
        id: 'e1',
        role: 'Divisi Acara Informatics Fair Vol.2',
        company: 'Himpunan Mahasiswa Informatika',
        period: 'Agustus - Oktober 2026',
        desc: 'Mengatur jalannya acara dan mencatat waktu real-time.',
      },
    ],
  },

  {
    title: 'Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024 - 2027',
        desc: 'IPK 3.90 / 4.00',
      },
    ],
  },
];

const SOCIAL = [
  {
    id: 's1',
    label: 'Github',
    icon: '👨‍💻',
    url: 'https://github.com/salwa-ayudia',
  },
  {
    id: 's2',
    label: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/salwaayudiaputri/',
  },
];

const SkillCard = ({ item }) => (
  <View style={styles.skillCard}>
    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.skillPercent}>{item.level}%</Text>
    </View>

    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          {
            width: `${item.level}%`,
            backgroundColor: item.color,
          },
        ]}
      />
    </View>
  </View>
);

const TimelineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.75}
  >
    <View style={styles.timelineDot} />

    <View style={styles.timelineContent}>
      <Text style={styles.timelineRole}>{item.role}</Text>
      <Text style={styles.timelineCompany}>{item.company}</Text>
      <Text style={styles.timelinePeriod}>{item.period}</Text>
      <Text style={styles.timelineHint}>Ketuk untuk detail →</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
  // STATE
  const [openToWork, setOpenToWork] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const [sending, setSending] = useState(false);

  const [pressing, setPressing] = useState(false);

  // ==========================================
  // TAMBAHAN: STATE TAB NAVIGASI
  // ==========================================
  const [activeTab, setActiveTab] = useState('Info');

  // ==========================================
  // TAMBAHAN: ANIMASI AVATAR
  // ==========================================
  const avatarScale = useRef(
    new Animated.Value(0.85)
  ).current;

  useEffect(() => {
    Animated.spring(avatarScale, {
      toValue: 1,
      friction: 5,
      tension: 45,
      useNativeDriver: true,
    }).start();
  }, [avatarScale]);

  // HANDLER
  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSend = () => {
    if (!senderName.trim() || !message.trim()) {
      Alert.alert(
        '⚠️ Peringatan',
        'Nama dan pesan tidak boleh kosong!'
      );
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSenderName('');
      setMessage('');

      Alert.alert(
        '✅ Berhasil',
        `Pesan dari ${senderName} telah terkirim!`
      );
    }, 2000);
  };

  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          '❌ Tidak dapat membuka link',
          'Link tersebut tidak dapat dibuka pada perangkat ini.'
        );
      }
    } catch (error) {
      Alert.alert(
        '❌ Error',
        'Terjadi kesalahan saat membuka link.'
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* STATUS BAR */}
      <StatusBar
        backgroundColor={COLORS.strawberry}
        barStyle="light-content"
      />

      {/* HEADER */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>
          📄 Curriculum Vitae
        </Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            {openToWork ? '🟢 Open' : '🔴 Busy'}
          </Text>

          <Switch
            value={openToWork}
            onValueChange={setOpenToWork}
            trackColor={{
              false: COLORS.switchOff,
              true: COLORS.matcha,
            }}
            thumbColor={
              openToWork
                ? COLORS.white
                : COLORS.switchThumbOff
            }
          />
        </View>
      </View>

      {/* ==========================================
          TAMBAHAN: TAB NAVIGASI
          ========================================== */}
      <View style={styles.tabBar}>
        {['Info', 'Skills', 'Kontak'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab &&
                styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab &&
                  styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >

        {/* ==========================================
            PROFILE
            TAB: INFO
            ========================================== */}
        {activeTab === 'Info' && (
          <View style={styles.profileSection}>

            {/* ==========================================
                TAMBAHAN: ANIMATED AVATAR
                ========================================== */}
            <Animated.Image
              source={PROFILE.avatarOffline}
              style={[
                styles.avatarOffline,
                {
                  transform: [
                    {
                      scale: avatarScale,
                    },
                  ],
                },
              ]}
            />

            {openToWork && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  ✅ Open to Work
                </Text>
              </View>
            )}

            <Text style={styles.profileName}>
              {PROFILE.name}
            </Text>

            <Text style={styles.profileTitle}>
              {PROFILE.title}
            </Text>

            <Text style={styles.profileBio}>
              {PROFILE.bio}
            </Text>

            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>
                📧 {PROFILE.email}
              </Text>

              <Text style={styles.contactItem}>
                📍 {PROFILE.location}
              </Text>
            </View>

            <Text style={styles.contactItem}>
              📱 {PROFILE.phone}
            </Text>

            {/* SOCIAL MEDIA */}
            <View style={styles.socialRow}>
              {SOCIAL.map((s) => (
                <TouchableOpacity
                  key={s.id}
                  style={styles.socialBtn}
                  onPress={() =>
                    Alert.alert(
                      '🔗 Link',
                      s.url
                    )
                  }
                  activeOpacity={0.8}
                >
                  <Text style={styles.socialIcon}>
                    {s.icon}
                  </Text>

                  <Text style={styles.socialLabel}>
                    {s.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* DOWNLOAD BUTTON */}
            <Pressable
              style={({ pressed }) => [
                styles.downloadBtn,
                pressed &&
                  styles.downloadBtnPressed,
              ]}
              onPressIn={() => setPressing(true)}
              onPressOut={() => setPressing(false)}
              onPress={() =>
                Alert.alert(
                  '⬇️ Download',
                  'CV sedang diunduh...'
                )
              }
            >
              <Text style={styles.downloadBtnText}>
                {pressing
                  ? '⏳ Mengunduh...'
                  : '⬇️ Download CV (PDF)'}
              </Text>
            </Pressable>

          </View>
        )}

        {activeTab === 'Info' && (
          <View style={{ height: 40 }} />
        )}

        {/* ==========================================
            SKILL
            TAB: SKILLS
            ========================================== */}
        {activeTab === 'Skills' && (
          <View style={styles.sectionBox}>

            <Text style={styles.sectionTitle}>
              🛠️ Keahlian
            </Text>

            <Text style={styles.sectionSubtitle}>
              ↳ FlatList: menampilkan list data secara efisien
            </Text>

            <FlatList
              data={SKILL}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <SkillCard item={item} />
              )}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={{ height: 8 }} />
              )}
            />

          </View>
        )}

        {/* ==========================================
            RIWAYAT
            TAB: INFO
            ========================================== */}
        {activeTab === 'Info' && (
          <View style={styles.sectionBox}>

            <Text style={styles.sectionTitle}>
              📋 Riwayat
            </Text>

            <Text style={styles.sectionSubtitle}>
              ↳ SectionList: data dikelompokkan per kategori.
              Ketuk kartu untuk Modal detail.
            </Text>

            <SectionList
              sections={SECTIONS}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TimelineCard
                  item={item}
                  onPress={handleCardPress}
                />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>
                    {title}
                  </Text>
                </View>
              )}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={{ height: 10 }} />
              )}
              SectionSeparatorComponent={() => (
                <View style={{ height: 16 }} />
              )}
            />

          </View>
        )}

        {/* ==========================================
            HUBUNGI SAYA
            TAB: KONTAK
            ========================================== */}
        {activeTab === 'Kontak' && (
          <KeyboardAvoidingView
            behavior={
              Platform.OS === 'ios'
                ? 'padding'
                : 'height'
            }
            keyboardVerticalOffset={
              Platform.OS === 'ios'
                ? 90
                : 20
            }
          >

            <View style={styles.sectionBox}>

              <Text style={styles.sectionTitle}>
                ✉️ Hubungi Saya
              </Text>

              <Text style={styles.sectionSubtitle}>
                ↳ TextInput, Button, ActivityIndicator
              </Text>

              {/* INPUT NAMA */}
              <TextInput
                style={styles.textInput}
                placeholder="Nama Anda"
                placeholderTextColor={
                  COLORS.placeholder
                }
                value={senderName}
                onChangeText={setSenderName}
                returnKeyType="next"
                editable={!sending}
              />

              {/* INPUT PESAN */}
              <TextInput
                style={[
                  styles.textInput,
                  styles.textArea,
                ]}
                placeholder="Tulis pesan Anda di sini..."
                placeholderTextColor={
                  COLORS.placeholder
                }
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                editable={!sending}
              />

              {/* LOADING / BUTTON */}
              {sending ? (
                <View style={styles.loadingRow}>

                  <ActivityIndicator
                    size="large"
                    color={COLORS.accent}
                  />

                  <Text style={styles.loadingText}>
                    Mengirim pesan...
                  </Text>

                </View>
              ) : (
                <Button
                  title="📨 Kirim Pesan"
                  color={COLORS.accent}
                  onPress={handleSend}
                />
              )}

            </View>

          </KeyboardAvoidingView>
        )}

        <View style={{ height: 20 }} />

      </ScrollView>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() =>
          setModalVisible(false)
        }
      >
        <View style={styles.modalOverlay}>

          <View style={styles.modalBox}>

            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>
                  {selectedItem.role}
                </Text>

                <Text style={styles.modalCompany}>
                  {selectedItem.company}
                </Text>

                <Text style={styles.modalPeriod}>
                  📅 {selectedItem.period}
                </Text>

                <View style={styles.modalDivider} />

                <Text style={styles.modalDesc}>
                  {selectedItem.desc}
                </Text>
              </>
            )}

            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() =>
                setModalVisible(false)
              }
            >
              <Text style={styles.modalCloseBtnText}>
                ✕ Tutup
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

    </SafeAreaView>
  );
}

const COLORS = {

  // Background
  bg: '#FFF7F3',
  cream: '#FFF7F3',

  // Card
  card: '#FFFDFC',
  cardSoft: '#F8EEE9',

  // Strawberry
  strawberry: '#EFA7A2',
  strawberryDark: '#C9787C',
  strawberrySoft: '#FCE9E5',
  strawberryLight: '#F9D7D3',

  // Accent
  accent: '#E58F91',
  accentLight: '#D98F9A',

  // Matcha
  matcha: '#BFD9A8',
  matchaDark: '#86A86B',
  matchaSoft: '#EEF5E7',

  // Border
  cardBorder: '#E7D8D3',

  // Text
  text: '#5B514D',
  textMuted: '#81766F',
  textDim: '#9A8E87',
  placeholder: '#9A8E87',

  // Basic
  white: '#FFFFFF',

  // Switch
  switchOff: '#B7ACA6',
  switchThumbOff: '#8F8580',
};

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  scroll: {
    flex: 1,
  },

  /* ==========================================
     HEADER / NAVBAR
     ========================================== */

  headerBar: {
    backgroundColor: COLORS.strawberry,

    paddingHorizontal: 20,
    paddingVertical: 14,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,

    elevation: 4,

    shadowColor: '#8E6663',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  switchLabel: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },

  /* ==========================================
     TAB NAVIGATION
     TAMBAHAN TUGAS PENGEMBANGAN
     ========================================== */

  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,

    paddingHorizontal: 12,
    paddingVertical: 8,

    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },

  tabButton: {
    flex: 1,

    alignItems: 'center',

    paddingVertical: 9,

    borderRadius: 10,
  },

  tabButtonActive: {
    backgroundColor: COLORS.strawberrySoft,
  },

  tabText: {
    color: COLORS.textMuted,

    fontSize: 12,

    fontWeight: '600',
  },

  tabTextActive: {
    color: COLORS.accent,

    fontWeight: '800',
  },

  /* ==========================================
     PROFILE
     ========================================== */

  profileSection: {
    alignItems: 'center',

    paddingVertical: 32,
    paddingHorizontal: 20,

    backgroundColor: COLORS.card,

    marginBottom: 16,

    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,

    borderBottomWidth: 2,
    borderColor: COLORS.strawberry,
  },

  avatarOffline: {
    width: 110,
    height: 110,

    borderRadius: 55,

    borderWidth: 3,
    borderColor: COLORS.strawberry,

    marginBottom: 8,
  },

  badge: {
    backgroundColor: COLORS.matchaSoft,

    borderWidth: 1,
    borderColor: COLORS.matchaDark,

    paddingHorizontal: 12,
    paddingVertical: 4,

    borderRadius: 20,

    marginBottom: 12,
  },

  badgeText: {
    color: COLORS.matchaDark,
    fontSize: 12,
    fontWeight: '700',
  },

  profileName: {
    color: COLORS.text,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },

  profileTitle: {
    color: COLORS.accent,
    fontSize: 14,
    fontWeight: '600',

    marginTop: 4,
    marginBottom: 14,

    textAlign: 'center',
  },

  profileBio: {
    color: COLORS.textMuted,

    fontSize: 13,
    lineHeight: 20,

    textAlign: 'center',

    marginBottom: 16,

    paddingHorizontal: 8,
  },

  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'center',

    gap: 8,

    marginBottom: 6,
  },

  contactItem: {
    color: COLORS.textMuted,

    fontSize: 12,

    textAlign: 'center',

    marginBottom: 4,
  },

  /* Social Media */

  socialRow: {
    flexDirection: 'row',

    gap: 12,

    marginTop: 16,
    marginBottom: 20,
  },

  socialBtn: {
    alignItems: 'center',

    backgroundColor: COLORS.strawberrySoft,

    paddingVertical: 10,
    paddingHorizontal: 16,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  socialIcon: {
    fontSize: 20,
    marginBottom: 4,
  },

  socialLabel: {
    color: COLORS.accent,

    fontSize: 11,

    fontWeight: '600',
  },

  /* Download button */

  downloadBtn: {
    backgroundColor: COLORS.accent,

    paddingVertical: 14,
    paddingHorizontal: 36,

    borderRadius: 50,

    elevation: 4,

    shadowColor: COLORS.accent,

    shadowOpacity: 0.35,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowRadius: 8,
  },

  downloadBtnPressed: {
    backgroundColor: COLORS.strawberryDark,
  },

  downloadBtnText: {
    color: COLORS.white,

    fontWeight: '700',

    fontSize: 14,
  },

  /* section */

  sectionBox: {
    marginHorizontal: 16,
    marginBottom: 16,

    backgroundColor: COLORS.card,

    borderRadius: 16,

    padding: 18,

    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  sectionTitle: {
    color: COLORS.text,

    fontSize: 17,

    fontWeight: '700',

    marginBottom: 4,
  },

  sectionSubtitle: {
    color: COLORS.textDim,

    fontSize: 11,

    fontStyle: 'italic',

    marginBottom: 16,
  },

  /* section header */

  sectionHeader: {
    backgroundColor: COLORS.strawberrySoft,

    paddingVertical: 8,
    paddingHorizontal: 12,

    borderRadius: 8,

    marginBottom: 8,

    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },

  sectionHeaderText: {
    color: COLORS.accent,

    fontWeight: '700',

    fontSize: 13,
  },

  /* skill */

  skillCard: {
    backgroundColor: COLORS.cardSoft,

    padding: 12,

    borderRadius: 10,

    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  skillHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 8,
  },

  skillName: {
    color: COLORS.text,

    fontWeight: '600',

    fontSize: 13,
  },

  skillPercent: {
    color: COLORS.accent,

    fontWeight: '700',

    fontSize: 13,
  },

  progressBg: {
    height: 6,

    backgroundColor: COLORS.strawberryLight,

    borderRadius: 4,

    overflow: 'hidden',
  },

  progressFill: {
    height: 6,

    borderRadius: 4,
  },

  /* timeline */

  timelineCard: {
    flexDirection: 'row',

    backgroundColor: COLORS.cardSoft,

    borderRadius: 12,

    padding: 14,

    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  timelineDot: {
    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: COLORS.accent,

    marginTop: 4,
    marginRight: 12,
  },

  timelineContent: {
    flex: 1,
  },

  timelineRole: {
    color: COLORS.text,

    fontWeight: '700',

    fontSize: 14,

    marginBottom: 2,
  },

  timelineCompany: {
    color: COLORS.accent,

    fontSize: 13,

    marginBottom: 2,
  },

  timelinePeriod: {
    color: COLORS.textMuted,

    fontSize: 11,

    marginBottom: 6,
  },

  timelineHint: {
    color: COLORS.matchaDark,

    fontSize: 11,

    fontStyle: 'italic',
  },

  /* text input */

  textInput: {
    backgroundColor: COLORS.strawberrySoft,

    color: COLORS.text,

    borderWidth: 1,
    borderColor: COLORS.cardBorder,

    borderRadius: 10,

    paddingHorizontal: 14,

    paddingVertical:
      Platform.OS === 'ios'
        ? 14
        : 10,

    marginBottom: 12,

    fontSize: 13,
  },

  textArea: {
    minHeight: 100,
  },

  loadingRow: {
    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 10,
  },

  loadingText: {
    marginTop: 8,

    color: COLORS.textMuted,

    fontSize: 13,

    fontWeight: '600',
  },

  /* modal */

  modalOverlay: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.45)',

    justifyContent: 'flex-end',
  },

  modalBox: {
    backgroundColor: COLORS.card,

    padding: 24,

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  modalTitle: {
    color: COLORS.text,

    fontSize: 20,

    fontWeight: '800',

    marginBottom: 6,
  },

  modalCompany: {
    color: COLORS.accent,

    fontSize: 14,

    fontWeight: '600',

    marginBottom: 6,
  },

  modalPeriod: {
    color: COLORS.textMuted,

    fontSize: 12,
  },

  modalDivider: {
    height: 1,

    backgroundColor: COLORS.cardBorder,

    marginVertical: 16,
  },

  modalDesc: {
    color: COLORS.text,

    fontSize: 14,

    lineHeight: 22,

    marginBottom: 20,
  },

  modalCloseBtn: {
    backgroundColor: COLORS.accent,

    paddingVertical: 13,

    borderRadius: 12,

    alignItems: 'center',
  },

  modalCloseBtnText: {
    color: COLORS.white,

    fontSize: 14,

    fontWeight: '700',
  },
});