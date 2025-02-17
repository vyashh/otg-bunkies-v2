import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { clientConfig, serverConfig } from "../config";
import HomePage from "./homepage/page";

export default async function Home() {
  const tokens = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!tokens) {
    notFound();
  }

  return (
    <HomePage
      email={tokens?.decodedToken.email}
      userId={tokens?.decodedToken.uid}
    />
  );
}
