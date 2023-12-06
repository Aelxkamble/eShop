import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="w-100">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg"
          alt="ecommerce"
          className="w-100 "
          style={{ height: "300px" }}
        ></img>
      </div>
      <div className="products bg-light p-3">
        <div className="p-3 d-flex ">
          <div className="w-50 p-2 bg-white m-2">
            <Product
              id={1223}
              title={"This is seven generation computer(PC)"}
              rating={4}
              price={240}
              image={
                "https://m.media-amazon.com/images/I/61aULW8uYgL._AC_UF1000,1000_QL80_.jpg"
              }
            ></Product>
          </div>
          <div className="w-50 p-2 bg-white m-2">
            <Product
              id={1224}
              title={"This is seating Chair"}
              rating={3}
              price={250}
              image={
                "https://cdn.moglix.com/p/YZfgS1m8eCbxT-xlarge.jpg"
              }
            ></Product>
          </div>
        </div>
        <div className="p-3 d-flex ">
          <div className=" p-2 bg-white m-2">
            <Product
              id={1225}
              title={"This is wearing Jacket"}
              rating={5}
              price={240}
              image={
                "https://m.media-amazon.com/images/I/61YDptuF8eL._AC_UY350_.jpg"
              }
            ></Product>
          </div>
          <div className=" p-2 bg-white m-2">
            <Product
              id={1226}
              title={"This is analog Watch"}
              rating={4}
              price={240}
              image={
                "https://staticimg.titan.co.in/Titan/Catalog/1713BM02_1.jpg?impolicy=pqmed&imwidth=640"
              }
            ></Product>
          </div>
          <div className=" p-2 bg-white m-2">
            <Product
              id={1227}
              title={"This is Digital Watch"}
              rating={4}
              price={240}
              image={
                "https://image.made-in-china.com/202f0j00LkpGiSbtIToR/Men-Sport-Casual-LED-Watches-Men-s-Digital-Clock.jpg"
              }
            ></Product>
          </div>
        </div>
        <div className="p-3 ">
          <div className=" p-2 bg-white m-2 d-flex justify-content-center">
            <Product
              id={1228}
              title={"This is seven generation Tablet"}
              rating={4}
              price={240}
              image={
                "https://p2-ofp.static.pub/fes/cms/2023/02/22/pkhjbh23c7sjfxf76k6e6usevy3ixi851221.png"
              }
            ></Product>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
