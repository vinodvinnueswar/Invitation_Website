import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { invitations } from "../data/invitations";

import RoyalGold from "../templates/RoyalGold";
import Rajat_Neha from "../templates/Rajat_Neha/Rajat_Neha";
import Raju_Rani from "../templates/Raju_Rani/Raju_Rani";
import Vinod_Vineela from "../templates/Vinod_Vineela/Vinod_Vineela";
import Namratas_Function from "../templates/Namratas_Halfsaree/Namratas_Function";
import Aishwaryas_Function from "../templates/Aishwaryas_Halsaree/Aishwaryas_Function";

const templates = {
  "royal-gold": RoyalGold,
  "rajat-neha": Rajat_Neha,
  "raju-rani": Raju_Rani,
  "vinod-vineela": Vinod_Vineela,
  "namratas-function": Namratas_Function,
  "aishwaryas-function": Aishwaryas_Function
};

function TemplatePage() {

  const { slug } = useParams();
 

  const invitation = invitations.find(item => item.template === slug);
  const SelectedTemplate = templates[slug];


  if (!invitation || !SelectedTemplate) {
    return <h2 style={{ textAlign: "center" }}>Invitation Not Found</h2>;
  }

  return (
    <div className="template-page">
      <SelectedTemplate data={invitation} />
    </div>
  );
}

export default TemplatePage;