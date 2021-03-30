import React, {useState} from 'react'
import EditingMode from "./editing-mode";

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {
  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState(widget)

  return (
      <div>
        {
          !editing &&
          <>
            <i onClick={() => setEditing(true)}
               className="fas fa-cog float-right"/>
            <img width={widget.width} height={widget.height} src={widget.url}/>
          </>

        }
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
      </div>
  )

}


export default ImageWidget