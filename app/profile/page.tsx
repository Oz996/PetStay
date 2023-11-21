import axios from "axios";
import Profile from "./Profile";
import { getBaseUrl } from "@/lib/utils/URL";

export default async function Page() {
  const getBookings = async () => {
    const res = await axios.get(getBaseUrl() + "/api/booking");
    const data = res.data;
    return data;
  };

  const bookings = await getBookings();
  console.log(bookings);

  return <Profile bookings={bookings} />;
}
