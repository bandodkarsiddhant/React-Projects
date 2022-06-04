import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaVoteYea } from "react-icons/fa";

import "../../Components/Landing Page/PageStyle.css";

import img1 from "../../Assets/ProfileImg/1.jpg";
import img2 from "../../Assets/ProfileImg/2.jpg";
import img3 from "../../Assets/ProfileImg/3.jpg";

const VotingPage = () => {
  let [state1, setState1] = useState(0);
  let [state2, setState2] = useState(0);
  let [state3, setState3] = useState(0);

  let handleVote1 = () => {
    if (state1 === 1) {
      alert("You have already voted");
      document.getElementsByClassName("btn").forEach(element => {
        element.disabled = true;
      });
    }

    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;

    setState1(state1 + 1);
    toast.success("Voted Sucessfully!");
    document.getElementById("voteBlock").innerHTML = "Voted &#10003; ";
  };

  let unVote1 = () => {
    let confirmation = window.confirm("Do you want to unvote for user1?");

    if (confirmation) {
      setState1(0);
    }
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("voteBlock").innerHTML = "";
  };

  let unVote2 = () => {
    let confirmation = window.confirm("Do you want to unvote for user2?");

    if (confirmation) {
      setState2(0);
    }
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("voteBlock2").innerHTML = "";
  };

  let unVote3 = () => {
    let confirmation = window.confirm("Do you want to unvote for user3?");

    if (confirmation) {
      setState3(0);
    }
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled = false;
    document.getElementById("voteBlock3").innerHTML = "";
  };

  let handleVote2 = () => {
    if (state2 === 1) {
      alert("You have already voted");
      document.getElementsByClassName("btn").forEach(element => {
        element.disabled = true;
      });
    }
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn3").disabled = true;
    setState2(state2 + 1);
    document.getElementById("voteBlock2").innerHTML = "Voted &#10003; ";
  };

  let handleVote3 = () => {
    if (state3 === 1) {
      alert("You have already voted");
      document.getElementsByClassName("btn").forEach(element => {
        element.disabled = true;
      });
    }
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn1").disabled = true;

    setState3(state3 + 1);
    document.getElementById("voteBlock3").innerHTML = "Voted &#10003; ";
  };

  return (
    <div className="votePage">
      <h1 className="text-center">
        {" "}
        Vote for the one you want to become your <b>MANAGER</b>{" "}
      </h1>

      <section>
        <article
          className="d-flex justify-content-around  "
          // style={{ marginTop: "10%" }}
        >
          <div
            className="card party1"
            style={{ width: "24rem", height: "37rem", marginTop: "5%" }}
          >
            <div className="card-body" style={{ height: "30rem" }}>
              <img
                src={img1}
                alt=""
                className="rounded-circle  "
                style={{ width: "16rem", height: "16rem", marginLeft: "3rem" }}
              />

              <h5 className="card-title text-center ">Sia</h5>
              <h4
                id="voteBlock"
                className="bg-light text-center text-success mt-3 "
              >
                {" "}
              </h4>
              <p className="card-text text-center  ">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                className="btn btn-success"
                id="btn1"
                onClick={handleVote1}
              >
                VOTE
              </button>
              <button className="btn btn-danger mx-lg-5" onClick={unVote1}>
                UNVOTE
              </button>
            </div>
          </div>
          <div
            className="card party2"
            style={{ marginTop: "5%", width: "24rem" }}
          >
            <div className="card-body" style={{ height: "30rem" }}>
              <img
                src={img2}
                alt=""
                className="rounded-circle"
                style={{ width: "16rem", height: "16rem", marginLeft: "3rem" }}
              />
              <h5 className="card-title text-center ">Martha</h5>
              <h4
                id="voteBlock2"
                className="bg-light text-center text-success "
              ></h4>
              <p className="card-text text-center">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                className="btn btn-success"
                id="btn2"
                onClick={handleVote2}
              >
                VOTE
              </button>
              <button className="btn btn-danger mx-lg-5" onClick={unVote2}>
                UNVOTE
              </button>
            </div>
          </div>
          <div
            className="card party3"
            style={{ width: "24rem", marginTop: "5%" }}
          >
            <div className="card-body" style={{ height: "30rem" }}>
              <img
                src={img3}
                alt=""
                className="rounded-circle"
                style={{ width: "16rem", height: "16rem", marginLeft: "3rem" }}
              />
              <h5 className="card-title text-center ">Ella</h5>
              <h4
                id="voteBlock3"
                className="bg-light text-center text-success "
              ></h4>
              <p className="card-text text-center">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                className="btn btn-success"
                id="btn3"
                onClick={handleVote3}
              >
                VOTE
              </button>
              <button className="btn btn-danger mx-lg-5" onClick={unVote3}>
                UNVOTE
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default VotingPage;
