import React, {useState} from 'react'
import EditingListWidget from "./editing-list-widget";
import EditingHeadingWidget from "./editing-heading-widget";
import EditingImageWidget from "./editing-image-widget";
import EditingParagraphWidget from "./editing-paragraph-widget";

const EditingMode = ({widget, updateWidget, deleteWidget, setEditing}) => {
  const [widgetCache, setWidgetCache] = useState(widget)

  return (
    <>
      {/*Save and delete buttons*/}
      <i
          onClick={() => {
            updateWidget(widgetCache.id, widgetCache)
            setEditing(false)
          }}
          className="fas fa-check float-right m-0"/>
      <i
          onClick={() => deleteWidget(widget.id)}
          className="fas fa-trash float-right"/>

      {/*Type dropdown*/}
      <select value={widgetCache.type} onChange={(e) => {
        setWidgetCache(widgetCache => ({...widgetCache, type: e.target.value}))}
      }

              className="form-control mb-3">
        <option value={"PARAGRAPH"}>Paragraph</option>
        <option value={"HEADING"}>Heading</option>
        <option value={"IMAGE"}>Image</option>
        <option value={"LIST"}>List</option>
      </select>


      <>
        {
          widgetCache.type === "PARAGRAPH" &&
          <EditingParagraphWidget
              widget={widget}
              setWidgetCache={setWidgetCache}
          />
        }
        {
          widgetCache.type === "HEADING" &&
          <EditingHeadingWidget
              widget={widget}
              setWidgetCache={setWidgetCache}
          />
        }
        {
          widgetCache.type === "IMAGE" &&
          <EditingImageWidget
              widget={widget}
              setWidgetCache={setWidgetCache}
          />
        }
        {
          widgetCache.type === "LIST" &&
          <EditingListWidget
              widget={widget}
              setWidgetCache={setWidgetCache}
          />
        }
      </>


    </>
  )
}

export default EditingMode