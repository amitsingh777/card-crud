import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Card from "../components/card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/_variables.scss";
import Form from "../components/form/Form";
import Loading from "../components/loading/Loading";

export default function Home() {
  const [list, setList] = useState([]);
  const [formAppear, setFormAppear] = useState(false);
  const fetchCall=async()=>{
    const response = await axios.get("http://localhost:8000/v1/users");
    const dataList = response.data.data.users;
    setList(dataList);
  }
  
  useEffect(() => {
    fetchCall();
  }, []);

  if (list.length === 0) {
    return (
      <div className="loader">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container-grid">
      <div className="btn-container">
        {formAppear === false ? (
          <button
            className="container-grid__btn"
            onClick={() => {
              setFormAppear(true);
            }}
          >
            Add
          </button>
        ) : (
          <div className="form-modal">
            <div className="form-container">
              <Form
                form={true}
                btnHide={true}
                users={{
                  _id: "",
                  name: "",
                  phoneNumber: "",
                  email: "",
                  address: "",
                }}
                setState={setList}
                state={list}
                fetchCall={fetchCall}
                close={() => {
                  setFormAppear(false);
                }}
              />
            </div>
          </div>
          // <div onClick={()=>setFormAppear(false)}>test</div>
        )}
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
