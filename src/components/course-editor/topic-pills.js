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
      deleteTopic
    }) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams()

  useEffect(() => {
    findTopicsForLesson(lessonId)
  }, [findTopicsForLesson, lessonId])

  return (
        <div className="wbdv-editor-nav">
          <ul className="nav nav-pills">
            {
              topics.map(topic =>
                  <li key={topic._id} className="nav-link active">
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        updateItem={updateTopic}
                        item={topic}
                        deleteItem={deleteTopic}
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
    TopicService.createTopic(lessonId, {title: "New Topic"})
    .then(theActualTopic => dispatch({
      type: "CREATE_TOPIC",
      topic: theActualTopic
    }))
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
(TopicPills)