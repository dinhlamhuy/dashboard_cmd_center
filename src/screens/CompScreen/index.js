import MenuBar from "../../component/MenuBar";
import bgImg from "../../assets/image/background.jpg";
const CompScreen = ({ Component }) => {
  return (
    <>
      {/* <MenuBar isActive={'Com'+Component}> */}
        <div    style={{
        background: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        
        transform:'scale(0.6)',
        transformOrigin: '0 0',
        width:'167vw',
        height:'170vh' 
      }}
          className={` bg-black box-border flex-none  h-screen w-screen overflow-hidden`}
        >
          <Component />
        </div>
      {/* </MenuBar> */}
    </>
  );
};
export default CompScreen;
