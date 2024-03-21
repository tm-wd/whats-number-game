"use strict";

import type { TAPI } from "../types";

export const API = (): Promise<TAPI> => fetch(`https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`, {method: `GET`});

export const getAleatoryNumber = async (): Promise<number | unknown> => {
    try {
        const getRequestByAPI = await API();
        const getStatusByAPI = getRequestByAPI.status
        
        const getValueNumberByAPI = getStatusByAPI === 200 
            ? await getRequestByAPI.json()
            : console.warn(getStatusByAPI)
        
        return getValueNumberByAPI.value

    } catch(e) {
        console.error(e)
    }
}
