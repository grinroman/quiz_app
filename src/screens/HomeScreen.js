import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { signOut } from '../utils/auth';
import { COLORS } from '../constants/theme';
import FormButton from '../components/shared/FormButton';
import { getQuizzes } from '../utils/database';

const HomeScreen = ({ navigation }) => {
    const [allQuizzes, setAllQuizzes] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const handleOnSceenChange = () => {
        navigation.navigate('CreateQuizScreen');
    };

    const getAllQuizzes = async () => {
        setRefreshing(true);
        const quizzes = await getQuizzes();

        //transformation
        let tempQuizzes = [];
        await quizzes.docs.forEach(async (quizz) => {
            await tempQuizzes.push({ id: quizz.id, ...quizz.data() });
        });
        await setAllQuizzes([...tempQuizzes]);
        setRefreshing(false);
    };

    useEffect(() => {
        getAllQuizzes();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                backgroundColor={COLORS.white}
                barStyle={'dark-content'}
            />
            <View style={styles.viewPanel}>
                <Text style={{ fontSize: 20, color: COLORS.black }}>
                    Quizz App
                </Text>
                <Text style={styles.logout} onPress={signOut}>
                    Logout
                </Text>
            </View>
            {/*Quiz List */}
            <FlatList
                data={allQuizzes}
                onRefresh={getAllQuizzes}
                refreshing={refreshing}
                showsVerticalScrollIndicator={false}
                style={{
                    paddingVertical: 20,
                }}
                renderItem={({ item: quiz }) => (
                    <View style={styles.quizsWrapper}>
                        <View style={{ flex: 1, paddingRight: 10 }}>
                            <Text style={{ fontSize: 18 }}>{quiz.title}</Text>
                            {
                                (quiz.description = '' ? (
                                    <Text style={{ opacity: 0.5 }}>
                                        {quiz.description}
                                    </Text>
                                ) : null)
                            }
                        </View>
                        <TouchableOpacity style={styles.playButton}>
                            <Text>Play</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            {/*Button */}
            <FormButton
                labelText="Create quizz!"
                style={styles.createButton}
                handleOnPress={handleOnSceenChange}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative',
    },
    viewPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        elevation: 4,
        paddingHorizontal: 20,
    },
    logout: {
        fontSize: 20,
        padding: 10,
        color: COLORS.error,
    },
    quizsWrapper: {
        padding: 20,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        elevation: 2,
    },
    playButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        backgroundColor: COLORS.primary + '20',
    },
    createButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 50,
        paddingHorizontal: 30,
    },
});
