"use strict";

import { mount } from "../services/sequence";

export const mountSegments = (number) => {

    const VIEWNUMBER = document.querySelector(`.view-number__number`);

    const elementNumber = (number) ? number : '502';
    const groupNumber = [];

    for( let i = 0, q = elementNumber.length; i < q; i++){
        i == 0 
        ? elementNumber[i] != '0' 
            ? groupNumber.push(mount(elementNumber[i]))
            : 0 
        : groupNumber.push(mount(elementNumber[i])); 
    }

    VIEWNUMBER.innerHTML = groupNumber.join('');

}