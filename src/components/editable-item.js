import React, {useState} from "react";
import {Link} from "react-router-dom";

const EditableItem = (
    {
      to,
      item,
      updateItem,
      deleteItem,
      isActive
    }) => {
  const [editing, setEditing] = useState(false)
  const [itemCache, setItemCache] = useState(item)

  return (
      <>
        { !editing &&
          <>
            <div className={`nav-link ${isActive}`}>
              <Link className={`${isActive}`} to={to}>
                {item.title}
              </Link>

              <i onClick={()=>setEditing(true)} className="fas fa-edit float-right" > </i>
            </div>

          </>
        }
        { editing &&
          <>
            <div className="wbdv-editing nav-link active">
              <input className="form-control"
                     onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                     value={itemCache.title}/>
              <i onClick={() => {setEditing(false); deleteItem(item)}}
                 className="fas fa-times wbdv-module-delete-icon float-right"/>

              <i onClick={() => {setEditing(false); updateItem(itemCache)}}
                 className="fas fa-check float-right no-wrap"/>

            </div>

          </>

        }
      </>
  )}



export default EditableItem