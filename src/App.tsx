import { FC } from "react";
import { Card } from "./Core";
import { featuredProducts } from "./Core/db/featuredProductsDb";
const App: FC = () => {
  return (
    <div>
      {(featuredProducts ?? []).map((product) => {
        return <Card key={product.id} {...product} cardWidth="max-w-[270px]" />;
      })}

      <h1>hi</h1>
    </div>
  );
};

export default App;
