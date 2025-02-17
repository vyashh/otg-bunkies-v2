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

  async function handleLogout() {
    await signOut(getAuth(app));

    await fetch("/api/logout");

    router.push("/login");
  }

  useEffect(() => {}, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <main>
      <h1>onboarding</h1>
    </main>
  );
}
