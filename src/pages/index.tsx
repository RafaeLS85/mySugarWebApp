import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ExcelReader } from '@/components/common/ExcelReader'

const inter = Inter({ subsets: ['latin'] })


// move to another component 
export default function Home() {

  const handleFileUploaded = (e) => {
    console.log('uploaded file', e)
    
  }


  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
      <div>
        <ExcelReader onFileUploaded={(e) => handleFileUploaded(e) }/>
      </div>
    </main>
  )
}
