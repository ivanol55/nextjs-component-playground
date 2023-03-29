import styles from '@/styles/Home.module.css'
import Card from "@/components/blocks/card"

interface footerProp {
    titleText: string
    descriptionText: string
    link: string
}

let footerEntries:footerProp[]
footerEntries = [
    {
        titleText: "This project",
        descriptionText: "See this project in GitHub so you can take a look at the code, fork it, and do whatever you want with it!",
        link: "https://github.com/ivanol55/nextjs-component-playground"
    },
    {
        titleText: "My security side",
        descriptionText: "I mostly do security work and build security tooling. An example linked here is a security scanner integrations set built in Go",
        link: "https://github.com/ivanol55/atomic-threat-hunter"
    },
    {
        titleText: "My study notes",
        descriptionText: "I am always trying to learn something new. Here, the example is the notes I've been building whenever I'm facing a new certification, like reverse engineering",
        link: "https://github.com/ivanol55/malware-reverse-engineering-and-analysis-notes"
    },
    {
        titleText: "My GitHub profile",
        descriptionText: "Here you can explore the rest of the work I've done, the rest of my personal projects, and what I've been up to",
        link: "https://github.com/ivanol55"
    }
]

export default function Footer() {
    const footer:JSX.Element = (
        <div className={styles.grid}>
            <FooterContents/>
        </div>
    )
    return footer
  }

function FooterContents() {
    return (
        <>
          {footerEntries.map((item, index) => (
            <Card
              key={index}
              titleText={item.titleText}
              descriptionText={item.descriptionText}
              link={item.link}
            />
          ))}
        </>
      )
  }