import React, {useState} from 'react'
import CommonSection from './../shared/CommonSection'
import { Container, Row } from 'reactstrap'

import { useLocation } from 'react-router-dom'
import TourCard from './../shared/TourCard'

const SearchResultList = () => {

  const location = useLocation()

  const [data] = useState(location.state)

  console.log(data)

  return <>
    <CommonSection title={'Tour search Result'}>
    <section>
      <Container>
        
      </Container>
    </section>
    </CommonSection>
  </>
}

export default SearchResultList