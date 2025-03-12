import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

type EventInfo = {
  title: string;
  data: {
    location?: string;
    time?: string;
    transport?: string;
    imageUrl?: string;
    hotelName?: string;
    address?: string;
  }[];
};

const eventInfo: EventInfo[] = [
  {
    title: "Lịch trình",
    data: [
      {
        location: "Hồ Tràm, Vũng Tàu",
        time: "09:00 AM - 12:00 AM, 12/12/2024",
        transport: "Xe bus",
        imageUrl: "https://cdn.xanhsm.com/2025/03/0ca319dd-tuong-dai-chua-kito-2.jpg",
      },
    ],
  },
  {
    title: "Khách sạn",
    data: [
      {
        hotelName: "Hồng Quỳnh",
        time: "06:00 AM - 12:00 AM",
        address: "234 Quang Trung, Hồ Chí Minh",
      },
    ],
  },
];

const SectionView: React.FC<{ section: EventInfo }> = ({ section }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.data.map((item, index) => (
        <View key={index} style={styles.card}>
          {item.location && <Text style={styles.cardText}>Địa điểm: {item.location}</Text>}
          {item.time && <Text style={styles.cardText}>Thời gian: {item.time}</Text>}
          {item.transport && <Text style={styles.cardText}>Phương tiện di chuyển: {item.transport}</Text>}
          {item.imageUrl && <Image source={{ uri: item.imageUrl }} style={styles.image} />}
          {item.hotelName && <Text style={styles.cardText}>Tên khách sạn: {item.hotelName}</Text>}
          {item.address && <Text style={styles.cardText}>Địa điểm: {item.address}</Text>}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHI TIẾT</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default function Lap2B2() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {eventInfo.map((section, index) => (
        <SectionView key={index} section={section} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    marginTop: 40
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  scrollView: {
    paddingVertical: 10,
  },
});
