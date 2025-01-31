import React from "react";
import { Button } from "../ui/button";

const GetStarted = () => {
  return (
    <div className="wrapper py-20 grid gap-4">
      <h2 className="text-center text-2xl text-neutral-500">
        Get started with us
      </h2>
      <h1 className="text-4xl text-center">
        Start your website ideas with Techtoniclabs
      </h1>
      <div className="text-center">
        <Button variant="outline">Start now</Button>
      </div>
    </div>
  );
};

export default GetStarted;
