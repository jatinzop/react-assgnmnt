import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HairCare from './components/categories/HairCare';
import MakeUp from './components/categories/MakeUp';
import SkinCare from './components/categories/SkinCare';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import { fetchProducts } from './actions/productActions';
import { connect } from 'react-redux';

function App(props) {
  // const history = useNavigate();
  // const [loading, setLoading] = useState(false)

  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const response = await fetch(
  //     `https://makeup-api.herokuapp.com/api/v1/products.json`
  //   );
  //   const data = await response.json();
  //   setData(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    props.dispatch(fetchProducts());
  }, [props]);

  // console.log(props);

  const { products } = props;
  const maybellineData = products.filter((product) => {
    return product.brand === 'maybelline';
  });

  const colourpopData = products.filter((product) => {
    return product.brand === 'colourpop';
  });

  const nyxData = products.filter((product) => {
    return product.brand === 'nyx';
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/skincare"
          element={<SkinCare data={colourpopData} />}
        ></Route>
        <Route path="/haircare" element={<HairCare data={nyxData} />}></Route>
        <Route
          path="/makeup"
          element={<MakeUp data={maybellineData} />}
        ></Route>
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
});

export default connect(mapStateToProps)(App);
