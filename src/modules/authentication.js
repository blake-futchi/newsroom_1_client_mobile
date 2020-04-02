import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "https://newsroom-team-1.herokuapp.com/",
  prefixUrl: "/api"
});

const onLogin = (event, dispatch) => {
  event.preventDefault();
  auth
    .signIn(
      event.target.elements.email.value,
      event.target.elements.password.value
    )
    .then(response => {
      dispatch({
        type: "AUTHENTICATE",
        payload: { authenticated: true, userEmail: response.data.email }
      });
      dispatch({ type: "GREETING", payload: `Welcome ${response.data.email}` });
      dispatch({ type: "CLOSE_LOGIN" });
    })
    .catch(error => {
      let errorMessage = error.response.data.errors[0];
      dispatch({ type: "GREETING", payload: errorMessage });
    });
};

const onLogout = dispatch => {
  auth.signOut().then(() => {
    dispatch({
      type: "AUTHENTICATE",
      payload: { authenticated: false, userEmail: null }
    });
    dispatch({ type: "GREETING", payload: "See ya!" });
  });
};

export { onLogin, onLogout };
