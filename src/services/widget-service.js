const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
// const WIDGET_URL = "http://localhost:8080/api"

export const createWidget = (tid, widget) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`).then(res => res.json())


export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`,
        {
          method: 'PUT',
          body: JSON.stringify(widget),
          headers: {'content-type': 'application/json'}
        }
    ).then(res => res.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`,
        {
          method: 'DELETE',
        }).then(res => res.json())

const api = {
  createWidget,
  findWidgetsForTopic,
  updateWidget,
  deleteWidget
}

export default api