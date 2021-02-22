const COURSES_URL = 'https://wbdv-generic-server.herokuapp.com/api/mianzhao/courses';

export const createCourse = (course) => {
    return fetch(COURSES_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(res => res.json())
  }

export const findAllCourses = () => {
    return fetch(COURSES_URL).then(res => res.json())
  }

export const findCourseById = (id) => {
    return fetch(`${COURSES_URL}/${id}`).then(res => res.json())
  }

export const updateCourse = (id, course) => {
    return fetch(`${COURSES_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(res => res.json())
  }

export const deleteCourse = (id) => {
    return fetch(`${COURSES_URL}/${id}`,
        {method: 'DELETE'})
  }



const api = {
  findAllCourses,
  deleteCourse,
  createCourse,
  updateCourse
}

export default api;