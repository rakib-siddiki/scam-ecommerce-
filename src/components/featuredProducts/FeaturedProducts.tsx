import { Link } from "react-router-dom";
import { ProductCard, MySlider, SectionTitle } from "../../Core";
import { featuredProducts } from "../../Core/db";
const FeaturedProducts: React.FC = () => {
  return (
    <main data-aos="fade-down">
      <SectionTitle title="Featured Products" />
      <div className="container">
        <MySlider slidesToShow={3} arrows centerMode centerPadding="100px">
          {(featuredProducts ?? []).map((product) => (
            <div key={product.id} className="my-12">
              <Link to={"#"}>
                <ProductCard
                  {...product}
                  className="w-[270px] h-auto"
                  cardName="featured-Products"
                />
              </Link>
            </div>
          ))}
        </MySlider>
      </div>
    </main>
  );
};

export default FeaturedProducts;
