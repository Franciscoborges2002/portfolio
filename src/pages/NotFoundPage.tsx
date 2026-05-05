import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 p-40">
      <h1 className="text-3xl font-bold tracking-tight">{t('notFound.title')}</h1>
      <p className="text-xl">{t('notFound.message')}</p>
      <Link to="/" className="underline">{t('notFound.home')}</Link>
    </div>
  )
}