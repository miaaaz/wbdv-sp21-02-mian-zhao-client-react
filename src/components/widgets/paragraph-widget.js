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
            <i
                onClick={() => setEditing(true)}
                className="fas fa-cog float-right"/>
            {widget.text}

          </p>
        }
      </>
  )
}

export default ParagraphWidget