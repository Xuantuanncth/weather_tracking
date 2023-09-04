import Image from 'next/image'
import Header from '@/components/header'
import BodyData from '@/components/body'

export default function Home() {
  return (
    <main className="flex justify-center h-max h-screen bg-white">
      <div className='mt-[50px]'>
        <Header></Header>
        <BodyData></BodyData>
      </div>
    </main>
  )
}
