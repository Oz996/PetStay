import Details from "./Details";
import axios from "axios";

export default async function Page({ params }: { params: { id: string } }) {
  const getRental = async () => {
    // const res = await fetch(`http://localhost:3000/api/rental/${params.id}`, {
    //   next: { revalidate: 60 },
    // });
    // const data = await res.json();
    // console.log(data)
    // return data;

    const response = await axios.get(`http://localhost:3000/api/rental/${params.id}`);
    return response.data;
  };
  const rental = await getRental();
  console.log(rental);

  return <Details rental={rental} />;
}
