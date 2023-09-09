import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl">About Page</h1>
      <p className="py-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        atque tempora sequi officia mollitia pariatur in. Mollitia ex, dicta
        magni quo tempora dolore ipsam fugit quod repudiandae vel deleniti earum
        quisquam est numquam ipsa quam autem eveniet illum impedit! Facilis
        animi ex, excepturi at vel repellat officiis impedit sit et, eius
        adipisci dicta corporis aspernatur voluptates incidunt consectetur quia
        repudiandae rerum, tempore dolore praesentium optio perferendis
        asperiores provident! Dolor quisquam, commodi alias quasi quae voluptate
        aut, qui corrupti molestias sint nisi ratione tempora aliquid assumenda
        nam beatae laborum harum officiis optio! Velit consequuntur, cupiditate
        doloremque aperiam facere commodi sint dicta?
      </p>
      <Link href={"/"}>Home Page</Link>
    </div>
  );
};

export default AboutPage;
