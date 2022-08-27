import app from "./firebase/app.js"
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-SERVICE-firestore.js'

export async function subscribeToHellfireClub(subcription){
    const db = getFirestore(app)
    const hellfireClubCollection = collection (db,'hellfire-clube')
    const docRef = await addDoc(hellfireClubCollection, subcription)
    return docRef.id
}
