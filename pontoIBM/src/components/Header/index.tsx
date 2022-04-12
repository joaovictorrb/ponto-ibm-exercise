import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface HeaderProps {
  title?: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
