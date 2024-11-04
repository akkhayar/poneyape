import { SliceZone } from "@prismicio/react";
import {
  getSlices,
  SliceSimulator,
  SliceSimulatorParams,
} from "@slicemachine/adapter-next/simulator";

import { components } from "../../slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const slices = await getSlices(searchParams?.state);

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
