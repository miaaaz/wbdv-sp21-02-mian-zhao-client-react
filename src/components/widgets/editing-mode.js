import React, {useState} from 'react'

const EditingMode = ({widget, updateWidget, deleteWidget, setEditing}) => {
  const [widgetCache, setWidgetCache] = useState(widget)

  return (
    <>
      <select value={widgetCache.type} onChange={(e) => {
        setWidgetCache(widgetCache => ({...widgetCache, type: e.target.value}))}
      }

              className="form-control mb-3">
        <option value={"PARAGRAPH"}>Paragraph</option>
        <option value={"HEADING"}>Heading</option>
      </select>

      <i
          onClick={() => {
            updateWidget(widgetCache.id, widgetCache)
            setEditing(false)
          }}
          className="fas fa-check float-right m-0"/>
      <i
          onClick={() => deleteWidget(widget.id)}
          className="fas fa-trash float-right"/>

      <>
        {
          widgetCache.type === "PARAGRAPH" &&
          <textarea
              onChange={(e) => setWidgetCache(widgetCache => ({...widgetCache, text: e.target.value}))}
              value={widgetCache.text}
              className="form-control"/>
        }
        {
          widgetCache.type === "HEADING" &&
              <>
                <input onChange={(e) => setWidgetCache(widgetCache => ({...widgetCache, text: e.target.value}))} value={widgetCache.text} className="form-control mb-3"/>

                <select onChange={(e) => setWidgetCache(widgetCache => ({...widgetCache, size: parseInt(e.target.value)}))} value={widget.size} className="form-control">
                  <option value={1}>Heading 1</option>
                  <option value={2}>Heading 2</option>
                  <option value={3}>Heading 3</option>
                  <option value={4}>Heading 4</option>
                  <option value={5}>Heading 5</option>
                  <option value={6}>Heading 6</option>
                </select>

              </>
        }
      </>


    </>
  )
}

export default EditingMode