import chaletPricingContainerCreator from "../creators/chaletPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../removers/CurrentPricingContainersRemover.js";

const chaletPricingProcessor = {
  Process() {
    const mainChaletPricingContainer = document.querySelector(
      "#chalet-pricing-container"
    );
    if (mainChaletPricingContainer !== null)
      CurrentPricingContainersRemover.Remove();
    else {
      const container = chaletPricingContainerCreator.Create();

      CurrentPricingContainersRemover.Remove();

      mainPricingContainerAppender.Append(container);
    }
  },
};

export default chaletPricingProcessor;
