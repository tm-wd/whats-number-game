import { UTILS } from "./utils";
import { start } from "./start";

export const newNumber = () => {
    UTILS.NEWNUMBER.addEventListener('click', e => {
        const classReference = document.querySelector('.feedback');
        e.preventDefault();
        classReference.remove();
        UTILS.NEWNUMBER.setAttribute('disabled', true);
    
        UTILS.SEGMENT.classList.contains('segment-error') && UTILS.SEGMENT.classList.remove('segment-error');
        UTILS.SEGMENT.classList.contains('segment-win') && UTILS.SEGMENT.classList.remove('segment-win');
    
        UTILS.SEGMENT.innerHTML = UTILS.RESET;
    
        UTILS.HINT.forEach(h => h.removeAttribute('disabled', true));
        start();
    }, false);
}
