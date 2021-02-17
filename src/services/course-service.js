function CourseService() {
  this.createCourse = createCourse;
  this.findAllCourses = findAllCourses;
  this.findCourseById = findCourseById;
  this.updateCourse = updateCourse;
  this.deleteCourse = deleteCourse;
  this.url = 'https://wbdv-generic-server.herokuapp.com/api/001029592/courses';

  var self = this;

  function createCourse(course) {
    return fetch(self.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(res => res.json())
  }

  function findAllCourses() {
    return fetch(self.url).then(res => res.json())
  }

  function findCourseById(id) {
    return fetch(`${self.url}/${id}`).then(res => res.json())
  }

  function updateCourse(id, course) {
    return fetch(`${self.url}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(res => res.json())
  }

  function deleteCourse(id) {
    return fetch(`${self.url}/${id}`,
        {method: 'DELETE'})
  }
}