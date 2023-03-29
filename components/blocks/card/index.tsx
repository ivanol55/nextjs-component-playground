import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

interface Props {
    titleText: string
    descriptionText: string
    link: string
}

export default function Card(
        props: Props
    ) {
    return (
            <a
            href={props.link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
                <h2 className={inter.className}>
                    {props.titleText} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    {props.descriptionText}
                </p>
            </a>
    )
}