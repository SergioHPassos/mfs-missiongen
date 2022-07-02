import React from 'react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// interfaces
import type { Pilot } from '../interfaces/UtilityInterfaces'
import SingleSection from './SingleSection'

// components
import Title from './Title'

export default function Profile(props: Props) {
  return (
    <div className="rounded-lg md:px-4">
      <div className="rounded-lg bg-base-300 shadow-xl">
        <Title title="Pilot Profile" />

        <div className="flex space-x-6 rounded-lg pb-4 shadow-lg md:px-4">
          <div className="">
            <SingleSection
              sectionTitle={'Name'}
              subsectionText={`${
                props.pilot?.firstName
              } ${props.pilot?.middleName.substring(0, 1)}. ${
                props.pilot?.lastName
              }`}
            />
            <SingleSection
              sectionTitle={'Age'}
              subsectionText={`${props.pilot?.age}`}
            />
            <SingleSection
              sectionTitle={'Money'}
              subsectionText={`${props.pilot?.money
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
            />
            <SingleSection
              sectionTitle={'Distance Traveled'}
              subsectionText={`${props.pilot?.totalDistance
                .toString()
                .substring(0, 8)} NM`}
            />
          </div>

          <div className="">
            <SingleSection
              sectionTitle={'Total Cargo'}
              subsectionText={`${props.pilot?.totalCargo
                .toString()
                .substring(0, 8)} lb`}
            />
            <SingleSection
              sectionTitle={'Total Passenger'}
              subsectionText={`${props.pilot?.totalPassenger}`}
            />
            <SingleSection
              sectionTitle={'Missions Completed'}
              subsectionText={`${props.pilot?.missions.length}`}
            />
            <SingleSection
              sectionTitle={'Planes Owned'}
              subsectionText={`${props.pilot?.planes.length}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  pilot?: Pilot
}
