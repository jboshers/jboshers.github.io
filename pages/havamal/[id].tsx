import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Verse } from '../../interfaces'
import Layout from '../../components/havamal/Layout'
import VerseCmp from '../../components/havamal/Verse'
import {havamal} from '../../utils/havamal'

type Props = {
  verse?: Verse
  errors?: string
}

const Havamal = ({ verse }: Props) => {
  return(
    <Layout title="Havamal">
      <VerseCmp
        verse={verse}
      />
    </Layout>
  )}

export default Havamal

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = havamal.map((verse) => ({
    params: { id: verse.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const verse = havamal.find((data) => data.id === Number(id))
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { verse } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
