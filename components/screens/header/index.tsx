import styles from '@/styles/Home.module.css'
import MonospaceDescriptionBlock from '@/components/primitives/text/description'
import Card from '@/components/blocks/card'
import Image from 'next/image'

export default function Header(
    { titleCardText }: { titleCardText: string }
    ) {
    return (
        <div className={styles.description}>
            <MonospaceDescriptionBlock descriptionText={titleCardText} />
            <Card titleText="Back to home" descriptionText="" link="/"/>
        </div>

    )
  }
