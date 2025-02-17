"use client";

import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app, db } from "../../firebase";
import { getHouseData } from "../utils/db";
import { useState, useEffect } from "react";

interface HomePageProps {
  userId?: string;
}

export default function HomePage({ userId }: HomePageProps) {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [showJoinMenu, setShowJoinMenu] = useState<boolean>(false);
  const [showCreateMenu, setShowCreateMenu] = useState<boolean>(false);

  const handleOptions = (chosenOption: string) => {
    chosenOption == "join" && setShowJoinMenu(true);
    chosenOption == "create" && setShowCreateMenu(true);
    setShowOptions(false);
    console.log(chosenOption);
  };

  useEffect(() => {}, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <h1>Onboarding</h1>
      {showOptions && (
        <>
          <button onClick={() => handleOptions("join")}>Join House</button>
          <button onClick={() => handleOptions("create")}>Create House</button>
        </>
      )}
      {showJoinMenu && (
        <>
          <h2>Join</h2>
        </>
      )}
      {showCreateMenu && (
        <>
          <h2>Create</h2>
        </>
      )}
    </main>
  );
}
