import { Metadata } from "next";
import Details from "./Details";
import axios from "axios";
import { Rental } from "@/types/types";
import { getBaseUrl } from "@/lib/utils/URL";

interface Title {
  data: Promise<Rental>;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const res: Title = await axios.get(getBaseUrl() + `/api/rental/${params.id}`);
  const data = await res.data;

  return {
    title: data.name,
    description: data.name,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  console.log(params);
  const getRental = async () => {
    // const res = await fetch(`http://localhost:3000/api/rental/${params.id}`, {
    //   next: { revalidate: 60 },
    // });
    // const data = await res.json();
    // console.log(data)
    // return data;

    const res = await axios.get(getBaseUrl() + `/api/rental/${params.id}`);
    return res.data;
  };
  const rental = await getRental();
  console.log(rental);

  return <Details rental={rental} params={params} />;
}
