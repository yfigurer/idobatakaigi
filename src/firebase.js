import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCnEzGk7BLj5MLIC2_M-bBpR-L41AhW7N8",
  authDomain: "idobatakaigi-with-ham-fo-f163d.firebaseapp.com",
  databaseURL: "https://idobatakaigi-with-ham-fo-f163d-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-with-ham-fo-f163d",
  storageBucket: "idobatakaigi-with-ham-fo-f163d.appspot.com",
  messagingSenderId: "984871648119",
  appId: "1:984871648119:web:c52389e0d5fd412a29bf72"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const messageRef = ref(database, 'messages');

export const pushMessage = ({name, text}) => {
    push(messageRef, {name, text});
}