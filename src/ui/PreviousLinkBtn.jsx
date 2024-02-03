import { useNavigate } from "react-router";

function PreviousLinkBtn() {
  const navigate = useNavigate();

  return (
    <button className="btn" onClick={() => navigate("..")}>
      back
    </button>
  );
}

export default PreviousLinkBtn;
