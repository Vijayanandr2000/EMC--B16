import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";

import { auth, provider } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { user = {} } = result;
      console.log(user);
      setUser(user);
    } catch (error) {
      setUser(null);
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setUser(null);
      alert(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        margin: "100px",
      }}
    >
      <h1>Firebase Authentication using Goodle Provider.</h1>
      {user ? (
        <>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>{user.displayName}</h1>
            <img src={user.photoURL} alt="User" />
            {/* <img
              src="https://lh3.googleusercontent.com/ogw/AF2bZyg7Twu9QR8_olbGWx28NUng8YnZtkKB3Sj4dVDPl3zHc3hC=s64-c-mo"
              alt="User"
            /> */}
          </div>
          <button
            style={{
              padding: "10px 20px",
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          style={{
            padding: "10px 20px",
          }}
          onClick={handleSignIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
}

export default App;
