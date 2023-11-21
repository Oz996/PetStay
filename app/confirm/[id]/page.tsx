import axios from "axios";
import Confirm from "./Confirm";
import { getBaseUrl } from "@/lib/utils/URL";

export default async function page({ params }: { params: { id: string } }) {
  const getRental = async () => {
    const res = await axios.get(getBaseUrl() + `/api/rental/${params.id}`);
    return res.data;
  };

  const rental = await getRental();

  return <Confirm rental={rental} params={params} />;
}
