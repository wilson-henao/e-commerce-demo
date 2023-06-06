import { Typography } from '@material-tailwind/react'
import Footer from './Footer'
import Header from './Header'
import { useQuery, gql } from '@apollo/client'

interface Props {
  children: JSX.Element
}

const ALL_COLLECTIONS = gql`
  {
    collections(first: 7) {
      edges {
        node {
          id
          title
          description
          image {
            id
            url
          }
        }
      }
    }
  }
`

export default function Layout ({ children }: Props) {
  const { loading, error, data } = useQuery(ALL_COLLECTIONS)

  return (error != null)
    ? (
      <div className='container mx-auto p-4'>
        <Typography variant='h1' className='my-2'>
          Clothing Store
        </Typography>
        <Typography variant='lead'>
          An error has occurred, please reload the page. If the error persists,
          please contact us as soon as possible using the following email:
          wilson.3698@utp.edu.co
        </Typography>
      </div>
      )
    : (
      <>
        <Header collections={data?.collections.edges} loading={loading} />
        {children}
        <Footer />
      </>
      )
}
