import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
        <div>
   <h1>{t('home.name')}</h1>
   <h1>{t('Welcome to React')}</h1>
   <h1>{t('Welcome to React')}</h1>
   <ul className="flex gap-3">
    <li>github</li>
    <li>linkedin</li>
    <li>insta</li>
   </ul>
    </div>
    </>
  )
}

export default Home
