import { Inter } from 'next/font/google'
import { ExcelReader } from '@/components/common/ExcelReader'
import { ExcelSheets } from '@/models'
import { formatDate } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleFileUploaded = (data: ExcelSheets) => {
    console.log('uploaded file', data)

    // console.log( 'primer registro', data.enero[0].DATE.toLocaleString()) //1/1/2023, 12:00:48 AM

    // console.log( 'formatDate', formatDate(data.enero[0].DATE)) //01/01/2023    
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
      <div>
        <ExcelReader onFileUploaded={(e) => handleFileUploaded(e) }/>
      </div>
    </main>
  )
}