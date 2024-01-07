import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageNavbar from "./components/navbar";
import Login from "./components/login";
import HomePage from "./components/homePage";
import LocationPage from "./components/locationPage";

interface User {
  username: string;
  userId: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [locationInfo, setLocationInfo] = useState<any>();

  const navigate = useNavigate();

  const cards = [
    {
      locationId: 1,
      title: "Attersee",
      image: "/attersee.webp",
      desc: "Attersee, a picturesque destination, invites you to explore its beauty. The serene lake, surrounded by lush landscapes, offers a tranquil retreat. Must-visit attractions include charming lakeside villages and water activities. Immerse yourself in the mesmerizing allure of Attersee.",
      text: "Attersee, nestled in the Austrian Alps, enchants with its crystal-clear lake and surrounding mountains. A haven for water enthusiasts, the emerald waters beckon sailing and swimming. Charming villages offer a glimpse into local culture, with cobbled streets and cozy cafes. Hiking trails lead to panoramic vistas, where alpine landscapes unfold. Attersee's allure spans seasons—summer invites outdoor revelry, autumn blankets the hills in warm hues, and winter transforms it into a serene wonderland. Artists find inspiration in its tranquility, echoing the harmonious blend of nature and culture. Attersee promises a journey beyond the ordinary, a timeless escape into alpine magic.",
    },
    {
      locationId: 2,
      title: "Mondsee",
      desc: "Mondsee beckons with its enchanting landscapes and historic charm. This idyllic destination boasts a stunning lake and the famous Mondsee Abbey. Dive into the rich history, enjoy water adventures, and savor local delicacies. A visit to Mondsee promises an unforgettable blend of culture and nature.",
      image: "/mondsee.jpg",
      text: " Nestled in Austria, Mondsee is a captivating destination with its eponymous lake, offering azure waters against an alpine backdrop. A haven for water enthusiasts, it provides sailing and swimming, while charming lakeside villages exude timeless allure with cobbled streets and cozy cafes. Hike into the hinterlands for panoramic vistas, where crisp air and pine scents invigorate. Mondsee transforms with the seasons—summer invites outdoor activities, autumn blankets hills in warm colors, and winter brings serene landscapes. Artists find inspiration in Mondsee's charm, where nature and culture blend seamlessly. In every season, Mondsee beckons with timeless allure, promising experiences beyond the ordinary—a journey to rejuvenate amidst the enchanting Austrian landscape.",
    },
    {
      locationId: 3,
      title: "Wolfgangsee",
      desc: "Wolfgangsee captivates visitors with its breathtaking scenery and cultural treasures. Nestled in the Austrian Alps, this lake offers outdoor adventures and access to charming towns. Explore the iconic Schafberg Mountain and indulge in the cultural delights of Wolfgangsee.",
      image: "/wolfgangsee.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure illum hic laboriosam animi maxime impedit culpa quasi molestias adipisci itaque fugit excepturi deserunt corrupti nostrum voluptatibus, voluptates praesentium atque fugiat? Delectus deleniti similique nam quis pariatur possimus maxime quos provident in, ad praesentium cupiditate saepe numquam suscipit cumque amet accusamus. Laboriosam hic cum, id quaerat sequi veritatis earum dolor! Veritatis, repellendus laboriosam? Eos magni atque neque dolorem aspernatur laboriosam, porro, voluptas tempora exercitationem labore non, aliquam aliquid explicabo voluptate distinctio in possimus necessitatibus! Tenetur, maiores? Omnis eos in laborum, quibusdam unde ad nam labore ducimus veniam doloribus et velit sunt rerum repudiandae, iste tenetur facilis officiis reiciendis magnam delectus quam suscipit? Incidunt, ullam inventore quisquam eligendi, laborum nihil consequatur explicabo ab perspiciatis aspernatur fugit harum optio porro impedit consectetur itaque dolorum reprehenderit. Ea minus ipsam quos omnis, ipsum fugit minima libero sapiente quis cum quasi dolores facere soluta assumenda numquam voluptatum neque fugiat mollitia consequuntur quibusdam aliquam. Ipsa voluptatem adipisci provident omnis odit cumque numquam, quasi animi excepturi exercitationem odio at? Nulla perferendis impedit corrupti cupiditate optio perspiciatis maxime nihil repellendus enim, aut, animi, mollitia nobis quis eaque neque voluptatem quaerat ea sunt numquam tempora asperiores inventore aperiam fugit nisi? Repellat labore magnam repellendus adipisci sunt explicabo delectus consequatur ea, rerum tenetur! Aut sapiente aliquam vel nulla quam, enim nobis eum laborum cupiditate quo nisi repellendus aspernatur sunt eaque neque odio quasi sit quae aperiam eius, molestiae et. Ea aliquam dolore modi atque natus commodi placeat cum quo nobis. Deleniti non, natus, impedit dolores atque voluptates aspernatur assumenda expedita adipisci at, quas omnis minus eum sapiente! Voluptas officia nisi consequuntur aperiam et voluptatibus, temporibus quo commodi quia amet corporis eius sed, obcaecati facere nam facilis tenetur quas. Quas similique eligendi impedit nam sed dolores, eius alias mollitia placeat? Accusantium, minima minus? Veniam nulla voluptate maxime tempora illum in quas sed repudiandae fugiat quo doloremque, corporis ducimus, quis, nesciunt distinctio aliquam eveniet eius. Corrupti reiciendis excepturi dolorem maiores similique velit ut debitis qui incidunt cupiditate nobis a minima, expedita quas soluta eligendi nihil dignissimos distinctio molestiae repellendus unde laudantium eveniet saepe. Commodi culpa quam rem porro voluptates! Sequi ad veniam voluptatibus quis? Provident odio cumque tempora alias libero unde quasi molestias quis est a quaerat, eveniet expedita reiciendis quod enim similique id aperiam officiis dicta doloribus deserunt incidunt maiores, earum quam. Quaerat nostrum quo, eligendi numquam maxime rem voluptate excepturi voluptas laborum expedita assumenda itaque vitae explicabo laudantium ipsam commodi quia officia reprehenderit vel facere! Eos dolores autem necessitatibus corrupti ipsa vel assumenda optio esse hic quisquam modi, quo nulla atque fugiat officia in dolorem ea illo quia, praesentium ipsam. Alias, iste numquam? Eaque ipsum nobis corporis dicta aliquam alias natus totam minima, harum commodi error, repellat, tempore veniam? Ipsam deserunt veniam at temporibus debitis. Quod neque architecto odio! Numquam quia, voluptate tempora voluptatibus qui vero odio asperiores suscipit reiciendis dolorum molestiae quidem necessitatibus praesentium, exercitationem dignissimos obcaecati repellendus id quos, mollitia quam! Illum minus, libero placeat qui nam aliquam?",
    },
    {
      locationId: 4,
      title: "Salzburg",
      desc: "Salzburg, the city of Mozart and stunning baroque architecture, is a must-visit destination. Stroll through the historic Old Town, visit Mozart's birthplace, and be enchanted by the Hohensalzburg Fortress. Immerse yourself in the rich cultural heritage of Salzburg, a city that resonates with music and history.",
      image: "/salzburg.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure illum hic laboriosam animi maxime impedit culpa quasi molestias adipisci itaque fugit excepturi deserunt corrupti nostrum voluptatibus, voluptates praesentium atque fugiat? Delectus deleniti similique nam quis pariatur possimus maxime quos provident in, ad praesentium cupiditate saepe numquam suscipit cumque amet accusamus. Laboriosam hic cum, id quaerat sequi veritatis earum dolor! Veritatis, repellendus laboriosam? Eos magni atque neque dolorem aspernatur laboriosam, porro, voluptas tempora exercitationem labore non, aliquam aliquid explicabo voluptate distinctio in possimus necessitatibus! Tenetur, maiores? Omnis eos in laborum, quibusdam unde ad nam labore ducimus veniam doloribus et velit sunt rerum repudiandae, iste tenetur facilis officiis reiciendis magnam delectus quam suscipit? Incidunt, ullam inventore quisquam eligendi, laborum nihil consequatur explicabo ab perspiciatis aspernatur fugit harum optio porro impedit consectetur itaque dolorum reprehenderit. Ea minus ipsam quos omnis, ipsum fugit minima libero sapiente quis cum quasi dolores facere soluta assumenda numquam voluptatum neque fugiat mollitia consequuntur quibusdam aliquam. Ipsa voluptatem adipisci provident omnis odit cumque numquam, quasi animi excepturi exercitationem odio at? Nulla perferendis impedit corrupti cupiditate optio perspiciatis maxime nihil repellendus enim, aut, animi, mollitia nobis quis eaque neque voluptatem quaerat ea sunt numquam tempora asperiores inventore aperiam fugit nisi? Repellat labore magnam repellendus adipisci sunt explicabo delectus consequatur ea, rerum tenetur! Aut sapiente aliquam vel nulla quam, enim nobis eum laborum cupiditate quo nisi repellendus aspernatur sunt eaque neque odio quasi sit quae aperiam eius, molestiae et. Ea aliquam dolore modi atque natus commodi placeat cum quo nobis. Deleniti non, natus, impedit dolores atque voluptates aspernatur assumenda expedita adipisci at, quas omnis minus eum sapiente! Voluptas officia nisi consequuntur aperiam et voluptatibus, temporibus quo commodi quia amet corporis eius sed, obcaecati facere nam facilis tenetur quas. Quas similique eligendi impedit nam sed dolores, eius alias mollitia placeat? Accusantium, minima minus? Veniam nulla voluptate maxime tempora illum in quas sed repudiandae fugiat quo doloremque, corporis ducimus, quis, nesciunt distinctio aliquam eveniet eius. Corrupti reiciendis excepturi dolorem maiores similique velit ut debitis qui incidunt cupiditate nobis a minima, expedita quas soluta eligendi nihil dignissimos distinctio molestiae repellendus unde laudantium eveniet saepe. Commodi culpa quam rem porro voluptates! Sequi ad veniam voluptatibus quis? Provident odio cumque tempora alias libero unde quasi molestias quis est a quaerat, eveniet expedita reiciendis quod enim similique id aperiam officiis dicta doloribus deserunt incidunt maiores, earum quam. Quaerat nostrum quo, eligendi numquam maxime rem voluptate excepturi voluptas laborum expedita assumenda itaque vitae explicabo laudantium ipsam commodi quia officia reprehenderit vel facere! Eos dolores autem necessitatibus corrupti ipsa vel assumenda optio esse hic quisquam modi, quo nulla atque fugiat officia in dolorem ea illo quia, praesentium ipsam. Alias, iste numquam? Eaque ipsum nobis corporis dicta aliquam alias natus totam minima, harum commodi error, repellat, tempore veniam? Ipsam deserunt veniam at temporibus debitis. Quod neque architecto odio! Numquam quia, voluptate tempora voluptatibus qui vero odio asperiores suscipit reiciendis dolorum molestiae quidem necessitatibus praesentium, exercitationem dignissimos obcaecati repellendus id quos, mollitia quam! Illum minus, libero placeat qui nam aliquam?",
    },
  ];

  function handleLogin(loginValues: User) {
    setUser(loginValues);
    console.log(loginValues);
  }

  function handleLogout() {
    setUser(null);
  }

  function visitLocation(locationId: number) {
    const selectedCard = cards.find((card) => card.locationId === locationId);
    if (selectedCard) {
      setLocationInfo(selectedCard);
      window.scrollTo(0, 0);
      navigate("/info");
    } else {
      console.error(`Card with id ${locationId} not found`);
    }
  }

  return (
    <>
      <PageNavbar user={user?.username} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cards={cards}
              handleReadAboutButtonClick={visitLocation}
            />
          }
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/info"
          element={<LocationPage locationInfo={locationInfo} />}
        />
      </Routes>
    </>
  );
}

export default App;
