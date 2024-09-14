import ButtonCV from "@/components/button-cv";
export default function Footer() {
  return (
    <>
      <footer className="max-container px-4 md:px-8 xl:px-16 text-gray-500 flex flex-col gap-4">
        <ButtonCV />
        <div className="flex gap-2 justify-center mb-20">
          <span>&copy; William De Azevedo - </span>
          <a
            className=" text-main-200"
            target="_blank"
            href="https://github.com/WillFDA"
          >
            source
          </a>
        </div>
      </footer>
    </>
  );
}
