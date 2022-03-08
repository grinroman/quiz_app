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
