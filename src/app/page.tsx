import Image from 'next/image'
import styles from './page.module.css'
import ButtonDisplay from './components/buttons/ButtonDisplay'

import Example from './components/typography/Example'
import BadgeDisplay from './components/badges/BadgeDisplay'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Site under construction</h1>
      </div>
      <div>    
        <ButtonDisplay></ButtonDisplay>
        <Example></Example>
     
      </div>

      <div>
      <BadgeDisplay></BadgeDisplay>
      </div>
    </main>
  )
}
