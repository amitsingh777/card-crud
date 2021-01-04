// import "./Form.scss";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import DoneIcon from "@material-ui/icons/Done";
// import CloseIcon from "@material-ui/icons/Close";
// import Link from "next/link";
// import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
// import { useState } from "react";
// import { Delete } from "@material-ui/icons";
// import axios from "axios";
// const Form = (props) => {
//   const { _id, name, phoneNumber, email, address } = props.users;

//   const [formAppear,setFormAppear]=useState(false);
//   // const [formChange,setFormChange]=useState(false);

//   const [edit, setEdit] = useState(false);
//   const [userName, setUserName] = useState(name);
//   const [userEmail, setUserEmail] = useState(email);
//   const [userPhone, setUserPhone] = useState(phoneNumber);
//   const [userAddress, setUserAddress] = useState(address);
//   const onEditClick = (e) => {
//     e.preventDefault();
//     setEdit(true);
//   };

//   const onDoneClick = (e) => {
//     e.preventDefault();

//     setEdit(false);
//   };

//   const onCloseClick = (e) => {
//     e.preventDefault();
//     setEdit(false);
//   };
//   const onDeleteClick = async (e) => {
//     e.preventDefault();
//     await axios.delete(`http://localhost:8000/v1/users/${_id}`);
//   };

//   const onSubmitClick = async (e) => {
//     e.preventDefault();
//     const data = {
//       name: userName,
//       phoneNumber: userPhone,
//       email: userEmail,
//       address: userAddress,
//     };
//     await axios.patch(`http://localhost:8000/v1/users/${_id}`, data);
//   };

//   return (
//     <form
//       className="card-view__form"
//       action={""}
//       onSubmit={(e) => e.preventDefault()}
//     >
//       <div className="form__item">
//         <label htmlFor="name">Name:</label>
//         {edit === true ? (
//           <input
//             type="text"
//             name="text"
//             value={userName}
//             id="name"
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         ) : (
//           <p>{userName}</p>
//         )}
//       </div>
//       <div className="form__item">
//         <label htmlFor="number">Number:</label>
//         {edit === true ? (
//           <input
//             type="text"
//             id="number"
//             onChange={(e) => setUserPhone(e.target.value)}
//             value={userPhone}
//           />
//         ) : (
//           <p> {userPhone}</p>
//         )}
//       </div>
//       <div className="form__item">
//         <label htmlFor="email">Email:</label>
//         {edit === true ? (
//           <input
//             type="text"
//             id="email"
//             onChange={(e) => setUserEmail(e.target.value)}
//             value={userEmail}
//           />
//         ) : (
//           <p>{userEmail}</p>
//         )}
//       </div>
//       <div className="form__item">
//         <label htmlFor="address">Address:</label>
//         {edit === true ? (
//           <input
//             type="text"
//             id="address"
//             onChange={(e) => setUserAddress(e.target.value)}
//             value={userAddress}
//           />
//         ) : (
//           <p>{userAddress}</p>
//         )}
//       </div>
//       <div className="form__btn-grp">
//         {edit === true ? (
//           <button className="card__btn" onClick={onDoneClick}>
//             <DoneIcon></DoneIcon>
//           </button>
//         ) : (
//           <button className="card__btn" onClick={onEditClick}>
//             <EditIcon></EditIcon>
//           </button>
//         )}
//         {edit === true ? (
//           <button className="card__btn" onClick={onCloseClick}>
//             <CloseIcon></CloseIcon>
//           </button>
//         ) : (
//           <button className="card__btn" onClick={onDeleteClick}>
//             <Link href="/">
//               <DeleteIcon></DeleteIcon>
//             </Link>
//           </button>
//         )}
//       </div>
//       <div className="submit-container">
//         <button
//           type="submit"
//           className="form__btn-submit"
//           onClick={onSubmitClick}
//         >
//           <DoubleArrowIcon />
//         </button>
//       </div>
//     </form>
//   );
//   return <div>test</div>;
// };
// export default Form;

import "./Form.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { useState } from "react";
import { Delete } from "@material-ui/icons";
import axios from "axios";
const Form = (props) => {
  const { _id, name, phoneNumber, email, address } = props.users;

  const [buttonHide, setButtonHide] = useState(props.btnHide);

  const [edit, setEdit] = useState(props.form);
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userPhone, setUserPhone] = useState(phoneNumber);
  const [userAddress, setUserAddress] = useState(address);
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
  const onDeleteClick = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/v1/users/${_id}`);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    const data = {
      name: userName,
      phoneNumber: userPhone,
      email: userEmail,
      address: userAddress,
    };
    buttonHide === false
      ? axios.patch(`http://localhost:8000/v1/users/${_id}`, data)
      : axios.post(`http://localhost:8000/v1/users`, data).then((res) => {
          console.log(props.state.res.data);
          props.setState([...props.state, res.data.data]);
        });
    if (buttonHide === true) {
      props.close();
    }
  };

  return (
    <form
      className="card-view__form"
      action={""}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="form__item">
        <label htmlFor="name">Name:</label>
        {edit === true ? (
          <input
            type="text"
            name="text"
            value={userName}
            id="name"
            onChange={(e) => setUserName(e.target.value)}
          />
        ) : (
          <p>{userName}</p>
        )}
      </div>
      <div className="form__item">
        <label htmlFor="number">Number:</label>
        {edit === true ? (
          <input
            type="text"
            id="number"
            onChange={(e) => setUserPhone(e.target.value)}
            value={userPhone}
          />
        ) : (
          <p> {userPhone}</p>
        )}
      </div>
      <div className="form__item">
        <label htmlFor="email">Email:</label>
        {edit === true ? (
          <input
            type="text"
            id="email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
        ) : (
          <p>{userEmail}</p>
        )}
      </div>
      <div className="form__item">
        <label htmlFor="address">Address:</label>
        {edit === true ? (
          <input
            type="text"
            id="address"
            onChange={(e) => setUserAddress(e.target.value)}
            value={userAddress}
          />
        ) : (
          <p>{userAddress}</p>
        )}
      </div>
      {buttonHide === false ? (
        <div className="form__btn-grp">
          {edit === true ? (
            <button className="card__btn" onClick={onDoneClick}>
              <DoneIcon></DoneIcon>
            </button>
          ) : (
            <button className="card__btn" onClick={onEditClick}>
              <EditIcon></EditIcon>
            </button>
          )}
          {edit === true ? (
            <button className="card__btn" onClick={onCloseClick}>
              <CloseIcon></CloseIcon>
            </button>
          ) : (
            <button className="card__btn" onClick={onDeleteClick}>
              <Link href="/">
                <DeleteIcon></DeleteIcon>
              </Link>
            </button>
          )}
        </div>
      ) : (
        <div></div>
      )}
      <div className="submit-container">
        <button
          type="submit"
          className="form__btn-submit"
          onClick={onSubmitClick}
        >
          <Link href="/">
            <DoubleArrowIcon />
          </Link>
        </button>
      </div>
    </form>
  );
  return <div>test</div>;
};
export default Form;
