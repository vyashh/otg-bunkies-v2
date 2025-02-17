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
  const [houseName, setHouseName] = useState<string | null>(null);
  const [showCreateTasksMenu, setShowCreateTasksMenu] =
    useState<boolean>(false);

  const handleOptions = (chosenOption: string) => {
    chosenOption == "join" && setShowJoinMenu(true);
    chosenOption == "create" && setShowCreateMenu(true);
    setShowOptions(false);
    console.log(chosenOption);
  };

  const handleCreateOptions = (chosenOption: string) => {
    chosenOption == "continue create tasks" && setShowCreateTasksMenu(true);
    setShowCreateMenu(false);
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
          <input placeholder="Enter a housecode"></input>
          <p>You can ask the current house admin for the code.</p>
          <button>Continue</button>
        </>
      )}
      {showCreateMenu && (
        <>
          <h2>Create</h2>
          <input
            placeholder="House name"
            onChange={(e: any) => setHouseName(e.target.value)}
          ></input>
          <button onClick={() => handleCreateOptions("continue create tasks")}>
            Continue
          </button>
        </>
      )}
      {showCreateTasksMenu && (
        <>
          <h2>Create Tasks</h2>
        </>
      )}
    </main>
  );
}
