"use strict";

import { 
    UTILS,
    start,
    newNumber 
} from '../services';

import { generatedNumber } from '../services/utils';
import { compareNumber } from './compareNumber';

export const startNumber = async () => {
    generatedNumber = await start();
    generatedNumber === 502 && compareNumber(null, generatedNumber);
    
    UTILS.INPUTSEND.addEventListener('keypress', e => (e.keyCode !== 13) 
    ? ((e.keyCode < 48 || e.keyCode > 57) && e.preventDefault()) 
    : 0 )

    UTILS.INPUTSEND.addEventListener('keyup', e => (e.target.value !== '') 
    ? UTILS.BTNSEND.removeAttribute('disabled') 
    : UTILS.BTNSEND.setAttribute('disabled', true))

    UTILS.BTNSEND.addEventListener('click', e => {
        e.preventDefault();
        compareNumber(UTILS.INPUTSEND.value, generatedNumber);
        UTILS.INPUTSEND.value = '';
        UTILS.INPUTSEND.focus();
    })

    newNumber();
}
