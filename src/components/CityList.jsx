function CityList(props) {
    // const cities = props.cities;
    const { cities } = props;
  
    return (
      <div>
        <h1 className = "cityListTitle">CityList</h1>
  
        <ul className = "cityList">
          {cities.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
  
  export default CityList;