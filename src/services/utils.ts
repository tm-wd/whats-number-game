import type { TUTILS } from "../types"

export class GeneratedNumber {
    public static toGenerated: number | null | unknown = null;
}

export const UTILS:TUTILS = {
    BTNSEND: document.querySelector(`.hint__send`),
    INPUTSEND: document.querySelector(`.hint__input`),
    FEEDBACK: document.querySelector('.view-number'),
    NEWNUMBER: document.querySelector('.new-number'),
    HINT: document.querySelectorAll('.number'),
    SEGMENT: document.querySelector(`.view-number__number`),
    RESET: `<svg width="75" height="135" viewBox="0 0 75 135">
                <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34"/>
                <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34"/>
                <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34"/>
                <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34"/>
                <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#262A34"/>
                <path class="segment" d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34"/>
                <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#DDDDDD"/>
            </svg>`,
}

