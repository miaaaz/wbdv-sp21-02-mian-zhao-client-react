import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetActions from "../../actions/widget-actions";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = ({
        widgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
}) => {

  const {topicId} = useParams();

  useEffect(() => {
    findWidgetsForTopic(topicId)}, [findWidgetsForTopic, topicId])


  return(
      <div className={"wbdv-widget-list mt-2"}>


        <ul className="list-group">
          <li className={ "wbdv-plus-button-list"}>
            <button onClick={() => createWidget(topicId)} className="btn float-right">
              <i className={"fas fa-plus "}/>
            </button>

          </li>
          {

            widgets.map(widget =>
                <li className="list-group-item" key={widget.id}>
                  {
                    widget.type === "HEADING" &&
                    <HeadingWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                  }
                  {
                    widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                  }
                  {
                    widget.type === "LIST" &&
                    <ListWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                  }
                  {
                    widget.type === "IMAGE" &&
                    <ImageWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                  }
                </li>
            )
          }
        </ul>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    widgets: state.widgetReducer.widgets
  }
}

const mapDispatchToProps = (dispatch) => ({
  createWidget: (topicId) => {
    if (topicId !== undefined) {
      widgetActions.createWidgetForTopic(dispatch, topicId)
    } else {
      alert("Please select a topic first")
    }

  },

  updateWidget: (wid, widget) => {
    widgetActions.updateWidget(dispatch, wid, widget)
  },

  deleteWidget: (wid) => {
    widgetActions.deleteWidget(dispatch, wid)
  },

  findWidgetsForTopic: (topicId) => {
    widgetActions.findWidgetsForTopic(dispatch, topicId)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);