import { createContext, useState } from "react";
import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async () => {
    const user = await signInWithGooglePopup();
    if (!user) {
      alert("user login failed");
    }

    setUser(user);
  };

  const value = { user, login };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
