import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-100 py-6">
      <Container>
        <div className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Advertisement Hub. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;