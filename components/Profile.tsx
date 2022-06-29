import React from 'react'

// dependencies
import { v4 as uuidv4 } from 'uuid'

// interfaces
import type { Pilot } from '../interfaces/UtilityInterfaces'

// components
import Title from './Title'

export default function Profile(props: Props) {
  return (
    <div className="md:px-4">
      <div className="bg-base-300 shadow-xl">
        <Title title="Pilot Profile" />
        {props.pilots &&
          props.pilots.map((pilot) => {
            return (
              <div
                className="flex items-center justify-center px-3 pb-6"
                key={uuidv4()}
              >
                <div className="w-full">
                  <table className="table-zebra table-compact table w-full shadow-lg">
                    <tbody>
                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">
                            Pilot:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`${pilot.firstName} ${pilot.middleName[0]}. ${pilot.lastName}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">Age:</button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`${pilot.age}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">
                            Money:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`$ ${pilot.money
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">
                            Distance Traveled:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`${pilot.totalDistance
                              .toString()
                              .substring(0, 8)} NM`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">
                            Total Cargo:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`${pilot.totalCargo
                              .toString()
                              .substring(0, 8)} lb`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">
                            Total Passenger:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`${pilot.totalPassenger}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">
                            Missions Completed:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`${pilot.missions.length}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-sm">
                            Planes Owned:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm">
                            {`${pilot.planes.length}`}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

interface Props {
  pilots?: Pilot[]
}
