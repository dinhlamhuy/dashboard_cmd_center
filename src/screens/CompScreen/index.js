import MenuBar from "../../component/MenuBar";
import bgImg from "../../assets/image/background.jpg";
const CompScreen = ({ Component }) => {
  return (
    <>
      <MenuBar isActive={Component}>
        <div    style={{
        background: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
          className={` bg-black box-border flex-none  h-screen w-screen`}
        >
          <Component />
        </div>
      </MenuBar>
    </>
  );
};
export default CompScreen;
