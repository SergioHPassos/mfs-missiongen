import React from 'react'

export default function SingleSection(props: Props) {
  return (
    <>
      <div className="flex items-center justify-start">
        <div className="pl-5 md:px-4">
          <div className="">
            <p className="text-[0.6rem] font-medium sm:text-[0.75rem] smd:text-base">
              {props.sectionTitle}:
            </p>
            <div className="pl-4">
              <button className="btn btn-success btn-xs text-[0.6rem] sm:text-[0.75rem] smd:text-base">
                {props.subsectionText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  sectionTitle?: string
  subsectionText?: string
}
