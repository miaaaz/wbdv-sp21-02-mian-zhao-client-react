import React, {useState} from 'react'

const EditingParagraphWidget = ({widget, setWidgetCache}) => {
  // Current widget, used to display changes in the UI
  const [curWidget, setCurWidget] = useState(widget)

  return (
      <div>
        {
          <textarea
              onChange={
                (e) => {
                  setWidgetCache(widgetCache => ({...widgetCache, text: e.target.value}))
                  setCurWidget(preWidget => ({...preWidget, text: e.target.value}))
                }
              }
              value={curWidget.text}
              className="form-control"/>
        }
      </div>
  )
}


export default EditingParagraphWidget