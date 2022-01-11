import { useEffect, useState } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const Add = () => {
  const [joke, setjoke] = useState("");
  const [valuejoke, setvaluejoke] = useState([]);
  const [alljoke, setalljoke] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((res) => {
      // console.log(res.data);
      setalljoke(res.data);
    });
  }, []);
  const html = (
    <>
      <div className="col-md-4">
        <div className="card" style={{ width: "30rem" }}>
          <h5 className="card-header">Add</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Joke.."
                  className="form-control"
                  value={joke}
                  onChange={(event) => {
                    setjoke(event.target.value);
                  }}
                />
              </div>
              <div className="col-md-6 ">
                <button
                  type="button"
                  className="btn btn-success col-md-6"
                  onClick={() => {
                    if (!joke) {
                      return;
                    }
                    Axios.post("http://localhost:3001/", { Joke: joke }).then(
                      (res) => {
                        // console.log(res);
                        Axios.get("http://localhost:3001/:id").then((res) => {
                          // console.log(res);
                          setjoke("");
                          setvaluejoke(res.data);
                          // console.log(res.data);
                          setalljoke([...alljoke, ...res.data]);
                        });
                      }
                    );
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="col-md-8">
        <div className="card" style={{ width: "30rem" }}>
          <h5 className="card-header">Manage</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {alljoke.map((data) => {
                    var frontcolor = "";
                    var frontcolorunlike = "";
                    if (data.joke_like === 1) {
                      frontcolor = "blue";
                    } else if (
                      data.joke_like === null ||
                      data.joke_like === 0
                    ) {
                      // alert(3);
                      frontcolor = "black";
                    }
                    if (data.joke_unlike === 1) {
                      frontcolorunlike = "red";
                    } else if (data.joke_unlike === 0) {
                      frontcolorunlike = "";
                    }
                    return (
                      <>
                        <div className="col-md-6">
                          <label>{data.joke}</label>
                        </div>
                        <div className="col-md-6">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                              Axios.post("http://localhost:3001/DELETE/:id", {
                                id: data.id,
                              }).then(() => {
                                setalljoke(
                                  alljoke.filter((val) => {
                                    return val.id != data.id;
                                  })
                                );
                              });
                            }}
                          >
                            DELETE
                          </button>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            size="lg"
                            // color="blue"

                            style={{ cursor: "pointer", color: frontcolor }}
                            onClick={() => {
                              if (data.joke_like === 1) {
                                var statuslike = 0;
                              } else {
                                statuslike = 1;
                              }
                              Axios.post("http://localhost:3001/:id/like", {
                                id: data.id,
                                status: statuslike,
                              }).then(() => {
                                setalljoke(
                                  alljoke.map((val) => {
                                    return val.id === data.id
                                      ? {
                                          id: val.id,
                                          joke: val.joke,
                                          joke_like: statuslike,
                                          joke_unlike: val.joke_unlike,
                                        }
                                      : {
                                          id: val.id,
                                          joke: val.joke,
                                          joke_like: val.joke_like,
                                          joke_unlike: val.joke_unlike,
                                        };
                                  })
                                );
                                // console.log(alljoke);
                              });
                            }}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <FontAwesomeIcon
                            icon={faThumbsDown}
                            size="lg"
                            style={{
                              cursor: "pointer",
                              color: frontcolorunlike,
                            }}
                            onClick={() => {
                              if (data.joke_unlike === 1) {
                                var statusunlike = 0;
                              } else {
                                statusunlike = 1;
                              }
                              Axios.post("http://localhost:3001/:id/dislike", {
                                id: data.id,
                                status: statusunlike,
                              }).then(() => {
                                setalljoke(
                                  alljoke.map((dt) => {
                                    return dt.id === data.id
                                      ? {
                                          id: dt.id,
                                          joke: dt.joke,
                                          joke_like: dt.joke_like,
                                          joke_unlike: statusunlike,
                                        }
                                      : {
                                          id: dt.id,
                                          joke: dt.joke,
                                          joke_like: dt.joke_like,
                                          joke_unlike: dt.joke_unlike,
                                        };
                                  })
                                );
                                // console.log(alljoke);
                              });
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return html;
};
export default Add;
