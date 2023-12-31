import { FC } from "react";
import { Card } from "./Core";
import { featuredProducts, leatestProducts } from "./Core/db/";
const App: FC = () => {
  return (
    <div>
      {(featuredProducts ?? []).map((product) => {
        return <Card key={product.id} {...product} cardWidth="max-w-[270px]" cardName="featured-Products" />;
      })}
      {(leatestProducts ?? []).map((product) => {
        return <Card key={product.id} {...product} cardWidth="max-w-[270px]" cardName="leatest-Products" />;
      })}

      <h1>hi</h1>
    </div>
  );
};

export default App;
