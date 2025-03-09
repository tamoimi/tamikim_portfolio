import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
        <div>
   <h1>{t('Welcome to React')}</h1>
    </div>
    </>
  )
}

export default Home
