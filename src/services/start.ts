import { UTILS } from "./utils";
import { getAleatoryNumber } from '../model';

export const start = async () => {
    UTILS.BTNSEND?.setAttribute('disabled', 'true');
    UTILS.INPUTSEND?.focus();
    const getNumber = await getAleatoryNumber()?.then(number => number);
    
    return getNumber
}
