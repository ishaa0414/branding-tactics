import React from 'react'


const BuildingBrandGrid = () => {
  return (
    <div  className="flex h-screen w-full flex-col items-center justify-center p-6 bg-black">
 
      <div className="grid h-full w-full grid-cols-5 grid-rows-2 gap-1">
        <div className="col-span-2 rounded-3xl bg-orange-400"></div>
        <div className="col-span-2 rounded-3xl bg-green-400"></div>
        <div className="rounded-3xl row-span-2 bg-purple-400"></div>
        <div className="col-span-2 rounded-3xl bg-blue-400"></div>
        <div className="col-span-1 row-span-2 rounded-3xl bg-pink-400"></div>
        <div className="col-span-1 row-span-2 rounded-3xl bg-yellow-400"></div>
      </div>
    </div>
  )
}

export default BuildingBrandGrid