"use client";

import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app, db } from "../../firebase";
import { getHouseData } from "../utils/db";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

interface HomePageProps {
  email?: string;
  userId?: string;
}

export default function HomePage({ email, userId }: HomePageProps) {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getSnapshot = async () => {
    try {
      const data = await getHouseData(userId!);

      if (data) {
        // const houseDoc = querySnapshot.docs[0]; // Get only the first document
        setData(data);
      } else {
        setData(null); // No house found
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data.");
    } finally {
      setIsLoading(false);
    }
  };

  async function handleLogout() {
    await signOut(getAuth(app));

    await fetch("/api/logout");

    router.push("/login");
  }

  useEffect(() => {
    getSnapshot();
  }, [userId]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl mb-4">Super secure home page</h1>
      <p className="mb-8">
        Only <strong>{email}</strong> holds the magic key to this kingdom!
      </p>
      {data.title}
      <button
        onClick={handleLogout}
        className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800"
      >
        Logout
      </button>
    </main>
  );
}
