import Axios from "axios";

let data = null;

const fetchData = () => {
  Axios.get(
    "http://ec2-3-15-192-169.us-east-2.compute.amazonaws.com:9090/api/careerTestResult/6127c584e7f8a36c58a59091/6127c5c0eb11906c49479ab7"
  ).then((res) => {
    console.log(res);
    data = res;
  });
};
fetchData();

export default data;
