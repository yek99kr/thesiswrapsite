import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("./greetings");
  }, []);
  return (
    <div>
      <Head>
        <title>RK.Thesis</title>
      </Head>
    </div>
  );
}
