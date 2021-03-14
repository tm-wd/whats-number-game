"use strict";

import{ 
    feedback,
    newNumber,
    hint,
    segment
} from './utils';

import { mountSegments } from './mountSegments';

export const compareNumber = (typeNumber, hintNumber) => {

    mountSegments(typeNumber);
    typeNumber = parseInt(typeNumber)
    const classReference = document.querySelector('.feedback')

    const mountFeedback = (cls, text) => {
        (classReference) && classReference.remove();
        let element = document.createElement('span');
        element.className = cls;
        element.textContent = text;
        feedback.appendChild(element)
    }

    if(hintNumber === 502){
        mountFeedback('feedback feedback-error', 'Error');
        newNumber.removeAttribute('disabled');
        segment.classList.add('segment-error');
        hint.forEach(h => h.setAttribute('disabled', true))
    }

    (typeNumber > hintNumber) ? mountFeedback('feedback feedback-menor', 'it\'s smaller') : 0;
    (typeNumber < hintNumber) ? mountFeedback('feedback feedback-maior', 'It\'s bigger') : 0;
    
    if(typeNumber === hintNumber){
        mountFeedback('feedback feedback-win', 'Got it right!!!')
        newNumber.removeAttribute('disabled');
        segment.classList.add('segment-win');
        hint.forEach(h => h.setAttribute('disabled', true));
    }
}