"use strict";

import { 
    UTILS,
    start,
    newNumber 
} from '../services';

import { GeneratedNumber } from '../services/utils';
import { compareNumber } from './compareNumber';

const toKeyPressed = (event: KeyboardEvent): void => {
    (event.key !== 'Enter') 
    ? ((event.key < "0" || event.key > "9") && event.preventDefault()) 
    : 0 
}

const toKeyLiftedUp = (event: KeyboardEvent): void => {
    ((event.target as HTMLInputElement).value !== '') 
    ? UTILS.BTNSEND?.removeAttribute('disabled') 
    : UTILS.BTNSEND?.setAttribute('disabled', "true")
}

const toKeyClicked = (event: Event): void => {
    event.preventDefault();
    compareNumber((UTILS.INPUTSEND as HTMLInputElement)!.value, Number(GeneratedNumber.toGenerated));
    (UTILS.INPUTSEND as HTMLInputElement)!.value = '';
    UTILS.INPUTSEND?.focus();
}

const startNumber = async (): Promise<void> => {
    GeneratedNumber.toGenerated = await start();
    GeneratedNumber.toGenerated === 502 && compareNumber(null, GeneratedNumber.toGenerated);

    UTILS.INPUTSEND?.addEventListener('keypress', event => toKeyPressed(event))
    UTILS.INPUTSEND?.addEventListener('keyup', event => toKeyLiftedUp(event))
    UTILS.BTNSEND?.addEventListener('click', event => toKeyClicked(event))

    return newNumber();
}

export {
    startNumber,
    toKeyClicked,
    toKeyLiftedUp,
    toKeyPressed
}
