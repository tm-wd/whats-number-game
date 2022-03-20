import { UTILS } from './utils';

export const feedback = (cls, text) => {
    
    const CLASSREFERENCE = document.querySelector('.feedback');

    CLASSREFERENCE && CLASSREFERENCE.remove();
    let element = document.createElement('span');
    element.className = cls;
    element.textContent = text;
    UTILS.FEEDBACK.appendChild(element)
    
}