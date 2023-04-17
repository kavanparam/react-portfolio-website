import React, { FC } from "react";

type FeatureDivProps = {
  styles: string;
  description?: string;
};

const FeatureDiv: FC<FeatureDivProps> = ({ styles, description }) => {
  if (!description) {
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo mollitia nemo nihil quisquam vero officiis facere quas nisi nobis, tempore alias dolor, quod dolores reiciendis non fuga ad totam.";
  }

  return (
    // main container styles
    <div className={"" + styles}>
      <div>{description}</div>
    </div>
  );
};

export default FeatureDiv;
