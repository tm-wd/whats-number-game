import { UTILS } from './utils';

export const feedback = (cls: string, text: string): object | undefined => {
    
    const CLASSREFERENCE = document.querySelector('.feedback');

    CLASSREFERENCE && CLASSREFERENCE.remove();
    let element = document.createElement('span');
    element.className = cls;
    element.textContent = text;

    if (UTILS.FEEDBACK !== null) {
        return UTILS.FEEDBACK.appendChild(element)
    }
}
