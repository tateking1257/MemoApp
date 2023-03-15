import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import AppBar from "../components/AppBar";
import CircleButtom from "../components/CircleButtom";

export default function MemoDetailsScreen() {
    return (
        <View style = {styles.container}>
            <AppBar />
            <View style={styles.memoItem}>
                <Text style={styles.memoItemTitle}>買い物リスト</Text>
                <Text style={styles.memoItemDate}>2023年3月14日 10:00</Text>
            </View>
            <ScrollView style={styles.memoDetail}>
                <Text style={styles.memoText}>
                    ターゲットは、医学生と研修医です。
                    目的は、彼らの就職活用の支援を目的とし、主な情報は、大量の医療機関情報が柱となります。
                    また、サイト集客、及びサイト訪問者のサービス向上を目的に、各種コンテンツを取り揃えております。
                </Text>
            </ScrollView >
            <CircleButtom style={{ top:150, bottom:'auto' }}>=</CircleButtom>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoItem: {
        height: 80,
        width: '100%',
        paddingHorizontal: 19,
        paddingVertical: 16,
        backgroundColor: '#1BCAF0',
    },
    memoItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 32,
        color: '#ffffff',
    },
    memoItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#ffffff',
    },
    memoDetail: {
        paddingHorizontal: 32,
        paddingVertical: 27,    
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
    },
  });