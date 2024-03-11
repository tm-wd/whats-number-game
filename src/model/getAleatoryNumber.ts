"use strict";

const API = () => fetch(`https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`, {method: `GET`});

export const getAleatoryNumber = async () => {
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
