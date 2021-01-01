import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import data from "../components/userData";
import CardView from "../components/cardView/CardView";
import Form from "../components/form/Form";

const view = (props) => {
  const { id } = useRouter().query;
  const [dataUser, setDataUser] = useState([]);
  const match = JSON.parse(data).filter((el) => el.id === id * 1);
  useEffect(() => {
    setDataUser(match);
  }, [match.id]);
  
  if (dataUser.length !== 0) {
    const [userObj] =dataUser;
    return <CardView dataUser={userObj} />;
  }
  
  return <h1>No data for {id}</h1>;
};

export default view;
