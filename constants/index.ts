export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const eventsDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(), // ✅ must be a Date object
  endDateTime: new Date(),   // ✅ must be a Date object
  categoryId: "",
  price: "",
  isFree: false,             // ✅ must be a boolean
  url: "",
};
