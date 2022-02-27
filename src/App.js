import React from "react"

import { CurriculumVitae } from "./Components/CurriculumVitae"

import 'bootstrap/dist/css/bootstrap.min.css'
import './Css/App.css'

import {data} from './data'

export const App = (props) => {
  const DATA = data
  return (
    <>
      <CurriculumVitae data={DATA} />
    </>
  )
}