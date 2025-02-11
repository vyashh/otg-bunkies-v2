"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/utils/firebaseConfig";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  console.log({ user });

  if (!user && !userSession) {
    return router.push("register");
  }

  return (
    <>
      {" "}
      <button
        onClick={() => {
          signOut(auth);
          sessionStorage.removeItem("user");
        }}
      >
        Log out
      </button>
    </>
  );
}
