import React, {useState} from 'react'

const ListWidget = ({widget, updateWidget, deleteWidget}) => {

  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState(widget)
  const [orderedState, setOrderedState] = useState(widget.ordered)

  return (
      <div>
        {
          editing &&
          <>
            <i
                onClick={() => {
                  updateWidget(widgetCache.id, widgetCache)
                  setEditing(false)
                }}
                className="fas fa-check float-right m-0"/>
            <i
                onClick={() => deleteWidget(widget.id)}
                className="fas fa-trash float-right"/>

            <input
                id={"wbdv-ordered-checkBox"}
                onChange={(e) => {
                  setOrderedState(e.target.checked)
                  setWidgetCache(
                      widgetCache => ({...widgetCache, ordered: e.target.checked}))
                }
                    }
                checked={orderedState}
                type="checkbox"/>
            <label htmlFor="wbdv-ordered-checkBox" className={"ml-1"}>Ordered</label>

            <p className={"mb-1"}>List items</p>
            <textarea
                onChange={(e) => setWidgetCache(
                    widgetCache => ({...widgetCache, text: e.target.value}))}
                value={widgetCache.text}
                rows={10}
                className="form-control"/>

          </>
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
                        <li>
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