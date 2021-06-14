import React, { useState, useEffect, createContext, useContext } from 'react'
import { IResponse } from '../interfaces'
import { sampleResponseData } from '../utils/sample-data'

type ResponsesContextType = {
  responses: IResponse[]
  handleResponseAdd: (newResponse: IResponse) => void
}

const defaultContextValue = {
  responses: [],
  handleResponseAdd: (response: IResponse) => {},
}

export const ResponsesContext = createContext<ResponsesContextType>(defaultContextValue)

const LOCAL_STORAGE_KEY = 'tldr_papers.responses'

type Props = {
  children: React.ReactNode
}

export const ResponseProvider = ({ children } : Props) => {
  const [responses, setResponses] = useState<IResponse[]>(sampleResponseData)

  useEffect(() => {
    const responseJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (responseJSON != null) setResponses(JSON.parse(responseJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(responses))
  }, [responses])

  const responsesContextValue = {
    responses,
    handleResponseAdd
  }

  function handleResponseAdd(newResponse: IResponse) {
    setResponses([...responses, newResponse])
  }

  return (
    <ResponsesContext.Provider
      value={responsesContextValue}
    >
      {children}
    </ResponsesContext.Provider>
  )
}

export const useResponses = () => useContext(ResponsesContext)

export default ResponseProvider
