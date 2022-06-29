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
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Pilot:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            {`${pilot.firstName} ${pilot.middleName[0]}. ${pilot.lastName}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Age:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            {`${pilot.age}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Money:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            {`$ ${pilot.money
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Distance Traveled:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            {`${pilot.totalDistance
                              .toString()
                              .substring(0, 8)} NM`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Total Cargo:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            {`${pilot.totalCargo
                              .toString()
                              .substring(0, 8)} lb`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Total Passenger:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            {`${pilot.totalPassenger}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Missions Completed:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            {`${pilot.missions.length}`}
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <button className="btn btn-info btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                            Planes Owned:
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
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
