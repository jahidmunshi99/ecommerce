import React from 'react'
import SectionHead from '../../common/SectionHead'
import CampainsTable from '../../Tables/CampainsTable'

const Campains = () => {
  return (
    <>
        <SectionHead title={'All Campaigns'} item1={'Add New'}/>
        <CampainsTable/>
    </>
  )
}

export default Campains