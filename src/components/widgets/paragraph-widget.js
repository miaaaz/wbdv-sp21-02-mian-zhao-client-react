import React, {useState} from 'react'
import EditingMode from "./editing-mode";

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {

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
          <p>
            {widget.text}
            <i
                onClick={() => setEditing(true)}
                className="fas fa-cog float-right"/>
          </p>
        }
      </>
  )
}

export default ParagraphWidget