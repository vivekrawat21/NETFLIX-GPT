import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";


export const createUser = (auth,email,password,displayName) =>
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
      displayName: displayName,
    });
    
      return user;
    // ...
  })
  .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      throw error;
    // ..
  });



export const signInUser = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      throw error;
    });