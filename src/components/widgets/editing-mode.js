import React, {useState} from 'react'

const EditingMode = ({widget, updateWidget, deleteWidget, setEditing}) => {
  const [widgetCache, setWidgetCache] = useState(widget)

  return (
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
      <select value={widgetCache.type} onChange={(e) => {
        setWidgetCache(widgetCache => ({...widgetCache, type: e.target.value}))}
      }

              className="form-control mb-3">
        <option value={"PARAGRAPH"}>Paragraph</option>
        <option value={"HEADING"}>Heading</option>
        <option value={"IMAGE"}>Image</option>
      </select>



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

                <select onChange={(e) => setWidgetCache(widgetCache => ({...widgetCache, size: parseInt(e.target.value)}))} value={widgetCache.size} className="form-control">
                  <option value={1}>Heading 1</option>
                  <option value={2}>Heading 2</option>
                  <option value={3}>Heading 3</option>
                  <option value={4}>Heading 4</option>
                  <option value={5}>Heading 5</option>
                  <option value={6}>Heading 6</option>
                </select>

              </>
        }
        {
          widgetCache.type === "IMAGE" &&
          <>
            <div>
              <form>
                <div
                    className={"wbdv-image-url-input form-group"}>
                  <label htmlFor="wbdv-image-url">Image
                    URL</label>
                  <input value={widgetCache.url || ""}
                         placeholder={"Image url"}
                         onChange={(e) => setWidgetCache(
                             widgetCache => ({...widgetCache, url: e.target.value}))}
                         className={"form-control"}
                         id={"wbdv-image-url"}/>
                </div>
                <div
                    className={"wbdv-image-width-input form-group"}>
                  <label htmlFor="wbdv-image-width">Image
                    Width</label>
                  <input value={widgetCache.width || ""}
                         placeholder={"Image width"}
                         onChange={(e) => setWidgetCache(
                             widgetCache => ({...widgetCache, width: e.target.value}))}
                         className="form-control"
                         id={"wbdv-image-width"}/>
                </div>
                <div
                    className={"wbdv-image-width-input form-group"}>
                  <label htmlFor="wbdv-image-height">Image
                    Height</label>
                  <input value={widgetCache.height || ""}
                         placeholder={"Image height"}
                         onChange={(e) => setWidgetCache(
                             widgetCache => ({...widgetCache, height: e.target.value}))}
                         className="form-control"
                         id={"wbdv-image-height"}/>
                </div>
              </form>
            </div>
            </>
        }
      </>


    </>
  )
}

export default EditingMode