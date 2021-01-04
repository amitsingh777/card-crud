import { useRadioGroup } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import CardView from "../components/cardView/CardView";
import Form from "../components/form/Form";
import Loading from "../components/loading/Loading";
import axios from "axios";

const view = (props) => {
  const { id } = useRouter().query;

  const user = props.user.data;
  const _id = props._id;

  if (user.length === 0) {
    return <Loading />;
  } else if (user.length !== 0) {
    return <CardView dataUser={user} />;
  }

  return <h1>No data for ${_id}</h1>;
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    `http://localhost:8000/v1/users/${context.params.id}`
  );

  return {
    props: {
      user: data,
      _id: context.params.id,
    },
  };
}
export default view;
