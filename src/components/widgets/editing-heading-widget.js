import React, {useState} from 'react'

const EditingHeadingWidget = ({widget, setWidgetCache}) => {

  // Current widget, used to display changes in the UI
  const [curWidget, setCurWidget] = useState(widget)

  return (
      <div>
        {
          <>
            <input
                onChange={
                  (e) => {
                    // Updates the widget in the database.
                    // The widgetCache is passed by the save button
                    setWidgetCache(
                        widgetCache => ({...widgetCache, text: e.target.value}))
                    // Reflects changes in the UI
                    setCurWidget(
                        preWidget => ({...preWidget, text: e.target.value}))
                  }

                }
                value={curWidget.text}
                className="form-control mb-3"/>

            <select
                onChange={
                  (e) => {
                    setWidgetCache(widgetCache => ({
                      ...widgetCache,
                      size: parseInt(e.target.value)
                    }))
                    setCurWidget(preWidget => ({
                      ...preWidget,
                      size: parseInt(e.target.value)
                    }))
                  }

                }
                value={curWidget.size}
                className="form-control">
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>
              <option value={6}>Heading 6</option>
            </select>

          </>
        }
      </div>
  )

}

export default EditingHeadingWidget