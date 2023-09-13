import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Login = () => {
  const { googleSignIn ,user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  return (
    <LodinDiv>
      <div className="login">
        <h1 >Login</h1>
        <GoogleButton className="login-btn" onClick={handleGoogleSignIn} />
      </div>
    </LodinDiv>
  );
};

export default Login;

const LodinDiv = styled.div`
  .login {
    text-align: center;
  }
  h1 {
    margin-top: 10%;
    font-size: 2em;
    font-weight: 800;
  }
  .login-btn {
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }
`;
