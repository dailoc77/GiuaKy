import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, Platform, TextInput } from 'react-native';
import axios from 'axios';

const Screen_01_with_api = () => {
    const [medicine, setMedicine] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);

    const screenWidth = Dimensions.get('window').width;

    //mockapi
    useEffect(() => {
        axios.get('https://671de0b01dfc429919808af0.mockapi.io/medicine').then((response) => {
         setMedicine(response.data);
        });
     }, []);

    const numColumns = 2;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView style={{ width: "100%", height: 500 }}>
                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <View style={styles.header}>
                            <View style={[styles.searchBox, searchFocused && styles.inputContainerFocused]}>
                                <Image source={require('../assets/anh01.png')} style={styles.searchIcon} />
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder=" Medicine,Hospital,Doctor,etc"
                                    value={searchQuery}
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                    onChangeText={setSearchQuery}
                                />

                            </View>
                            <Image source={require('../assets/anh02.png')} style={styles.logoicon} />
                        </View>
                    </View>

                    {/* Banner */}
                    <View>
                        <View>
                            <Image style={styles.banner} source={require('../assets/anh03.png')} />
                        </View>

                        <Text style={{fontSize: 20 , fontWeight: 30}}>
                            Hello, Yaol Amari!
                        </Text>
                        <Text style={{fontSize: 15 , fontWeight: 20}}>
                            We have some additional suggestions for you.
                        </Text>

                        <TouchableOpacity>
                            See all
                        </TouchableOpacity>
                    </View>


                    {/* Product */}
                    <FlatList
                        data={medicine}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.productItem, { width: screenWidth / numColumns }]}>
                                <View style={styles.productIconContainer}>
                                    <Image source={{ uri: item.image }} style={styles.categoryIcon} resizeMode='contain' />
                                </View>
                                <Text style={styles.productText}>{item.name}</Text>
                                <Text style={styles.productText}>{item.price}</Text>
                                <Text style={styles.productText}><Image source={require('../assets/anh06.png')} style={{width: 20 , height: 20}} /> {item.star}</Text>
                                <Text style={styles.productText}>{item.description}</Text>
                            </TouchableOpacity>
                        )}
                        numColumns={numColumns}
                    />
                </ScrollView>
                {/* Footer or bottom nav */}
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh09.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh10.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Explore</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh11.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>My Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh12.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Hospital</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh13.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Support</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh14.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    headerContainer: {
        backgroundColor: '#ccc',
        height: 100,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoicon: {
        width: 50,
        height: 50,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputContainerFocused: {
        borderColor: '#1f1f1f',
        borderWidth: 1,
    },
    searchInput: {
        backgroundColor: 'transparent',
        outlineWidth: 0,
        flex: 1,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    userInfoContainer: {
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingLeft: 23,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        color: '#ddd',
        marginLeft: 10,
    },
    iconBell: {
        width: 50,
        height: 50
    },
    banner: {
        width: "100%",
        height: 150
    },
    sectionContainer: {
        padding: 20,
        paddingLeft: 10,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        fontSize: 20,
        margin: 10,
        textAlign: 'left',
    },
    icon3gach: {
        width: 30,
        height: 30,
    },
    productItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    productIconContainer: {
        width: 150,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#6C63FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryIcon: {
        width: 64,
        height: 64,
    },
    productText: {
        marginTop: 8,
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
    },
    locationImage: {
        width: 122,
        height: 122,
        margin: 10,
        borderRadius: 10,
    },
    locationImageOfRec: {
        width: 192,
        height: 192,
        borderRadius: 10,
        margin: 10,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 15,
    },
    navItem: {
        // alignItems: 'center',
    },
    navLabel: {
        color: '#000',
        fontSize: 11,
        marginTop: 7,
    },
    navicon: {
        width: 30,
        height: 30,
    },
});

export default Screen_01_with_api;
