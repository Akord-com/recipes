import { Akord } from '@akord/akord-js'
import { Field, Form, Formik } from 'formik'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

interface Values {
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const [akord, setAkord] = useState<Akord | null>()

  const login = async (email: string, pass: string) => {
    const { jwtToken, wallet } = await Akord.auth.signIn(
      email,
      pass
    );
    const akord = await Akord.init(wallet, jwtToken)
    setAkord(akord)
  }

  const loginForm = () => {
    return <div className={'p-3'} style={{ width: '340px', backgroundColor: '#fff'}}>
        <h1 className="display-6 mb-3">Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}

          onSubmit={(
            values: Values
          ) => login(values.email, values.password)}
        >
          <Form>
            <div className="mb-3">
              <Field className="form-control" id="email" name="email" placeholder="Email" aria-describedby="emialHelp" />
            </div>

            <div className="mb-3">
              <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        </Formik>
      </div>
  }

  const upload = async (files: FileList | null) => {
    if (!akord) {
      throw new Error('Akord-js not initialized')
    }
    if (!files || !files.length) {
      throw new Error('Failed uploading the file')
    }
    const file = files[0]
    const vaults = await akord?.vault.list()
    if (!vaults || !vaults.length) {
      throw new Error('User does not have any vaults')
    }
    const vault = vaults[0]
    confirm("Uploading file to vault: " + vault.name)
    const { stackId } = await akord.stack.create(vault.id, file, file.name)
    confirm("Created stack: " + stackId)
    setAkord(null)
  }
  
  const uploadForm = () => {
    return <div className={'p-3'} style={{ width: '340px', backgroundColor: '#fff'}}>
        <h1 className="display-6 mb-3">Upload</h1>
        <form>
        <input
          type="file"
          onChange={(e) => upload(e.target.files)}
        />
      </form>
      </div>
  }
  

  console.log(akord)
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        {akord ? uploadForm() : loginForm()} 
      </main>
    </div>
  )
}

export default Home