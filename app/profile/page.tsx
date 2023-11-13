import axios from "axios";
import Profile from "./Profile";

export default async function Page() {
  const getBookings = async () => {
    const res = await axios.get("http://localhost:3000/api/booking");
    const data = res.data;
    return data;
  };

  const bookings = await getBookings();
  console.log(bookings);

  return <Profile bookings={bookings} />;
}
