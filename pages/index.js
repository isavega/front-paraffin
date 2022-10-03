import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCurriculums = async () => {
      try {
        const response = await axios.get("/api/curriculums");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCurriculums();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>🔥 Paraffin 🔥</h1>

        {data?.map((item, i) => (
          <p className={styles.description} key={item.id}>
            <BasicCard title={item.name} description={item.description} />
          </p>
        ))}
      </main>
    </div>
  );
}
