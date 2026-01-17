
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from 'next'

export default function Home() {
  return null
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/patients',
      permanent: false, 
    },
  }
}


