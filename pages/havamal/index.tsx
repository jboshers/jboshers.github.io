// import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Verse } from '../../interfaces'
import Layout from '../../components/havamal/Layout'
import VerseCmp from '../../components/havamal/Verse'
import {havamal} from '../../utils/havamal'
import moment from 'moment';

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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async () => {

  try {
    const doy = moment().dayOfYear();
    const id = doy === havamal.length ? (havamal.length - 1) : doy % (havamal.length + 1);
    const verse = havamal.find((data) => data.id === Number(id))
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { verse } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
