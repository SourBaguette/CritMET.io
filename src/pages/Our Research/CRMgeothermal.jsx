import classes from "./CRMgeothermal.module.css";
import CrmImage from "../../images/CRMgeothermal.png";
import CrmLogo from "../../images/CRMgeothermalLogo.png";

export default function CRMgeothermal() {
  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.titleSection}>
          <h1>CRM Geothermal</h1>
          <p>
            Developing an innovative technology solution which combines the
            extraction of critical raw materials and energy from geothermal
            fluids to decrease the European Union’s dependency on imported
            resources, supporting the EU Green Deal
          </p>
        </div>
        <div className={classes.imageSection}>
          <img src={CrmImage} alt="Image of CRM Geothermal" />
        </div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.projectDescription}>
          <h1>Project Description</h1>
          <div className={classes.projectDescriptionContent}>
            <p>
              The transitions to energy and digital technologies necessitate
              substantial quantities of mineral raw materials, with certain ones
              classified as 'critical' by the European Union. These materials
              are primarily imported from non-European nations. Nevertheless,
              the EU possesses largely unexplored resources in geothermal
              fluids, some of which harbor noteworthy concentrations of these
              Critical Raw Materials (CRM), e.g., Rare Earth Elements (REE),
              Strontium (Sr), Lithium (Li), Barium (Ba), Rubidium (Rb) and many
              more.  
            </p>
            <p>
              The combined extraction of heat and minerals from geothermal
              reservoirs offers a series of advantages: 
              <ul>
                <li>Maximizing returns on investment </li>
                <li>Minimizing environmental impact </li>
                <li>Avoiding additional land use </li>
                <li>Leaving no mining legacies </li>
                <li>Near-zero carbon footprint </li>
                <li>Enabling domestic supplies of CRM </li>
              </ul>
            </p>
          </div>
        </div>
        <hr/>
        <div className={classes.CRMInfo}>
          <div className={classes.CRMLogo}>
            <img src={CrmLogo} alt="Logo of CRM Geothermal" />
          </div>
          <p>
            The Horizon Europe-funded CRM-geothermal project will thus open up a
            potentially huge untapped resource and deploy solutions to help
            Europe fulfil the strategic objectives of the EU Green Deal and the
            Agenda for Sustainable Development.  
            <br/><br/>
            While it is acknowledged that
            Critical Raw Materials (CRM) can be found in geothermal fluids,
            significant uncertainties persist regarding their presence in
            diverse geological settings and the sustainability of their
            extraction. The extraction process itself poses a substantial
            challenge, necessitating advancements in technology. Consequently,
            the CRM-geothermal project seeks to: 
            <ul>
              <li>
                Establish an overview of the potential for raw materials in
                geothermal fluids for a large range for CRM elements across the
                EU and third countries. 
              </li>
              <li>
                Determine the source of selected CRM, their mobility and
                potential for sustained extraction from geothermal brines.  
              </li>
              <li>
                Develop and optimize innovative extraction technologies for
                selected CRM from geothermal brines that can form a business
                case for new EU SMEs. 
              </li>
              <li>
                Assess the environmental-social-economic viability, create
                transparent and traceable value chains, and foster ethical
                sourcing of CRM. 
              </li>
              <li>
                Demonstrate at a pilot site the extraction technology for at
                least one CRM in field at the scale of a miniplant and evaluate
                the total sustainability of system.   
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
