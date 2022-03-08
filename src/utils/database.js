import { db } from '../../firebase';

export const createQuiz = (currentQuizId, title, description) => {
    return db
        .collection('Quizzes')
        .doc(currentQuizId)
        .set({ title, description });
};
