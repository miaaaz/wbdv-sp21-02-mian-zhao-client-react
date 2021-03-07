import React, { useEffect } from "react";
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import { useParams } from "react-router-dom";
import TopicService from "../../services/topic-service"

const TopicPills = (
    {
      topics=[],
      createTopic,
      updateTopic,
      findTopicsForLesson,
      deleteTopic,
      cleanTopic
    }) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams()

  useEffect(() => {
    if (typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId)
    } else {
      cleanTopic()
    }

  }, [findTopicsForLesson, cleanTopic, lessonId])

  return (
        <div className="wbdv-editor-nav wbdv-editor-topics">
          <ul className="nav nav-pills">
            {
              topics.map(topic =>
                  <li key={topic._id}
                      className="nav-link">
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        updateItem={updateTopic}
                        item={topic}
                        deleteItem={deleteTopic}
                        isActive={topic._id === topicId ? "active" : ""}
                    />
                  </li>
              )
            }
            <button onClick={() => createTopic(lessonId)} className="btn wbdv-grey-color"
                    type="submit">
              <i className="fas fa-plus"></i>
            </button>
          </ul>


        </div>
  )
}


const mapStateToProps = state => {
  return {
    topics: state.topicReducer.topics
  }
}

const mapDispatchToProps = (dispatch) => ({
  createTopic: (lessonId) => {
    if (lessonId !== undefined) {
      TopicService.createTopic(lessonId, {title: "New Topic"})
      .then(theActualTopic => dispatch({
        type: "CREATE_TOPIC",
        topic: theActualTopic
      }))
    } else {
      alert("Please select a lesson first")
    }
  },
  updateTopic: (topic) =>
      TopicService.updateTopic(topic._id, topic)
      .then(status => dispatch({
        type: "UPDATE_TOPIC",
        updatedTopic: topic
      })),
  deleteTopic: (topicToDelete) => {
    TopicService.deleteTopic(topicToDelete._id).then(
        (status) => dispatch({ type: 'DELETE_TOPIC', deleteItem: topicToDelete })
    )

  },
  findTopicsForLesson: (lessonId) => {
    TopicService.findTopicsForLesson(lessonId)
    .then(theTopics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics: theTopics
    }))
  },
  cleanTopic: () =>
      dispatch({
        type: "CLEAN_TOPIC",
      })
})

export default connect(mapStateToProps, mapDispatchToProps)
(TopicPills)