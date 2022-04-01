import { COLORS } from '../constants/theme';

export const getOptionBgColor = (currentQuestion, currentOption) => {
    if (currentQuestion.selectedOption) {
        if (currentOption == currentQuestion.selectedOption) {
            if (currentOption == currentQuestion.correct_answer) {
                return COLORS.success;
            } else {
                return COLORS.error;
            }
        } else {
            return COLORS.white;
        }
    } else {
        return COLORS.white;
    }
};
