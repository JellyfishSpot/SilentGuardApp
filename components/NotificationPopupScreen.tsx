import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from './Themed';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function NotificationPopupScreen() {

    const data = [
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "1",
        "1",
        "1",
        "0",
        "1",
        "1",
        "1",
        "0",
        "7",
        "4",
        "2",
        "1",
        "1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "4",
        "3",
        "2",
        "0",
        "0",
        "0"
      ];

    //TODO: Fix for android.
    //TODO: Connect application logic. Receive ML data
  return (
    <ScrollView>
        <View style={{ position: "relative", top: 0 }}>
        <Table>
            <TableHead>
            <TableRow
                style={{
                backgroundColor: "#6EF28F",
                height: "30px"
                }}
            >
                <TableCell>Date</TableCell>
                <TableCell>Events</TableCell>
            </TableRow>
            </TableHead>
        </Table>
        </View>
        <View style={{ height: 500, overflow: "scroll" }}>
        <Table style={{ tableLayout: "fixed" }}>
            <TableBody>
            {data.map((n, i) => {
                return (
                <TableRow key={i} style = {{backgroundColor: "#C7FFD5"}}>
                    <TableCell>
                        <Text>04/{30-i}/2024</Text>
                    </TableCell>
                    <TableCell>
                        <Text>{n}</Text>
                    </TableCell>
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});