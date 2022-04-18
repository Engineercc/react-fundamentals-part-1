import React from "react";

const Album = ({ id, title, releaseDate, src }) => {
  //attribute, eventHandler
  //onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };

  const complexExample = (releaseDate) => {
    console.log(releaseDate);
  };
  return (
    <article
      className="album-list__content"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={src} alt="" width={250} />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h2>{id}</h2>
      <h4>{releaseDate}</h4>
      <button onClick={clickHandler}>Reference Example</button>
      <button onClick={() => complexExample(releaseDate)}>
        Complex Example
      </button>{" "}
      {/* Parametreli bir fonksiyonda, fonksiyonun önüne boş parantezler koymazsak, biz click eventini çalıştırmadan doğrudan işlemi yapar. Bu istediğimiz bir durum değil.! */}
    </article>
  );
};
export default Album;
