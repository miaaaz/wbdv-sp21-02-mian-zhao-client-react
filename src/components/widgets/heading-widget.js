import React, { useState} from 'react'
import EditingMode from "./editing-mode";

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
  const [editing, setEditing] = useState(false)


  return(
      <>
        {
          editing &&
          <>
            <EditingMode
                widget={widget}
                updateWidget={updateWidget}
                deleteWidget={deleteWidget}
                setEditing={setEditing}
            />
          </>
        }
        {
          !editing &&
          <>
            <i onClick={() => setEditing(true)} className="fas fa-cog float-right"/>

            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
          </>
        }
      </>
  )
}

export default HeadingWidget