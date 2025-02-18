import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { clientConfig, serverConfig } from "../config";
import HomePage from "./homepage/page";
import Onboarding from "./onboarding/page";
import { getHouseData } from "./utils/db";

export default async function Home() {
  const tokens = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  let data: any = null;

  try {
    data = await getHouseData(tokens?.decodedToken.uid!);
  } catch (err) {
    console.error("Error fetching data:", err);
  } finally {
  }

  if (!tokens) {
    notFound();
  }

  return data ? (
    <HomePage
      email={tokens?.decodedToken.email}
      userId={tokens?.decodedToken.uid}
    />
  ) : (
    <Onboarding userId={tokens?.decodedToken.uid} />
  );
}
