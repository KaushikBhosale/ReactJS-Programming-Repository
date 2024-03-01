import {React, useMemo, useState} from 'react'

const nums= new Array(30_000_000).fill(0).map((_,i)=>{
return {
    index :i,
    isMagical:i===29_000_000
}
})
const Usememo = () => {
    const [numbers, setNumbers] = useState(nums);

    // const magical = numbers.find(item=>item.isMagical===true); // Expensive Computation
    const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [])
  return (
    <>
    <div>
        <h2>useMemo</h2>
        <h2>The Magical No : {magical.index}</h2>
    </div>
      
    </>
  )
}

export default Usememo
