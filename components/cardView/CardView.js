import Paper from "@material-ui/core/Paper";
import "./CardView.scss";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import { useState, useEffect } from "react";

const CardView = (props) => {
  const { id, name, phoneNumber, email, address } = props.dataUser;
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState(name);

  const onEditClick = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const onDoneClick = (e) => {
    e.preventDefault();

    setEdit(false);
  };

  const onCloseClick = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  const onEnterPress = (e) => {
    e.preventDefault();
    console.log(e);
    // if (e.charCode === 13) {
    //   setEdit(false);
      
    // }
  };

  return (
    <div className="card-view__container">
      <div className="card-view__detail">
        <AccountCircleIcon
          color="secondary"
          style={{ fontSize: "3.5rem" }}
          className="card__icon"
        ></AccountCircleIcon>
        <ul className="card-view__list">
          <li>
            <span>Name:</span>
            {edit === true ? (
              <input
                type="text"
                name="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={onEnterPress}
              />
            ) : (
              <p>{userName}</p>
            )}
          </li>
          <li>
            <span>Phone:</span>
            {edit === true ? (
              <input
                type="text"
                value={phoneNumber}
                onKeyPress={onEnterPress}
              />
            ) : (
              <p> {phoneNumber}</p>
            )}
          </li>
          <li>
            <span>Email:</span>
            {edit === true ? (
              <input type="text" value={email} onKeyPress={onEnterPress} />
            ) : (
              <p>{email}</p>
            )}
          </li>
          <li>
            <span>Address:</span>
            {edit === true ? (
              <input type="text" value={address} onKeyPress={onEnterPress} />
            ) : (
              <p>{address}</p>
            )}
          </li>
        </ul>
        <div className="card-view__grp">
          {edit === true ? (
            <button className="card-view__btn" onClick={onDoneClick}>
              <DoneIcon />{" "}
            </button>
          ) : (
            <button className="card-view__btn" onClick={onEditClick}>
              <EditIcon />
            </button>
          )}
          {edit === true ? (
            <button className="card-view__btn" onClick={onCloseClick}>
              <CloseIcon />{" "}
            </button>
          ) : (
            <button className="card-view__btn">
              <DeleteIcon />
            </button>
          )}
          {/* <button className="card-view__btn"  onClick={onBtnClick}>Edit</button> */}
          {/* <button className="card-view__btn">Delete</button> */}
        </div>
      </div>
    </div>
  );
};

export default CardView;
