import styles from '@/styles/Home.module.css'

export default function MonospaceDescriptionBlock(
        { descriptionText }: { descriptionText: string }
    ) {
    return (
        <div>
            <p>
                <code className={styles.code}>{descriptionText}</code>
            </p>
        </div>
    )
}