import Banner from "../../Containers/Banner/Banner";
const About = () => {
  return (
    <Banner
      title="ABOUT"
      subTitle="Welcome to Understanding 450, We help you to reach you goals."
    >
      <h3 style={{ color: "orange" }}>
     Here are few tips of using this site at its best
      </h3>
      <h3>
        📍 Don't just look at the solution or approach, First try it yourself
      </h3>
      <h3>
        📍 We tried our best to explain you the solution so try to understand it
        and then code it yourself.
      </h3>
      {/* <h3>
        📍 
      </h3> */}
      {/* <h3>
        📍 Don't hesitate to use comment section for discussions or flexing your
        solutions.
      </h3> */}
    </Banner>
  );
};

export default About;
