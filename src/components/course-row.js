import React from 'react';


const CourseRow = ({title, owner, lastModified}) =>
  <tr>
    <td>
      <a href="../course-editor/course-editor.template.client.html">
        <i className="far fa-file-alt wbdv-file-icon fa-fw"></i>
        <span> {title}</span>
      </a>

    </td>
    <td className="d-none d-sm-table-cell">{owner}</td>
    <td className="d-none d-lg-table-cell">{lastModified}</td>
    <td>
      <i className="fas fa-check wbdv-icons"></i>
      <i className="far fa-trash-alt wbdv-icons"></i>
      <i className="fas fa-edit wbdv-icons"></i>
    </td>
  </tr>


export default CourseRow