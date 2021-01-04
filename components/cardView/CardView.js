import "./CardView.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Form from ".././form/Form";

const CardView = (props) => {
  return (
    <div className="card-view__container">
      <div className="card-view__detail">
        <AccountCircleIcon
          color="secondary"
          style={{ fontSize: "3.5rem" }}
          className="card__icon"
        ></AccountCircleIcon>

        <Form users={props.dataUser[0]} form={false} btnHide={false} />
      </div>
    </div>
  );
};

export default CardView;
