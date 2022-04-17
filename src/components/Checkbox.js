import React, { useState, useEffect } from 'react';


const Checkbox = ({ keyName, filter, passSetFilter }) => {
  const myJSON = JSON.stringify(filter);
  const [Checked, setChecked] = useState()

  const onClick = () => {
    let filterData = filter
    filterData.checkboxes[keyName] = !filterData.checkboxes[keyName]
    setChecked(!Checked)
    passSetFilter(filterData)
  }
  return (
    <div className="" onChange={onClick}>
      <input type="checkbox" className="checkbox-input" id={keyName} checked={Checked} />
      <label className="checkbox-label" htmlFor={keyName}>{keyName}</label>
      {/* <p>{myJSON}</p> */}
    </div>
  )
};

export default Checkbox;