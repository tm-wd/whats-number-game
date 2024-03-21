"use strict";

import { mount } from "../services/sequence";
import type { TMountSegments } from "../types";

export const mountSegments = (number: TMountSegments): string => {

    const VIEWNUMBER = document.querySelector(`.view-number__number`);

    const elementNumber = number ? number : '502';
    const groupNumber = [];

    if(typeof elementNumber === 'string'){
        for( let i = 0, q = elementNumber.length; i < q; i++){
            if (i == 0 ) {
                elementNumber[i] != '0' && groupNumber.push(mount(elementNumber[i]))
            } else {
                groupNumber.push(mount(elementNumber[i]));
            }
        }
    }

    return VIEWNUMBER!.innerHTML = groupNumber.join('');

}
