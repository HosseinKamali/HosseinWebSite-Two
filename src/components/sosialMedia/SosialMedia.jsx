import Container from "../container/Container";

const SosialMedia = () => {
  return (
    <Container>
      <div className="flex justify-between py-10 max-sm:mx-5">
        <div className="flex justify-center items-center w-[34%]">
        <p>© 2035 by Re.Vert. Powered and secured by Wix</p>
        </div>
        
        <ul className="flex justify-around items-center w-[40%]">
          <li>facebook</li>
          <li>instagrem</li>
          <li>twitter</li>
          <li>pintrest</li>
        </ul>
      </div>
    </Container>
  );
};

export default SosialMedia;
