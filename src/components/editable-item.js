import React, {useState} from "react";
import {Link} from "react-router-dom";

const EditableItem = (
    {
      to,
      item,
      isActive,
      updateItem,
      deleteItem
    }) => {
  const [editing, setEditing] = useState(false)
  const [itemCache, setItemCache] = useState(item)
  const [active, setActive] = useState(null)

  return (
      <>
        { !editing &&
          <>
            <Link onClick={() => setActive("active")} className={active} to={to}>
              {item.title}
            </Link>
            <i onClick={()=>setEditing(true)} className="fas fa-edit"></i>
          </>
        }
        { editing &&
          <>
            <input className="form-control"
                onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                value={itemCache.title}/>
            <i onClick={() => {
              setEditing(false)
              updateItem(itemCache)
            }} className="fas fa-check"></i>
            <i onClick={() => {
              setEditing(false)
              deleteItem(item)
            }} className="fas fa-times wbdv-module-delete-icon"></i>
          </>

        }
      </>
  )}



export default EditableItem