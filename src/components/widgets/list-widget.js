import React, {useState} from 'react'
import EditingListWidget from "./editing-list-widget";
import EditingMode from "./editing-mode";

const ListWidget = ({widget, updateWidget, deleteWidget}) => {

  const [editing, setEditing] = useState(false)

  return (
      <div>
        {
          editing &&
              <EditingMode
                  widget={widget}
                  updateWidget={updateWidget}
                  deleteWidget={deleteWidget}
                  setEditing={setEditing}
              />
        }

        {
          !editing &&
          <>
            <i onClick={() => setEditing(true)}
               className="fas fa-cog float-right"/>
            {
              widget.ordered &&
              <ol>
                {
                  widget.text.split("\n").map((item) => {
                    return (
                        <li key={item}>
                          {item}
                        </li>
                    )
                  })
                }
              </ol>
            }
            {
              !widget.ordered &&
              <ul>

                {
                  widget.text.split("\n").map((item) => {
                    return (
                        <li key={item}>
                          {item}
                        </li>
                    )
                  })
                }
              </ul>
            }
          </>
        }
      </div>
  )
}

export default ListWidget