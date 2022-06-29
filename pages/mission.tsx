import React, { useState, useEffect, useContext } from 'react'

// context
import { PilotContext } from '../context/PilotContext'

export default function mission() {
  const { state } = useContext(PilotContext)

  return (
    <>
      <div className="shadow-lg md:rounded md:px-4">
        <div className="">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <button className="btn">{state.mission?.title}</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className="btn">
                    {state.mission?.departingAirport} /{' '}
                    {state.mission?.arrivingAirport}
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className="btn">
                    $
                    {state.mission?.reward
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
