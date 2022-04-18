import React from "react";
import reactDom from "react-dom";
import "./index.css";
import { albums } from "./albums"; // burada verilen isimlei dosyanın içerisindeki array'in ismi aynı olmalıdır. Aksi halde hata verir.
import Album from "./Album";
import { greeting } from "./variableTest/variableTest";
import { products } from "./products";
import Product from "./Product";

function AlbumList() {
  return (
    <section className="container">
      <div className="row">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      {/* {albums.map((album) => {
        return <Album key={album.id} {...album} />;
      })} */}
    </section>
  );
}

//children props -> Componentlerin arasında bulunan elemanlardır.

// Two alternatives of passing props

// const Album = ({job, num, title}) => { // another use props
//   console.log(props);
//   return (
//     <article className="album-list__content">
//       <img src={src} alt="" />
//       <h1>{title}</h1>
//       <h4>{releaseDate}</h4>
//       <h5>{AlbumLength}</h5>
//       <p>{job}</p>
//       <p>{title}</p>
//       <p>{num}</p>
//     </article>
//   );
// };
reactDom.render(<AlbumList />, document.getElementById("root"));
