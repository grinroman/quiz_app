import { db } from '../../firebase';

export const createQuiz = (currentQuizId, title, description) => {
    return db
        .collection('Quizzes')
        .doc(currentQuizId)
        .set({ title, description });
};

//new question for current quiz
export const createQuestion = (currentQuizId, currentQuestionId, question) => {
    return db
        .collection('Quizzes')
        .doc(currentQuizId)
        .collection('QNA')
        .doc(currentQuestionId)
        .set(question);
};

//get all quizes list
export const getQuizzes = () => {
    return db.collection('Quizzes').get();
};

// get quiz details by id
export const getQuizById = (currentQuizId) => {
    return db.collection('Quizzes').doc(currentQuizId).get();
};

//Get questions for current quiz
export const getQuestionsByQuizId = (currentQuizId) => {
    return db.collection('Quizzes').doc(currentQuizId).collection('QNA').get();
};
