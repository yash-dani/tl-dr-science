import { IResponse } from '../interfaces'
import { v4 as uuidv4 } from 'uuid'

export const sampleResponseData: IResponse[] = [
    {
      id: uuidv4(),
      input: "User input text",
      response: "GPT-3 response"
    }
]