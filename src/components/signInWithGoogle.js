import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { UserInfo } from "./firebase-config";



const googleProvider = new GoogleAuthProvider(); // Create Google auth provider

export const Auth = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const signOff = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };
  const detail =UserInfo();
  return (
    <div>
      {!detail.userName ? (
        <button className="hover:text-orange-400" onClick={handleSignIn}>
          Sign
        </button>
      ) : (
        <button className="hover:text-orange-400 ms-3" onClick={signOff}>
          Sign Out
        </button>
      )}
    </div>
  );
};
