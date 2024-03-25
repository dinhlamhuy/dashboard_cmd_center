import MenuBar from "../../component/MenuBar";

const CompScreen = ({ Component }) => {
  return (
    <>
      <MenuBar isActive={Component}>
        <div
          className={` bg-black box-border flex-none  h-screen w-screen`}
        >
          <Component />
        </div>
      </MenuBar>
    </>
  );
};
export default CompScreen;
