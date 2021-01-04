import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Link from "next/link";
// import { useRouter } from "next/router";
import "./Card.scss";

const Card = (props) => {
  // const router = useRouter();
  const id = props.info._id;
  return (
    <div className="card__item">
      <AccountCircleIcon
        color="secondary"
        style={{ fontSize: "3.5rem" }}
        className="card__icon"
      ></AccountCircleIcon>
      <div className="info">
        <span className="info__name">{props.info.name}</span>
        <span className="info__email">{props.info.email}</span>
      </div>
      <Link href={`/${id}`}>
        <button className="card__btn">View</button>
      </Link>
      {/* <button className="card__btn" onClick={()=>router.push(`/${id}`)}>View</button> */}
    </div>
  );
};

export default Card;
