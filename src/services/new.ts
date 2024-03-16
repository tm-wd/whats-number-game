import { UTILS } from "./utils";
import { start } from "./start";
import { GeneratedNumber } from "./utils";

export const newNumber = () => {

    return UTILS.NEWNUMBER!.addEventListener('click', async e => {
        const classReference = document.querySelector('.feedback');
        e.preventDefault();
        classReference!.remove();
        UTILS.NEWNUMBER!.setAttribute('disabled', 'true');
    
        UTILS.SEGMENT!.classList.contains('segment-error') && UTILS.SEGMENT!.classList.remove('segment-error');
        UTILS.SEGMENT!.classList.contains('segment-win') && UTILS.SEGMENT!.classList.remove('segment-win');
    
        UTILS.SEGMENT!.innerHTML = UTILS.RESET;
    
        UTILS.HINT.forEach(h => h.removeAttribute('disabled'));
        return GeneratedNumber.toGenerated = await start();

    });
}
