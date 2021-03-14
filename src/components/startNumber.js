"use strict";

import { 
    btnSend, 
    inputSend,
    newNumber,
    reset,
    hint,
    segment
} from './utils';

import { getAleatoryNumber } from './getAleatoryNumber';
import { compareNumber } from './compareNumber';

var referenceNumber;

export const startNumber = () => {

    /**
     * Principal function start number aplication..
     */
    const start = async () => {
        btnSend.setAttribute('disabled', true);
        inputSend.focus();
        const getNumber = await getAleatoryNumber().then(number => number);
        referenceNumber = getNumber;
        referenceNumber === 502 ? compareNumber(null, referenceNumber) : 0;
        console.log(referenceNumber);
    }
    
    inputSend.addEventListener('keypress', e => (e.keyCode !== 13) 
    ? ((e.keyCode < 48 || e.keyCode > 57) && e.preventDefault()) 
    : 0 )

    inputSend.addEventListener('keyup', e => (e.target.value !== '') 
    ? btnSend.removeAttribute('disabled') 
    : btnSend.setAttribute('disabled', true))

    btnSend.addEventListener('click', e => {
        e.preventDefault();
        compareNumber(inputSend.value, referenceNumber);
        inputSend.value = '';
        inputSend.focus();
    })

    newNumber.addEventListener('click', e => {
        const classReference = document.querySelector('.feedback');
        e.preventDefault();
        classReference.remove();
        newNumber.setAttribute('disabled', true);

        segment.classList.contains('segment-error') && segment.classList.remove('segment-error');
        segment.classList.contains('segment-win') && segment.classList.remove('segment-win');

        segment.innerHTML = reset;

        hint.forEach(h => h.removeAttribute('disabled', true));
        start();
    }, false);

    return start();
}