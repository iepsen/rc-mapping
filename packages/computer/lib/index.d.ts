import colors from './colors';
import navigation from './navigation';
import numbers from './numbers';
declare const exit: () => void;
declare const _default: {
    colors: {
        keyColorRed: number;
        keyColorGreen: number;
        keyColorBlue: number;
    };
    navigation: {
        keyArrowLeft: number;
        keyArrowUp: number;
        keyArrowRight: number;
        keyArrowDown: number;
        keyEnter: number;
        keyBack: number;
    };
    numbers: {
        keyNumberZero: number;
        keyNumberOne: number;
        keyNumberTwo: number;
        keyNumberThree: number;
        keyNumberFour: number;
        keyNumberFive: number;
        keyNumberSix: number;
        keyNumberSeven: number;
        keyNumberEight: number;
        keyNumberNine: number;
    };
    exit: () => void;
};
export default _default;
export { colors, navigation, numbers, exit };
