import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata = {
  title: 'Vercel-AI',
  description: 'Discover and share AI prompts',
}
const RootLayout = ({children}) => {
  return (
   <html lang="en">
    <body>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <Provider >

        <main className='app'>
            <Nav/>
            {children}
        </main>
        </Provider>

    </body>


   </html>
  )
}

export default RootLayout   