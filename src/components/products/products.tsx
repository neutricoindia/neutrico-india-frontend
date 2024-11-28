import Image from "next/image";
import React from "react";

function Products() {
  return (
    <div className="wrapper row2">
      <section className="hoc container clear">
        <section id="services" className="hoc container clear">
          <ul className="nospace group grid-3">
            <li className="one_half">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-spa"></i>
                  </a>
                  NEUTRIFEM:
                </h6>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={"/images/p2.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>

                <p>
                  NEUTRIFEM is a scientifically formulated well balanced
                  nutritional solution for pregnant women for nourished health
                  throughout pregnancy and lactation and improved fetal health
                  outcomes. NEUTRIFEM is a evened nutritional supplement,
                  providing comprehensive nourishment for healthy mother and
                  healthy baby
                </p>
                <ul>
                  <li>Pregnancy</li>
                  <li>Lactation</li>
                </ul>
                <p>
                  <strong>Ingredients</strong>: Skimmed Milk Powder,
                  Maltodextrin, Soy Protein Isolate, Inulin (Dietary fibre),
                  Oleic Sunflower Oil Powder, Evening Primrose Oil Powder,
                  Minerals, DHA rich Algal Oil Powder, Vitamins, Sucralose,
                  Natural Cocoa Powder.
                </p>
                <p>
                  <strong>Direction to use:</strong>: Add 2 tablespoons (30g)
                  twice a day in 100ml of lukewarm milk to make a paste. Further
                  add lukewarm milk or water to reconstitute the volume upto
                  240ml or as directed by your Physician/Nutritionist.
                </p>
                <footer>{/* <a href="#">Read More</a> */}</footer>
              </article>
            </li>
            <li className="one_half">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-spa"></i>
                  </a>
                  NEUTRIFEM:
                </h6>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={"/images/p2.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>

                <p>
                  NEUTRIFEM is a scientifically formulated well balanced
                  nutritional solution for pregnant women for nourished health
                  throughout pregnancy and lactation and improved fetal health
                  outcomes. NEUTRIFEM is a evened nutritional supplement,
                  providing comprehensive nourishment for healthy mother and
                  healthy baby
                </p>
                <ul>
                  <li>Pregnancy</li>
                  <li>Lactation</li>
                </ul>
                <p>
                  <strong>Ingredients</strong>: Skimmed Milk Powder,
                  Maltodextrin, Soy Protein Isolate, Inulin (Dietary fibre),
                  Oleic Sunflower Oil Powder, Evening Primrose Oil Powder,
                  Minerals, DHA rich Algal Oil Powder, Vitamins, Sucralose,
                  Natural Cocoa Powder.
                </p>
                <p>
                  <strong>Direction to use:</strong>: Add 2 tablespoons (30g)
                  twice a day in 100ml of lukewarm milk to make a paste. Further
                  add lukewarm milk or water to reconstitute the volume upto
                  240ml or as directed by your Physician/Nutritionist.
                </p>
                <footer>{/* <a href="#">Read More</a> */}</footer>
              </article>
            </li>
            <li className="one_half">
              <article>
                <h6 className="heading">
                  <a href="#">
                    <i className="fas fa-spa"></i>
                  </a>
                  NUTRIOVA:
                </h6>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={"/images/neutriova.jpeg"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <p>
                  Berberine HCI, Myo Inositol, D Chiro Inositol, Melatonin,
                  Vitamin D3, Chromium Picolinate & L-Methylfolate Tablets
                </p>
                <ul>
                  <li>Ovulation and fertility in women with PCOS.</li>
                  <li>Support fertility in women with PCOS.</li>
                </ul>
                <p>
                  <strong>Composition</strong>:
                </p>
                <ul>
                  <li>Berberine Hydrochloride 500mg</li>
                  <li>Myo Inositol 550mg</li>
                  <li>D Chiro Inositol 13.8mg</li>
                  <li>Melatonin 1.5mg</li>
                  <li>Vitamin D3 400IU</li>
                  <li>Chromium Picolinate 50mcg</li>
                  <li>L-Methylfolate 0.05mg</li>
                </ul>
                <p>
                  <strong>Dosage</strong>: As directed by Physician
                </p>
                <footer>N.B. Store in a cool, dry and dark place</footer>
              </article>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Products;
