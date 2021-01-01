import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Card from "../components/card/Card";
import { useState, useEffect } from "react";
import "../styles/_variables.scss";
// import Container from "@material-ui/core/Container";
import data from "../components/userData";
import Loading from "../components/loading/Loading";

export default function Home() {
  const [list, setList] = useState([]);
  const userData = JSON.parse(data);
  useEffect(() => {
    setTimeout(() => {
      setList(userData);
    }, 0);
  }, [userData.id]);

  if (list.length === 0) {
    return <Loading />
  }
  return (
    <div className="container-grid">
      <div className="btn-container">
        <button className="container-grid__btn">Add</button>
      </div>
      <Grid container justify="center" spacing={1}>
        {list.map((c, i) => (
          <Grid key={i} item xs={12} sm={6} md={3} lg={4} align="center">
            <Card info={c} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
