import MenuBar from "../../component/MenuBar";

const CompScreen = ({ Component }) => {
  return (
    <>
      <MenuBar isActive={Component}>
        <Component />
      </MenuBar>
    </>
  );
};
export default CompScreen;
