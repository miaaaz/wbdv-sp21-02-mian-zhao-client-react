import React, {useState} from 'react'

const EditingListWidget = ({widget, setWidgetCache}) => {
  // Current widget, used to display changes in the UI
  const [curWidget, setCurWidget] = useState(widget)
  const [orderedState, setOrderedState] = useState(widget.ordered)

  return (
      <div>
        {
          <>
            {/*Check box*/}
            <input
                id={"wbdv-ordered-checkBox"}
                onChange={(e) => {
                  setOrderedState(e.target.checked)
                  setWidgetCache(
                      widgetCache => ({
                        ...widgetCache,
                        ordered: e.target.checked
                      }))
                  setCurWidget(
                      preWidget => ({...preWidget, ordered: e.target.checked}))
                }
                }
                checked={orderedState}
                type="checkbox"/>

            <label htmlFor="wbdv-ordered-checkBox"
                   className={"ml-1"}>Ordered</label>

            {/*Text area*/}
            <p className={"mb-1"}>List items</p>
            <textarea
                onChange={(e) => {
                  setWidgetCache(
                      widgetCache => ({...widgetCache, text: e.target.value}))
                  setCurWidget(
                      preWidget => ({...preWidget, text: e.target.value}))
                }

                }

                value={curWidget.text}
                rows={10}
                className="form-control"/>

          </>
        }
      </div>
  )
}


export default EditingListWidget