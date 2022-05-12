import React, { FC } from 'react'
import styled from '@emotion/styled'

interface ComponentProps {
  className?: string
  label: string
}

const Component: FC<ComponentProps> = ({ label, className }) => (
  <div className={className}>{label}</div>
)

const StyledComponent0 = styled(Component)`
  color: ${props => (props.label === 'Important' ? 'red' : 'green')};
`

const StyledComponent1 = styled(Component)({
  color: 'red'
})
const names:any=['tarun','bhan','singh'];
const Result = () => (
  <div>
    {/* <StyledComponent0 label="Important" />
    <StyledComponent1 label="Yea! No need to re-type this label prop." />
    <div>
    {  names.map((currElem:any)=>(<h1 >{currElem}</h1> ))} */}
    {/* </div> */}
  </div>
)
export default Result;