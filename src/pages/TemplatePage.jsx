import { useParams } from "react-router-dom";
import  {invitations}  from "../data/invitations";

import RoyalGold from "../templates/RoyalGold";
import Rajat_Neha from '../templates/Rajat_Neha/Rajat_Neha'
import Raju_Rani from '../templates/Raju_Rani/Raju_Rani'
import Vinod_Vineela from '../templates/Vinod_Vineela/Vinod_Vineela'
import Namratas_Function from '../templates/Namratas_Halfsaree/Namratas_Function'
import Aishwaryas_Function from '../templates/Aishwaryas_Halsaree/Aishwaryas_Function'

const templates = {
  "royal-gold": RoyalGold,
  "rajat-neha" : Rajat_Neha,
  "raju-rani" : Raju_Rani,
  "vinod-vineela" : Vinod_Vineela,
  "namratas-function" : Namratas_Function,
  "aishwaryas-function" : Aishwaryas_Function
};

function TemplatePage() {
  const { slug } = useParams();

  const invitation = invitations.find(item => item.template === slug);

  if (!invitation) {
    return <h2>Invitation Not Found</h2>;
  }

  const SelectedTemplate = templates[slug];

  return <SelectedTemplate data={invitation} />;
}

export default TemplatePage;