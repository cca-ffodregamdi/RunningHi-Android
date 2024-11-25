import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { EditProfileScreenProps } from '../types/navigation';
import AvatarLarge from '../assets/images/Avatar_Large.svg';
import CameraOutline from '../assets/images/CameraOutline.svg';

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation }) => {
  const [nickname, setNickname] = useState('유저1');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>내 정보 수정</Text>
        <TouchableOpacity>
          <Text style={styles.completeButton}>완료</Text>
        </TouchableOpacity>
      </View>

      {/* 프로필 영역 */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
            <View style={styles.profileImageWrapper}>
                <AvatarLarge width={100} height={100} />
                <TouchableOpacity style={styles.cameraButton}>
                    <CameraOutline width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>

        {/* 닉네임 입력 */}
        <View style={styles.nicknameSection}>
          <Text style={styles.nicknameLabel}>닉네임</Text>
          <TextInput
            style={styles.nicknameInput}
            value={nickname}
            onChangeText={setNickname}
            placeholder="유저1"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity>
          <Text style={styles.bottomButtonText}>로그아웃</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity>
          <Text style={styles.bottomButtonText}>회원탈퇴</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E7EBEF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E5EA', // Neutral200
    },
    backButton: {
      padding: 4,
    },
    backButtonText: {
      fontSize: 24,
      color: '#1C1C1E', // Neutral900
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#1C1C1E', // Neutral900
    },
    completeButton: {
      fontSize: 16,
      color: '#007AFF', // Primary500 (iOS 스타일 파란색)
    },
    profileSection: {
      alignItems: 'center',
      paddingTop: 40,
    },
    profileImageContainer: {
      marginBottom: 40,
    },
    profileImageWrapper: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#F2F2F7', // Neutral100
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    cameraButton: {
      position: 'absolute',
      right: -5,
      bottom: -5,
      backgroundColor: '#FFFFFF', // Base White
      borderRadius: 20,
      padding: 8,
      borderWidth: 1,
      borderColor: '#E5E5EA', // Neutral200
    },
    cameraIcon: {
      width: 24,
      height: 24,
    },
    nicknameSection: {
      width: '100%',
      paddingHorizontal: 20,
    },
    nicknameLabel: {
      fontSize: 14,
      color: '#8E8E93', // Neutral500
      marginBottom: 8,
    },
    nicknameInput: {
      width: '100%',
      height: 48,
      borderWidth: 1,
      borderColor: '#E5E5EA', // Neutral200
      borderRadius: 8,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#1C1C1E', // Neutral900
      backgroundColor: '#FFFFFF', // Base White
    },
    bottomButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 40,
      width: '100%',
    },
    bottomButtonText: {
      fontSize: 14,
      color: '#828F9B', // Neutral500
      paddingHorizontal: 12,
    },
    separator: {
      fontSize: 20,
      color: '#828F9B', // Neutral200
      paddingHorizontal: 8,
    },
  });

export default EditProfileScreen;