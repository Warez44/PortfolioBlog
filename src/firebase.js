import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBoemHmCxe29AWSuSsze-oNd3w33OlMTeU",
  authDomain: "portfolio-react-a8541.firebaseapp.com",
  projectId: "portfolio-react-a8541"
};
firebase.initializeApp(config);

export const database = firebase.firestore();
