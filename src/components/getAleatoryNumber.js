"use strict";

const api = () => fetch(`https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`, {method: `GET`});

export const getAleatoryNumber = () => {
    try{
        return api()
        .then(status => status.status === 200 ? status.json() : status.status)
        .then(number => (!Number(number)) ? number.value : number)
    }catch(e){
        console.error(e)
    }
    
}