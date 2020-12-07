import { Verse } from '../../interfaces'
import Layout from '../../components/havamal/Layout'
import VerseCmp from '../../components/havamal/Verse'
import { GetStaticProps } from 'next'
import {havamal} from '../../utils/havamal'

type Props = {
  verses: Verse[]
}

const Havamal = ({ verses }: Props) => {
  return(
    <Layout title="Havamal">
      <ul>
        {verses.map((verse) => (
          <li key={verse.id}>
            <VerseCmp
              verse={verse}
            />
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
          margin: 0 0 2rem 0;
        }
      `}</style>
    </Layout>
  )}

export default Havamal


export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const verses: Verse[] = havamal
  return { props: { verses } }
}
