import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';
import { Ionicons } from '@expo/vector-icons';
import randomColor from 'randomcolor';

const randomIconNames = ['md-person', 'md-help-circle', 'md-star', 'md-heart', 'md-globe'];

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);


  

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);

    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        setContacts(data);
      }
    }
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleModalClose = () => {
    setSelectedContact(null);
  };

  const clearSearchText = () => {
    setSearchText('');
  };
  

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const getRandomColor = () => {
    return randomColor();
  };

  const getRandomIconName = () => {
    const randomIndex = Math.floor(Math.random() * randomIconNames.length);
    return randomIconNames[randomIndex];
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleContactClick(item)} style={styles.contactItem}>
      <View style={[styles.iconContainer, { backgroundColor: getRandomColor() }]}>
        <Ionicons name={getRandomIconName()} size={24} color="white" />
      </View>
      <Text style={styles.contactText}>
        {item.name} - {item.phoneNumbers?.[0]?.number}
      </Text>
    </TouchableOpacity>
  );


  
  return (
    <View style={styles.container}>
     <TextInput
  style={styles.searchInput}
  placeholder="Search contacts..."
  value={searchText}
  onChangeText={(text) => setSearchText(text)}
/>
<TouchableOpacity onPress={clearSearchText} style={styles.clearButton}>
  <Ionicons name="close" size={24} color="gray" />
</TouchableOpacity>



      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />



      <Modal visible={selectedContact !== null} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedContact?.name}</Text>
          <Text style={styles.modalText}>
            Phone: {selectedContact?.phoneNumbers?.[0]?.number}
          </Text>

          <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    marginTop:25,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    marginRight: 8,
    height: 45,
    width: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  clearButton: {
    position: 'absolute',
    top: 48,
    right: 20,
  },
  
});
