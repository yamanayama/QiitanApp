import Lottie, { Options } from "react-lottie";
import { VFC } from "react";

type Props = {
  animation: Options["animationData"];
  loop: boolean;
};

export const LottieItem: VFC<Props> = ({ animation, loop }) => {
  return (
    <Lottie
      options={{
        loop: loop,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={375}
      width={360}
      isStopped={true}
      isClickToPauseDisabled={true}
    />
  );
};
