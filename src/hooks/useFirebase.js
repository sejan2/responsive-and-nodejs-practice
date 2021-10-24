import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializaAuthentication from "../Pages/Login/Firebase/firebase.init";
initializaAuthentication();
const useFirebase = () => {
    const [user, setuser] = useState({})
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setuser(result.user)
            })
            .finally(() => { setIsLoading(false) })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setuser(user)
            }
            else {
                setuser({})
            }
            setIsLoading(false)
        });

        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }

    return { user, isLoading, signInUsingGoogle, logOut }
}
export default useFirebase;