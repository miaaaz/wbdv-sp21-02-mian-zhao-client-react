import React, {useState} from 'react'

const EditingImageWidget = ({widget, setWidgetCache}) => {
  // Current widget, used to display changes in the UI
  const [curWidget, setCurWidget] = useState(widget)

  return (
      <div>
        {
          <>
            <div>
              <form>
                {/*URL*/}
                <div
                    className={"wbdv-image-url-input form-group"}>
                  <label htmlFor="wbdv-image-url">Image
                    URL</label>
                  <input value={curWidget.url || ""}
                         placeholder={"Image url"}
                         onChange={
                           (e) => {
                             setWidgetCache(
                                 widgetCache => ({...widgetCache, url: e.target.value}))
                             setCurWidget(
                                 preWidget => ({...preWidget, url: e.target.value}))
                           }
                         }
                         className={"form-control"}
                         id={"wbdv-image-url"}/>
                </div>
                {/*Width*/}
                <div
                    className={"wbdv-image-width-input form-group"}>
                  <label htmlFor="wbdv-image-width">Image
                    Width</label>
                  <input value={curWidget.width || ""}
                         placeholder={"Image width"}
                         onChange={
                           (e) => {
                             setWidgetCache(
                                 widgetCache => ({...widgetCache, width: e.target.value}))
                             setCurWidget(
                                 preWidget => ({...preWidget, width: e.target.value}))
                           }
                         }
                         className="form-control"
                         id={"wbdv-image-width"}/>
                </div>

                {/*Height*/}
                <div
                    className={"wbdv-image-width-input form-group"}>
                  <label htmlFor="wbdv-image-height">Image
                    Height</label>
                  <input value={curWidget.height || ""}
                         placeholder={"Image height"}
                         onChange={
                           (e) => {
                             setWidgetCache(
                                 widgetCache => ({...widgetCache, height: e.target.value}))
                             setCurWidget(
                                 preWidget => ({...preWidget, height: e.target.value}))
                           }
                         }
                         className="form-control"
                         id={"wbdv-image-height"}/>
                </div>
              </form>
            </div>
          </>
        }
      </div>
  )
}


export default EditingImageWidget