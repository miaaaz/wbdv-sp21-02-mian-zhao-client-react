const LOCAL_HOST = "http://localhost:8080/api"

export const createWidget = (tid, widget) =>
    fetch(`${LOCAL_HOST}/topics/${tid}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${LOCAL_HOST}/topics/${tid}/widgets`).then(res => res.json())


export const updateWidget = (wid, widget) =>
    fetch(`${LOCAL_HOST}/widgets/${wid}`,
        {
          method: 'PUT',
          body: JSON.stringify(widget),
          headers: {'content-type': 'application/json'}
        }
    ).then(res => res.json())

export const deleteWidget = (wid) =>
    fetch(`${LOCAL_HOST}/widgets/${wid}`,
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