import { useEffect, useState } from 'react'

import Image from 'next/image'


interface ProposePlanDataType {
  id: number
  initTeethNo?: number
  finalTeethNo?: number
  treatmentType?: string
  proposeDetail?: string
}

type props = {
  index: number
  data: ProposePlanDataType
  onDelete: (index: number) => void
  // onProposePlanDataChange: (ProposePlanDataType:ProposePlanDataType) => void
}

const ProposePlan = ({ index, data, onDelete }: props) => {
  const options = Array.from({ length: 38 }, (_, i) => i + 11)
  const [proposePlanData, setProposePlanData] = useState<ProposePlanDataType>(data)
  const [initTeethNo, setInitTeethNo] = useState<number>()
  const [finalTeethNo, setFinalTeethNo] = useState<number>()
  const [treatmentType, setTreatmentType] = useState<string>()
  const [proposeDetail, setProposeDetail] = useState<string>()

  const handleDelete = () => {
    // Ensure onDelete function is provided by the parent component
    // console.log(`Propose Plan Unique Number: ${index}`)
    if (onDelete) {
      onDelete(index) // Call the parent's deletion handler with the component's index
    } else {
      console.error('onDelete function not provided by parent component')
    }
  }

  // checking if data is put properly
  useEffect(() => {
    // console.log(`${index} Initial Teeth Number: ${initTeethNo}`)
    if (initTeethNo) {
      setProposePlanData({
        ...proposePlanData,
        id: index,
        initTeethNo: initTeethNo
      })
      console.log(proposePlanData)
    }
    

    // if (proposePlanData){
    //   onProposePlanDataChange(proposePlanData)
    // }
  }, [initTeethNo])

  useEffect(() => {
    // console.log(`${index} Final Teeth Number: ${finalTeethNo}`)
    if (finalTeethNo) {
      setProposePlanData({
        ...proposePlanData,
        id: index,
        finalTeethNo: finalTeethNo
      })
    }
    // if (proposePlanData){
    //   onProposePlanDataChange(proposePlanData)
    // }
  }, [finalTeethNo])

  useEffect(() => {
    // console.log(`${index} Propose plan treatment type: ${treatmentType}`)
    if (treatmentType) {
      setProposePlanData({
        ...proposePlanData,
        id: index,
        treatmentType: treatmentType
      })
    }
    // if (proposePlanData){
    //   onProposePlanDataChange(proposePlanData)
    // }
  }, [treatmentType])

  useEffect(() => {
    // console.log(`${index} Propose plan detail: ${proposeDetail}`)
    if (proposeDetail) {
      setProposePlanData({
        ...proposePlanData,
        id: index,
        proposeDetail: proposeDetail
      })
    }
    // if (proposePlanData){
    //   onProposePlanDataChange(proposePlanData)
    // }
  }, [proposeDetail])

  return (
    <div className="my-1 grid grid-cols-12 gap-3">
      {/* <div>
        {index}
      </div> */}
      <div>
        <select
          name="init-teeth-idx"
          className="w-full rounded-sm border border-gray px-1 py-2 dark:border-tahiti dark:bg-dark-mode  dark:text-tahiti dark:placeholder:text-tahiti-dark "
          // onChange={(e) => setInitTeethNo(parseInt(e.target.value))}
          onChange={(e) => {
            setProposePlanData({
              ...proposePlanData,
              id: index,
              initTeethNo: parseInt(e.target.value)
            })
            console.log(proposePlanData)
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="place-self-center text-center">
        <div className="font-semibold">-</div>
      </div>
      <div>
        <select
          name="end-teeth-idx"
          className="w-full rounded-sm border border-gray px-1 py-2 dark:border-tahiti dark:bg-dark-mode  dark:text-tahiti dark:placeholder:text-tahiti-dark "
          onChange={(e) => setFinalTeethNo(parseInt(e.target.value))}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-2">
        <select
          name="treatment-type"
          className="w-full rounded-sm border border-gray px-1 py-2 dark:border-tahiti dark:bg-dark-mode  dark:text-tahiti dark:placeholder:text-tahiti-dark "
          onChange={(e) => setTreatmentType(e.target.value)}
        >
          <option value={'Treatment Type I'}>Treatment Type I</option>
          <option value={'Treatment Type II'}>Treatment Type II</option>
        </select>
      </div>
      <div className="col-span-3">
        <input
          type="text"
          placeholder="placeholder"
          name="propose-plan-detail"
          className="w-full rounded-sm border border-gray px-1 py-2 dark:border-tahiti dark:bg-dark-mode  dark:text-tahiti dark:placeholder:text-tahiti-dark "
          onChange={(e) => setProposeDetail(e.target.value)}
        />
      </div>
      <div className="place-content-center">
        <button
          style={{ width: '35px', height: '35px' }}
          className="rounded-sm border border-gray bg-gray px-1 py-2 dark:border-tahiti dark:bg-dark-mode  dark:text-tahiti dark:placeholder:text-tahiti-dark"
          onClick={handleDelete}
        >
          <div className="flex justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 13L12.8794 1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 13L1.12061 1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProposePlan