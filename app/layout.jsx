import { Children } from 'react';
import '../styles/globals.css';

export const metadata ={
    title: "Prompt Flow",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ( {Children  } ) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>

                <main className='app'>
                    {Children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout;